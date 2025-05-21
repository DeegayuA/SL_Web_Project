// src/components/ui/SriLankaSymbol.tsx (or similar path)
'use client';
import { motion } from 'framer-motion';

export const SriLankaSymbol = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5, // Start animating children after a brief pause
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, pathLength: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      pathLength: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: [0, 0.6, 0.3, 0.7, 0],
      scale: [0.5, 1.2, 1, 1.3, 0.8],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay:0.2 }
    }
  }

  return (
    <motion.div
      className="relative w-48 h-48 sm:w-64 sm:h-64" // Increased size
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle background glow animation */}
       <motion.div
        className="absolute inset-0 rounded-full bg-amber-400/60 dark:bg-amber-300/50 filter blur-3xl"
        variants={glowVariants}
      />

      {/* Replace with your actual multi-part SVG for complex animation */}
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Base Petals (Simplified - imagine more complex paths) */}
        <motion.path
          d="M50 10 C 40 20, 30 40, 50 90 C 70 40, 60 20, 50 10 Z" // Central large petal
          fill="url(#petalGradient)"
          stroke="#FFD700"
          strokeWidth="0.5"
          variants={itemVariants}
        />
        <motion.path
          d="M30 30 C 20 40, 10 60, 30 90 Q 40 60 50 50 Q 40 40 30 30 Z" // Left petal
          fill="url(#petalGradient)"
          stroke="#FFC400"
          strokeWidth="0.5"
          variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: 0.2 } } }}
        />
        <motion.path
          d="M70 30 C 80 40, 90 60, 70 90 Q 60 60 50 50 Q 60 40 70 30 Z" // Right petal
          fill="url(#petalGradient)"
          stroke="#FFB300"
          strokeWidth="0.5"
          variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: 0.4 } } }}
        />

        {/* Inner Island-like Shape / Gem */}
        <motion.ellipse
          cx="50"
          cy="65"
          rx="12"
          ry="8"
          fill="url(#gemGradient)"
          stroke="#FFFFFF"
          strokeWidth="0.7"
          variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: 0.8 } } }}
        />
        <defs>
          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255, 227, 179, 0.8)', stopOpacity: 1 }} /> {/* Lighter gold/peach */}
            <stop offset="100%" style={{ stopColor: 'rgba(255, 196, 0, 0.9)', stopOpacity: 1 }} /> {/* Richer gold */}
          </linearGradient>
           <radialGradient id="gemGradient">
            <stop offset="0%" stopColor="#4ade80" /> {/* Emerald green */}
            <stop offset="70%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#052e16" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
};