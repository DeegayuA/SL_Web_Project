// src/components/shared/InitialLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SriLankaSymbol } from '@/components/ui/SriLankaSymbol'; // Adjust path
import { cn } from '@/lib/utils';

// Define valid language codes consistently
type ValidLanguageCode = 'en' | 'de' | 'si';

interface TextSequence {
  englishText: string; // Renamed for clarity
  germanText: string;
  sinhalaText: string; // Added Sinhala
  delay: number;
  className?: string;
}

// Updated text sequences with all three languages
const textSequences: TextSequence[] = [
  {
    englishText: "Whispers of an Ancient Land...",
    germanText: "Flüstern eines alten Landes...",
    sinhalaText: "පුරාණ දේශයක රහස්...", // Ancient land's secrets...
    delay: 0.2,
    className: "text-xl sm:text-2xl font-light text-slate-300 dark:text-slate-400"
  },
  {
    englishText: "Where Serenity Meets Splendor.",
    germanText: "Wo Gelassenheit auf Pracht trifft.",
    sinhalaText: "ශාන්තිය සහ ශ්‍රී විභූතිය හමුවන තැන.", // Where peace and glory meet.
    delay: 1.5,
    className: "text-2xl sm:text-3xl font-medium text-amber-300 dark:text-amber-200"
  },
  {
    englishText: "Your Journey Begins.",
    germanText: "Ihre Reise beginnt.",
    sinhalaText: "ඔබගේ ගමන ඇරඹේ.", // Your journey begins.
    delay: 2.8,
    className: "text-lg sm:text-xl font-semibold text-sky-300 dark:text-sky-200 mt-2"
  },
];

// Helper to get the appropriate text based on language code
const getTranslatedText = (sequence: TextSequence, langCode: ValidLanguageCode): string => {
  switch (langCode) {
    case 'en':
      return sequence.englishText;
    case 'de':
      return sequence.germanText;
    case 'si':
      return sequence.sinhalaText;
    default:
      return sequence.englishText; // Fallback to German if code is unexpected
  }
};

export function InitialLoader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [activeLanguage, setActiveLanguage] = useState<ValidLanguageCode>('en'); // Default to English

  // Effect to determine the active language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage') as ValidLanguageCode | null;
    if (storedLang && ['en', 'de', 'si'].includes(storedLang)) {
      setActiveLanguage(storedLang);
    }
  }, []); // Runs only once on mount

  useEffect(() => {
    const totalDuration = 4500; // Total loader display time
    
    const hideLoaderTimer = setTimeout(() => {
      setIsVisible(false); // Start exit animation
    }, totalDuration);

    // This `onExitComplete` prop on AnimatePresence is generally more robust
    // for actions after exit animations than manual timers for `onLoadingComplete`.
    // However, keeping the setTimeout here for direct control as per previous example.
    // If AnimatePresence's onExitComplete works, that's preferred.
    // const completeTimer = setTimeout(() => {
    //     onLoadingComplete();
    // }, totalDuration + exitDuration);

    return () => {
      clearTimeout(hideLoaderTimer);
      // clearTimeout(completeTimer);
    };
  }, []); // No dependency on onLoadingComplete here; it's a prop


  const loaderVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.8, // Slightly adjust overall text animation start if needed
      }
    }
  };

  return (
    // Using onExitComplete on AnimatePresence to call onLoadingComplete
    // This is generally preferred over manual timers for post-exit actions.
    <AnimatePresence onExitComplete={onLoadingComplete}>
      {isVisible && (
        <motion.div
          key="initial-loader"
          variants={loaderVariants}
          initial="initial"
          exit="exit"
          className={cn(
            "fixed inset-0 z-[100] flex flex-col items-center justify-center",
            "bg-gradient-to-br from-slate-900 via-slate-950 to-black",
            "text-center p-4 overflow-hidden select-none" // Added select-none
          )}
        >
          <div className="mb-8 sm:mb-12">
            <SriLankaSymbol />
          </div>

          <motion.div
            className="relative"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {textSequences.map((seq, index) => (
              <motion.p
                key={`${activeLanguage}-${index}`} // Include language in key for re-animation on lang change (if loader persisted longer)
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.2,
                  delay: seq.delay,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className={cn("mb-1 leading-snug", seq.className)}
              >
                {getTranslatedText(seq, activeLanguage)}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}