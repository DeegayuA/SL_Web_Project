'use client'; 

import { useState, useEffect } from 'react';
import { InitialLoader } from '@/components/animations/InitialLoader';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; // To use pathname as key for AnimatePresence

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Get current path

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
  useEffect(() => {
    // This ensures loader state is managed correctly on initial load
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      // x: "-100vw", // Example: slide in from left
      filter: "blur(5px)",
    },
    in: {
      opacity: 1,
      // x: 0,
      filter: "blur(0px)",
    },
    out: {
      opacity: 0,
      // x: "100vw", // Example: slide out to right
      filter: "blur(5px)",
    },
  };

  const pageTransition = {
    type: "tween", // Can be "spring", "tween", etc.
    ease: "anticipate", // "easeInOut", "circOut"
    duration: 0.6, // Adjust duration
  };

  return (
    <>
      <InitialLoader onLoadingComplete={handleLoadingComplete} />
      {/* AnimatePresence needs a key on its direct child that changes with the route */}
      <AnimatePresence mode="wait" initial={false}>
        {!isLoading && (
          <motion.div
            key={pathname} // Unique key for each page based on path
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen flex flex-col" // Ensure this takes up space
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}