// app/page.js
'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [theme, setTheme] = useState('neon')

  useEffect(() => {
    if (theme === 'bw') {
      document.documentElement.classList.add('bw-theme')
    } else {
      document.documentElement.classList.remove('bw-theme')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'neon' ? 'bw' : 'neon')
  }

  return (
    <div className={`min-h-screen bg-pattern ${theme === 'bw' ? 'bw-theme' : ''}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}