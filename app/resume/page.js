// app/resume/page.js
'use client'

import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa'
import Head from 'next/head'

export default function Resume() {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <>
      <Head>
        <title>Resume | Nathaniel Cobbinah</title>
        <meta name="description" content="Resume of Nathaniel Cobbinah (Kane Escade), Full Stack Developer" />
        <meta property="og:title" content="Resume | Nathaniel Cobbinah" />
        <meta property="og:description" content="Resume of Nathaniel Cobbinah (Kane Escade), Full Stack Developer" />
        <meta property="og:image" content="/images/profile-picture.jpg" />
        <meta property="og:url" content="http://192.168.43.101:3000/resume" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume | Nathaniel Cobbinah" />
        <meta name="twitter:description" content="Resume of Nathaniel Cobbinah (Kane Escade), Full Stack Developer" />
        <meta name="twitter:image" content="/images/profile-picture.jpg" />
        <link rel="canonical" href="http://192.168.43.101:3000/resume" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                  {imageError ? (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-500">NC</span>
                    </div>
                  ) : (
                    <img 
                      src="/images/profile-picture.jpg" 
                      alt="Nathaniel Cobbinah" 
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  )}
                </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Nathaniel Cobbinah Amofah</h1>
                <h2 className="text-xl md:text-2xl text-blue-200 mb-4">(Kane Escade)</h2>
                <p className="text-lg">Full Stack Developer</p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="mailto:nathanielescade@gmail.com" className="flex items-center text-blue-200 hover:text-white">
                    <FaEnvelope className="mr-2" />
                    nathanielescade@gmail.com
                  </a>
                  <a href="https://wa.me/233593609043" className="flex items-center text-blue-200 hover:text-white">
                    <FaWhatsapp className="mr-2" />
                    +233 59 360 9043
                  </a>
                  <a href="https://www.linkedin.com/in/nathaniel-cobbinah/" className="flex items-center text-blue-200 hover:text-white">
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </a>
                  <a href="https://facebook.com/nathanielescade" className="flex items-center text-blue-200 hover:text-white">
                    <FaFacebookF className="mr-2" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="p-8">
            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Summary</h3>
              <p className="text-gray-600">
                Passionate Full Stack Developer with 3 years of experience in building modern web applications. 
                Proficient in both frontend and backend technologies, with a strong focus on creating responsive, 
                user-friendly interfaces and robust server-side logic. Adept at working with HTML, CSS, JavaScript, 
                React, Next.js, Django, and MySQL. Committed to continuous learning and staying updated with the 
                latest web development trends.
              </p>
            </div>
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Frontend Technologies</h4>
                  <p className="text-gray-600">HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Backend Technologies</h4>
                  <p className="text-gray-600">Django, Python, REST APIs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Database</h4>
                  <p className="text-gray-600">MySQL, SQLite, LocalStorage</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Tools & Others</h4>
                  <p className="text-gray-600">Git, GitHub, Vercel, Chart.js</p>
                </div>
              </div>
            </div>
            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Projects</h3>
              <div className="space-y-6">
                {/* Hotel Management Dashboard */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Hotel Management Dashboard</h4>
                      <p className="text-gray-600 italic">Next.js, Tailwind CSS, Chart.js, React</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/hotel-dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://hotel-dashboard-orcin.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A stunning neon-themed hotel management system admin dashboard with role-based authentication, 
                    responsive design, and comprehensive management tools for bookings, rooms, guests, and revenue tracking.
                  </p>
                </div>
                {/* Neon Social */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Neon Social</h4>
                      <p className="text-gray-600 italic">Next.js, Tailwind CSS, React</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/social-media" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://social-media-zeta-sandy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A vibrant social media platform with a modern neon theme, featuring user profiles, post creation, 
                    real-time notifications, and social interactions. Built with Next.js and styled with Tailwind CSS.
                  </p>
                </div>
                {/* CouponHub */}
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">CouponHub</h4>
                      <p className="text-gray-600 italic">Django, Python, Django REST Framework, MySQL</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/coupon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A comprehensive coupon and deals platform built with Django and Django REST Framework. Features include 
                    user authentication, coupon browsing, search functionality, saving coupons, and an admin dashboard with analytics.
                  </p>
                </div>
                {/* Ghana Police Management System */}
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Ghana Police Management System</h4>
                      <p className="text-gray-600 italic">HTML, CSS, JavaScript</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/ghpolicemanagement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://ghpolicemanagement.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A modern frontend for the Ghana Police Management System providing tools for managing police operations, 
                    officers, cases, fleet, reports, and public engagement. Features responsive design and role-based access controls.
                  </p>
                </div>
                {/* Weather Forecast */}
                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Weather Forecast</h4>
                      <p className="text-gray-600 italic">HTML, CSS, JavaScript, Weather API</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/weather-forecast" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://weather-forecast-jet-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A visually stunning weather forecast application with a cyberpunk aesthetic providing real-time weather 
                    information, 48-hour forecasts, and unique weather anomaly detection. Features responsive design and 
                    geolocation support.
                  </p>
                </div>
                {/* Spiritual Bible */}
                <div className="border-l-4 border-indigo-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">The Spiritual Bible</h4>
                      <p className="text-gray-600 italic">HTML, CSS, JavaScript, Bible API</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/spiritual-bible" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://bible-psi-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A serene digital sanctuary for scripture reading with multiple Bible translations, devotionals, 
                    verse highlighting, favorites system, and personal notes. Features a calming interface designed for spiritual growth.
                  </p>
                </div>
                {/* Travel App */}
                <div className="border-l-4 border-teal-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Travel App</h4>
                      <p className="text-gray-600 italic">HTML, CSS, JavaScript, Travel API</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/travel-app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://travel-app-khaki-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A modern travel booking web application for exploring and planning trips to Ghana. Features an AI travel 
                    assistant, hotel booking, destination explorer, travel guide, and experience booking with a responsive design.
                  </p>
                </div>
                {/* Neon Todo */}
                <div className="border-l-4 border-pink-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Neon Todo</h4>
                      <p className="text-gray-600 italic">Next.js, TypeScript, Tailwind CSS, React</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/neon-todo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://neon-todo-gilt.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A stunningly colorful todo app with authentication, multiple themes, and advanced task management features. 
                    Includes task prioritization, categorization, due dates, and statistics dashboard with a vibrant neon theme.
                  </p>
                </div>
                {/* FinTrack Pro */}
                <div className="border-l-4 border-cyan-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">FinTrack Pro</h4>
                      <p className="text-gray-600 italic">HTML, CSS, JavaScript, Chart.js</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/FinTrack-Pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://fin-track-pro-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A comprehensive personal finance management application with transaction tracking, financial analytics, 
                    goal setting, and personalized insights. Features interactive charts, budget management, and a dark-themed interface.
                  </p>
                </div>
                {/* Tech News */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Tech News</h4>
                      <p className="text-gray-600 italic">HTML, CSS, JavaScript, News API</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/tech-news" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://news-orcin-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A modern tech news website delivering the latest technology news and innovations with a responsive design. 
                    Features real-time news updates, article detail pages, and SEO optimization with a dark theme.
                  </p>
                </div>
                {/* Escade Mobile */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Escade Mobile</h4>
                      <p className="text-gray-600 italic">React, JavaScript, CSS</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href="https://github.com/nathanielescade/escade-mobile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaGithub />
                      </a>
                      <a href="https://escade-mobile.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    A mobile phone interface built with React featuring a modern design and interactive components. 
                    Simulates a mobile device interface with various apps and functionality.
                  </p>
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Education</h3>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-800">Accra Technical University</h4>
                <p className="text-gray-600 italic">2018 - 2021</p>
              </div>
            </div>
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Nathaniel Cobbinah Amofah. All rights reserved.</p>
              <p className="mt-1">
                View my portfolio: <a href="http://192.168.43.101:3000" className="text-blue-500 hover:underline">portfolio</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}