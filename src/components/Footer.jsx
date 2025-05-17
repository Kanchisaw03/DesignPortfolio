import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
     
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-xl md:text-2xl font-serif text-gray-700 italic">
            "Design is the dream before the world awakens."
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/kanchi' },
            { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/kanchi' },
            { name: 'GitHub', icon: '💻', url: 'https://github.com/kanchi' },
            { name: 'Dribbble', icon: '🎨', url: 'https://dribbble.com/kanchi' }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-2xl text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-black text-sm">
          <p>© {new Date().getFullYear()} Kanchi saw. All rights reserved.</p>
          <p className="mt-2">Crafted with magic and spark in the digital realm</p>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  )
}

export default Footer 