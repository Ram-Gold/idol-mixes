// Define the Footer component. It represents the bottom section of the webpage.
function Footer() {
  return (
    // The <footer> tag is used for the footer section.
    // Tailwind classes are used here to add a dark background (bg-gray-800), white text, padding (p-4), and margin-top auto (mt-auto) to push it to the bottom.
    <footer className="p-4 mt-auto" style={{ backgroundColor: '#0d0d0d', color: '#eff0f3' }}>
      {/* Container to center the content horizontally */}
      <div className="container mx-auto text-center">
        {/* Copyright notice with small text */}
        <p className="text-sm">&copy; 2026 Idol Mixes</p>
      </div>
    </footer>
  )
}

// Export the Footer component to be used elsewhere in the application.
export default Footer
