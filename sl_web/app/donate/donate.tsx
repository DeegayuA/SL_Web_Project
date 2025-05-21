// src/components/sections/DonateSection.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Heart, Gift, Share2, ArrowRight, Sparkles } from 'lucide-react';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher'; // Ensure this path is correct
// import { cn } from '@/lib/utils';

// --- Language Definitions & Helper ---
type LangCode = 'en' | 'de' | 'si';
const defaultLangCode: LangCode = 'en';
const validLangCodes: LangCode[] = ['en', 'de', 'si'];

const donateTranslations: Record<LangCode, {
  superTitle: string;
  title: string;
  description: string;
  coffeeButtonText: string;
  otherWaysTitle: string;
  shareText: string;
  feedbackText: string;
  thankYou: string;
}> = {
  en: {
    superTitle: "Love Lanka Journey?",
    title: "Fuel Our Adventure!",
    description: "Your support, no matter how small, helps us keep the servers humming, brew fresh content, and add exciting new features to make your virtual Sri Lankan exploration even more amazing. Think of it as buying us a virtual cup of Ceylon tea (or coffee!) to keep us energized.",
    coffeeButtonText: "Buy Us a Coffee",
    otherWaysTitle: "Other Ways to Support",
    shareText: "Share Lanka Journey with friends and fellow travelers.",
    feedbackText: "Send us your valuable feedback to help us improve.",
    thankYou: "Every bit of support inspires us. Thank you!",
  },
  de: {
    superTitle: "Liebst du Lanka Journey?",
    title: "Unterstütze Unser Abenteuer!",
    description: "Deine Unterstützung, egal wie klein, hilft uns, die Server am Laufen zu halten, frische Inhalte zu erstellen und aufregende neue Funktionen hinzuzufügen, um deine virtuelle Sri Lanka-Erkundung noch erstaunlicher zu gestalten. Stell es dir vor, als würdest du uns eine virtuelle Tasse Ceylon-Tee (oder Kaffee!) kaufen, um uns mit Energie zu versorgen.",
    coffeeButtonText: "Kauf uns einen Kaffee",
    otherWaysTitle: "Andere Unterstützungsmöglichkeiten",
    shareText: "Teile Lanka Journey mit Freunden und Mitreisenden.",
    feedbackText: "Sende uns dein wertvolles Feedback, um uns zu verbessern.",
    thankYou: "Jede Unterstützung inspiriert uns. Danke!",
  },
  si: {
    superTitle: "ලංකා චාරිකා වලට කැමතිද?",
    title: "අපේ ගමනට සහය වන්න!",
    description: "ඔබගේ කුඩා සහයෝගය පවා, අපගේ සේවාදායකයන් ක්‍රියාත්මකව තබා ගැනීමට, නැවුම් අන්තර්ගතයන් නිර්මාණය කිරීමට සහ ඔබගේ ශ්‍රී ලංකා අතථ්‍ය ගවේෂණය වඩාත් විස්මිත කිරීමට නව විශේෂාංග එක් කිරීමට උපකාරී වේ. එය අපව උනන්දු කරවීමට ඔබ අපට දෙන අතථ්‍ය තේ කෝප්පයක් (හෝ කෝපි!) ලෙස සිතන්න.",
    coffeeButtonText: "අපිට කෝපි එකක් අරන් දෙන්න",
    otherWaysTitle: "සහය දැක්වීමට වෙනත් ක්‍රම",
    shareText: "ලංකා චාරිකා මිතුරන් හා සංචාරකයින් සමග බෙදාගන්න.",
    feedbackText: "අපව වැඩිදියුණු කිරීමට ඔබගේ වටිනා අදහස් එවන්න.",
    thankYou: "සෑම සහයෝගයක්ම අපට ආශ්වාදයක්. ඔබට ස්තූතියි!",
  },
};

