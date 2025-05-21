// src/components/shared/InitialFlightLoader.tsx (NEW FILE)
'use client';

import { useState, useEffect, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaneTakeoff, Globe, MapPin, LocateFixed } from 'lucide-react'; // Icons for theme
import { cn } from '@/lib/utils';

type ValidLanguageCode = 'en' | 'de' | 'si';

interface FlightTextSequence {
  id: string;
  texts: Record<ValidLanguageCode, string>;
  delay: number;
  className?: string;
  icon?: JSX.Element;
}

const flightTextSequences: FlightTextSequence[] = [
  {
    id: 'boarding',
    texts: {
      en: "Boarding for Paradise...",
      de: "Einsteigen ins Paradies...",
      si: "ස්වර්ගයට ගොඩවීම...",
    },
    delay: 0.5,
    className: "text-xl sm:text-2xl text-sky-300",
    icon: <PlaneTakeoff size={28} className="mr-3 inline-block text-sky-400" />,
  },
  {
    id: 'takeoff',
    texts: {
      en: "Preparing for Takeoff to Sri Lanka!",
      de: "Vorbereitung zum Abflug nach Sri Lanka!",
      si: "ශ්‍රී ලංකාවට ගුවන්ගත වීමට සූදානම්!",
    },
    delay: 2.0,
    className: "text-2xl sm:text-3xl font-semibold text-amber-300",
    icon: <Globe size={32} className="mr-3 inline-block text-amber-400 animate-spin-slow" />,
  },
  {
    id: 'approaching',
    texts: {
      en: "Approaching the Emerald Isle...",
      de: "Anflug auf die Smaragdinsel...",
      si: "මරකත දූපතට ළඟාවෙමින්...",
    },
    delay: 4.0, // Was 4.0
    className: "text-xl sm:text-2xl text-emerald-300",
    icon: <LocateFixed size={28} className="mr-3 inline-block text-emerald-400" />,
  },
];

export function InitialFlightLoader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStage, setCurrentStage] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState<ValidLanguageCode>('de'); // Default to German for initial messages

  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage') as ValidLanguageCode | null;
    if (storedLang && ['en', 'de', 'si'].includes(storedLang)) {
      setActiveLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    if (!flightTextSequences[currentStage]) { // All stages complete
      const hideTimer = setTimeout(() => setIsVisible(false), 1000); // Extra pause after last message
      return () => clearTimeout(hideTimer);
    }

    const currentSequence = flightTextSequences[currentStage];
    // Delay for the NEXT stage is effectively current stage's display duration
    // The totalDuration needs to be managed by sum of delays for stages or overall timeout
    const nextStageDelay = currentStage < flightTextSequences.length - 1
      ? flightTextSequences[currentStage+1].delay - currentSequence.delay
      : 1500; // Time last message stays visible

    const stageTimer = setTimeout(() => {
      setCurrentStage(prev => prev + 1);
    }, nextStageDelay * 1000);


    return () => clearTimeout(stageTimer);
  }, [currentStage]);

  // Total loader duration before triggering onLoadingComplete (after fade out)
  useEffect(() => {
    const totalLoaderTime = flightTextSequences[flightTextSequences.length -1].delay * 1000 + 1500 + 700; // Sum of delays + last message linger + fadeout
    const completeTimer = setTimeout(onLoadingComplete, totalLoaderTime);
    return () => clearTimeout(completeTimer);
  }, [onLoadingComplete]);


  const loaderVariants = {
    initial: { opacity: 1, backdropFilter: "blur(0px)" },
    exit: { opacity: 0, backdropFilter: "blur(10px)", transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] } }
  };

  // Plane path animation
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000; // For path calc
  const planePathVariants = {
    initial: { pathOffset: 1, opacity: 0 },
    animate: {
      pathOffset: 0,
      opacity: 1,
      transition: { duration: flightTextSequences[flightTextSequences.length - 1].delay, ease: "circInOut" }, // Animate over total text duration
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="initial-flight-loader"
          variants={loaderVariants}
          initial="initial"
          exit="exit"
          className={cn(
            "fixed inset-0 z-[100] flex flex-col items-center justify-center",
            "bg-gradient-to-b from-sky-900 via-slate-950 to-black", // Night sky to dawn
            "text-center p-4 overflow-hidden select-none"
          )}
        >
          {/* Animated Plane Path */}
          <svg
            width="80%"
            height="30%"
            viewBox={`0 0 ${screenWidth * 0.8} 150`} // Dynamic viewBox width
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 dark:opacity-20"
          >
            <motion.path
              d={`M10 130 Q ${screenWidth * 0.4} 10, ${screenWidth * 0.8 - 10} 100`} // Curved path
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
              strokeDasharray="5 10"
              variants={planePathVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
             <animate
                attributeName="stroke-dashoffset"
                values="300;0" // Adjust based on path length for "drawing" effect
                dur={`${flightTextSequences[flightTextSequences.length - 1].delay}s`}
                repeatCount="1" // Changed from indefinite to play once
                fill="freeze"
            />
            </motion.path>
            {/* Destination Pin at the end of the path */}
            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: currentStage >= flightTextSequences.length - 1 ? 1 : 0, 
                scale: currentStage >= flightTextSequences.length - 1 ? 1 : 0.5 
              }}
              transition={{ delay: flightTextSequences[flightTextSequences.length-1].delay - 0.5, duration: 0.5}}
            >
                <MapPin x={screenWidth * 0.8 - 20} y={88} size={24} className="text-emerald-400 fill-emerald-500/30" />
            </motion.g>
          </svg>


          <div className="relative mt-20 sm:mt-24 z-10 w-full max-w-lg md:max-w-xl">
            <AnimatePresence mode="wait">
              {flightTextSequences[currentStage] && (
                <motion.div
                  key={flightTextSequences[currentStage].id}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 20 }}
                  className={cn("flex items-center justify-center", flightTextSequences[currentStage].className)}
                >
                  {flightTextSequences[currentStage].icon}
                  <span>{flightTextSequences[currentStage].texts[activeLanguage]}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

           {/* Optional: "Loading Assets" type message if needed */}
           <motion.p
            className="absolute bottom-10 text-xs text-slate-500 dark:text-slate-600"
            initial={{opacity:0}}
            animate={{opacity: currentStage >= 1 ? 1 : 0}} // Show after first message
            transition={{delay: 0.5, duration: 0.5}}
           >
            Fetching travel data...
           </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  );
}