"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react"; // Added useMemo, useCallback
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ContainerTextFlip } from "@/components/ui/Container-text-flip";
import RotatingText from "@/components/ui/RotatingText";
import { useTheme } from 'next-themes';
import { AnimatedBackgroundBlobs } from "@/components/ui/AnimatedBackgroundBlobs";

const World = dynamic(() => import("../components/ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center bg-transparent"><p>Loading Globe...</p></div>,
});

const debounce = <F extends (...args: unknown[]) => unknown>({ func, delay }: { func: F; delay: number; }): ((...args: Parameters<F>) => void) => {
  let timeoutId: NodeJS.Timeout | undefined;
  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

type ValidLanguageCode = 'en' | 'de' | 'si';

interface LanguageContent {
  greeting: string;
  title: string;
  paragraph: string;
  cta: string;
}

// Storing all text content directly, keyed by language code
const allTextContentData: Record<ValidLanguageCode, LanguageContent> = {
  de: {
    greeting: "Willkommen",
    title: "Eine Reise nach Sri Lanka",
    paragraph: "Von Weiden aus beginnt Ihr Abenteuer nach Colombo. Entdecken Sie die Perle des Indischen Ozeans: Antike Wunder, üppige Landschaften und sonnenverwöhnte Küsten erwarten Sie. Tippen Sie, um die Magie zu enthüllen.",
    cta: "Entdecken Sie Sri Lanka",
  },
  en: {
    greeting: "Welcome",
    title: "A Journey to Sri Lanka",
    paragraph: "From Weiden, your adventure to Colombo begins. Discover the Pearl of the Indian Ocean: ancient wonders, lush landscapes, and sun-kissed shores await. Tap to unveil the magic.",
    cta: "Explore Sri Lanka",
  },
  si: {
    greeting: "ආයුබෝවන්",
    title: "ශ්‍රී ලංකාවට සවාරියක්",
    paragraph: "වයිඩන් සිට කොළඹ දක්වා ඔබේ වික්‍රමය ඇරඹේ. ඉන්දියන් සාගරයේ මුතු ඇටය සොයාගන්න: පුරාණ අසිරිය, සශ්‍රීක භූ දර්ශන සහ හිරු රැසින් දිදුලන වෙරළ තීරයන් ඔබ එනතුරු බලා සිටී. මැජික් එළිදැක්වීමට ස්පර්ශ කරන්න.",
    cta: "ශ්‍රී ලංකාව ගවේෂණය කරන්න",
  }
};

// Define available languages, with English as the first to guide default if localStorage is empty
const languageOptionsOrder: ValidLanguageCode[] = ['en', 'de', 'si'];

export function GlobeDemo() {
  const router = useRouter();
  const [renderKey, setRenderKey] = useState(0); // For globe remount on resize
  const [activeLanguage, setActiveLanguage] = useState<ValidLanguageCode>('en'); // Default to English

  const { theme } = useTheme();
  const isLight = theme === 'light' || (theme === 'system' && !(typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches));


  // Effect to read language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage') as ValidLanguageCode | null;
    if (storedLang && allTextContentData[storedLang]) {
      setActiveLanguage(storedLang);
    }
    // If no valid language in localStorage, it stays as the default 'en'

    // Optional: Listen for storage changes to update language dynamically if set by another component on the same page.
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'preferredLanguage' && event.newValue) {
        const newLang = event.newValue as ValidLanguageCode;
        if (allTextContentData[newLang]) {
          setActiveLanguage(newLang);
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);

  }, []); // Empty dependency array means this runs once on mount and sets up listener


  const handleResizeCallback = useCallback(() => {
    setRenderKey(prev => prev + 1);
  }, []);
  
  const debouncedResizeHandler = useMemo(
    () => debounce({ func: handleResizeCallback, delay: 250 }),
    [handleResizeCallback]
  );

  useEffect(() => {
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, [debouncedResizeHandler]);

  const handlePageClick = () => router.push("/discover");

  // Current text content based on activeLanguage
  const currentText = allTextContentData[activeLanguage] || allTextContentData['en']; // Fallback to English

  const weiden = useMemo(() => ({ lat: 49.6755, lng: 12.1600 }), []);
  const colombo = useMemo(() => ({ lat: 6.9271, lng: 79.8612 }), []);

  const globeConfig = useMemo(() => ({
    pointSize: 4,
    globeColor: isLight ? "#e0f2fe" : "#062056",
    showAtmosphere: true,
    atmosphereColor: isLight ? "#60a5fa" : "#ffffff",
    atmosphereAltitude: 0.1,
    emissive: isLight ? "#3b82f6" : "#062056",
    emissiveIntensity: 0.15,
    shininess: 1.2,
    polygonColor: isLight ? "rgba(51, 65, 85, 0.3)" : "rgba(255,255,255,0.6)", // Adjusted light mode polygon
    ambientLight: isLight ? "#bae6fd" : "#38bdf8",
    directionalLeftLight: isLight ? "#e0f2fe" : "#cbd5e1", // Adjusted light/dark lights
    directionalTopLight: isLight ? "#f8fafc" : "#f1f5f9",
    pointLight: isLight ? "#e0f2fe" : "#ffffff",
    arcTime: 1200, arcLength: 0.8, rings: 1, maxRings: 3,
    initialPosition: { lat: weiden.lat, lng: weiden.lng },
    autoRotate: true, autoRotateSpeed: 0.3,
  }), [isLight, weiden]);

  const arcColors = useMemo(() => [
    "#0ea5e9", "#22d3ee", "#a78bfa", "#f472b6", "#34d399", "#facc15"
  ], []);

  const sampleArcs = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
    order: i + 1,
    startLat: i % 2 === 0 ? weiden.lat : colombo.lat,
    startLng: i % 2 === 0 ? weiden.lng : colombo.lng,
    endLat: i % 2 === 0 ? colombo.lat : weiden.lat,
    endLng: i % 2 === 0 ? colombo.lng : weiden.lng,
    arcAlt: 0.5 + Math.random() * 0.4,
    color: arcColors[i % arcColors.length]
  })), [weiden, colombo, arcColors]);

  // --- Text Styles (Unchanged) ---
  const greetingBaseStyle = "text-3xl sm:text-4xl md:text-5xl font-medium mb-5 sm:mb-8";
  const titleStyle = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight " + 
                     "dark:text-shadow-[0_0_15px_rgba(255,255,255,0.3),_0_0_25px_rgba(255,255,255,0.2)] " +
                     "text-shadow-[0_0_10px_rgba(0,0,0,0.2),_0_0_15px_rgba(0,0,0,0.1)]";
  const paragraphStyle = "text-lg sm:text-xl md:text-2xl font-normal text-gray-700 dark:text-gray-200 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 " +
                         "dark:text-shadow-[0_0_8px_rgba(255,255,255,0.2)] " +
                         "text-shadow-[0_0_6px_rgba(0,0,0,0.1)]";
  const ctaBaseStyle = "text-xl md:text-2xl font-semibold";
  
  // --- Animation Variants (Unchanged) ---
  const textBlockParentVariants = { /* ... */ };
  const childStaticEntranceVariants = { /* ... */ };


  // Prepare the `words` for ContainerTextFlip based on activeLanguage for greetings
  const greetingWords = useMemo(() => 
    languageOptionsOrder.map(langCode => allTextContentData[langCode].greeting), 
    [] // Only depends on constant allTextContentData, so calculated once
  );
  // Determine initial greeting for ContainerTextFlip based on active language
  // The `ContainerTextFlip` likely rotates these, but its initial displayed word might matter.
  // To set initial word of ContainerTextFlip: find index of activeLang in languageOptionsOrder and pass that to CTF
  // OR, let CTF just start with its first word in the `greetingWords` array.

  return (
    <div
      className="h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center dark:bg-slate-950 bg-sky-100 cursor-pointer font-sans"
      onClick={handlePageClick}
      onTouchStart={handlePageClick}
    >
      <div className="absolute inset-0 z-0 opacity-60 dark:opacity-40">
        <AnimatedBackgroundBlobs />
      </div>

      <div className="absolute inset-0 sm:-top-20 z-10 aspect-[1/1] lg:h-full lg:w-full sm:h-full sm:w-auto">
        <World key={renderKey} data={sampleArcs} globeConfig={globeConfig} />
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-56 md:h-72 bg-gradient-to-t pointer-events-none select-none from-sky-100 via-sky-100/80 dark:from-slate-950 dark:via-slate-950/80 to-transparent z-20" />

      <motion.div 
        className="relative z-30 flex flex-col items-center text-center p-4 sm:p-6 md:p-8 w-full"
        variants={textBlockParentVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div 
            variants={childStaticEntranceVariants} 
            className={greetingBaseStyle + "text-gray-800 dark:text-gray-100 dark:text-shadow-[0_0_10px_rgba(255,255,255,0.25)] text-shadow-[0_0_8px_rgba(0,0,0,0.15)]"}
            // Keying ContainerTextFlip with activeLanguage so it re-initializes if lang changes.
            // This assumes ContainerTextFlip might have internal state affected by its initial props.
            key={`greeting-ctf-${activeLanguage}`} 
        >
          <ContainerTextFlip
            words={greetingWords} // Pass all greeting words
            // If ContainerTextFlip supports starting with a specific word, determine it here
            // For now, it will rotate all provided greeting words.
            // currentWord={currentText.greeting} // <-- If ContainerTextFlip supports this prop
            className="inline-block" 
          />
        </motion.div>

        {/* Title, Paragraph, and CTA use RotatingText which handles language change via textKey */}
        <RotatingText
          // Key change includes activeLanguage to force re-animation if language changes
          textKey={`${activeLanguage}-title`} 
          text={currentText.title}
          className={titleStyle}
          tag="h1"
        />
        <RotatingText
          textKey={`${activeLanguage}-paragraph`}
          text={currentText.paragraph}
          className={paragraphStyle}
          tag="p"
        />
        <motion.div 
          variants={childStaticEntranceVariants}
          className="mt-8 md:mt-10"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className={`${ctaBaseStyle} text-blue-500 dark:text-sky-400 dark:text-shadow-[0_0_10px_rgba(14,165,233,0.5)] text-shadow-[0_0_8px_rgba(59,130,246,0.3)]`}
          >
            <RotatingText
              textKey={`${activeLanguage}-cta`}
              text={currentText.cta}
              className=""
              tag="p"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}