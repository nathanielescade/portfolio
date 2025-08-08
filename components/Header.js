// components/Header.js
import { useState } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon, FaFileAlt } from 'react-icons/fa'

export default function Header({ toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold neon-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Nathaniel Cobbinah
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-cyan-400 transition-colors" onClick={closeMenu}>Home</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors" onClick={closeMenu}>Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors" onClick={closeMenu}>Contact</a>
          <a href="/resume" className="hover:text-cyan-400 transition-colors flex items-center">
            <FaFileAlt className="mr-1" /> Resume
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'neon' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-gray-800">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#home" className="hover:text-cyan-400 transition-colors" onClick={closeMenu}>Home</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors" onClick={closeMenu}>Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors" onClick={closeMenu}>Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors" onClick={closeMenu}>Contact</a>
            <a href="/resume" className="hover:text-cyan-400 transition-colors flex items-center" onClick={closeMenu}>
              <FaFileAlt className="mr-1" /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}