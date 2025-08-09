// components/Projects.js
import { useState, useEffect, useCallback } from 'react'
import ProjectCard from './ProjectCard'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Hotel Management Dashboard",
      description: "A stunning neon-themed hotel management system admin dashboard with role-based authentication and comprehensive management tools.",
      image: "/images/hotel-dashboard.jpg", // Placeholder
      tags: ["Next.js", "Tailwind CSS", "Chart.js", "React"],
      githubUrl: "https://github.com/nathanielescade/hotel-dashboard",
      liveUrl: "https://hoteldashboard-pi.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Neon Social",
      description: "A vibrant social media platform with a modern neon theme, featuring user profiles, post creation, and real-time notifications.",
      image: "/images/neon-social.jpg", // Placeholder
      tags: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
      githubUrl: "https://github.com/nathanielescade/social-media",
      liveUrl: "https://neonsocial.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "CouponHub",
      description: "A comprehensive coupon and deals platform built with Django and Django REST Framework that helps users discover and save coupons.",
      image: "/images/couponhub.jpg", // Placeholder
      tags: ["Django", "Python", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/nathanielescade/coupon",
      liveUrl: "",
      featured: true
    },
    {
      id: 4,
      title: "Ghana Police Management System",
      description: "A modern frontend for the Ghana Police Management System providing tools for managing police operations, officers, and cases.",
      image: "/images/police-management.jpg", // Placeholder
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/nathanielescade/ghpolicemanagement",
      liveUrl: "https://ghpolicemanagement.vercel.app/",
      featured: false
    },
    {
      id: 5,
      title: "Weather Forecast",
      description: "A visually stunning weather forecast application with a cyberpunk aesthetic providing real-time weather information and forecasts.",
      image: "/images/weather-forecast.jpg", // Placeholder
      tags: ["HTML", "CSS", "JavaScript", "Weather API"],
      githubUrl: "https://github.com/nathanielescade/weather-forecast",
      liveUrl: "https://weatherforecast-mu-two.vercel.app/",
      featured: false
    },
    {
      id: 6,
      title: "The Spiritual Bible",
      description: "A serene digital sanctuary for scripture reading with multiple Bible translations, devotionals, and personal notes.",
      image: "/images/spiritual-bible.jpg", // Placeholder
      tags: ["HTML", "CSS", "JavaScript", "Bible API"],
      githubUrl: "https://github.com/nathanielescade/spiritual-bible",
      liveUrl: "https://spiritualbible.vercel.app/",
      featured: false
    },
    {
      id: 7,
      title: "Travel App",
      description: "A modern travel booking web application for exploring and planning trips to Ghana with an AI travel assistant.",
      image: "/images/travel-app.jpg", // Placeholder
      tags: ["HTML", "CSS", "JavaScript", "Travel API"],
      githubUrl: "https://github.com/nathanielescade/travel-app",
      liveUrl: "https://travelapp-three-chi.vercel.app/",
      featured: false
    },
    {
      id: 8,
      title: "Neon Todo",
      description: "A stunningly colorful todo app with authentication, multiple themes, and advanced task management features.",
      image: "/images/neon-todo.jpg", // Placeholder
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/nathanielescade/neon-todo",
      liveUrl: "https://neon-todo-gilt.vercel.app/",
      featured: false
    },
    {
      id: 9,
      title: "FinTrack Pro",
      description: "A comprehensive personal finance management application with transaction tracking, financial analytics, and goal setting.",
      image: "/images/fintrack.jpg", // Placeholder
      tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
      githubUrl: "https://github.com/nathanielescade/FinTrack-Pro",
      liveUrl: "https://fintrackpro-nine.vercel.app/",
      featured: false
    },
    {
      id: 10,
      title: "Tech News",
      description: "A modern tech news website delivering the latest technology news and innovations with a responsive design.",
      image: "/images/tech-news.jpg", // Placeholder
      tags: ["HTML", "CSS", "JavaScript", "News API"],
      githubUrl: "https://github.com/nathanielescade/tech-news",
      liveUrl: "https://technews-rust.vercel.app/",
      featured: false
    },
    {
      id: 11,
      title: "Escade Mobile",
      description: "A mobile phone interface built with React featuring a modern design and interactive components.",
      image: "/images/escade-mobile.jpg", // Placeholder
      tags: ["React", "JavaScript", "CSS", "Mobile UI"],
      githubUrl: "https://github.com/nathanielescade/escade-mobile",
      liveUrl: "https://escade-mobile.vercel.app/",
      featured: false
    }
  ])

  const [featuredProjects, setFeaturedProjects] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setFeaturedProjects(projects.filter(project => project.featured))
  }, [projects])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1))
  }, [featuredProjects.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1))
  }, [featuredProjects.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="neon-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            My Projects
          </span>
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is a unique piece of development with its own challenges and solutions.
        </p>
        
        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Projects</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl neon-card">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <ProjectCard project={project} featured={true} />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Previous project"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Next project"
            >
              <FaArrowRight />
            </button>
            
            <div className="flex justify-center mt-4 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}