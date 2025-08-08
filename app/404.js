// app/404.js
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you&apos;re looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg neon-button text-white font-semibold"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}