import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.classList.toggle('black-and-white', savedTheme === 'black-and-white');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'black-and-white' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('black-and-white', newTheme === 'black-and-white');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full neon-glow hover:scale-110 transition-transform"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun className="text-neon-yellow" /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;