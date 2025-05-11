// app/layout.client.tsx
'use client';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { LazyMotion, domAnimation } from 'framer-motion';

export default function RootLayoutClient({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <body className={cn(className, 'bg-background text-text transition-colors duration-300')}>
      <LazyMotion features={domAnimation}>
        <ThemeProvider>{children}</ThemeProvider>
      </LazyMotion>
    </body>
  );
}