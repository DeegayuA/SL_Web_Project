// src/app/components/map/InfoPopup.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { PopupContent } from '@/config/popupContent.config';
import { cn } from '@/lib/utils';

interface InfoPopupProps {
  content: PopupContent | null;
  isOpen: boolean;
  onClose: () => void;
}

export function InfoPopup({ content, isOpen, onClose }: InfoPopupProps) {
  if (!content && !isOpen) return null; // Only render if open or content exists to animate out

  return (
    <AnimatePresence>
      {isOpen && content && ( // Ensure content is present when isOpen is true
        <motion.div
          key="info-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm'
          )}
          onClick={onClose}
        >
          <motion.div
            key="info-popup-content"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.3 }}
            className="bg-background text-text shadow-2xl rounded-xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-text/60 hover:text-text transition-colors z-10 p-1 rounded-full hover:bg-text/10"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 pr-8">{content.areaName}</h2>
            <p className="text-sm text-text/80 mb-4 leading-relaxed">{content.description}</p>

            {content.images && content.images.length > 0 && (
              <div className="mb-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {content.images.slice(0,3).map((image, index) => ( // Show max 3 images initially
                  <motion.div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            <h3 className="text-lg font-semibold text-secondary mb-2">Key Attractions:</h3>
            <ul className="list-disc list-inside text-sm space-y-1.5 text-text/90">
              {content.attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}