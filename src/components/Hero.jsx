import React, { useState, useRef, Suspense, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Users } from 'lucide-react';
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
  const [totalVisits, setTotalVisits] = useState(null);
  const [dailyVisits, setDailyVisits] = useState(null);

  useEffect(() => {
    const namespace = 'bhanuteja-portfolio';
    const totalKey = 'homepage-total';
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const dailyKey = `homepage-${yyyy}-${mm}-${dd}`;

    // Call both counters in parallel
    Promise.all([
      fetch(`https://api.countapi.xyz/hit/${namespace}/${totalKey}`).then(r => r.json()).catch(() => null),
      fetch(`https://api.countapi.xyz/hit/${namespace}/${dailyKey}`).then(r => r.json()).catch(() => null)
    ])
      .then(([totalRes, dailyRes]) => {
        const hasTotal = typeof totalRes?.value === 'number';
        const hasDaily = typeof dailyRes?.value === 'number';

        if (hasTotal) setTotalVisits(totalRes.value);
        if (hasDaily) setDailyVisits(dailyRes.value);

        // Fallbacks if network failed
        if (!hasTotal || !hasDaily) {
          try {
            // Total fallback
            if (!hasTotal) {
              const localTotal = Number(localStorage.getItem('localVisitCount') || '0') + 1;
              localStorage.setItem('localVisitCount', String(localTotal));
              setTotalVisits(localTotal);
            }
            // Daily fallback keyed by date
            if (!hasDaily) {
              const localDailyKey = `localVisitCount-${yyyy}-${mm}-${dd}`;
              const localDaily = Number(localStorage.getItem(localDailyKey) || '0') + 1;
              localStorage.setItem(localDailyKey, String(localDaily));
              setDailyVisits(localDaily);
            }
          } catch {}
        }
      })
      .catch(() => {
        // Complete local fallback
        try {
          const localTotal = Number(localStorage.getItem('localVisitCount') || '0') + 1;
          localStorage.setItem('localVisitCount', String(localTotal));
          setTotalVisits(localTotal);

          const localDailyKey = `localVisitCount-${yyyy}-${mm}-${dd}`;
          const localDaily = Number(localStorage.getItem(localDailyKey) || '0') + 1;
          localStorage.setItem(localDailyKey, String(localDaily));
          setDailyVisits(localDaily);
        } catch {}
      });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200/30 via-white/50 to-white pointer-events-none dark:from-purple-900/20 dark:via-[#0a0a0a]/50 dark:to-[#0a0a0a]" />

      <div className="absolute top-4 right-4 z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-200">
          <Users className="w-4 h-4" />
          <span className="text-sm font-medium">
            {totalVisits === null || dailyVisits === null
              ? 'Loading…'
              : `Today: ${dailyVisits.toLocaleString()} • Total: ${totalVisits.toLocaleString()}`}
          </span>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 relative px-4"
      >
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-cyan-400/30 -z-10 dark:from-purple-500/30 dark:via-blue-500/30 dark:to-cyan-500/30" />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-transparent bg-clip-text dark:from-purple-500 dark:via-blue-500 dark:to-cyan-500">
            Bhanuteja
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 h-20">
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
          <div className="w-6 h-10 border-2 border-gray-800 dark:border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-gray-800 dark:bg-white rounded-full animate-scroll" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

