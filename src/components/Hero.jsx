import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import heroImage from '../assets/herobg.jpg'; // Make sure image path is correct

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 pt-28 md:pt-32 overflow-hidden">
      {/* Background animated stars */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-purple-50/40 to-pink-50/40 -z-10">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Left Text Content with Glassmorphism */}
      <div className="relative z-10 flex-1">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 md:p-10 shadow-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent"
          >
            Welcome to Kanchi's Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#E3D0F7] mb-10"
          >
            Hi, I’m Kanchi — a visual storyteller and dreamy UI/UX designer turning digital spaces into calm, immersive experiences. With a deep love for pastel palettes, smooth flows, and emotionally resonant interfaces, I blend frontend development with design to craft magical, intuitive journeys. Whether it's a portfolio, product, or platform, my goal is to make users feel comforted, understood, and inspired — like stepping into a beautifully designed dreamscape.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="dream-button"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Begin the Journey
            <motion.span
              className="inline-block ml-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Right Hero Image with Tilt */}
      <div className="flex-1 flex justify-center items-center">
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#ffffff"
          glarePosition="all"
          className="w-full max-w-[300px] md:max-w-[400px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-2"
          >
            <img
              src={heroImage}
              alt="Kanchi Hero"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </Tilt>
      </div>

      {/* Floating glow elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-28 h-28 bg-pink-200/20 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Hero;
