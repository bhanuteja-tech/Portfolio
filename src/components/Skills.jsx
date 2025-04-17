import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, LineChart, Database, BarChart3 } from 'lucide-react';
import { createParticles } from '../utils/particles';

const skills = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'OOPS Concepts'],
    icon: Code2,
    color: 'text-blue-500',
    description: 'Python programming and SQL database querying',
  },
  {
    category: 'Machine Learning',
    items: ['Pandas', 'NumPy', 'Scikit-Learn'],
    icon: Brain,
    color: 'text-green-500',
    description: 'ML libraries and frameworks',
  },
  {
    category: 'Data Visualization',
    items: ['Tableau', 'Seaborn', 'Matplotlib','Plotly'],
    icon: LineChart,
    color: 'text-yellow-500',
    description: 'Data visualization tools and libraries',
  },
  {
    category: 'Databases',
    items: ['MySQL'],
    icon: Database,
    color: 'text-red-500',
    description: 'Database management and querying',
  },
  {
    category: 'Analysis',
    items: ['EDA', 'Feature Engineering', 'Business Analytics'],
    icon: BarChart3,
    color: 'text-purple-500',
    description: 'Data analysis and insights generation',
  },
];

export default function Skills() {
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
    <section id="skills" className="relative py-20 overflow-hidden">
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
            My <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 group hover:bg-gray-800/50 transition-all duration-300 hover-3d"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <skill.icon className={`w-12 h-12 ${skill.color} transform group-hover:scale-110 transition-transform duration-300`} />
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {skill.category}
                </h3>
                
                <p className="text-gray-400 mb-4">{skill.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 text-sm text-purple-400 bg-purple-900 bg-opacity-50 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


