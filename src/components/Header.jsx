// Define the Header component. In React, components are functions that return UI elements.
function Header() {
  return (
    // The <header> tag represents the introductory content for its nearest ancestor sectioning content or sectioning root element.
    // We use Tailwind CSS classes here for styling (e.g., bg-gradient-to-r creates a background gradient).
    <header style={{ backgroundColor: '#ff8e3c' }} className="p-6">
      <div className="container mx-auto">
        {/* The main heading of the application */}
        <h1 className="text-3xl font-bold" style={{ color: '#0d0d0d' }}>Idol Chant Finder</h1>

        {/* A small subtitle or description below the main heading */}
        <p className="mt-2" style={{ color: '#0d0d0d', opacity: 0.7 }}>Search through idol chants</p>
      </div>
    </header>
  )
}

// Export the Header component so it can be imported and used in other files (like App.jsx).
export default Header
