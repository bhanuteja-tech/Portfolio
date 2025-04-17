import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { createParticles } from '../utils/particles';

const educationData = [
  {
    institution: 'Reva University',
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    duration: '2021 – 2025',
    location: 'Bengaluru, Karnataka',
    score: 'CGPA: 8.75',
    icon: GraduationCap,
    current: true,
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Board of Intermediate Education (BIEAP)',
    duration: '2019 – 2021',
    location: 'Anantapur, Andhra Pradesh',
    score: 'Percentage: 97%',
    icon: School,
  },
  {
    institution: 'Hyderabad Public School',
    degree: 'Board of Secondary Education (BSEAP)',
    duration: '2018 – 2019',
    location: 'Anantapur, Andhra Pradesh',
    score: 'CGPA: 9.7',
    icon: BookOpen,
  },
];

export default function Education() {
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
    <section id="education" className="relative py-20 overflow-hidden">
      <div className="animated-bg" />
      <div className="particle-container" ref={particleContainerRef} />
      <div className="absolute inset-0 bg-[#0a0a0a]/70" />
      
      <div className="transform-3d">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 z-10"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">Education</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8 last:mb-0"
              >
                <div className="glass-effect p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover-3d">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <edu.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-white">
                          {edu.institution}
                        </h3>
                        {edu.current && (
                          <span className="px-2 py-1 text-xs font-medium text-purple-400 bg-purple-500/20 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mt-1">{edu.degree}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span>{edu.duration}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-purple-400 font-medium">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
