import React, { useState, useEffect } from 'react';
import light1 from '../assets/lightsticks/cyalume_light1_blue.png';
import light2 from '../assets/lightsticks/cyalume_light2_yellow.png';
import light3 from '../assets/lightsticks/cyalume_light3_red.png';
import light4 from '../assets/lightsticks/cyalume_light4_green.png';
import light5 from '../assets/lightsticks/cyalume_light5_orange.png';
import light6 from '../assets/lightsticks/cyalume_light6_purple.png';
import light7 from '../assets/lightsticks/cyalume_light7_white.png';
import light8 from '../assets/lightsticks/cyalume_light8_pink.png';
import light9 from '../assets/lightsticks/pen_light2_1_rose.png';
import light10 from '../assets/lightsticks/pen_light2_2_lemon.png';
import light11 from '../assets/lightsticks/pen_light2_3_lime.png';
import light12 from '../assets/lightsticks/pen_light2_4_darkblue.png';
import light13 from '../assets/lightsticks/pen_light2_5_asagi.png';
import light14 from '../assets/lightsticks/pen_light2_6_violet.png';
import light15 from '../assets/lightsticks/pen_light2_7_brown.png';
import light16 from '../assets/lightsticks/pen_light2_8_gray.png';

const lightsticks = [
  light1, light2, light3, light4, light5, light6, light7, light8,
  light9, light10, light11, light12, light13, light14, light15, light16
];

// Define the Header component. In React, components are functions that return UI elements.
function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = lightsticks[currentIndex];
  }, [currentIndex]);

  const cycleLightstick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lightsticks.length);
  };

  return (
    // The <header> tag represents the introductory content for its nearest ancestor sectioning content or sectioning root element.
    // We use Tailwind CSS classes here for styling (e.g., bg-gradient-to-r creates a background gradient).
    <header style={{ backgroundColor: '#ff8e3c' }} className="p-6">
      <div className="container mx-auto flex items-center">
        <img
          src={lightsticks[currentIndex]}
          alt="App Logo"
          className="w-16 h-16 mr-5 cursor-pointer hover:scale-110 active:scale-95 transition-transform drop-shadow"
          onClick={cycleLightstick}
          title="Click to change color!"
        />
        <div>
          {/* The main heading of the application */}
          <h1 className="text-3xl font-bold" style={{ color: '#0d0d0d' }}>Idol Chant Finder</h1>
          {/* A small subtitle or description below the main heading */}
          <p className="mt-1" style={{ color: '#0d0d0d', opacity: 0.7 }}>Search through idol chants</p>
        </div>
      </div>
    </header>
  )
}

// Export the Header component so it can be imported and used in other files (like App.jsx).
export default Header
