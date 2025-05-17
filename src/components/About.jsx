import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [text, setText] = useState('')
  const fullText =
    "Once upon a time, in a realm where pixels danced and interfaces sang, there lived a designer named Kanchi. With a wand of creativity and a heart full of dreams, she weaves digital experiences that touch souls and spark joy."

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    { name: 'UI Design', color: 'from-pink-400 to-pink-600' },
    { name: 'UX Strategy', color: 'from-blue-400 to-blue-600' },
    { name: 'Frontend Dev', color: 'from-purple-400 to-purple-600' },
    { name: 'Visual Design', color: 'from-indigo-400 to-indigo-600' },
    { name: 'Prototyping', color: 'from-rose-400 to-rose-600' },
  ]

  const timeline = [
    { year: '2022', title: 'Sparked the Dream — First steps in design & code' },
    { year: '2023', title: 'Skilled & Styled — Sharpened UI/UX and dev skills' },
    { year: '2024', title: 'Magic in Motion — Building dreamy, functional UIs' },
    { year: '2025', title: 'Now — Crafting soulful digital experiences' },
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center mb-12 bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent"
        >
          The Origin
        </motion.h2>

        {/* Typing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-pink-200/90 mb-16 leading-relaxed rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-2xl"
        >
          {text}
         
        </motion.div>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
              />
              <div className="relative bg-white/70 backdrop-blur-sm rounded-full p-4 sm:p-6 text-center shadow-lg">
                <h3 className="text-sm sm:text-lg font-medium text-gray-800">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-serif text-center mb-8 text-purple-100">Journey Through Time</h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-200/60 to-blue-200/60" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                } w-full md:w-1/2`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? 'ml-4' : 'mr-4'
                  } bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl`}
                >
                  <div className="text-sm text-pink-200">{item.year}</div>
                  <div className="text-lg font-medium text-white">{item.title}</div>
                </div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full border border-white/30"
                  style={{ [index % 2 === 0 ? 'left' : 'right']: '-0.75rem' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
