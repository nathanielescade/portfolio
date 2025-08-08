// components/Skills.js
import { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiDjango, SiMysql, SiPython, SiTypescript } from 'react-icons/si'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tools', name: 'Tools' }
  ]
  
  const skills = [
    { id: 1, name: 'HTML5', icon: <FaHtml5 className="text-2xl" />, category: 'frontend', level: 95 },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt className="text-2xl" />, category: 'frontend', level: 90 },
    { id: 3, name: 'JavaScript', icon: <FaJs className="text-2xl" />, category: 'frontend', level: 85 },
    { id: 4, name: 'React', icon: <FaReact className="text-2xl" />, category: 'frontend', level: 90 },
    { id: 5, name: 'Next.js', icon: <SiNextdotjs className="text-2xl" />, category: 'frontend', level: 85 },
    { id: 6, name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl" />, category: 'frontend', level: 95 },
    { id: 7, name: 'Node.js', icon: <FaNodeJs className="text-2xl" />, category: 'backend', level: 80 },
    { id: 8, name: 'Python', icon: <SiPython className="text-2xl" />, category: 'backend', level: 85 },
    { id: 9, name: 'Django', icon: <SiDjango className="text-2xl" />, category: 'backend', level: 80 },
    { id: 10, name: 'TypeScript', icon: <SiTypescript className="text-2xl" />, category: 'backend', level: 75 },
    { id: 11, name: 'MySQL', icon: <SiMysql className="text-2xl" />, category: 'database', level: 85 },
    { id: 12, name: 'Database Design', icon: <FaDatabase className="text-2xl" />, category: 'database', level: 80 },
    { id: 13, name: 'Git', icon: <FaGitAlt className="text-2xl" />, category: 'tools', level: 90 },
    { id: 14, name: 'GitHub', icon: <FaGitAlt className="text-2xl" />, category: 'tools', level: 90 },
  ]
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="neon-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            My Skills
          </span>
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          I&apos;ve worked with a variety of technologies in the web development world. Here&apos;s an overview of my technical skills.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'neon-button text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="neon-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4 text-cyan-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="mt-2 text-right text-sm text-gray-400">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}