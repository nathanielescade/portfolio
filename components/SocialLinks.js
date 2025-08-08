import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a 
        href="https://github.com/nathanielescade" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-neon-blue hover:bg-opacity-20 transition"
        aria-label="GitHub"
      >
        <FaGithub className="text-xl" />
      </a>
      <a 
        href="https://www.linkedin.com/in/nathaniel-cobbinah/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-neon-blue hover:bg-opacity-20 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-xl" />
      </a>
      <a 
        href="https://facebook.com/nathanielescade" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-neon-blue hover:bg-opacity-20 transition"
        aria-label="Facebook"
      >
        <FaFacebook className="text-xl" />
      </a>
      <a 
        href="https://wa.me/233200209205" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-neon-green hover:bg-opacity-20 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
      </a>
    </div>
  );
};

export default SocialLinks;