function getCurrentLanguageFromStorage(): LangCode {
  if (typeof window !== 'undefined') {
    const savedLangCode = localStorage.getItem('preferredLanguage') as LangCode | null;
    return (savedLangCode && validLangCodes.includes(savedLangCode)) ? savedLangCode : defaultLangCode;
  }
  return defaultLangCode;
}

// --- Animated Coffee Cup SVG Component (Slightly Refined) ---
const AnimatedCoffeeCup = () => {
  const steamVariants = (delay: number) => ({
    animate: {
      y: [0, -8, 0, -10, 0],
      opacity: [0.7, 0.2, 0.6, 0.1, 0.5],
      transition: { delay, duration: 3.5, repeat: Infinity, ease: "easeInOut" }
    }
  });
  const cupVariants = {
      initial: { rotate: 0, scale: 1},
      hover: { rotate: [0, -2, 2, -2, 0], scale: 1.03, transition: { duration: 0.6, ease: "easeInOut"} },
      tap: { scale: 0.97 }
  };
  return (
    <motion.svg variants={cupVariants} initial="initial" whileHover="hover" whileTap="tap" width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="text-amber-500 dark:text-amber-400 drop-shadow-lg mx-auto mb-4 sm:mb-6 cursor-grab" >
      <motion.path variants={steamVariants(0)} d="M8 4.5H7.5C6.09556 4.5 5.39333 4.5 4.83865 4.83865C4.28397 5.1773 4 5.78397 4 7V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <motion.path variants={steamVariants(0.4)} d="M12 4.5H11.5C10.0956 4.5 9.39333 4.5 8.83865 4.83865C8.28397 5.1773 8 5.78397 8 7V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <motion.path variants={steamVariants(0.8)} d="M16 4.5H15.5C14.0956 4.5 13.3933 4.5 12.8387 4.83865C12.284 5.1773 12 5.78397 12 7V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.4689 18H4.53112C4.02294 18 3.65021 17.5225 3.75312 17.0276L4.83103 12.5H19.169L20.2469 17.0276C20.3498 17.5225 19.9771 18 19.4689 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M15 12V9.5C15 8.5056 15 8.0084 14.7975 7.61673C14.5951 7.22506 14.2749 6.90494 13.8833 6.70246C13.4916 6.5 12.9944 6.5 12 6.5H8.5M5 12V9.5C5 8.5056 5 8.0084 5.20254 7.61673C5.40494 7.22506 5.72506 6.90494 6.11673 6.70246C6.5084 6.5 7.0056 6.5 8 6.5H8.5M8.5 6.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 18H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </motion.svg>
  );
};

// --- Loader Component ---
const PageLoader = () => (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 dark:from-slate-800 dark:via-slate-900 dark:to-red-900/30">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
        >
            <Coffee size={64} className="text-amber-500 dark:text-amber-400 animate-pulse mb-4" />
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Brewing something special...</p>
        </motion.div>
    </div>
);


