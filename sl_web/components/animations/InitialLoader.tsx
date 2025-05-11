'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image'; // If using an image/logo

// Example: Particle animation coalescing into a logo or symbol
// This is a conceptual example. A true particle animation might involve <canvas> or a library.
// For simplicity, let's animate a Sri Lankan symbol (e.g., a simplified lion or lotus)

const SriLankanSymbol = () => ( // Replace with actual SVG or complex animation
  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
    className="text-6xl text-primary" // Style as needed
  >
    🇱🇰 {/* Placeholder - use an SVG icon or a custom designed element */}
  </motion.div>
);


export function InitialLoader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 3500); // Duration: 3.5 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-darker" // Use a dark background for impact
        >
          <SriLankanSymbol />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
            className="mt-4 text-lg text-text-darker"
          >
            Exploring the Aura...
          </motion.p>
          {/* You could add more intricate animations here using Framer Motion's staggerChildren */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}