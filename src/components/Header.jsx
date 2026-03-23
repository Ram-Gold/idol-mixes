import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
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

const backgroundColors = [
  '#0080FF', // light1: Blue
  '#FFD700', // light2: Yellow
  '#FF4500', // light3: Red
  '#2E8B57', // light4: Green
  '#FF8C00', // light5: Orange
  '#4B0082', // light6: Purple
  '#181818ff', // light7: White
  '#FF69B4', // light8: Pink
  '#C71585', // light9: Rose
  '#B8860B', // light10: Lemon
  '#00FF7F', // light11: Lime
  '#191970', // light12: Dark Blue
  '#20B2AA', // light13: Asagi
  '#DA70D6', // light14: Violet
  '#A0522D', // light15: Brown
  '#708090', // light16: Gray
];

function Header() {
  const { isDark, toggleDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) =>
    `text-lg font-medium transition-all duration-300 pb-1 border-b-2 ${isActive
      ? 'text-white border-white'
      : 'text-white/60 border-transparent hover:text-white/90 hover:border-white/30'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `text-xl font-bold transition-all duration-300 py-3 px-6 rounded-xl flex items-center justify-between ${isActive
      ? 'bg-white/20 text-white'
      : 'text-white/70 hover:bg-white/10 hover:text-white'
    }`;

  // Inline dark-mode toggle (icon button style)
  const DarkModeToggle = ({ className = '' }) => (
    <button
      id="dark-mode-toggle"
      onClick={toggleDark}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 transition-all duration-200 border border-white/20 ${className}`}
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-300">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );

  // Mobile toggle row (with label)
  const MobileDarkModeRow = () => (
    <div className="px-6 py-3 flex items-center justify-between">
      <span className="text-lg font-bold text-white/70">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </span>
      <button
        id="dark-mode-toggle-mobile"
        onClick={toggleDark}
        aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="flex items-center gap-2"
      >
        {/* Toggle pill */}
        <div
          className="relative w-12 h-6 rounded-full transition-colors duration-300"
          style={{ backgroundColor: isDark ? '#ff8e3c' : 'rgba(255,255,255,0.2)' }}
        >
          <div
            className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300"
            style={{ transform: isDark ? 'translateX(26px)' : 'translateX(4px)' }}
          />
        </div>
        <span className="text-white/80">
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-300">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );

  return (
    <header
      style={{
        backgroundColor: backgroundColors[currentIndex],
        transition: 'background-color 0.5s ease-in-out'
      }}
      className="p-6 md:p-8 relative z-50 shadow-lg"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={lightsticks[currentIndex]}
              alt="App Logo"
              width="64"
              height="64"
              className="w-14 h-14 md:w-16 md:h-16 mr-4 md:mr-5 cursor-pointer hover:scale-110 active:scale-95 transition-transform drop-shadow-xl"
              onClick={cycleLightstick}
              title="Click to change color!"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">Idol Chant Finder</h1>
              <p className="mt-1 text-white/70 text-xs md:text-sm font-medium tracking-wide">こんにちわいぱー！</p>
            </div>
          </div>

          {/* Desktop Nav + Dark Mode Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-10">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/glossary" className={navLinkClass}>Glossary</NavLink>
              <NavLink to="/others" className={navLinkClass}>Others</NavLink>
            </nav>
            {/* Desktop dark mode toggle — top-right */}
            <DarkModeToggle />
          </div>

          {/* Mobile: dark mode toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <DarkModeToggle />
            <button
              className="text-white text-2xl p-2 focus:outline-none transition-transform active:scale-90"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col gap-2 pb-2">
            <NavLink
              to="/"
              className={mobileNavLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </NavLink>
            <NavLink
              to="/glossary"
              className={mobileNavLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Glossary</span>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </NavLink>
            <NavLink
              to="/others"
              className={mobileNavLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Others</span>
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
            </NavLink>
            {/* Mobile dark mode toggle — below Others */}
            <div className="border-t border-white/10 mt-1">
              <MobileDarkModeRow />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
