import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createParticles } from '../utils/particles';

export default function About() {
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
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="animated-bg" />
      <div className="particle-container" ref={particleContainerRef} />
      <div className="transform-3d">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 z-10"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-transparent bg-clip-text animate-gradient dark:from-purple-500 dark:via-blue-500 dark:to-cyan-500">Me</span>
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-400/20 dark:hover:shadow-purple-500/20"
            >
              <div className="w-[300px] h-[300px] mx-auto overflow-hidden rounded-2xl">
                <img
                  src="./assets/Bhanuteja.png"
                  alt="Bhanuteja"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect p-8 rounded-2xl transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-800/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-transparent bg-clip-text animate-gradient dark:from-purple-500 dark:via-blue-500 dark:to-cyan-500">
                  Data Science & Machine Learning Enthusiast
                </h3>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 dark:text-gray-300 dark:hover:text-white">
                  I am a passionate Data Science and Machine Learning Enthusiast with expertise in transforming complex data into actionable insights. My journey in the field of data science has equipped me with strong skills in Python, SQL, and various machine learning techniques.
                </p>
                
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 dark:text-gray-300 dark:hover:text-white">
                  With hands-on experience in Exploratory Data Analysis (EDA), Feature Engineering, and Business Analytics, I have developed a keen eye for identifying patterns and solving real-world problems through data-driven approaches.
                </p>
                
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 dark:text-gray-300 dark:hover:text-white">
                  Currently, I am focused on exploring advanced machine learning concepts and enhancing my problem-solving techniques. I am actively seeking opportunities in Data Science, Business Analytics, and Machine Learning roles where I can contribute to meaningful projects and continue growing professionally.
                </p>
              </div>

              <motion.a
                href="/assets/Subbara_BhanuTeja.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 mt-6 text-lg font-medium text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-indigo-400/25 dark:shadow-purple-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FileDown className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





