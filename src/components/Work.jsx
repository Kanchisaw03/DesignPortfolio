import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      // Lock scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore scroll
      document.body.style.overflow = 'auto'
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])

  const projects = [
    {
      title: 'The food delivery UI',
      description: 'The Foodie App is a sleek and modern food delivery interface crafted to enhance user convenience and visual delight. Designed with a warm and appetizing color palette, the UI focuses on intuitive navigation, clear call-to-actions, and mouthwatering visuals that create a seamless ordering experience from browsing to checkout.From restaurant discovery and personalized recommendations to real-time tracking and easy payments, every screen is thoughtfully structured to reduce friction and keep the user engaged. The layout is responsive, minimal, and mobile-first, ensuring a smooth experience across all devices. This design balances functionality with aesthetics, making food ordering feel effortless, satisfying, and just a little bit magical.',
      images: [
        'src/assets/web designs/foodie web.svg',
        'src/assets/web designs/foodie app.svg',
        'src/assets/web designs/food delivery app home.svg'
      
      ],
      tags: ['UI Design', 'Food delivery', 'Dark Theme'],
      figma: 'https://www.figma.com/design/SFBlRb5DOS4OdXmTAOCfZM/foodie-website?node-id=3-12&t=3sGj41weCLGxUZnx-1'
    },
    {
      title: 'The Netflix UI Reimagined',
      description: 'DreamFlix is a soft, pastel reimagining of the classic Netflix interface — blending cozy aesthetics with cinematic flair. Designed to transport users into a serene streaming experience, this UI features a gentle color palette of lilacs, blush pinks, baby blues, and dreamy gradients that create a calming, almost whimsical feel.The layout stays true to Netflix’s intuitive structure but adds a magical twist with glowing hover effects, smooth transitions, and soft typography. Each section—from the hero banners to the horizontal carousels—is carefully crafted to highlight content without overwhelming the viewer.Perfect for a night of feel-good shows and slow-burn stories, DreamFlix invites users into a world where binge-watching feels like floating through a cloud of comfort and creativity.',
      images: [
        'src/assets/web designs/ntflixui 1.svg',
        'src/assets/web designs/netflix ui 2.png'
      ],
      tags: ['UI Design', 'Netflix', 'Pastel'],
      figma: 'https://www.figma.com/design/eRdLjdFoFN40V77o0iIf8s/netflix-ui-reimagined?node-id=0-1&t=fCCvFdToVJVQxLQO-1'
    },
    {
      title: 'The cardgame UI',
      description: 'Carvant is a modern and immersive card game interface that brings the thrill of traditional card play into the digital realm with elegance and ease. Designed with a sleek layout, rich textures, and subtle animations, the UI offers a luxurious yet approachable feel for casual players and seasoned pros alike.The table interface mimics real-life card dynamics, with smooth drag-and-drop actions, dynamic score displays, and real-time multiplayer indicators. A harmonious blend of bold typography and dark-accented colors ensures readability and visual focus during intense gameplay.Whether it’s Poker night, Rummy rounds, or friendly Uno sessions, Carvant delivers a polished experience that celebrates the timeless charm of card games—reimagined for today’s screens.',
      images: [
        'src/assets/web designs/card game.svg',
      ],
      tags: ['Web Game', 'Dark Theme', 'Home page UI'],
      figma: 'https://www.figma.com/design/3mM8yLt0LRoaSj4CO1ADC4/cardgame-website?node-id=0-1&t=ioIyVn8Lx6NoOe1R-1'
    },
    {
      title: 'Design Flow',
      description: 'DesignFlow is a dreamy, pastel-toned dashboard crafted for designers, by a designer. Built to inspire calm and clarity, the interface blends soft gradients, fluid motion, and intuitive structure to help creatives manage their projects without chaos.The UI features elegant sections for moodboards, task tracking, client feedback, and resource organization—designed like a personal creative sanctuary. From glowing buttons to cloud-like cards, every element feels light, focused, and thoughtfully placed.Whether you are working on a branding project, UI kit, or illustration series, DesignFlow makes the process feel less like a task list—and more like an aesthetic journey.',
      images: [
        'src/assets/web designs/home page.svg',
        'src/assets/web designs/home page-1.svg',
        'src/assets/web designs/Dhashboard for client.svg',
        'src/assets/web designs/Dhashboard for client-1.svg',
        'src/assets/web designs/chat with designer.svg',
      ],
      tags: ['Web app', 'UI UX', 'Animation'],
      figma: 'https://www.figma.com/design/7z3D9MaE5y1ukqbM3aEnC1/designflow-uiux?node-id=0-1&t=ySAFPCOlVaUFyG7s-1'
    }
  ]

  return (
    <section id="work" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center mb-16 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 to-blue-200/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  {/* Show only the first image as preview */}
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
                    className="object-cover w-full h-full object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-pink-100 to-blue-100 rounded-full text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overscroll-contain"
                onClick={e => e.stopPropagation()}
              >
                {selectedProject !== null && (
                  <div className="p-6">
                    {/* Show all images in modal */}
                    <div className="grid grid-cols-1 gap-8 mb-6">
                      {projects[selectedProject].images.map((img, i) => (
                        <div key={i} className="flex justify-center">
                          <img
                            src={img}
                            alt={`${projects[selectedProject].title} image ${i + 1}`}
                            className="w-full max-w-3xl rounded-xl shadow-lg"
                          />
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-medium text-gray-800 mb-4">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {projects[selectedProject].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[selectedProject].tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gradient-to-r from-pink-100 to-blue-100 rounded-full text-sm text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Figma Link Button */}
                    {projects[selectedProject].figma && (
                      <a
                        href={projects[selectedProject].figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full hover:scale-105 transition-transform duration-200 mb-4"
                      >
                        View on Figma
                      </a>
                    )}

                    <button
                      className="dream-button"
                      onClick={() => setSelectedProject(null)}
                    >
                      Close Portal
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Work
