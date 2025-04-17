import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { createParticles } from '../utils/particles';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const particleContainerRef = useRef(null);

  useEffect(() => {
    if (particleContainerRef.current) {
      createParticles(particleContainerRef.current);
    }
  }, []);

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="animated-bg" />
      <div className="particle-container" ref={particleContainerRef} />
      <div className="absolute inset-0 bg-[#0a0a0a]/70" /> {/* Reduced opacity */}

      <div className="transform-3d">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 z-10"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Get in <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 glass-effect p-8 rounded-xl hover-3d"
            >
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-gray-400">
                I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:bhanutejasubbara@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="relative">
                    <Mail className="w-6 h-6" />
                    <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                  </div>
                  bhanutejasubbara@gmail.com
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/bhanuteja12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="relative">
                    <Linkedin className="w-6 h-6" />
                    <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                  </div>
                  LinkedIn Profile
                </motion.a>
                
                <motion.a
                  href="https://github.com/bhanuteja-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="relative">
                    <Github className="w-6 h-6" />
                    <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                  </div>
                  GitHub Profile
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect p-8 rounded-xl hover-3d"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


