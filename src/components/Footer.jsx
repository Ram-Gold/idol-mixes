// Define the Footer component. It represents the bottom section of the webpage.
function Footer() {
  return (
    <footer className="p-4 mt-auto" style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)' }}>
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
