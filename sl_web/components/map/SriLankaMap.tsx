// src/app/components/map/SriLankaMap.tsx
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { MapMarker } from './MapMarker';
import { InfoPopup } from './InfoPopup'; // Your "wow" InfoPopup
import { sriLankaMapPoints } from '@/config/mapPoints.config';
import { popupData, PopupContentEntry } from '@/config/popupContent.config'; // Ensure PopupContentEntry is imported if needed for type safety
import { cn } from '@/lib/utils';
import { useThemeStore } from '@/store/theme.store';
const slmap = '/sri-lanka3.png';

export function SriLankaMap() {
    const [activePointId, setActivePointId] = useState<string | null>(null);
    const [hoveredPointId, setHoveredPointId] = useState<string | null>(null);
    const effectiveTheme = useThemeStore(state => state.getEffectiveTheme());

    const selectedPopupContent = useMemo((): PopupContentEntry | null => { // Explicitly type return
        if (!activePointId) return null;
        const activePoint = sriLankaMapPoints.find(p => p.id === activePointId);
        // Ensure that popupData keys match popupContentId from mapPoints
        return activePoint && popupData[activePoint.popupContentId]
               ? popupData[activePoint.popupContentId]
               : null;
    }, [activePointId]);

    const handleMarkerClick = (pointId: string) => {
        setActivePointId(prevId => (prevId === pointId ? null : pointId));
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
                when: "beforeChildren",
                staggerChildren: 0.07,
            },
        },
    };

    return (
        // This outer div should ideally be the one from DiscoverPage.tsx main map area,
        // designed to give SriLankaMap ample space.
        <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
                className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl aspect-[700/1000]" // Adjust as needed
                variants={mapContainerVariants}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src={slmap}
                    alt="Map of Sri Lanka"
                    fill
                    className={cn(
                        "object-contain select-none drop-shadow-xl",
                        effectiveTheme === 'dark' ? 'filter brightness-[0.8] saturate-90' : 'filter brightness-100' // Slightly enhanced dark mode filter
                    )}
                    priority
                />
                <div className="absolute inset-0 w-full h-full">
                    {sriLankaMapPoints.map((point) => (
                        <MapMarker
                            key={point.id}
                            point={point}
                            onClick={() => handleMarkerClick(point.id)}
                            isActive={activePointId === point.id}
                            isHovered={hoveredPointId === point.id}
                            onHoverStart={() => setHoveredPointId(point.id)}
                            onHoverEnd={() => setHoveredPointId(null)}
                        />
                    ))}
                </div>
            </motion.div>

            <InfoPopup
                contentEntry={selectedPopupContent}
                isOpen={!!activePointId && !!selectedPopupContent}
                onClose={closePopup}
            />
        </div>
    );
}