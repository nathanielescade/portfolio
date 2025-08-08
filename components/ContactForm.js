// components/ContactForm.js
'use client'
import { useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 neon-text">Get In Touch</h3>
          <p className="mb-6">
            Feel free to reach out to me for any questions or opportunities. I&apos;m always open to discussing new projects and ideas.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neon-blue bg-opacity-10 rounded-full text-neon-blue">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <a href="mailto:nathanielescade@gmail.com" className="text-neon-blue hover:underline">
                  nathanielescade@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neon-green bg-opacity-10 rounded-full text-neon-green">
                <FaWhatsapp />
              </div>
              <div>
                <h4 className="font-bold">WhatsApp</h4>
                <a href="https://wa.me/233200209205" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:underline">
                  +233 20 020 9205
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-neon-blue"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-neon-blue"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-neon-blue"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="px-6 py-3 bg-neon-blue text-black rounded-md hover:bg-opacity-80 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;