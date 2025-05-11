'use client';

import { Sun, Moon, MonitorSmartphone } from 'lucide-react'; // Added MonitorSmartphone for 'system'
import { useThemeStore, Theme } from '@/store/theme.store';
import { cn } from '@/lib/utils';
import { useEffect, useState, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeCycleOption {
  name: Theme;
  icon: JSX.Element;
  label: string;
  nextLabel: string;
}

const themeCycle: ThemeCycleOption[] = [
  { name: 'light', icon: <Sun size={22} />, label: 'Light Mode', nextLabel: 'Switch to Dark Mode' },
  { name: 'dark', icon: <Moon size={22} />, label: 'Dark Mode', nextLabel: 'Switch to System Preference' },
  { name: 'system', icon: <MonitorSmartphone size={22} />, label: 'System Preference', nextLabel: 'Switch to Light Mode' },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => setMounted(true), []);

  const currentIndex = themeCycle.findIndex(t => t.name === theme);
  const currentThemeConfig = themeCycle[currentIndex] || themeCycle[0]; // Fallback to light

  const cycleTheme = () => {
    const nextIndex = (currentIndex + 1) % themeCycle.length;
    setTheme(themeCycle[nextIndex].name);
  };

  if (!mounted) {
    return (
      <div className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 shadow-sm animate-pulse w-[44px] h-[44px]" />
    );
  }

  const iconVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 10 : -10,
      opacity: 0,
      scale: 0.8,
      // rotate: direction > 0 ? -15 : 15,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 10 : -10,
      opacity: 0,
      scale: 0.8,
      // rotate: direction < 0 ? 15 : -15,
    }),
  };



  return (
    <div className="relative group"> {/* Parent for tooltip positioning */}
      <motion.button
        onClick={() => {
          setDirection(1); // Example direction
          cycleTheme();
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.90 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={cn(
          'relative p-2.5 rounded-full transition-all duration-300 ease-out overflow-hidden',
          'bg-background/70 dark:bg-background-darker/70 backdrop-blur-sm shadow-lg hover:shadow-xl',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-background-darker'
        )}
        aria-label={currentThemeConfig.nextLabel} // Aria label describes the action
        title={currentThemeConfig.nextLabel} // Native tooltip for mouse users
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={theme} // Key change triggers animation
            custom={direction}
            variants={iconVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30, duration: 0.2 },
              opacity: { duration: 0.15 },
              scale: { duration: 0.15 },
              rotate: {duration: 0.2}
            }}
            className="text-text hover:text-primary dark:text-text-dark dark:hover:text-accent"
          >
            {currentThemeConfig.icon}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Custom Tooltip (Optional, if native title isn't enough) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs whitespace-nowrap
                       bg-gray-800 dark:bg-gray-700 text-white rounded-md shadow-lg pointer-events-none"
          >
            {currentThemeConfig.nextLabel}
            <span className="text-gray-400 ml-1.5">({currentThemeConfig.label})</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}