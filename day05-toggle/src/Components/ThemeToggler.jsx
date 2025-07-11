import React, { useState } from 'react';
import './ThemeToggler.css';

function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className={`theme-container ${darkMode ? 'dark' : 'light'}`}>
      <h1>{darkMode ? 'DARK MODE' : 'LIGHT MODE'}</h1>
      <button className="pixel-button" onClick={toggleTheme}>
        TOGGLE THEME
      </button>
    </div>
  );
}

export default ThemeToggler;
