import { useState } from 'react'
import { idolChants } from '../data/idolChants'

const SCRIPT_OPTIONS = [
  { value: 'romaji', label: 'Romaji' },
  { value: 'hiragana', label: 'Hiragana' },
  { value: 'katakana', label: 'Katakana' }
]

function Body() {
  const [searchTerm, setSearchTerm] = useState('')
  const [script, setScript] = useState('romaji')

  const filteredChants = idolChants.filter(chant => {
    const q = searchTerm.toLowerCase()
    return (
      chant.name.toLowerCase().includes(q) ||
      (chant.romaji && chant.romaji.toLowerCase().includes(q)) ||
      (chant.hiragana && chant.hiragana.includes(searchTerm)) ||
      (chant.katakana && chant.katakana.includes(searchTerm))
    )
  })

  const getDisplayText = (chant) => {
    const text = chant[script] || chant.romaji
    return text || ''
  }

  return (
    <main className="flex-1 container mx-auto px-4 py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Find Your Favorite Chants</h2>
          <p className="text-gray-600">Search through our collection of idol chants & mixes</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for idol chants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all shadow-lg"
            />
          </div>
        </div>

        {/* Script Toggle */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <span className="text-gray-600 font-medium self-center mr-2">Display:</span>
          {SCRIPT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setScript(opt.value)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                script === opt.value
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Chants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChants.length > 0 ? (
            filteredChants.map((chant) => (
              <div
                key={chant.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 hover:border-purple-300"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-3">
                  {chant.name}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                  {getDisplayText(chant)}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No chants found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="mt-8 text-center text-gray-600">
            Found {filteredChants.length} {filteredChants.length === 1 ? 'chant' : 'chants'}
          </div>
        )}
      </div>
    </main>
  )
}

export default Body
