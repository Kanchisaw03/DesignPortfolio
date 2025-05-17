import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }]
        return newTrail.slice(-10)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🖼️ Dreamy Background Image */}
      <img
        src="/images/bgimg2.png" // Adjust path if needed
        alt="Dreamy sky background"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      

      {/* 🐭 Mouse trail (above overlay) */}
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="cursor-trail fixed w-4 h-4 rounded-full bg-white opacity-50 pointer-events-none z-20"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            x: pos.x - 8,
            y: pos.y - 8,
            scale: 1 - index * 0.1,
            opacity: 0.5 - index * 0.05
          }}
          transition={{ duration: 0.1 }}
        />
      ))}

      {/* 🌟 Main content */}
      <div className="relative z-30">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
