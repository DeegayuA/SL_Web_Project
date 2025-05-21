// src/app/discover/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SriLankaMap } from '@/components/map/SriLankaMap';
import { InitialFlightLoader } from '@/components/shared/InitialFlightLoader';
import { Compass, Navigation, Maximize } from 'lucide-react';

export default function DiscoverPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 250); // Slightly adjusted delay
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const pageVariants = {
    hidden: { opacity: 0, scale: 0.99 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1, // Faster stagger for quick reveal
      },
    },
    exit: { opacity: 0, scale: 0.99, transition: { duration: 0.3 } }
  };

  const childVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 18, duration: 0.5 },
    },
  };

  const mapSectionVariants = { // Dedicated variant for the entire map section
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.7,
        delay: 0.15, // After header/intro
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <InitialFlightLoader onLoadingComplete={handleLoadingComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {contentVisible && !isLoading && (
          <motion.div
            key="discover-content"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col min-h-screen"
          >
            <motion.header
              variants={childVariants}
              className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 sticky top-0 bg-white/85 dark:bg-slate-800/85 backdrop-blur-lg z-40 shadow-sm border-b border-slate-200/80 dark:border-slate-700/80"
            >
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div
                  className="flex items-center space-x-2 sm:space-x-3 mt-24 sm:mt-0"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                >
                  <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-sky-500 dark:text-sky-400" />
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
                    Discover Sri Lanka
                  </h1>
                </motion.div>
              </div>
            </motion.header>

            {/* Main content: Takes up remaining vertical space and houses map */}
            <main className="flex-grow flex flex-col w-full"> {/* No items-center here for flex-grow to work best on map section */}

              {/* Map Section: This section is designed to be large and dominate */}
              <motion.section
                variants={mapSectionVariants}
                aria-labelledby="interactive-map-heading"
                // Key for sizing: flex-grow, w-full, and relative for absolutely positioned children if needed
                className="w-full flex-grow flex flex-col p-2 sm:p-3 md:p-4"
              >
                 <h2 id="interactive-map-heading" className="sr-only">Interactive Map of Sri Lanka</h2>
                {/* Decorative Wrapper & Sizing for the Map */}
                <div
                  className="relative w-full h-full flex-grow
                             overflow-hidden"
                >
                  {/* Inner div to ensure map respects rounded corners */}
                  <div className="w-full h-full rounded-md sm:rounded-lg md:rounded-xl overflow-hidden">
                    <SriLankaMap />
                  </div>
                  <button
                    className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 p-1.5 sm:p-2 
                               bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm 
                               rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 
                               transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800"
                    title="Expand map view (Visual hint)"
                    onClick={() => alert("Feature to expand map further could be implemented here.")} // Placeholder action
                    aria-label="Expand map view"
                  >
                    <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-300" />
                  </button>
                </div>
              </motion.section>
            </main>

            <motion.footer
              variants={childVariants}
              className="py-4 sm:py-5 px-4 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md"
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2">
                <Navigation size={12} className="sm:w-3.5 sm:h-3.5 hidden xs:inline-block" />
                <span>Aura of Lanka © {new Date().getFullYear()}</span>
                <span className="hidden sm:inline">- Your Journey Starts Here.</span>
              </div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}