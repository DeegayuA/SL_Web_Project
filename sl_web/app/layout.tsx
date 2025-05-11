// app/layout.tsx (SERVER component – no 'use client')
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { cn } from '@/lib/utils';
import RootLayoutClient from './layout.client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Aura of Lanka - Your Immersive Sri Lankan Discovery Portal',
    template: '%s | Aura of Lanka',
  },
  description: 'Embark on a breathtaking journey to Sri Lanka...',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇱🇰</text></svg>',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <RootLayoutClient className={inter.className}>{children}</RootLayoutClient>
    </html>
  );
}