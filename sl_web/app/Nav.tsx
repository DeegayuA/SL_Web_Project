// src/components/shared/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher'; // Using the provided LanguageSwitcher
import { NavLink } from '@/components/shared/NavLink';
import { Menu as MenuIcon, X as XIcon, FerrisWheel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define language codes that Navbar will handle
type LangCode = 'en' | 'de' | 'si';

// Define the default language code
const defaultLangCode: LangCode = 'en';

// Translations for Navbar elements
const navTranslations: Record<LangCode, { brandName: string; home: string; discover: string; donate: string }> = {
  en: {
    brandName: "Lanka Journey",
    home: "Home",
    discover: "Discover",
    donate: "Donate",
  },
  de: {
    brandName: "Lanka Reise",
    home: "Startseite",
    discover: "Entdecken",
    donate: "Spenden",
  },
  si: {
    brandName: "ලංකා චාරිකා",
    home: "මුල් පිටුව",
    discover: "සොයාගන්න",
    donate: "පරිත්‍යාග කරන්න",
  },
};

// Extract valid language codes from navTranslations to ensure consistency
const validLangCodes = Object.keys(navTranslations) as LangCode[];

// Navigation items structure, using keys for translation lookup
const navItemDefinitions = [
  { key: "home", href: "/" },
  { key: "discover", href: "/discover" },
  { key: "donate", href: "/donate" },
] as const;


// --- HELPER FUNCTION to get current language from localStorage ---
/**
 * Retrieves the preferred language from localStorage.
 * Falls back to defaultLangCode if not found or invalid.
 */
function getCurrentLanguageFromStorage(): LangCode {
  if (typeof window !== 'undefined') {
    const savedLangCode = localStorage.getItem('preferredLanguage') as LangCode | null;
    if (savedLangCode && validLangCodes.includes(savedLangCode)) {
      return savedLangCode;
    }
  }
  return defaultLangCode; // Fallback to default language
}
// --- END HELPER FUNCTION ---


export function Navbar({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for the current language code, initialized using the helper function
  const [currentLanguageCode, setCurrentLanguageCode] = useState<LangCode>(getCurrentLanguageFromStorage());

  // Effect to listen for language changes propagated via localStorage by LanguageSwitcher
  useEffect(() => {
    // Function to handle changes in localStorage
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'preferredLanguage' && event.newValue) {
        const newLangCode = event.newValue as LangCode;
        // Validate the new language code before setting state
        if (validLangCodes.includes(newLangCode)) {
          setCurrentLanguageCode(newLangCode);
        } else {
          // If the new value is somehow not a valid code, revert to default
          setCurrentLanguageCode(defaultLangCode);
        }
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Optional: One-time sync *if* there's a concern that localStorage might change
    // between initial state setting and effect execution by external means
    // *not* triggering a 'storage' event. For most cases, useState initializer is sufficient.
    // For robustness, a quick check here can be useful.
    const latestStoredLang = getCurrentLanguageFromStorage();
    if (latestStoredLang !== currentLanguageCode) {
        setCurrentLanguageCode(latestStoredLang);
    }

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [currentLanguageCode]); // Add currentLanguageCode as dependency to re-run if it's changed programmatically
                             // from elsewhere (though not expected in this isolated setup) and for the sync logic.
                             // For a pure listener, [] would be sufficient if the internal sync check is removed.


  // Get the current set of translations based on currentLanguageCode
  const t = navTranslations[currentLanguageCode] || navTranslations.en;

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 inset-x-0 max-w-max mx-auto z-[50] px-3 py-2",
          "rounded-full border border-slate-200/80 dark:border-slate-700/80",
          "bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg shadow-lg",
          className
        )}
      >
        <div className="flex items-center justify-between space-x-4">
          {/* Logo/Brand Name - Translated */}
          <Link href="/" passHref legacyBehavior>
            <a className="flex items-center space-x-2 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              <FerrisWheel size={26} className="text-sky-500" />
              <span className="font-semibold text-lg hidden sm:inline">{t.brandName}</span>
            </a>
          </Link>

          {/* Desktop Navigation Links - Translated */}
          <div className="hidden md:flex items-center space-x-1">
            {navItemDefinitions.map((item) => (
              <NavLink key={item.key} href={item.href}>
                {t[item.key as keyof typeof t]}
              </NavLink>
            ))}
          </div>

          {/* Controls: Language and Theme Switchers */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
             {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="py-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle menu"
                whileTap={{scale: 0.9}}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                     <motion.div key="x-icon" initial={{ rotate: -90, opacity:0 }} animate={{rotate:0, opacity:1}} exit={{rotate: 90, opacity:0}} transition={{duration: 0.2}}>
                       <XIcon size={22} />
                     </motion.div>
                  ) : (
                    <motion.div key="menu-icon" initial={{ rotate: 90, opacity:0 }} animate={{rotate:0, opacity:1}} exit={{rotate: -90, opacity:0}} transition={{duration: 0.2}}>
                      <MenuIcon size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel - Translated */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "md:hidden fixed inset-x-0 top-[calc(4rem+0.5rem)] z-40 mx-4 p-4",
              "bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl rounded-xl border border-slate-200 dark:border-slate-700"
            )}
          >
            <div className="flex flex-col space-y-3">
              {navItemDefinitions.map((item) => (
                <div key={item.key} onClick={() => setMobileMenuOpen(false)}> {/* Close mobile menu on item click */}
                  <NavLink
                    href={item.href}
                    className="block px-3 py-2.5 text-base"
                  >
                    {t[item.key as keyof typeof t]}
                  </NavLink>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}