'use client';

import Reactm, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitch: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialTheme =
      savedTheme === 'dark' || (savedTheme === 'auto' && prefersDark);

    setIsDarkTheme(initialTheme);
    document.body.classList.toggle('dark-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };
  return (
    <>
      <button onClick={toggleTheme}>
        {isDarkTheme ? (
          <FaSun size={22} style={{ color: 'var(--secondary)' }} />
        ) : (
          <FaMoon size={22} style={{ color: 'var(--secondary)' }} />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
