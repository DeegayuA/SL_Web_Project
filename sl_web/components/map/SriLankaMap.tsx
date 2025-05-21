// src/app/components/map/SriLankaMap.tsx
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image'; // Can be used if your SVG is simple and doesn't need inline styling/interaction
import { motion } from 'framer-motion';

import { MapMarker } from './MapMarker';
import { InfoPopup } from './InfoPopup';
import { sriLankaMapPoints } from '@/config/mapPoints.config';
import { popupData } from '@/config/popupContent.config';
import { cn } from '@/lib/utils';
import { useThemeStore } from '@/store/theme.store';
const slmap = '/sri-lanka3.png';

// Option 1: Import SVG as a component (if you have SVGR configured with Next.js)
// import SriLankaShape from '@/public/assets/svgs/sri-lanka-map.svg'; // Requires SVGR setup

export function SriLankaMap() {
    const [activePointId, setActivePointId] = useState<string | null>(null);
    const [hoveredPointId, setHoveredPointId] = useState<string | null>(null); // For hover states on markers
    const effectiveTheme = useThemeStore(state => state.getEffectiveTheme());

    const selectedPopupContent = useMemo(() => {
        if (!activePointId) return null;
        const activePoint = sriLankaMapPoints.find(p => p.id === activePointId);
        return activePoint ? popupData[activePoint.popupContentId] : null;
    }, [activePointId]);

    const handleMarkerClick = (pointId: string) => {
        setActivePointId(prevId => (prevId === pointId ? null : pointId)); // Toggle or set
    };

    const closePopup = () => {
        setActivePointId(null);
    };

    const mapContainerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                when: "beforeChildren", // Animate container first
                staggerChildren: 0.07, // Then stagger children (markers)
            },
        },
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
            {/* Main container for the map and markers */}
            <motion.div
                className="relative w-full max-w-xl md:max-w-2xl aspect-[700/1000]" // IMPORTANT: Adjust aspect ratio to match your SVG's natural proportions
                // Example: If SVG viewBox="0 0 700 1000", aspect ratio is 700/1000
                variants={mapContainerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Option 2: Use an <img> tag for the SVG background */}
                {/* This is simpler if your SVG doesn't need dynamic styling based on theme or interactivity of paths */}
                <Image
                    src={slmap} // Path to your SVG in the public folder
                    alt="Map of Sri Lanka"
                    fill // Makes the image cover the parent div, respecting aspect ratio defined on parent
                    className={cn(
                        "object-contain select-none drop-shadow-xl", // `object-contain` is usually best for maps
                        // Apply theme-based filter if you want to subtly change SVG appearance (limited styling)
                        effectiveTheme === 'dark' ? 'filter brightness-75 saturate-90' : 'filter brightness-100'
                    )}
                    priority // Preload the map image
                />



                {/* Interactive Markers Overlay */}
                {/* This div should exactly overlay the SVG content area */}
                <div className="absolute inset-0 w-full h-full">
                    {sriLankaMapPoints.map((point) => {
                        const pointThemeColor = popupData[point.popupContentId]?.themeColor;
                        return (
                            <MapMarker
                                key={point.id}
                                point={point}
                                onClick={() => handleMarkerClick(point.id)} // Your click handler
                                isActive={activePointId === point.id}
                                isHovered={hoveredPointId === point.id}
                                onHoverStart={() => setHoveredPointId(point.id)}
                                onHoverEnd={() => setHoveredPointId(null)}
                                themeColor={pointThemeColor} // Pass the theme color
                            />
                        );
                    })}
                </div>
            </motion.div>

            <InfoPopup
                content={selectedPopupContent}
                isOpen={!!activePointId && !!selectedPopupContent}
                onClose={closePopup}
            />
        </div>
    );
}