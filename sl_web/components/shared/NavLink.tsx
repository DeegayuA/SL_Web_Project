// src/components/shared/NavLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        className={cn(
          "relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
          "hover:text-sky-600 dark:hover:text-sky-400",
          isActive ? "text-sky-600 dark:text-sky-400" : "text-slate-700 dark:text-slate-300",
          className
        )}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 dark:bg-sky-400"
            layoutId="activeUnderline" // For shared layout animation
            initial={false}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </motion.a>
    </Link>
  );
}