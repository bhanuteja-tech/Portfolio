import React, { useState, useRef, Suspense } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown, Github } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarField() {
  const ref = useRef();
  const [sphere] = useState(() => {
    const rawPositions = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    return new Float32Array(Array.from(rawPositions).map(val => 
      Number.isFinite(val) ? val : 0
    ));
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative bg-[#0a0a0a] overflow-hidden">
      <AnimatedBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 relative px-4"
      >
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 -z-10" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Bhanuteja
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 h-20">
          <TypeAnimation
            sequence={[
              'Data Science & Machine Learning Enthusiast 🚀',
              2000,
              'I turn data into insights and build intelligent solutions.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.a>

          <motion.a
            href="https://github.com/bhanuteja-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub Profile
            <Github className="w-5 h-5" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

