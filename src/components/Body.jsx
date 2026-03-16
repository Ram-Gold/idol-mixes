// Import React hooks for state management.
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from "motion/react"

// Import web-haptics for tactile feedback on mobile devices.
// The library exposes a class — we create one shared singleton for the whole app.
import { WebHaptics } from 'web-haptics'
const haptics = new WebHaptics()

// Import the data containing the idol chants from a local file.
import { idolChants } from '../data/idolChants'

// Import html2canvas for saving pinned chants as an image.
import html2canvas from 'html2canvas'

// Script toggle options.
const SCRIPT_OPTIONS = [
  { value: 'romaji', label: 'Romaji' },
  { value: 'hiragana', label: 'Hiragana' },
  { value: 'katakana', label: 'Katakana' }
]

// Define the main Body component.
function Body() {
  // --- STATE DEFINITIONS ---
  const [searchTerm, setSearchTerm] = useState('')
  const [script, setScript] = useState('romaji')
  const [showExamples, setShowExamples] = useState(false)

  // pinnedChants: array of { id, originalId, name, romaji, hiragana, katakana, example }
  // Each pinned card has a unique 'id' (UUID-like) so duplicates are independent entries.
  const [pinnedChants, setPinnedChants] = useState([])

  // Ref for the pinned section div — used by html2canvas.
  const pinnedRef = useRef(null)

  // Drag-and-drop refs: track which index is being dragged and which is the current drop target.
  // Using refs (not state) so drag events don't trigger re-renders mid-drag.
  const dragSrcIdx = useRef(null)
  const dragOverIdx = useRef(null)

  // Visual drag state — only one state value needed to trigger re-render for highlighting.
  const [draggingIdx, setDraggingIdx] = useState(null)

  // Track which pinned chant is currently being edited.
  const [editingPinId, setEditingPinId] = useState(null)

  // --- LOGIC SECTION ---

  // Filter the full list of idolChants by searchTerm.
  const filteredChants = idolChants.filter(chant => {
    const q = searchTerm.toLowerCase()
    return (
      chant.name.toLowerCase().includes(q) ||
      (chant.romaji && chant.romaji.toLowerCase().includes(q)) ||
      (chant.hiragana && chant.hiragana.includes(searchTerm)) ||
      (chant.katakana && chant.katakana.includes(searchTerm))
    )
  })

  // Helper: decide which text to show based on selected script.
  // Using a explicit switch-case for readability and better structure.
  const getDisplayText = (chant) => {
    switch (script) {
      case 'hiragana':
        return chant.hiragana || chant.romaji || ''
      case 'katakana':
        return chant.katakana || chant.romaji || ''
      case 'romaji':
      default:
        // Default to romaji when no script matches, or specifically explicitly chosen.
        return chant.romaji || ''
    }
  }

  // Generate a simple unique ID for duplicated pins.
  const genId = () => `pin-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`

  // Pin a chant (add it to the top section).
  const handlePin = (chant) => {
    // Haptic: double-pulse "add" pattern.
    haptics.trigger([
      { duration: 30 },
      { delay: 60, duration: 40, intensity: 1 },
    ])
    setPinnedChants(prev => [...prev, { ...chant, _pinId: genId() }])
  }

  // Duplicate an already-pinned chant (insert a copy right below it).
  const handleDuplicate = (pinId) => {
    // Haptic: double-pulse "add" pattern.
    haptics.trigger([
      { duration: 30 },
      { delay: 60, duration: 40, intensity: 1 },
    ])
    setPinnedChants(prev => {
      const idx = prev.findIndex(c => c._pinId === pinId)
      if (idx === -1) return prev
      const copy = { ...prev[idx], _pinId: genId() }
      const next = [...prev]
      next.splice(idx + 1, 0, copy)
      return next
    })
  }

  // Remove a pinned chant by its unique pin ID.
  const handleRemove = (pinId) => {
    // Haptic: four-strike escalating "remove" pattern.
    haptics.trigger([
      { duration: 40, intensity: 0.7 },
      { delay: 40, duration: 40, intensity: 0.7 },
      { delay: 40, duration: 40, intensity: 0.9 },
      { delay: 40, duration: 50, intensity: 0.6 },
    ])
    setPinnedChants(prev => prev.filter(c => c._pinId !== pinId))
  }

  // ── Mouse Drag-and-drop handlers ──
  const handleDragStart = (idx) => {
    // Haptic: short single tap for card selection.
    haptics.trigger([
      { duration: 8 },
    ], { intensity: 0.3 })
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

  // ── Touch Drag-and-drop handlers (mobile) ──
  // The native HTML5 DnD API doesn't fire on touch, so we implement
  // our own using touchstart / touchmove / touchend.
  const touchDragCardRef = useRef(null)   // the DOM node being dragged

  const handleTouchStart = (e, idx) => {
    // Only one finger needed
    // Haptic: short single tap for card selection.
    haptics.trigger([
      { duration: 8 },
    ], { intensity: 0.3 })
    dragSrcIdx.current = idx
    dragOverIdx.current = idx
    setDraggingIdx(idx)
  }

  const handleTouchMove = (e) => {
    e.preventDefault()  // prevent page scroll while dragging
    if (dragSrcIdx.current === null) return

    const touch = e.touches[0]
    const x = touch.clientX
    const y = touch.clientY

    // Temporarily turn off pointer-events on the dragged card so
    // elementFromPoint can "see through" it to the card underneath.
    const draggingEl = touchDragCardRef.current
    const prevPE = draggingEl ? draggingEl.style.pointerEvents : ''
    if (draggingEl) draggingEl.style.pointerEvents = 'none'

    const el = document.elementFromPoint(x, y)

    if (draggingEl) draggingEl.style.pointerEvents = prevPE

    // Walk up the DOM to find an element with data-pinidx
    let target = el
    while (target && target !== document.body) {
      const pinIdx = target.dataset.pinidx
      if (pinIdx !== undefined) {
        const toIdx = parseInt(pinIdx, 10)
        if (!isNaN(toIdx)) {
          dragOverIdx.current = toIdx
        }
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

  // Save the pinned section as a PNG image using html2canvas.
  const handleSaveAsImage = async () => {
    if (!pinnedRef.current) return
    try {
      const canvas = await html2canvas(pinnedRef.current, {
        backgroundColor: '#eff0f3',
        scale: 2,
        useCORS: true
      })
      const link = document.createElement('a')
      link.download = 'pinned-chants.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Failed to save image:', err)
    }
  }

  // --- UI RENDER SECTION ---
  return (
    <main className="flex-1 container mx-auto px-4 py-8" style={{ backgroundColor: '#eff0f3' }}>
      <div className="max-w-6xl mx-auto">

        {/* ── Search Bar ── */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for idol chants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 rounded-full focus:outline-none transition-all shadow-lg"
              style={{ borderColor: '#0d0d0d', color: '#2a2a2a', backgroundColor: '#ffffff' }}
            />
          </div>
        </div>

        {/* ── Script Toggle ── */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <span className="font-medium self-center mr-2" style={{ color: '#2a2a2a' }}>Display:</span>
          {SCRIPT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setScript(opt.value)}
              style={script === opt.value
                ? { backgroundColor: '#ff8e3c', color: '#0d0d0d', borderColor: '#ff8e3c' }
                : { backgroundColor: '#ffffff', color: '#2a2a2a', borderColor: '#0d0d0d' }}
              className="px-4 py-2 rounded-full font-medium transition-colors border-2"
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* ── Show Examples Toggle ── */}
        <div className="mb-6 flex justify-center">
          <label
            className="flex items-center gap-3 cursor-pointer select-none px-5 py-2 rounded-full border-2 font-medium transition-colors"
            style={showExamples
              ? { backgroundColor: '#ff8e3c', borderColor: '#ff8e3c', color: '#0d0d0d' }
              : { backgroundColor: '#ffffff', borderColor: '#0d0d0d', color: '#2a2a2a' }
            }
          >
            <input
              type="checkbox"
              className="hidden"
              checked={showExamples}
              onChange={(e) => setShowExamples(e.target.checked)}
            />
            <span
              className="w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0"
              style={showExamples
                ? { backgroundColor: '#0d0d0d', borderColor: '#0d0d0d' }
                : { backgroundColor: 'transparent', borderColor: '#0d0d0d' }
              }
            >
              {showExamples && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#ff8e3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            Show Examples
          </label>
        </div>

        {/* ══════════════════════════════════════════
            PINNED CHANTS SECTION
        ══════════════════════════════════════════ */}
        <motion.div
          animate={{
            height: pinnedChants.length > 0 ? 'auto' : 0,
            opacity: pinnedChants.length > 0 ? 1 : 0
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ overflow: 'hidden' }}
          className={pinnedChants.length > 0 ? 'pointer-events-auto' : 'pointer-events-none'}
        >
          <div className="pt-2 pb-2">
            {/* Pinned header + Save as Image button */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {/* Decorative pin icon (formerly an orange circle) */}
                <i className="fa-solid fa-map-pin" style={{ color: '#ff8e3c', fontSize: '1.25rem' }}></i>
                <h3 className="text-lg font-bold tracking-wide" style={{ color: '#0d0d0d' }}>
                  Pinned Chants
                </h3>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: '#ff8e3c22', color: '#ff8e3c', border: '1px solid #ff8e3c66' }}
                >
                  {pinnedChants.length}
                </span>
              </div>

              {/* Save as Image button */}
              <button
                type="button"
                onClick={handleSaveAsImage}
                className="flex items-center justify-center gap-2 p-2 aspect-square md:aspect-auto md:w-auto md:px-4 md:py-2 rounded-full font-medium text-sm border-2 transition-all hover:shadow-md active:scale-95"
                style={{ backgroundColor: '#0d0d0d', borderColor: '#0d0d0d', color: '#ffffff' }}
                title="Save chants as image"
              >
                <i className="fa-solid fa-file-image text-lg md:text-base"></i>
                <span className="hidden md:inline">Save chants as image</span>
              </button>
            </div>

            {/* The pinned cards grid — this div is captured by html2canvas */}
            <div
              ref={pinnedRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 rounded-2xl"
              style={{ backgroundColor: '#eff0f3' }}
            >
              <AnimatePresence>
              {pinnedChants.map((chant, idx) => {
                const isDragging = draggingIdx === idx
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                    transition={{ type: "spring", stiffness: 800, damping: 25 }}
                    key={chant._pinId}
                    data-pinidx={idx}
                    ref={isDragging ? touchDragCardRef : null}
                    draggable
                    onDragStart={() => handleDragStart(idx)}
                    onDragEnter={() => handleDragEnter(idx)}
                    onDragEnd={handleDragEnd}
                    onDragOver={(e) => e.preventDefault()}
                    className="rounded-xl shadow-md p-6 border relative group transition-all duration-200"
                    style={{
                      backgroundColor: '#fff8f3',
                      borderColor: '#ff8e3c',
                      borderWidth: '2px',
                      borderStyle: isDragging ? 'dashed' : 'solid',
                      opacity: isDragging ? 0.4 : 1,
                    }}
                  >
                    {/* Drag handle + Action buttons */}
                    <div className="absolute top-3 right-3 z-10" data-html2canvas-ignore="true">
                      <div className={`pinned-actions flex items-center gap-1 transition-opacity duration-200 ${editingPinId === chant._pinId ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        {/* Grip handle — touch starts here on mobile */}
                        <span
                          title="Drag to reorder"
                          className="p-1.5 rounded-full cursor-grab active:cursor-grabbing"
                          style={{ color: '#0d0d0d55', touchAction: 'none' }}
                          onTouchStart={(e) => handleTouchStart(e, idx)}
                          onTouchMove={handleTouchMove}
                          onTouchEnd={handleTouchEnd}
                        >
                          <i className="fa-solid fa-grip-lines text-lg"></i>
                        </span>
                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => setEditingPinId(editingPinId === chant._pinId ? null : chant._pinId)}
                          title={editingPinId === chant._pinId ? "Save Edit" : "Edit"}
                          className="p-1.5 rounded-full transition-all hover:scale-110 active:scale-90"
                          style={{ backgroundColor: '#3da9fc22', color: '#3da9fc' }}
                        >
                          {editingPinId === chant._pinId ? (
                            <i className="fa-solid fa-check text-base"></i>
                          ) : (
                            <i className="fa-solid fa-pen-to-square text-base"></i>
                          )}
                        </button>
                        {/* Duplicate */}
                        <button
                          type="button"
                          onClick={() => handleDuplicate(chant._pinId)}
                          title="Duplicate"
                          className="p-1.5 rounded-full transition-all hover:scale-110 active:scale-90"
                          style={{ backgroundColor: '#ff8e3c22', color: '#ff8e3c' }}
                        >
                          <i className="fa-solid fa-clone text-base"></i>
                        </button>
                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() => handleRemove(chant._pinId)}
                          title="Remove"
                          className="p-1.5 rounded-full transition-all hover:scale-110 active:scale-90"
                          style={{ backgroundColor: '#ff000022', color: '#cc0000' }}
                        >
                          <i className="fa-solid fa-thumbtack-slash text-base"></i>
                        </button>
                      </div>
                    </div>

                    {/* Chant name */}
                    {editingPinId === chant._pinId ? (
                      <input
                        className="text-lg font-semibold mb-3 w-full pl-2 pr-28 py-1 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#ff8e3c]"
                        style={{ color: '#0d0d0d' }}
                        value={chant.name}
                        onChange={(e) => setPinnedChants(prev => prev.map(c => c._pinId === chant._pinId ? { ...c, name: e.target.value } : c))}
                      />
                    ) : (
                      <h3 className="text-lg font-semibold mb-3 pr-20" style={{ color: '#0d0d0d' }}>
                        {chant.name}
                      </h3>
                    )}
                    {/* Chant text */}
                    {editingPinId === chant._pinId ? (
                      <textarea
                        className="text-base leading-relaxed w-full bg-white border border-gray-300 rounded p-2 focus:outline-none focus:border-[#ff8e3c] min-h-[120px] resize-y"
                        style={{ color: '#2a2a2a' }}
                        value={chant[script] !== undefined ? chant[script] : (chant.romaji || '')}
                        onChange={(e) => setPinnedChants(prev => prev.map(c => c._pinId === chant._pinId ? { ...c, [script]: e.target.value } : c))}
                      />
                    ) : (
                      <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: '#2a2a2a' }}>
                        {getDisplayText(chant)}
                      </p>
                    )}

                    {/* Example link */}
                    {showExamples && chant.example && (
                      <div className="mt-3 pt-3" style={{ borderTop: '1px solid #ff8e3c44' }}>
                        <p className="text-sm" style={{ color: '#2a2a2a' }}>
                          Ex:{' '}
                          <a
                            href={chant.example.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                            style={{ color: '#ff8e3c' }}
                          >
                            {chant.example.title}
                          </a>
                          {' '}at <strong style={{ color: '#0d0d0d' }}>{chant.example.timestamp}</strong>
                        </p>
                      </div>
                    )}
                  </motion.div>
                )
              })}
              </AnimatePresence>
            </div>

            {/* ── Divider between Pinned and main card grid ── */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px" style={{ backgroundColor: '#0d0d0d33' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#0d0d0d66' }}>
                All Chants
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: '#0d0d0d33' }} />
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            MAIN CHANTS GRID
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChants.length > 0 ? (
            filteredChants.map((chant) => (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                key={chant.id}
                className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border relative group"
                style={{ backgroundColor: '#ffffff', borderColor: '#0d0d0d' }}
              >
                {/* ── Add (Pin) button ── */}
                {/* PC: shown on hover. Mobile: always visible (via index.css). */}
                <button
                  type="button"
                  onClick={() => handlePin(chant)}
                  title="Pin this chant"
                  className="add-pin-btn absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 active:scale-90 pointer-events-none group-hover:pointer-events-auto"
                  style={{ color: '#ff8e3c' }}
                >
                  <i className="fa-solid fa-thumbtack text-1xl"></i>
                </button>

                {/* Chant name */}
                <h3 className="text-lg font-semibold mb-3 pr-8" style={{ color: '#0d0d0d' }}>
                  {chant.name}
                </h3>
                {/* Chant text */}
                <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: '#2a2a2a' }}>
                  {getDisplayText(chant)}
                </p>

                {/* Example link */}
                {showExamples && chant.example && (
                  <div className="mt-3 pt-3" style={{ borderTop: '1px solid #0d0d0d22' }}>
                    <p className="text-sm" style={{ color: '#2a2a2a' }}>
                      Ex:{' '}
                      <a
                        href={chant.example.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                        style={{ color: '#ff8e3c' }}
                      >
                        {chant.example.title}
                      </a>
                      {' '}at <strong style={{ color: '#0d0d0d' }}>{chant.example.timestamp}</strong>
                    </p>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg" style={{ color: '#2a2a2a' }}>
                No chants found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>

        {/* Results count */}
        {searchTerm && (
          <div className="mt-8 text-center" style={{ color: '#2a2a2a' }}>
            Found {filteredChants.length} {filteredChants.length === 1 ? 'chant' : 'chants'}
          </div>
        )}

      </div>
    </main>
  )
}

export default Body
