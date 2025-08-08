// components/Footer.js
export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold neon-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Nathaniel Cobbinah
            </div>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
            <p className="text-gray-400">Building exceptional digital experiences</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </div>
    </footer>
  )
}