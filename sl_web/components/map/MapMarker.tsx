// src/app/components/map/MapMarker.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MapPin } from 'lucide-react'; // Or your custom marker icon
import { MapPoint } from '@/config/mapPoints.config';
import { cn } from '@/lib/utils';

interface MapMarkerProps {
  point: MapPoint;
  onClick: () => void;
  isActive: boolean;
  isHovered: boolean; // To control hover state from parent
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function MapMarker({
  point,
  onClick,
  isActive,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: MapMarkerProps) {
  const markerSize = isActive ? 'w-10 h-10 md:w-12 md:h-12' : 'w-6 h-6 md:w-8 md:h-8';
  const markerColor = isActive
    ? 'text-accent fill-accent/30'
    : isHovered
    ? 'text-secondary fill-secondary/30'
    : 'text-primary fill-primary/20';

  return (
    <motion.button
      layout // Enables smooth position changes if map resizes (less relevant for fixed SVG markers)
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.3 }}
      whileTap={{ scale: isActive ? 1 : 0.9 }}
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={cn(
        'absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none group z-10', // Ensure markers are above SVG
        isActive ? 'z-20' : '' // Active marker on top
      )}
      style={{
        left: point.svgCoords.x,
        top: point.svgCoords.y,
      }}
      aria-label={`Discover ${point.name}`}
      title={point.name}
    >
      <MapPin className={cn('transition-all duration-200 ease-out', markerSize, markerColor)} />
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 whitespace-nowrap rounded-md px-2 py-1 text-xs shadow-lg pointer-events-none',
              'bg-background-darker text-text-darker dark:bg-background-light dark:text-text-light'
            )}
          >
            {point.name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}