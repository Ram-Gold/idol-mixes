import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Default to light mode; only use stored preference (never media query)
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('idolMixes_theme');
    return stored === 'dark'; // explicit dark only; null/light → false
  });

  // Apply/remove 'dark' class on <html> and persist preference
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('idolMixes_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('idolMixes_theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
