// src/app/components/map/InfoPopup.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Star, RotateCcw, Pause } from 'lucide-react'; // Added Star, RotateCcw, Pause
import { PopupContentEntry, PopupImage, LangCode, TranslatableContent } from '@/config/popupContent.config';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef, useCallback } from 'react';

interface InfoPopupProps {
  contentEntry: PopupContentEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

// --- Animation Variants ---
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.95, y: '2vh' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 25,
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: '2vh',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

const imageTransitionVariants = {
  initial: { opacity: 0, x: 30, scale: 0.98 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
  exit: { opacity: 0, x: -30, scale: 0.98, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
};


// --- Language Helper ---
const defaultLangCode: LangCode = 'en';
const validLangCodes: LangCode[] = ['en', 'de', 'si'];

function getCurrentLanguageFromStorage(): LangCode {
  if (typeof window !== 'undefined') {
    const savedLangCode = localStorage.getItem('preferredLanguage') as LangCode | null;
    return (savedLangCode && validLangCodes.includes(savedLangCode)) ? savedLangCode : defaultLangCode;
  }
  return defaultLangCode;
}

// --- Main Component ---
export function InfoPopup({ contentEntry, isOpen, onClose }: InfoPopupProps) {
  const [selectedImage, setSelectedImage] = useState<PopupImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLanguageCode, setCurrentLanguageCode] = useState<LangCode>(getCurrentLanguageFromStorage());
  const [activeTranslations, setActiveTranslations] = useState<TranslatableContent | null>(null);

  // Image Carousel State
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [carouselProgress, setCarouselProgress] = useState(0);
  const carouselTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_ROTATE_DELAY = 6000; // 6 seconds

  // Effect for Language Change
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'preferredLanguage' && event.newValue) {
        const newLangCode = event.newValue as LangCode;
        if (validLangCodes.includes(newLangCode)) setCurrentLanguageCode(newLangCode);
      }
    };
    const latestStoredLang = getCurrentLanguageFromStorage();
    if (latestStoredLang !== currentLanguageCode) setCurrentLanguageCode(latestStoredLang);
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [currentLanguageCode]);

  // Effect for Content and Translation Update
  useEffect(() => {
    if (contentEntry) {
      const translations = contentEntry.translations[currentLanguageCode] || contentEntry.translations.en;
      setActiveTranslations(translations);
      if (contentEntry.images && contentEntry.images.length > 0) {
        setSelectedImage(contentEntry.images[0]);
        setCurrentImageIndex(0);
      } else {
        setSelectedImage(null);
        setCurrentImageIndex(0);
      }
    } else {
      setActiveTranslations(null); setSelectedImage(null); setCurrentImageIndex(0);
    }
  }, [contentEntry, currentLanguageCode]);


  // --- Image Carousel Logic ---
  const hasMultipleImages = contentEntry && contentEntry.images && contentEntry.images.length > 1;

  const changeImage = useCallback((newIndex: number) => {
    if (!contentEntry?.images || !hasMultipleImages) return;
    setSelectedImage(contentEntry.images[newIndex]);
    setCurrentImageIndex(newIndex);
    setCarouselProgress(0); // Reset progress on manual change
  }, [contentEntry, hasMultipleImages]);

  const nextImage = useCallback(() => {
    if (!contentEntry?.images || !hasMultipleImages) return;
    const newIndex = (currentImageIndex + 1) % contentEntry.images.length;
    changeImage(newIndex);
  }, [contentEntry, currentImageIndex, changeImage, hasMultipleImages]);

  const prevImage = useCallback(() => {
    if (!contentEntry?.images || !hasMultipleImages) return;
    const newIndex = (currentImageIndex - 1 + contentEntry.images.length) % contentEntry.images.length;
    changeImage(newIndex);
  }, [contentEntry, currentImageIndex, changeImage, hasMultipleImages]);

  // Auto-rotation effect
  useEffect(() => {
    const cleanupTimers = () => {
      if (carouselTimerRef.current) clearInterval(carouselTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      carouselTimerRef.current = null;
      progressIntervalRef.current = null;
    };

    if (isOpen && hasMultipleImages && !isCarouselPaused) {
      cleanupTimers(); // Clear existing before starting new
      setCarouselProgress(0);

      carouselTimerRef.current = setInterval(nextImage, AUTO_ROTATE_DELAY);
      
      const progressTickDuration = 50; // Update progress bar every 50ms
      let currentProgress = 0;
      progressIntervalRef.current = setInterval(() => {
        currentProgress += (progressTickDuration / AUTO_ROTATE_DELAY) * 100;
        setCarouselProgress(Math.min(currentProgress, 100));
        if (currentProgress >= 100) {
            currentProgress = 0; // Reset for next cycle, nextImage call will reset it via changeImage too
        }
      }, progressTickDuration);

    } else {
      cleanupTimers();
    }
    return cleanupTimers;
  }, [isOpen, hasMultipleImages, isCarouselPaused, nextImage, currentImageIndex]); // currentImageIndex ensures timer resets on manual nav

  const handleThumbnailClick = (index: number) => {
    changeImage(index);
    setIsCarouselPaused(true); // Pause on manual interaction
  };

  const toggleCarouselPause = () => {
    setIsCarouselPaused(prev => !prev);
    if (isCarouselPaused) setCarouselProgress(0); // Reset progress if resuming
  };

  // Close popup on Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !contentEntry || !activeTranslations) return null;

  const accentColor = contentEntry.themeColor || '#0EA5E9'; // Default to a sky blue if no themeColor

  // Static text translations
  const getStaticText = (key: string): string => {
    const texts: Record<string, Record<LangCode, string>> = {
      keyAttractions: { en: "Key Attractions", de: "Hauptattraktionen", si: "ප්‍රධාන ආකර්ෂණීය ස්ථාන" },
      exploreMore: { en: "Discover More", de: "Mehr Entdecken", si: "තවත් ගවේෂණය කරන්න" },
      closeDetails: { en: `Close ${activeTranslations.areaName} Details`, de: `${activeTranslations.areaName} Details Schließen`, si: `${activeTranslations.areaName} විස්තර වසන්න` },
      defaultClose: { en: "Close Details", de: "Details Schließen", si: "විස්තර වසන්න" },
      prevImage: {en: "Previous Image", de: "Vorheriges Bild", si: "පෙර පින්තූරය"},
      nextImage: {en: "Next Image", de: "Nächstes Bild", si: "ඊළඟ පින්තූරය"},
      noImages: {en: "No images available for this area.", de: "Für diesen Bereich sind keine Bilder verfügbar.", si: "මෙම ප්‍රදේශය සඳහා පින්තූර නොමැත."},
    };
    return texts[key]?.[currentLanguageCode] || texts[key]?.en || key;
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="info-popup-overlay"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[70] flex items-center justify-center p-2 xs:p-3 sm:p-4 bg-black/70 backdrop-blur-lg" // Darker, more blur, higher z
          onClick={onClose}
        >
          <motion.div
            key="info-popup-content-wrapper"
            variants={popupVariants}
            className="bg-card/80 dark:bg-slate-900/80 text-card-foreground backdrop-blur-xl shadow-2xl rounded-xl md:rounded-2xl w-full h-full max-w-[1400px] max-h-[95vh] sm:max-h-[90vh] flex flex-col overflow-hidden relative"
            style={{ 
              '--popup-accent-color': accentColor, // CSS variable for accent color
              borderColor: `rgba(${parseInt(accentColor.slice(1,3),16)}, ${parseInt(accentColor.slice(3,5),16)}, ${parseInt(accentColor.slice(5,7),16)}, 0.2)`
            } as React.CSSProperties}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              variants={itemVariants}
              onClick={onClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-muted-foreground hover:text-[var(--popup-accent-color)] transition-colors z-30 p-2 rounded-full hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-[var(--popup-accent-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              aria-label={activeTranslations.areaName ? getStaticText('closeDetails') : getStaticText('defaultClose')}
            >
              <X size={24} className="md:w-7 md:h-7" />
            </motion.button>

            {/* Dynamic Top Accent Border based on themeColor */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--popup-accent-color)] rounded-t-xl md:rounded-t-2xl" />
            
            <div className="flex flex-col md:flex-row flex-1 h-[calc(100%-0.375rem)] pt-1.5 overflow-hidden"> {/* pt for accent border */}
              {/* Left Column: Images */}
              <motion.div
                className="md:w-[55%] lg:w-[60%] h-1/2 md:h-full flex flex-col bg-black/10 dark:bg-slate-950/20 p-3 sm:p-4 md:p-6"
                onMouseEnter={hasMultipleImages ? () => setIsCarouselPaused(true) : undefined}
                onMouseLeave={hasMultipleImages ? () => setIsCarouselPaused(false) : undefined}
                onFocus={hasMultipleImages ? () => setIsCarouselPaused(true) : undefined} // For keyboard users
                onBlur={hasMultipleImages ? () => setIsCarouselPaused(false) : undefined}
              >
                {contentEntry.images && contentEntry.images.length > 0 && selectedImage ? (
                  <>
                    <div className="relative flex-grow aspect-[16/10] rounded-md md:rounded-lg overflow-hidden shadow-lg mb-3 sm:mb-4">
                      <AnimatePresence initial={false} mode="wait">
                        <motion.div
                          key={selectedImage.src + currentImageIndex} // Ensure key changes properly
                          variants={imageTransitionVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="absolute inset-0"
                        >
                          <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 55vw, 60vw"
                            className="object-cover"
                            priority={currentImageIndex === 0}
                            placeholder='blur'
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // Simple tiny blur
                          />
                        </motion.div>
                      </AnimatePresence>
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label={getStaticText('prevImage')}
                          > <ChevronLeft size={20} className="sm:w-6 sm:h-6" /> </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label={getStaticText('nextImage')}
                          > <ChevronRight size={20} className="sm:w-6 sm:h-6" /> </button>
                          
                          {/* Progress bar for auto-rotation */}
                          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                            <motion.div
                                className="h-full bg-[var(--popup-accent-color)]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${carouselProgress}%` }}
                                transition={{ duration: 0.05, ease: "linear" }} // Fast transition for smooth progress
                            />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Thumbnails & Pause/Resume Button */}
                    <div className="flex items-center space-x-2">
                      <div className="flex-grow flex space-x-1.5 sm:space-x-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-muted-foreground/40 dark:scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent scrollbar-thumb-rounded-full">
                        {contentEntry.images.map((image, index) => (
                          <motion.button
                            key={index}
                            variants={itemVariants}
                            className={cn(
                              'relative aspect-video w-20 h-14 sm:w-24 sm:h-[4.5rem] flex-shrink-0 rounded-md overflow-hidden focus:outline-none focus-visible:ring-2 ring-offset-2 ring-offset-card',
                              currentImageIndex === index ? 'ring-2 ring-[var(--popup-accent-color)] shadow-md' : 'hover:opacity-80 transition-opacity',
                            )}
                            onClick={() => handleThumbnailClick(index)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Image src={image.src} alt={`Thumbnail of ${image.alt}`} fill sizes="90px" className="object-cover" />
                            {currentImageIndex === index && <div className="absolute inset-0 bg-[var(--popup-accent-color)]/20" />}
                          </motion.button>
                        ))}
                      </div>
                      {hasMultipleImages && contentEntry.images.length > 2 && ( // Show pause/resume if more than 2 images
                        <motion.button 
                            variants={itemVariants} 
                            onClick={toggleCarouselPause}
                            className="p-2 rounded-full text-muted-foreground hover:text-[var(--popup-accent-color)] hover:bg-muted/50 transition-colors ml-2 flex-shrink-0"
                            aria-label={isCarouselPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                            title={isCarouselPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                        >
                            {isCarouselPaused ? <RotateCcw size={18} className="sm:w-5 sm:h-5"/> : <Pause size={18} className="sm:w-5 sm:h-5"/>}
                        </motion.button>
                      )}
                    </div>
                  </>
                ) : (
                  <motion.div variants={itemVariants} className="flex-grow flex items-center justify-center bg-muted/10 dark:bg-slate-800/20 rounded-md md:rounded-lg text-muted-foreground text-sm sm:text-base">
                    <p>{getStaticText('noImages')}</p>
                  </motion.div>
                )}
              </motion.div>

              {/* Right Column: Text Content */}
              <motion.div className="md:w-[45%] lg:w-[40%] h-1/2 md:h-full flex flex-col p-4 pt-6 sm:p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/40 dark:scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent scrollbar-thumb-rounded-full">
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-2 sm:mb-3 leading-tight pr-10 tracking-tight" // pr for close button spacing
                  style={{ color: 'var(--popup-accent-color)' }}
                >
                  {activeTranslations.areaName}
                </motion.h2>

                <motion.div variants={itemVariants} className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {activeTranslations.description.split('\n').map((paragraph, i) => ( // Handle newlines in description
                     <p key={i}>{paragraph}</p>
                  ))}
                </motion.div>

                {activeTranslations.attractions && activeTranslations.attractions.length > 0 && (
                  <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2.5 sm:mb-3"
                    >
                      {getStaticText('keyAttractions')}
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base text-foreground/90">
                      {activeTranslations.attractions.map((attraction, index) => (
                        <motion.li
                          key={index}
                          custom={index} // For potential custom stagger logic if needed
                          variants={itemVariants}
                          className="flex items-start"
                        >
                          <Star size={16} className="mr-2.5 mt-[3px] flex-shrink-0 text-[var(--popup-accent-color)] opacity-80" />
                          <span>{attraction}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                <div className="mt-auto pt-4 sm:pt-6">
                    <motion.button
                        variants={itemVariants}
                        onClick={onClose} // Could lead to a dedicated page in future
                        className="w-full text-base sm:text-lg text-primary-foreground py-2.5 sm:py-3 px-6 rounded-lg font-semibold transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--popup-accent-color)]"
                        style={{ backgroundColor: 'var(--popup-accent-color)'}}
                    >
                        {getStaticText('exploreMore')}
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