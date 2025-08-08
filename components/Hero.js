// components/Hero.js
'use client'

import { useState, useEffect, useMemo } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaDownload, FaFacebookF } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  
  const phrases = useMemo(() => [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Creative Thinker"
  ], [])

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    if (currentIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + currentPhrase[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setTypedText('')
        setCurrentIndex(0)
        setCurrentPhraseIndex(prev => (prev + 1) % phrases.length)
      }, 2000)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, currentPhraseIndex, phrases])

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="neon-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Nathaniel Cobbinah</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-cyan-400">
            {typedText}
            <span className="ml-1 inline-block w-1 h-10 bg-cyan-400 animate-pulse"></span>
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            I build modern, responsive web applications with beautiful interfaces and seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg neon-button text-white font-semibold flex items-center justify-center"
            >
              <span>Get In Touch</span>
            </a>
            <div className="flex">
              <a 
                href="/resume" 
                className="flex-1 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold flex items-center justify-center"
              >
                <span>View Resume</span>
              </a>
              <a 
                href="/resume.pdf" 
                className="ml-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors flex items-center justify-center"
                download
                title="Download Resume PDF"
              >
                <FaDownload />
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/nathanielescade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/nathaniel-cobbinah/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <FaLinkedin className="text-xl text-blue-400" />
            </a>
            <a href="https://facebook.com/nathanielescade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <FaFacebookF className="text-xl text-blue-600" />
            </a>
            <a href="https://twitter.com/nathanielescade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <FaTwitter className="text-xl text-cyan-400" />
            </a>
            <a href="https://wa.me/233593609043" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <FaWhatsapp className="text-xl text-green-400" />
            </a>
            <a href="mailto:nathanielescade@gmail.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <FaEnvelope className="text-xl text-red-400" />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-500/20">
              {imageError ? (
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/30">NC</span>
                </div>
              ) : (
                <Image 
                  src="/images/profile-photo.jpg" 
                  alt="Nathaniel Cobbinah" 
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              )}
            </div>
            <div className="absolute -inset-2 rounded-full border-2 border-purple-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}