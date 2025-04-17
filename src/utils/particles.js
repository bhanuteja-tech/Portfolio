export function createParticles(container) {
  const particleCount = 30; // Reduced count for better performance
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random size between 6px and 12px
    const size = Math.random() * 6 + 6;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Higher base opacity
    particle.style.opacity = Math.random() * 0.3 + 0.7;
    
    // Random purple-ish colors
    const hue = 270 + (Math.random() * 30 - 15); // Purple hue with variation
    const saturation = 70 + Math.random() * 30; // High saturation
    const lightness = 50 + Math.random() * 20; // Brighter
    particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
    
    // Animation
    const duration = Math.random() * 10 + 15; // Longer duration
    const delay = Math.random() * -20; // Random start time
    
    particle.style.animation = `
      particleFloat ${duration}s linear ${delay}s infinite,
      particleFade ${Math.random() * 2 + 2}s ease-in-out infinite
    `;
    
    container.appendChild(particle);
    particles.push(particle);
  }

  // Clean up function
  return () => {
    particles.forEach(particle => particle.remove());
  };
}

