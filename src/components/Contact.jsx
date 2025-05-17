import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden">
    
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center mb-16 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Portal of Connection
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 to-blue-200/50 rounded-2xl blur-xl" />
            <form onSubmit={handleSubmit} className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="dream-button w-full"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Let's Create Magic Together</h3>
              <p className="text-gray-600 mb-6">
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
                Let's turn your ideas into reality.
              </p>
              
              {/* Social Links */}
              <div className="space-y-4">
                <a
                  href="mailto:kanchi@example.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300"
                >
                  <span className="text-2xl">✉️</span>
                  <span>siddheesaw@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/Kanchisaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300"
                >
                  <span className="text-2xl">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Kanchisaw03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition-colors duration-300"
                >
                  <span className="text-2xl">💻</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 