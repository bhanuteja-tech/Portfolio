import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Film, Camera, Medal, ExternalLink } from 'lucide-react';
import { createParticles } from '../utils/particles';

const projects = [
  {
    title: 'Movie Recommender System',
    description: 'Built using Machine Learning and deployed on Streamlit. Uses collaborative filtering & content-based filtering.',
    icon: Film,
    image: 'public/assets/Movie_recommend_system.png',
    link: 'https://github.com/bhanuteja-tech/Movie-Recommender-System',
    tags: ['Python', 'Machine Learning', 'Streamlit'],
  },
  {
    title: 'Attendance Management System',
    description: 'Automates attendance tracking using face recognition, MySQL, and Tkinter. Features database integration & GUI interface.',
    icon: Camera,
    image: 'public/assets/Face_recognition_image.jpg',
    link: 'https://github.com/bhanuteja-tech',
    tags: ['Python', 'OpenCV', 'MySQL'],
  },
  {
    title: 'Olympic Analysis Project',
    description: 'Performed EDA and visualization on Olympic datasets. Explored trends, medal distribution, and athlete statistics.',
    icon: Medal,
    image: 'public/assets/olympic_analysis.jpeg',
    link: 'https://github.com/bhanuteja-tech/olympics_data_analysis',
    tags: ['Python', 'Pandas', 'Data Visualization'],
  },
];

export default function Projects() {
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

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="section-bg" />
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
            My <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.4 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70" />
                  <div className="absolute top-4 left-4">
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm text-purple-400 bg-purple-900 bg-opacity-50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors group/link"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://github.com/bhanuteja-tech?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



