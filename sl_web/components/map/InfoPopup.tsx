// src/app/components/map/InfoPopup.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PopupContent } from '@/config/popupContent.config'; // Assuming PopupImage is defined

// Define PopupImage type locally if not exported from config
export interface PopupImage {
  src: string;
  alt: string;
}
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface InfoPopupProps {
  content: PopupContent | null;
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.9, y: '5vh' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 25,
      duration: 0.4,
      when: 'beforeChildren', // Animate children after parent
      staggerChildren: 0.07, // Stagger animation for children
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: '5vh',
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

export function InfoPopup({ content, isOpen, onClose }: InfoPopupProps) {
  const [selectedImage, setSelectedImage] = useState<PopupImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (content?.images && content.images.length > 0) {
      setSelectedImage(content.images[0]);
      setCurrentImageIndex(0);
    } else {
      setSelectedImage(null);
      setCurrentImageIndex(0);
    }
  }, [content]);

  if (!content && !isOpen) return null;

  const handleThumbnailClick = (image: PopupImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const changeImage = (direction: 'next' | 'prev') => {
    if (!content?.images || content.images.length === 0) return;
    let newIndex = direction === 'next' ? currentImageIndex + 1 : currentImageIndex - 1;
    if (newIndex >= content.images.length) newIndex = 0;
    if (newIndex < 0) newIndex = content.images.length - 1;
    setSelectedImage(content.images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && content && (
        <motion.div
          key="info-popup-overlay"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md'
          )}
          onClick={onClose}
        >
          <motion.div
            key="info-popup-content-wrapper"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-card text-card-foreground shadow-2xl rounded-2xl w-[95vw] h-[90vh] max-w-[1400px] flex flex-col overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-muted-foreground hover:text-foreground transition-colors z-20 p-2 rounded-full hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              aria-label="Close popup"
            >
              <X size={28} />
            </button>

            {/* Main content area with two columns on md+ screens */}
            <div className="flex flex-col md:flex-row flex-1 h-full overflow-hidden">
              {/* Left Column: Images */}
              {content.images && content.images.length > 0 && selectedImage && (
                <motion.div
                  variants={itemVariants}
                  className="md:w-3/5 lg:w-7/12 h-1/2 md:h-full flex flex-col bg-muted/30 p-4 md:p-6"
                >
                  {/* Hero Image */}
                  <div className="relative flex-grow aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImage.src}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={selectedImage.src}
                          alt={selectedImage.alt}
                          fill
                          sizes="(max-width: 768px) 90vw, 60vw"
                          className="object-cover"
                          priority={currentImageIndex === 0} // Prioritize first image
                        />
                      </motion.div>
                    </AnimatePresence>
                     {content.images.length > 1 && (
                      <>
                        <button
                          onClick={() => changeImage('prev')}
                          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={() => changeImage('next')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors"
                          aria-label="Next image"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {content.images.length > 1 && (
                    <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-transparent">
                      {content.images.map((image, index) => (
                        <motion.button
                          key={index}
                          variants={itemVariants} // Staggered appearance for thumbnails
                          className={cn(
                            'relative aspect-video w-24 h-16 sm:w-28 sm:h-20 flex-shrink-0 rounded-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-muted/30',
                            selectedImage.src === image.src ? 'ring-2 ring-primary' : 'hover:opacity-80'
                          )}
                          onClick={() => handleThumbnailClick(image, index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Image
                            src={image.src}
                            alt={`Thumbnail ${image.alt}`}
                            fill
                            sizes="100px"
                            className="object-cover"
                          />
                          {selectedImage.src === image.src && (
                            <div className="absolute inset-0 bg-primary/30" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
               {/* Placeholder if no images */}
               {(!content.images || content.images.length === 0) && (
                  <motion.div
                    variants={itemVariants}
                    className="md:w-3/5 lg:w-7/12 h-1/2 md:h-full flex items-center justify-center bg-muted/30 p-4 md:p-6 text-muted-foreground"
                  >
                    <p>No images available for this area.</p>
                  </motion.div>
                )}


              {/* Right Column: Text Content */}
              <motion.div
                className="md:w-2/5 lg:w-5/12 h-1/2 md:h-full flex flex-col p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-transparent"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 md:mb-4 leading-tight pr-12" // pr for close button spacing
                >
                  {content.areaName}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed"
                >
                  {content.description}
                </motion.p>

                {content.attractions && content.attractions.length > 0 && (
                  <>
                    <motion.h3
                      variants={itemVariants}
                      className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4"
                    >
                      Key Attractions
                    </motion.h3>
                    <motion.ul
                      variants={itemVariants} // This variant applies to the UL, children items will stagger due to parent's staggerChildren
                      className="list-none space-y-2.5 text-foreground/90"
                    >
                      {content.attractions.map((attraction, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants} // Staggered appearance for list items
                          className="flex items-start"
                        >
                          <span className="text-primary mr-2.5 mt-1">✓</span> {/* Checkmark icon */}
                          <span>{attraction}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </>
                )}
                <div className="mt-auto pt-6">
                    <motion.button
                        variants={itemVariants}
                        onClick={onClose}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg font-semibold transition-colors"
                    >
                        Explore More (Placeholder)
                    </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Make sure your PopupContent and PopupImage types are defined in @/config/popupContent.config.ts
// Example:
// export interface PopupImage {
//   src: string;
//   alt: string;
// }
//
// export interface PopupContent {
//   areaName: string;
//   description: string;
//   images?: PopupImage[];
//   attractions: string[];
// }