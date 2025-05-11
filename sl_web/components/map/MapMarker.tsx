// src/app/components/map/MapMarker.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { MapPoint } from '@/config/mapPoints.config';
import { cn } from '@/lib/utils';

interface MapMarkerProps {
  point: MapPoint;
  onClick: () => void;
  isActive: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  themeColor?: string; // e.g., '#FF5733' (hex) or 'cyan-500' (Tailwind color name)
}

export function MapMarker({
  point,
  onClick,
  isActive,
  isHovered,
  onHoverStart,
  onHoverEnd,
  themeColor,
}: MapMarkerProps) {
  const markerSize = isActive ? 'w-10 h-10 md:w-12 md:h-12' : 'w-6 h-6 md:w-8 md:h-8';

  // --- Determine Pin and Tooltip Styles ---
  let currentPinClasses: string;
  let currentTooltipClasses: string;
  let pulseBgClass: string = 'bg-primary/50'; // Default pulse color

  const defaultPinColor = 'text-primary fill-primary/20 hover:text-primary/80 hover:fill-primary/30';
  const defaultTooltipClasses = 'bg-popover text-popover-foreground';

  if (isActive) {
    if (themeColor) {
      const tc = themeColor.startsWith('#') ? `[${themeColor}]` : themeColor;
      currentPinClasses = `text-${tc} fill-${tc}/40`; // e.g. text-cyan-500 fill-cyan-500/40
      currentTooltipClasses = `bg-${tc} text-primary-foreground`; // Assumes themeColor is dark enough for light text
      pulseBgClass = `bg-${tc}/50`; // Pulse with 50% opacity of theme color
    } else {
      currentPinClasses = 'text-accent fill-accent/40';
      currentTooltipClasses = 'bg-accent text-accent-foreground';
      pulseBgClass = 'bg-accent/50';
    }
  } else if (isHovered) {
    if (themeColor) {
      const tc = themeColor.startsWith('#') ? `[${themeColor}]` : themeColor;
      currentPinClasses = `text-${tc} fill-${tc}/30`;
      currentTooltipClasses = `bg-${tc} text-primary-foreground`;
    } else {
      currentPinClasses = 'text-secondary fill-secondary/30';
      currentTooltipClasses = defaultTooltipClasses; // Or theme with secondary: 'bg-secondary text-secondary-foreground'
    }
  } else { // Idle state (not active, not hovered)
    if (themeColor) {
      const tc = themeColor.startsWith('#') ? `[${themeColor}]` : themeColor;
      // Muted theme color for idle state, slightly brighter on hover (group-hover on button)
      currentPinClasses = `text-${tc}/70 fill-${tc}/20 group-hover:text-${tc}/100 group-hover:fill-${tc}/30`;
      currentTooltipClasses = defaultTooltipClasses; // Default tooltip for idle, themed one appears on hover
    } else {
      currentPinClasses = defaultPinColor;
      currentTooltipClasses = defaultTooltipClasses;
    }
  }

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.3 }}
      whileTap={{ scale: isActive ? 1.0 : 0.9 }} // More subtle tap for non-active
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={cn(
        'absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none group z-10',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full', // Added focus styling
        isActive ? 'z-20' : ''
      )}
      style={{
        left: point.svgCoords.x,
        top: point.svgCoords.y,
      }}
      aria-label={`Discover ${point.name}`}
      title={point.name}
    >
      {/* Pulse Animation for Active Marker */}
      {isActive && (
        <motion.div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10", // Behind the pin
            pulseBgClass // Dynamic background color for pulse
          )}
          style={{ width: '100%', height: '100%' }} // Pulse scales relative to the button's dynamic size
          animate={{
            scale: [0.9, 1.6, 0.9], // Scale out and back in
            opacity: [0.8, 0, 0.8],   // Fade out and back in
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
        />
      )}

      <MapPin
        className={cn(
          'transition-all duration-300 ease-out', // Slower transition for smoother color/size changes
          markerSize,
          currentPinClasses
        )}
      />

      {/* Tooltip */}
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium shadow-lg pointer-events-none',
              currentTooltipClasses // Dynamic background and text color for tooltip
            )}
          >
            {point.name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}