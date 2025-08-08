// app/404.js
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950 text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 neon-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg neon-button text-white font-semibold">
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}