// src/app/providers/ThemeProvider.tsx
'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/theme.store'; // Make sure this path is correct

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme); // Get the theme directly
  const getEffectiveTheme = useThemeStore((state) => state.getEffectiveTheme); // Get the helper function
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // Only run on client after mount

    const effectiveTheme = getEffectiveTheme();
    // console.log("Applying theme:", effectiveTheme); // For debugging
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(effectiveTheme);

    // Optional: If you want to listen to system theme changes when 'system' is selected
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const newEffectiveTheme = mediaQuery.matches ? 'dark' : 'light';
        // console.log("System theme changed, applying:", newEffectiveTheme); // For debugging
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newEffectiveTheme);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, getEffectiveTheme, mounted]);

  // Prevent hydration mismatch by not rendering children until mounted and theme is applied
  if (!mounted) {
    // You can return null or a simple non-styled loader here
    // to avoid showing content before the theme is applied on the client.
    // This ensures that the server-rendered HTML (which might not have the theme class initially)
    // doesn't flash a different style before client-side hydration applies the correct theme.
    return null; 
  }

  return <>{children}</>;
}