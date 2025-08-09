// components/Contact.js
import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaFacebook, FaFileAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const [senderName, setSenderName] = useState('') // Store the sender's name for personalization
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Store the sender's name before resetting the form
    setSenderName(formData.name)
    
    try {
      const response = await fetch('https://formspree.io/f/mleqkadn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSubmitting(false)
        // Personalized success message
        setSubmitMessage({ 
          type: 'success', 
          text: `Thank you for your message, ${formData.name}! I've received it and will get back to you as soon as possible.` 
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitMessage({ type: 'error', text: 'There was an error sending your message. Please try again.' })
    }
    
    // Reset message after 5 seconds
    setTimeout(() => {
      setSubmitMessage(null)
    }, 5000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="neon-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="neon-card rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg flex items-start ${submitMessage.type === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                {submitMessage.type === 'success' ? (
                  <>
                    <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{submitMessage.text}</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>{submitMessage.text}</span>
                  </>
                )}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg neon-input focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg neon-input focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg neon-input focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg neon-input focus:outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg neon-button text-white font-semibold flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="neon-card rounded-xl p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-cyan-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:nathanielescade@gmail.com" className="text-cyan-400 hover:underline">
                      nathanielescade@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-green-400">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">WhatsApp</h4>
                    <a href="https://wa.me/233200209205" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      +233 20 020 9205
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-400">
                    <FaFacebookF />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Facebook</h4>
                    <a href="https://facebook.com/nathanielescade" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      Nathaniel Escade
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-red-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p>Ghana</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="neon-card rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              
              <div className="flex space-x-4">
                <a href="https://github.com/nathanielescade" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/nathaniel-cobbinah/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <FaLinkedin className="text-xl text-blue-400" />
                </a>
                 {/* <a href="https://wa.me/233200209205" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                    <FaWhatsapp className="text-xl text-green-400" />
                </a> */}
                <a href="mailto:nathanielescade@gmail.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                    <FaEnvelope className="text-xl text-red-400" />
                </a>
                <a href="https://facebook.com/nathanielescade" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <FaFacebookF className="text-xl text-cyan-400" />
                </a>
              </div>
              

              <div className="mt-8">
                <h4 className="font-bold mb-2">Download my resume</h4>
                <div className="flex space-x-4">
                  <a 
                    href="/resume" 
                    className="inline-flex items-center px-4 py-2 rounded-lg neon-button text-white font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFileAlt className="mr-2" />
                    <span>View Online</span>
                  </a>
                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    download
                  >
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}