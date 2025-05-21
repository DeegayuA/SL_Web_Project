// src/components/shared/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher'; // Assuming path from original file
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { NavLink } from '@/components/shared/NavLink';
import { Menu as MenuIcon, X as XIcon, FerrisWheel } from 'lucide-react'; // FerrisWheel as placeholder logo
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Discover", href: "/discover" },
  { name: "About", href: "/about" },
];

export function Navbar({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 inset-x-0 max-w-max mx-auto z-[50] px-3 py-2", // max-w-max for content-width, or max-w-2xl/3xl/etc.
          "rounded-full border border-slate-200/80 dark:border-slate-700/80",
          "bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg shadow-lg",
          className
        )}
      >
        <div className="flex items-center justify-between space-x-4">
          {/* Logo/Brand Name */}
          <Link href="/" passHref legacyBehavior>
            <a className="flex items-center space-x-2 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              <FerrisWheel size={26} className="text-sky-500" />
              <span className="font-semibold text-lg hidden sm:inline">Lanka Journey</span>
            </a>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
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
                className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
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

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "md:hidden fixed inset-x-0 top-[calc(4rem+0.5rem)] z-40 mx-4 p-4", // Position below navbar
              "bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl rounded-xl border border-slate-200 dark:border-slate-700"
            )}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2.5 text-base" // Larger tap targets for mobile
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}