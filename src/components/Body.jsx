// Import the useState hook from React. 
// useState allows us to add state (variables that trigger re-renders when changed) to our component.
import { useState } from 'react'

// Import the data containing the idol chants from a local file.
import { idolChants } from '../data/idolChants'

// Define a constant array of options for the script toggle (Romaji, Hiragana, Katakana).
// Constants defined outside the component don't get recreated on every render, improving performance.
const SCRIPT_OPTIONS = [
  { value: 'romaji', label: 'Romaji' },
  { value: 'hiragana', label: 'Hiragana' },
  { value: 'katakana', label: 'Katakana' }
]

// Define the main Body component.
function Body() {
  // --- STATE DEFINITIONS ---
  
  // Create a state variable 'searchTerm' to store what the user types in the search bar.
  // 'setSearchTerm' is the function we'll call to update this value.
  // The initial value is an empty string: ''.
  const [searchTerm, setSearchTerm] = useState('')
  
  // Create a state variable 'script' to keep track of which writing system is currently selected.
  // The initial value is set to 'romaji'.
  const [script, setScript] = useState('romaji')

  // State to toggle whether YouTube example links are shown at the bottom of each card.
  const [showExamples, setShowExamples] = useState(false)

  // --- LOGIC SECTION ---

  // Filter the full list of idolChants based on the current searchTerm.
  // This runs every time the component renders (e.g., when the user types in the search bar).
  const filteredChants = idolChants.filter(chant => {
    // Convert the search term to lowercase to make the search case-insensitive.
    const q = searchTerm.toLowerCase()
    
    // Return true if the search term matches any of these fields:
    return (
      // 1. Matches the name of the chant
      chant.name.toLowerCase().includes(q) ||
      // 2. Matches the romaji version (checking if it exists first)
      (chant.romaji && chant.romaji.toLowerCase().includes(q)) ||
      // 3. Matches the hiragana version
      (chant.hiragana && chant.hiragana.includes(searchTerm)) ||
      // 4. Matches the katakana version
      (chant.katakana && chant.katakana.includes(searchTerm))
    )
  })

  // A helper function to determine which text to display for a chant card.
  // It checks the currently selected 'script' state (romaji, hiragana, etc.).
  const getDisplayText = (chant) => {
    // Try to get the text in the selected script. If it doesn't exist, fall back to romaji.
    const text = chant[script] || chant.romaji
    // Ensure we always return a string, even if the text is undefined.
    return text || ''
  }

  // --- UI RENDER SECTION ---
  // The return statement contains the JSX (HTML-like syntax) that will be displayed on the screen.
  return (
    // Main container for the body content. Uses flexbox and Tailwind classes for layout and styling.
    <main className="flex-1 container mx-auto px-4 py-8" style={{ backgroundColor: '#eff0f3' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section: Displays the main heading for this section of the page */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2" style={{ color: '#0d0d0d' }}>Find Your Chants</h2>
          <p style={{ color: '#2a2a2a' }}>Search through collection of idol chants &amp; mixes</p>
        </div>

        {/* Search Bar Section */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-2xl">
            {/* 
               The input field is "controlled" by React state.
               - 'value' is bound to the 'searchTerm' state.
               - 'onChange' fires every time the user types, updating the state.
            */}
            <input
              type="text"
              placeholder="Search for idol chants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 rounded-full focus:outline-none transition-all shadow-lg" style={{ borderColor: '#0d0d0d', color: '#2a2a2a', backgroundColor: '#ffffff' }}
            />
          </div>
        </div>

        {/* Script Toggle Section: Buttons to switch between Romaji, Hiragana, etc. */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <span className="font-medium self-center mr-2" style={{ color: '#2a2a2a' }}>Display:</span>
          {/* We use .map() to loop over our SCRIPT_OPTIONS array and dynamically create buttons */}
          {SCRIPT_OPTIONS.map((opt) => (
            <button
              // React needs a unique 'key' for items in a list to render them efficiently
              key={opt.value}
              type="button"
              // When clicked, update the 'script' state to the value of the clicked button
              onClick={() => setScript(opt.value)}
              // Dynamically apply CSS classes: if this button is the currently selected script, highlight it in purple.
              style={script === opt.value
                ? { backgroundColor: '#ff8e3c', color: '#0d0d0d', borderColor: '#ff8e3c' }
                : { backgroundColor: '#ffffff', color: '#2a2a2a', borderColor: '#0d0d0d' }}
              className={`px-4 py-2 rounded-full font-medium transition-colors border-2`}
            >
              {/* The text displayed inside the button */}
              {opt.label}
            </button>
          ))}
        </div>

        {/* Show Examples Toggle */}
        <div className="mb-6 flex justify-center">
          <label
            className="flex items-center gap-3 cursor-pointer select-none px-5 py-2 rounded-full border-2 font-medium transition-colors"
            style={showExamples
              ? { backgroundColor: '#ff8e3c', borderColor: '#ff8e3c', color: '#0d0d0d' }
              : { backgroundColor: '#ffffff', borderColor: '#0d0d0d', color: '#2a2a2a' }
            }
          >
            {/* Hidden native checkbox — we style the label instead */}
            <input
              type="checkbox"
              className="hidden"
              checked={showExamples}
              onChange={(e) => setShowExamples(e.target.checked)}
            />
            {/* Custom checkbox indicator */}
            <span
              className="w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0"
              style={showExamples
                ? { backgroundColor: '#0d0d0d', borderColor: '#0d0d0d' }
                : { backgroundColor: 'transparent', borderColor: '#0d0d0d' }
              }
            >
              {showExamples && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#ff8e3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            Show Examples
          </label>
        </div>

        {/* Chants Grid Section: Displays the filtered chants as cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 
             Conditional Rendering: 
             If there is at least one chant matching the search, render the list.
             Otherwise, show a "No chants found" message.
          */}
          {filteredChants.length > 0 ? (
            // Loop through the filtered array and render a card for each matching chant
            filteredChants.map((chant) => (
              <div
                key={chant.id}
                className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border" style={{ backgroundColor: '#ffffff', borderColor: '#0d0d0d' }}
              >
                {/* Display the chant's name */}
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#0d0d0d' }}>
                  {chant.name}
                </h3>
                {/* Display the actual text of the chant using our helper function */}
                <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: '#2a2a2a' }}>
                  {getDisplayText(chant)}
                </p>

                {/* Example Section: only rendered when Show Examples is on AND the chant has an example */}
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
              </div>
            ))
          ) : (
            // Fallback UI when the search yields no results
            <div className="col-span-full text-center py-12">
              <p className="text-lg" style={{ color: '#2a2a2a' }}>
                No chants found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>

        {/* Results Count Section */}
        {/* 
           Conditional Rendering (Logical AND): 
           Only show this block if the user has typed something in the search bar ('searchTerm' is truthy).
        */}
        {searchTerm && (
          <div className="mt-8 text-center" style={{ color: '#2a2a2a' }}>
            {/* Show count and dynamically pluralize 'chant' vs 'chants' depending on the number of results */}
            Found {filteredChants.length} {filteredChants.length === 1 ? 'chant' : 'chants'}
          </div>
        )}
      </div>
    </main>
  )
}

// Export the component for use in the rest of the application.
export default Body
