'use client';

import { Sun, Moon, MonitorSmartphone } from 'lucide-react';
import { useTheme } from 'next-themes'; // Import useTheme from next-themes
import { cn } from '@/lib/utils'; // Assuming your cn utility is here
import { useEffect, useState, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the Theme type based on next-themes values
type ThemeValue = 'light' | 'dark' | 'system';

interface ThemeCycleOption {
  name: ThemeValue;
  icon: JSX.Element;
  label: string; // Current mode's label
  nextLabel: string; // Label for the action of switching
}

const themeCycle: ThemeCycleOption[] = [
  { name: 'light', icon: <Sun size={20} />, label: 'Light Mode', nextLabel: 'Switch to Dark Mode' },
  { name: 'dark', icon: <Moon size={20} />, label: 'Dark Mode', nextLabel: 'Switch to System Preference' },
  { name: 'system', icon: <MonitorSmartphone size={20} />, label: 'System Preference', nextLabel: 'Switch to Light Mode' },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // Initial animation direction

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentIndex = mounted ? themeCycle.findIndex(t => t.name === theme) : -1;
  // Fallback to the first theme option if current theme is not found or component is not mounted
  const currentThemeConfig = currentIndex !== -1 ? themeCycle[currentIndex] : themeCycle[0]; 

  const cycleTheme = () => {
    const nextIndex = (currentIndex + 1) % themeCycle.length;
    setTheme(themeCycle[nextIndex].name);
    setDirection(prevDirection => prevDirection * -1); // Alternate animation direction
  };

  if (!mounted) {
    // Skeleton loader to prevent layout shift and match button size
    return (
      <div className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-700 shadow-sm animate-pulse w-[42px] h-[42px]" />
    );
  }

  const iconVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 12 : -12, // Slightly less y movement for a tighter animation
      opacity: 0,
      scale: 0.75,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir < 0 ? 12 : -12,
      opacity: 0,
      scale: 0.75,
    }),
  };

  return (
    <div className="relative group">
      <motion.button
        onClick={cycleTheme}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.90 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={cn(
          'relative p-2.5 rounded-full transition-all duration-300 ease-out overflow-hidden flex items-center justify-center',
          // Matched styles from LanguageSwitcher for consistency
          'bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-lg hover:shadow-xl',
          'border border-slate-200 dark:border-slate-700',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900'
        )}
        aria-label={currentThemeConfig.nextLabel} // Action description
        title={currentThemeConfig.nextLabel} // Native tooltip for the action
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={theme || 'initial'} // Use `theme` (or a default key if theme is undefined) from next-themes to trigger animation
            custom={direction}
            variants={iconVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 380, damping: 28, duration: 0.2 },
              opacity: { duration: 0.18 },
              scale: { duration: 0.18 },
            }}
            // Tailwind classes for icon color will react to the 'dark' class on <html>
            className="text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors"
          >
            {currentThemeConfig.icon}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Custom Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1.5 text-xs whitespace-nowrap
                       bg-slate-800 dark:bg-slate-700 text-white rounded-md shadow-lg pointer-events-none z-50"
          >
            {currentThemeConfig.nextLabel} {/* Shows what the button will do */}
            <span className="text-slate-400 ml-1.5">({currentThemeConfig.label})</span> {/* Shows current mode */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}