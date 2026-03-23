// Import React hooks for state management.
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Helmet } from 'react-helmet-async'

import { useWebHaptics } from "web-haptics/react"

// Import the data containing the idol chants from a local file.
import { idolChants } from '../data/idolChants'

// Import html2canvas for saving pinned chants as an image.
import html2canvas from 'html2canvas'

// Import EditableTitle component
import EditableTitle from './EditableTitle'

// Script toggle options.
const SCRIPT_OPTIONS = [
  { value: 'romaji', label: 'Romaji' },
  { value: 'Japanese', label: '日本語' }
]

// Define the main Body component.
function Body() {
  const { trigger } = useWebHaptics()

  // --- STATE DEFINITIONS ---
  const [searchTerm, setSearchTerm] = useState('')
  const [script, setScript] = useState('romaji')
  const [showExamples, setShowExamples] = useState(false)
  const [showTitle, setShowTitle] = useState(() => {
    return localStorage.getItem('idolChant_showTitle') === 'true'
  })
  const [chantSetTitle, setChantSetTitle] = useState(() => {
    return localStorage.getItem('idolChant_title') || ''
  })
  const [isCapturing, setIsCapturing] = useState(false)

  // pinnedChants: array of { id, originalId, name, romaji, Japanese, example }
  const [pinnedChants, setPinnedChants] = useState(() => {
    try {
      const saved = localStorage.getItem('idolChant_pinned')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      console.error("Failed to load pinned chants:", e)
      return []
    }
  })

  // Ref for the pinned section div — used by html2canvas.
  const pinnedRef = useRef(null)

  // Drag-and-drop refs: track which index is being dragged and which is the current drop target.
  const dragSrcIdx = useRef(null)
  const dragOverIdx = useRef(null)

  // Visual drag state — only one state value needed to trigger re-render for highlighting.
  const [draggingIdx, setDraggingIdx] = useState(null)

  // Track which pinned chant is currently being edited.
  const [editingPinId, setEditingPinId] = useState(null)

  // --- PERSISTENCE ---
  useEffect(() => {
    localStorage.setItem('idolChant_pinned', JSON.stringify(pinnedChants))
  }, [pinnedChants])

  useEffect(() => {
    localStorage.setItem('idolChant_title', chantSetTitle)
  }, [chantSetTitle])

  useEffect(() => {
    localStorage.setItem('idolChant_showTitle', showTitle.toString())
  }, [showTitle])

  // --- LOGIC SECTION ---

  // Filter the full list of idolChants by searchTerm.
  const filteredChants = idolChants.filter(chant => {
    const q = searchTerm.toLowerCase()
    return (
      chant.name.toLowerCase().includes(q) ||
      (chant.romaji && chant.romaji.toLowerCase().includes(q)) ||
      (chant.Japanese && chant.Japanese.includes(searchTerm))
    )
  })

  // Helper: decide which text to show based on selected script.
  const getDisplayText = (chant) => {
    switch (script) {
      case 'Japanese':
        return chant.Japanese || chant.romaji || ''
      case 'romaji':
      default:
        return chant.romaji || ''
    }
  }

  // Generate a simple unique ID for duplicated pins.
  const genId = () => `pin-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`

  const triggerRegular = () => {
    trigger([
      { duration: 30 },
      { delay: 60, duration: 40, intensity: 1 },
    ])
  }

  const triggerRemove = () => {
    trigger([
      { duration: 40, intensity: 0.8 },
      { delay: 100, duration: 40, intensity: 0.6 },
    ])
  }

  // Pin a chant.
  const handlePin = (chant) => {
    triggerRegular()
    setPinnedChants(prev => [...prev, { ...chant, _pinId: genId() }])
  }

  // Duplicate a pinned chant.
  const handleDuplicate = (pinId) => {
    triggerRegular()
    setPinnedChants(prev => {
      const idx = prev.findIndex(c => c._pinId === pinId)
      if (idx === -1) return prev
      const copy = { ...prev[idx], _pinId: genId() }
      const next = [...prev]
      next.splice(idx + 1, 0, copy)
      return next
    })
  }

  // Remove a pinned chant.
  const handleRemove = (pinId) => {
    triggerRemove()
    setPinnedChants(prev => prev.filter(c => c._pinId !== pinId))
  }

  // Drag-and-drop handlers.
  const handleDragStart = (idx) => {
    trigger([{ duration: 8 }], { intensity: 0.3 })
    dragSrcIdx.current = idx
    setDraggingIdx(idx)
  }

  const handleDragEnter = (idx) => {
    dragOverIdx.current = idx
  }

  const handleDragEnd = () => {
    const from = dragSrcIdx.current
    const to = dragOverIdx.current
    if (from !== null && to !== null && from !== to) {
      setPinnedChants(prev => {
        const next = [...prev]
        const [moved] = next.splice(from, 1)
        next.splice(to, 0, moved)
        return next
      })
    }
    dragSrcIdx.current = null
    dragOverIdx.current = null
    setDraggingIdx(null)
  }

  // Touch handlers for mobile.
  const touchDragCardRef = useRef(null)

  const handleTouchStart = (e, idx) => {
    haptics.trigger([{ duration: 8 }], { intensity: 0.3 })
    dragSrcIdx.current = idx
    dragOverIdx.current = idx
    setDraggingIdx(idx)
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
    if (dragSrcIdx.current === null) return
    const touch = e.touches[0]
    const x = touch.clientX
    const y = touch.clientY
    const draggingEl = touchDragCardRef.current
    const prevPE = draggingEl ? draggingEl.style.pointerEvents : ''
    if (draggingEl) draggingEl.style.pointerEvents = 'none'
    const el = document.elementFromPoint(x, y)
    if (draggingEl) draggingEl.style.pointerEvents = prevPE
    let target = el
    while (target && target !== document.body) {
      const pinIdx = target.dataset.pinidx
      if (pinIdx !== undefined) {
        const toIdx = parseInt(pinIdx, 10)
        if (!isNaN(toIdx)) dragOverIdx.current = toIdx
        break
      }
      target = target.parentElement
    }
  }

  const handleTouchEnd = () => {
    const from = dragSrcIdx.current
    const to = dragOverIdx.current
    if (from !== null && to !== null && from !== to) {
      setPinnedChants(prev => {
        const next = [...prev]
        const [moved] = next.splice(from, 1)
        next.splice(to, 0, moved)
        return next
      })
    }
    dragSrcIdx.current = null
    dragOverIdx.current = null
    setDraggingIdx(null)
    touchDragCardRef.current = null
  }

  // Save section as image.
  const handleSaveAsImage = async () => {
    if (!pinnedRef.current) return
    triggerRegular()
    setIsCapturing(true)
    await new Promise(resolve => setTimeout(resolve, 50))
    try {
      const canvas = await html2canvas(pinnedRef.current, {
        backgroundColor: '#eff0f3',
        scale: 2,
        useCORS: true,
        logging: false
      })
      const link = document.createElement('a')
      link.download = `${chantSetTitle || 'pinned-chants'}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Failed to save image:', err)
    } finally {
      setIsCapturing(false)
    }
  }

  return (
    <main className="flex-1 container mx-auto px-4 py-8" style={{ backgroundColor: 'var(--bg-page)' }}>
      <Helmet>
        <title>Idol Mixes - Find and Pin Your Favorite Idol Chants</title>
        <meta name="description" content="Comprehensive guide to Japanese idol culture, chants, and glossary of terms." />
        <link rel="canonical" href="https://idol-mixes.vercel.app/" />
      </Helmet>
      <div className="max-w-6xl mx-auto">

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for idol chants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 rounded-full focus:outline-none transition-all shadow-lg text-center"
              style={{ borderColor: 'var(--border-default)', color: 'var(--input-text)', backgroundColor: 'var(--input-bg)' }}
            />
          </div>
        </div>

        {/* Script */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {SCRIPT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                triggerRegular()
                setScript(opt.value)
              }}
              style={script === opt.value
                ? { backgroundColor: 'var(--accent)', color: '#0d0d0d', borderColor: 'var(--accent)' }
                : { backgroundColor: 'var(--btn-inactive-bg)', color: 'var(--btn-inactive-text)', borderColor: 'var(--border-default)' }}
              className="px-4 py-2 rounded-full font-medium transition-colors border-2"
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Toggles: Examples & Title */}
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          {/* Examples Toggle */}
          <label
            className="flex items-center gap-3 cursor-pointer select-none px-5 py-2 rounded-full border-2 font-medium transition-all hover:scale-105 active:scale-95 shadow-sm"
            style={showExamples
              ? { backgroundColor: 'var(--accent)', borderColor: 'var(--accent)', color: '#0d0d0d' }
              : { backgroundColor: 'var(--btn-inactive-bg)', borderColor: 'var(--border-default)', color: 'var(--btn-inactive-text)' }
            }
          >
            <input
              type="checkbox"
              className="hidden"
              checked={showExamples}
              onChange={(e) => {
                triggerRegular()
                setShowExamples(e.target.checked)
              }}
            />
            <span
              className="w-4 h-4 rounded border-2 flex items-center justify-center transition-colors"
              style={showExamples ? { backgroundColor: 'var(--text-heading)', borderColor: 'var(--text-heading)' } : { borderColor: 'var(--border-default)' }}
            >
              {showExamples && (
                <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#ff8e3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              )}
            </span>
            Show Examples
          </label>

          {/* Add a Title Toggle */}
          <label
            className="flex items-center gap-3 cursor-pointer select-none px-5 py-2 rounded-full border-2 font-medium transition-all hover:scale-105 active:scale-95 shadow-sm"
            style={showTitle
              ? { backgroundColor: 'var(--accent)', borderColor: 'var(--accent)', color: '#0d0d0d' }
              : { backgroundColor: 'var(--btn-inactive-bg)', borderColor: 'var(--border-default)', color: 'var(--btn-inactive-text)' }
            }
          >
            <input
              type="checkbox"
              className="hidden"
              checked={showTitle}
              onChange={(e) => {
                triggerRegular()
                setShowTitle(e.target.checked)
              }}
            />
            <span
              className="w-4 h-4 rounded border-2 flex items-center justify-center transition-colors"
              style={showTitle ? { backgroundColor: 'var(--text-heading)', borderColor: 'var(--text-heading)' } : { borderColor: 'var(--border-default)' }}
            >
              {showTitle && (
                <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#ff8e3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              )}
            </span>
            Add a Title
          </label>
        </div>

        {/* Pinned Section */}
        <motion.div
          initial={false}
          animate={{ height: pinnedChants.length > 0 ? 'auto' : 0, opacity: pinnedChants.length > 0 ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ overflow: 'hidden' }}
          className={pinnedChants.length > 0 ? 'pointer-events-auto mb-12' : 'pointer-events-none'}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-map-pin" style={{ color: '#ff8e3c', fontSize: '1.25rem' }}></i>
              <h3 className="text-lg font-bold tracking-wide" style={{ color: 'var(--text-heading)' }}>Pinned</h3>
            </div>
            <button
              onClick={handleSaveAsImage}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm border-2"
              style={{ backgroundColor: 'var(--text-heading)', color: 'var(--bg-page)', borderColor: 'var(--text-heading)' }}
            >
              <i className="fa-solid fa-file-image"></i>
              <span>Save Image</span>
            </button>
          </div>

          <div
            ref={pinnedRef}
            className="p-8 rounded-2xl relative"
            style={{ backgroundColor: 'var(--bg-card-pinned)' }}
          >
            {/* Chant Set Title */}
            {showTitle && (
              <div className="mb-6">
                <EditableTitle
                  value={chantSetTitle}
                  onChange={setChantSetTitle}
                  isCapturing={isCapturing}
                  placeholder="ADD CHANT SET TITLE..."
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {pinnedChants.map((chant, idx) => {
                  const isDragging = draggingIdx === idx
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      key={chant._pinId}
                      data-pinidx={idx}
                      ref={isDragging ? touchDragCardRef : null}
                      draggable
                      onDragStart={() => handleDragStart(idx)}
                      onDragEnter={() => handleDragEnter(idx)}
                      onDragEnd={handleDragEnd}
                      onDragOver={(e) => e.preventDefault()}
                      className="rounded-xl shadow-md p-6 border relative group"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--accent)',
                        borderWidth: '2px',
                        borderStyle: isDragging ? 'dashed' : 'solid',
                        opacity: isDragging ? 0.4 : 1,
                      }}
                    >
                      <div className="absolute top-3 right-3 z-10" data-html2canvas-ignore="true">
                        <div className={`flex items-center gap-1 transition-opacity ${editingPinId === chant._pinId ? 'opacity-100' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'}`}>
                          <span
                            className="p-1.5 cursor-grab active:cursor-grabbing text-gray-400"
                            onTouchStart={(e) => handleTouchStart(e, idx)}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                          >
                            <i className="fa-solid fa-grip-lines"></i>
                          </span>
                          <button onClick={() => setEditingPinId(editingPinId === chant._pinId ? null : chant._pinId)} className="p-1.5 text-blue-500">
                            <i className={`fa-solid ${editingPinId === chant._pinId ? 'fa-check' : 'fa-pen-to-square'}`}></i>
                          </button>
                          <button onClick={() => handleDuplicate(chant._pinId)} className="p-1.5 text-orange-500">
                            <i className="fa-solid fa-clone"></i>
                          </button>
                          <button onClick={() => handleRemove(chant._pinId)} className="p-1.5 text-red-500">
                            <i className="fa-solid fa-thumbtack-slash"></i>
                          </button>
                        </div>
                      </div>

                      {editingPinId === chant._pinId ? (
                        <input
                          className="text-lg font-bold mb-3 w-full p-1 border rounded"
                          value={chant.name}
                          onChange={(e) => setPinnedChants(prev => prev.map(c => c._pinId === chant._pinId ? { ...c, name: e.target.value } : c))}
                        />
                      ) : (
                        <h3 className="text-lg font-bold mb-3 pr-20" style={{ color: 'var(--text-heading)' }}>{chant.name}</h3>
                      )}

                      {editingPinId === chant._pinId ? (
                        <textarea
                          className="text-base w-full border rounded p-2 min-h-[100px]"
                          value={chant[script] || chant.romaji || ''}
                          onChange={(e) => setPinnedChants(prev => prev.map(c => c._pinId === chant._pinId ? { ...c, [script]: e.target.value } : c))}
                        />
                      ) : (
                        <p className="text-base whitespace-pre-wrap" style={{ color: 'var(--text-body)' }}>{getDisplayText(chant)}</p>
                      )}

                      {showExamples && chant.example && (
                        <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                            Ex: <a href={chant.example.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }} className="underline underline-offset-2 hover:opacity-70 transition-opacity">{chant.example.title}</a> at <strong style={{ color: 'var(--text-heading)' }}>{chant.example.timestamp}</strong>
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            <div className={`absolute bottom-2 right-6 pointer-events-none transition-opacity ${isCapturing ? 'opacity-30' : 'opacity-0'}`}>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">https://idol-mixes.vercel.app</span>
            </div>
          </div>

          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>All Chants</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
          </div>
        </motion.div>

        {/* Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChants.map((chant) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={chant.id}
              className="rounded-xl shadow-md p-6 border relative group"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
            >
              <button
                onClick={() => handlePin(chant)}
                className="absolute top-3 right-3 text-orange-500 transition-all duration-200 hover:scale-110 active:scale-90 md:opacity-0 md:group-hover:opacity-100"
                title="Pin this chant"
              >
                <i className="fa-solid fa-thumbtack text-xl"></i>
              </button>
              <h3 className="text-lg font-bold mb-3 pr-8" style={{ color: 'var(--text-heading)' }}>{chant.name}</h3>
              <p className="text-base whitespace-pre-wrap" style={{ color: 'var(--text-body)' }}>{getDisplayText(chant)}</p>

              {showExamples && chant.example && (
                <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Ex: <a href={chant.example.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }} className="underline underline-offset-2 hover:opacity-70 transition-opacity">{chant.example.title}</a> at <strong style={{ color: 'var(--text-heading)' }}>{chant.example.timestamp}</strong>
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default Body
