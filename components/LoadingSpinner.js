// components/LoadingSpinner.js
'use client'

import { useEffect, useState } from 'react'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100) // Adjust the time as needed

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-cyan-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-2 border-4 border-cyan-500 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}