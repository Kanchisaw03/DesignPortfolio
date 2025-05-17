import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'UI Design',
      description: 'Designing clean, elegant, and user-centric interfaces that blend aesthetic beauty with functional clarity.',
      icon: '🎨',
      color: 'from-pink-300 to-pink-500'
    },
    {
      title: 'UX Strategy',
      description: 'Crafting seamless digital experiences through data-informed decisions, empathy, and purposeful flow.',
      icon: '🧭',
      color: 'from-blue-300 to-blue-500'
    },
    {
      title: 'Frontend Development',
      description: 'Transforming design into reality with modern frameworks like React, ensuring performance, accessibility, and fluid responsiveness.',
      icon: '⚡',
      color: 'from-purple-300 to-purple-500'
    },
    {
      title: 'Brand & Visual Identity',
      description: 'Building cohesive, memorable brand visuals that spark emotion and tell your story through thoughtful design.',
      icon: '✨',
      color: 'from-indigo-300 to-indigo-500'
    }
  ];

  return (
    <section id="services" >
      
      {/* Dreamy floating animated blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-pink-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow top-10 left-10" />
        <div className="absolute w-80 h-80 bg-purple-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slower bottom-10 right-10" />
        <div className="absolute w-60 h-60 bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center mb-16 bg-gradient-to-r from-pink-200 to-blue-200 bg-clip-text text-transparent"
        >
          Enchantments
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
              />

              {/* Glassmorphism card */}
              <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 sm:p-8 shadow-xl transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center px-4"
        >
          <p className="text-base sm:text-lg text-pink-200 max-w-2xl mx-auto text-balance">
            Each enchantment is carefully crafted to bring your digital dreams to life. Let's create something magical together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


