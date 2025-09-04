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
      <div className="absolute inset-0 bg-white/70 dark:bg-[#0a0a0a]/70" /> {/* Light overlay softened; dark unchanged */}

      <div className="transform-3d">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 z-10"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get in <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-transparent bg-clip-text animate-gradient dark:from-purple-500 dark:via-blue-500 dark:to-cyan-500">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 glass-effect p-8 rounded-xl hover-3d"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:bhanutejasubbara@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-all duration-300 group dark:text-gray-400 dark:hover:text-purple-500"
                  whileHover={{ x: 5 }}
                >
                  <div className="relative">
                    <Mail className="w-6 h-6" />
                    <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-15 rounded-full transition-opacity duration-300 dark:bg-purple-500" />
                  </div>
                  bhanutejasubbara@gmail.com
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/bhanuteja12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-all duration-300 group dark:text-gray-400 dark:hover:text-purple-500"
                  whileHover={{ x: 5 }}
                >
                  <div className="relative">
                    <Linkedin className="w-6 h-6" />
                    <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-15 rounded-full transition-opacity duration-300 dark:bg-purple-500" />
                  </div>
                  LinkedIn Profile
                </motion.a>
                
                <motion.a
                  href="https://github.com/bhanuteja-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-all duration-300 group dark:text-gray-400 dark:hover:text-purple-500"
                  whileHover={{ x: 5 }}
                >
                  <div className="relative">
                    <Github className="w-6 h-6" />
                    <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-15 rounded-full transition-opacity duration-300 dark:bg-purple-500" />
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 dark:bg-gray-900 dark:text-white dark:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 dark:bg-gray-900 dark:text-white dark:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 dark:bg-gray-900 dark:text-white dark:border-transparent"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800"
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


