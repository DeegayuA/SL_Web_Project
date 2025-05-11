// src/store/theme.store.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  getEffectiveTheme: () => 'light' | 'dark'; // Helper to resolve 'system'
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system', // Default theme
      setTheme: (theme) => set({ theme }),
      getEffectiveTheme: () => {
        const currentTheme = get().theme;
        if (currentTheme === 'system') {
          // Ensure window is defined (runs on client-side)
          if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          return 'light'; // Default to light if window is not available (e.g., during SSR for initial check)
        }
        return currentTheme;
      },
    }),
    {
      name: 'aura-of-lanka-theme', // name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // Specify localStorage
    }
  )
);