// --- Main Donate Section Component ---
export function DonateSection() {
  const [currentLanguageCode, setCurrentLanguageCode] = useState<LangCode>(defaultLangCode);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true

  useEffect(() => {
    // Determine language on client mount
    const initialLang = getCurrentLanguageFromStorage();
    setCurrentLanguageCode(initialLang);

    // Simulate content readiness / API calls / etc.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust as needed, e.g., after fonts load or initial checks

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'preferredLanguage' && event.newValue) {
        const newLangCode = event.newValue as LangCode;
        if (validLangCodes.includes(newLangCode)) setCurrentLanguageCode(newLangCode);
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
        clearTimeout(timer);
        window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Runs once on mount to setup initial lang and listener


  const t = useMemo(() => donateTranslations[currentLanguageCode] || donateTranslations.en, [currentLanguageCode]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Faster page fade-in
        delay: 0.1,    // After loader disappears
        when: "beforeChildren",
        staggerChildren: 0.1, // Faster stagger
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 18 } },
  };

  const buttonVariants = {
    initial: { boxShadow: "0px 4px 10px rgba(245, 158, 11, 0.2)", scale: 1 }, // Amber shadow base
    hover: { scale: 1.03, boxShadow: "0px 8px 15px rgba(245, 158, 11, 0.3)" , transition: { type: 'spring', stiffness: 300, damping: 10 }},
    tap: { scale: 0.97, boxShadow: "0px 2px 5px rgba(245, 158, 11, 0.15)" },
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="donatePageContent"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        variants={sectionVariants}
        className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 pt-20 sm:p-8 bg-gradient-to-br from-amber-100/70 via-orange-100/70 to-red-100/70 dark:from-slate-800 dark:via-slate-900 dark:to-red-900/50 text-slate-900 dark:text-slate-100 overflow-x-hidden overflow-hidden"
      >
        {/* Decorative background elements */}
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50, scale: 0.5 }}
          animate={{
            opacity: 0.08,
            y: 0,
            x: 0,
            scale: [1.8, 2, 1.8],
            rotate: [0, 5, -5, 0],
            transition: { duration: 20, delay: 0.2, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }
          }}
          className="absolute -top-1/4 -left-1/3 w-[180%] h-[180%] rounded-full bg-amber-300 dark:bg-amber-700/80 blur-3xl opacity-20 dark:opacity-10 pointer-events-none -z-10"
        />
        <motion.div
          initial={{ opacity: 0, y: -50, x: 50, scale: 0.5 }}
          animate={{
            opacity: 0.06,
            y: 0,
            x: 0,
            scale: [1.6, 1.9, 1.6],
            rotate: [0, -5, 5, 0],
            transition: { duration: 25, delay: 0.5, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }
          }}
            className="absolute -bottom-1/4 -right-1/3 w-[160%] h-[160%] rounded-full bg-red-300 dark:bg-red-800/70 blur-3xl opacity-15 dark:opacity-5 pointer-events-none -z-10" 
        />
        
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
          <LanguageSwitcher />
        </div>
      
        <motion.section
          variants={sectionVariants} // Can apply section specific intro here too, or let parent handle
          className="mt-12 w-full max-w-xl md:max-w-2xl text-center p-6 sm:p-8 md:p-10 bg-white/85 dark:bg-slate-800/85 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200/60 dark:border-slate-700/60 relative z-10"
        >
          <AnimatedCoffeeCup/>
        
          <motion.p variants={itemVariants} className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1 sm:mb-2">
            <Sparkles className="inline-block w-4 h-4 mr-1.5 mb-0.5 opacity-80" />
            {t.superTitle}
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4 sm:mb-5">
            {t.title}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto">
            {t.description}
          </motion.p>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
            <Link href="https://buymeacoffee.com/deeghayu" target="_blank" rel="noopener noreferrer" legacyBehavior>
              <motion.a
                variants={buttonVariants} whileHover="hover" whileTap="tap" initial="initial"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 text-base sm:text-lg font-semibold text-white bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-xl shadow-lg hover:shadow-orange-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 group"
              >
                <Coffee size={22} className="mr-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                {t.coffeeButtonText}
                <ArrowRight size={18} className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-2 pt-6 sm:pt-8 border-t border-slate-300/50 dark:border-slate-700/40">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3 sm:mb-4">{t.otherWaysTitle}</h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <motion.p custom={1} variants={itemVariants} className="flex items-center justify-center space-x-1.5">
                      <Share2 size={16} className="text-sky-500 dark:text-sky-400" />
                      <span>{t.shareText}</span>
                  </motion.p>
                  <motion.p custom={2} variants={itemVariants} className="flex items-center justify-center space-x-1.5">
                      <Heart size={16} className="text-pink-500 dark:text-pink-400" />
                      <span>{t.feedbackText}</span>
                  </motion.p>
              </div>
          </motion.div>
        
          <motion.p variants={itemVariants} className="mt-8 text-xs sm:text-sm text-slate-500/80 dark:text-slate-400/80">
            <Gift size={14} className="inline mr-1 mb-0.5 align-middle" />{t.thankYou}
          </motion.p>

        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
}