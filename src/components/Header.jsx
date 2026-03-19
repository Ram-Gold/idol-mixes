import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

  const navLinkClass = ({ isActive }) =>
    `text-lg font-medium transition-all duration-300 pb-1 border-b-2 ${isActive
      ? 'text-white border-white'
      : 'text-white/60 border-transparent hover:text-white/90 hover:border-white/30'
    }`;

  return (
    <header
      style={{
        backgroundColor: backgroundColors[currentIndex],
        transition: 'background-color 0.5s ease-in-out'
      }}
      className="p-6 md:p-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center">
          <img
            src={lightsticks[currentIndex]}
            alt="App Logo"
            className="w-16 h-16 mr-5 cursor-pointer hover:scale-110 active:scale-95 transition-transform drop-shadow-lg"
            onClick={cycleLightstick}
            title="Click to change color!"
          />
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Idol Chant Finder</h1>
            <p className="mt-0.5 text-white/70 text-sm">こんにちわいぱー！</p>
          </div>
        </div>

        <nav className="flex items-center gap-8 overflow-x-auto no-scrollbar py-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/glossary" className={navLinkClass}>Glossary</NavLink>
          <NavLink to="/others" className={navLinkClass}>Others</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
