// components/ProjectCard.js
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project, featured }) {
  return (
    <div className={`neon-card rounded-xl overflow-hidden ${featured ? 'h-full' : ''}`}>
      <div className={`relative ${featured ? 'h-64 md:h-80' : 'h-48'} overflow-hidden`}>
        {/* Updated to properly display images */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                <span class="text-4xl font-bold text-white/20">${project.title.charAt(0)}</span>
              </div>
            `;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center"
          >
            <FaGithub className="mr-2" />
            <span>Source Code</span>
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg neon-button text-white font-semibold flex items-center"
            >
              <FaExternalLinkAlt className="mr-2" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}