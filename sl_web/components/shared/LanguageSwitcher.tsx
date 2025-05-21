// src/components/shared/LanguageSwitcher.tsx
'use client';

import { Languages, Check } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming this utility exists for class name merging
import { motion, AnimatePresence } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from 'react';

// Define the structure for language options
interface LanguageOption {
  code: 'en' | 'de' | 'si';
  name: string;
  label: string; // Short label, potentially for the button itself if text is used instead of icon
  icon?: string; // Flag emoji or other visual identifier
}

// Define available languages with English as the first (default)
const availableLanguages: LanguageOption[] = [
  { code: 'en', name: 'English', label: 'EN', icon: '🇺🇸' },
  { code: 'de', name: 'Deutsch', label: 'DE', icon: '🇩🇪' },
  { code: 'si', name: 'සිංහල', label: 'සිං', icon: '🇱🇰' }, // Shorter label for SI if needed
];

// Find the default language (English) or fallback to the first available if 'en' isn't first.
const getDefaultLanguage = () => {
    return availableLanguages.find(lang => lang.code === 'en') || availableLanguages[0];
}

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>(getDefaultLanguage());
  const [mounted, setMounted] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false); // Renamed for clarity

  // Effect to set mounted state, ensuring correct rendering on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handler for changing the language
  const handleLanguageChange = (langCode: 'en' | 'de' | 'si') => {
    const newLang = availableLanguages.find(l => l.code === langCode) || getDefaultLanguage();
    setCurrentLanguage(newLang);

    // --- I18N INTEGRATION POINT ---
    // In a real application, you would integrate with your i18n solution here:
    // 1. If using next-intl or similar:
    //    router.push(pathname, { locale: newLang.code });
    // 2. If using i18next:
    //    i18n.changeLanguage(newLang.code);
    // For now, we'll just log the change.
    console.log(`Language changed to: ${newLang.name} (${newLang.code})`);
    // Potentially save preference to localStorage:
    localStorage.setItem('preferredLanguage', newLang.code);
  };

  // Effect to potentially load preferred language from localStorage on mount
  useEffect(() => {
    if (mounted) {
      const savedLangCode = localStorage.getItem('preferredLanguage') as LanguageOption['code'] | null;
      if (savedLangCode) {
        const savedLang = availableLanguages.find(l => l.code === savedLangCode);
        if (savedLang) {
          setCurrentLanguage(savedLang);
        }
      }
    }
  }, [mounted]);


  // Skeleton loader for when the component is not yet mounted (good for SSR/hydration)
  if (!mounted) {
    return (
      <div className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-700 shadow-sm animate-pulse w-[44px] h-[44px]" />
    );
  }

  return (
    <div className="relative group">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <motion.button
            whileTap={{ scale: 0.90 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            className={cn(
              'relative p-2.5 rounded-full transition-all duration-300 ease-out overflow-hidden flex items-center justify-center',
              // Consistent styling with ThemeSwitcher
              'bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-lg hover:shadow-xl',
              'border border-slate-200 dark:border-slate-700',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900',
              'text-slate-700 dark:text-slate-300' // Base text color for the icon
            )}
            aria-label={`Change language. Current language: ${currentLanguage.name}`}
            title={`Select Language`} // Generic title, specific info in custom tooltip
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={currentLanguage.code} // Animate when language code changes
                initial={{ opacity: 0, y: -10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }} // Playful springy ease
                className="flex items-center justify-center" // Ensure icon is centered
              >
                {currentLanguage.icon ? (
                  <span className="text-xl select-none">{currentLanguage.icon}</span> // Slightly larger icon, prevent selection
                ) : (
                  <Languages size={20} /> // Fallback icon
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </DropdownMenu.Trigger>

        {/* Custom Tooltip for additional context */}
        <AnimatePresence>
          {isTooltipVisible && (
             <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1.5 text-xs whitespace-nowrap
                        bg-slate-800 text-white dark:bg-slate-700 rounded-md shadow-lg pointer-events-none z-50"
            >
              Current: {currentLanguage.name}
            </motion.div>
          )}
        </AnimatePresence>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={10} // Space between trigger and content
            align="end"     // Align content to the end of the trigger
            className={cn(
              "min-w-[200px] bg-white/85 dark:bg-slate-800/85 backdrop-blur-lg shadow-2xl rounded-xl p-2 z-[60]", // More pronounced shadow, padding, rounded
              "border border-slate-200 dark:border-slate-700",
              // Example animations for Radix (define these in tailwind.config.js)
              "data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade",
              "data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            )}
          >
            <DropdownMenu.Label className="px-3 py-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              Choose Language
            </DropdownMenu.Label>
            <DropdownMenu.Separator className="h-px my-1 bg-slate-200 dark:bg-slate-700" />

            {availableLanguages.map((lang) => (
              <DropdownMenu.Item
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "flex items-center justify-between w-full px-3 py-2.5 text-sm rounded-lg cursor-pointer outline-none select-none transition-colors", // Slightly more padding
                  "text-slate-800 dark:text-slate-100",
                  "hover:bg-sky-100 dark:hover:bg-sky-700/60 focus:bg-sky-100 dark:focus:bg-sky-700/60", // Enhanced hover/focus
                  currentLanguage.code === lang.code && "bg-sky-50 dark:bg-sky-800/50" // Subtle selected background
                )}
              >
                <span className="flex items-center">
                  {lang.icon && <span className="mr-2.5 text-xl select-none">{lang.icon}</span>} {/* Increased margin and icon size */}
                  {lang.name}
                </span>
                {currentLanguage.code === lang.code && <Check size={18} className="text-sky-500 dark:text-sky-400" />}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}