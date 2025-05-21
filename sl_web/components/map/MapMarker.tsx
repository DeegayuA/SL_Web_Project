// src/app/components/map/MapMarker.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { MapPoint } from '@/config/mapPoints.config';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

// (Language definitions and state from previous step remain unchanged here)
type LangCode = 'en' | 'de' | 'si';
const defaultLangCode: LangCode = 'en';
const mapPointTranslations: Record<LangCode, Record<string, string>> = {
  en: { /* ... English names ... */ Jaffna: 'Nallur Kandasamy Temple', Mannar: 'Madhu Road Sanctuary', Elephant_Pass: 'Elephant Pass Causeway', Anuradhapura_Temple: 'Jethawanaramaya Temple', Anuradhapura_Statue: 'Aukana Statue', Polonnaruwa: 'Dalada Maluwa', Sigiriya: 'Sigiriya Rock', Wilpattu: 'Wilpattu National Park', Trincomalee: 'Koneswaram Temple', Passekudah: 'Passekudah Bay', Batticaloa: 'Batticaloa Lagoon', Arugambay: 'Arugam Bay Surfing', Kalpitiya: 'Kalpitiya Kitesurfing', Chilaw: 'Munneswaram Temple', Negombo: "St. Mary's Church", Colombo: 'Lotus Tower (Nelum Kuluna)', Kalutara: 'Kalutara Bodhiya', Bentota_Beach: 'Bentota Beach & River', Ambalangoda: 'Ambalangoda Masks', Hikkaduwa_Beach: 'Hikkaduwa Corals', Galle: 'Galle Fort', Unawatuna_Beach: 'Unawatuna Bay', Mirissa: 'Mirissa Whale Watching', Hambantota: 'Bundala National Park', Kataragama: 'Kataragama Sacred City (Yala Gateway)', Pinnawala: 'Pinnawala Elephant Orphanage', Kandy: 'Temple of the Tooth Relic', Nuwara_Eliya: 'Nuwara Eliya Tea Country', Ella: 'Ella - Nine Arch Bridge', Bandarawela: 'Bandarawela Town', Mahiyanganaya: 'Mahiyangana Temple', Ratnapura_Gems: 'Ratnapura - City of Gems', Ratnapura_Forest: 'Sinharaja Forest Reserve', Ratnapura_Park: 'Udawalawe National Park',},
  de: { /* ... German names ... */ Jaffna: 'Nallur Kandasamy Tempel', Mannar: 'Madhu Road Schutzgebiet', Elephant_Pass: 'Elefantenpass Damm', Anuradhapura_Temple: 'Jethawanaramaya Tempel', Anuradhapura_Statue: 'Aukana Statue', Polonnaruwa: 'Dalada Maluwa', Sigiriya: 'Sigiriya Felsen', Wilpattu: 'Wilpattu Nationalpark', Trincomalee: 'Koneswaram Tempel', Passekudah: 'Passekudah Bucht', Batticaloa: 'Batticaloa Lagune', Arugambay: 'Arugam Bay Surfen', Kalpitiya: 'Kalpitiya Kitesurfen', Chilaw: 'Munneswaram Tempel', Negombo: "St. Marienkirche", Colombo: 'Lotus Turm (Nelum Kuluna)', Kalutara: 'Kalutara Bodhiya', Bentota_Beach: 'Bentota Strand & Fluss', Ambalangoda: 'Ambalangoda Masken', Hikkaduwa_Beach: 'Hikkaduwa Korallen', Galle: 'Galle Fort', Unawatuna_Beach: 'Unawatuna Bucht', Mirissa: 'Mirissa Walbeobachtung', Hambantota: 'Bundala Nationalpark', Kataragama: 'Heilige Stadt Kataragama (Yala Tor)', Pinnawala: 'Pinnawala Elefantenwaisenhaus', Kandy: 'Zahntempel', Nuwara_Eliya: 'Nuwara Eliya Teeland', Ella: 'Ella - Neun-Bogen-Brücke', Bandarawela: 'Stadt Bandarawela', Mahiyanganaya: 'Mahiyangana Tempel', Ratnapura_Gems: 'Ratnapura - Stadt der Edelsteine', Ratnapura_Forest: 'Sinharaja Waldreservat', Ratnapura_Park: 'Udawalawe Nationalpark',},
  si: { /* ... Sinhala names ... */ Jaffna: 'නල්ලූර් කන්දසාමි කෝවිල', Mannar: 'මඩු පාර අභයභූමිය', Elephant_Pass: 'අලිමංකඩ පාළම', Anuradhapura_Temple: 'ජේතවනාරාම දාගැබ', Anuradhapura_Statue: 'අවුකන පිළිමය', Polonnaruwa: 'දළදා මළුව', Sigiriya: 'සීගිරි පර්වතය', Wilpattu: 'විල්පත්තු ජාතික වනෝද්‍යානය', Trincomalee: 'කෝනේශ්වරම් කෝවිල', Passekudah: 'පාසිකුඩා බොක්ක', Batticaloa: 'මඩකලපුව කලපුව', Arugambay: 'ආරුගම්බේ රළ මත පැදීම', Kalpitiya: 'කල්පිටිය සරුංගල් ක්‍රීඩාව', Chilaw: 'මුන්නේශ්වරම් කෝවිල', Negombo: 'ශාන්ත මරියා දේවස්ථානය', Colombo: 'නෙළුම් කුළුණ', Kalutara: 'කළුතර බෝධිය', Bentota_Beach: 'බෙන්තොට වෙරළ සහ ගඟ', Ambalangoda: 'අම්බලන්ගොඩ වෙස් මුහුණු', Hikkaduwa_Beach: 'හික්කඩුව කොරල්පර', Galle: 'ගාලු කොටුව', Unawatuna_Beach: 'උණවටුන බොක්ක', Mirissa: 'මිරිස්ස තල්මසුන් නැරඹීම', Hambantota: 'බුන්දල ජාතික වනෝද්‍යානය', Kataragama: 'කතරගම පූජා නගරය (යාල දොරටුව)', Pinnawala: 'පින්නවල අලි අනාථාගාරය', Kandy: 'ශ්‍රී දළදා මාළිගාව', Nuwara_Eliya: 'නුවරඑළිය තේ දේශය', Ella: 'ඇල්ල - නයින් ආච් පාලම', Bandarawela: 'බණ්ඩාරවෙල නගරය', Mahiyanganaya: 'මහියංගන විහාරය', Ratnapura_Gems: 'රත්නපුර - මැණික් නගරය', Ratnapura_Forest: 'සිංහරාජ වන රක්ෂිතය', Ratnapura_Park: 'උඩවලව ජාතික වනෝද්‍යානය',}
};

export interface MapMarkerProps {
  point: MapPoint;
  onClick: () => void;
  isActive: boolean;
  isHovered: boolean;
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
  const [currentLanguageCode, setCurrentLanguageCode] = useState<LangCode>(() => {
    if (typeof window !== 'undefined') {
      const savedLangCode = localStorage.getItem('preferredLanguage') as LangCode | null;
      if (savedLangCode && (Object.keys(mapPointTranslations) as LangCode[]).includes(savedLangCode)) {
        return savedLangCode;
      }
    }
    return defaultLangCode;
  });

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'preferredLanguage' && event.newValue) {
        const newLangCode = event.newValue as LangCode;
        if ((Object.keys(mapPointTranslations) as LangCode[]).includes(newLangCode)) {
          setCurrentLanguageCode(newLangCode);
        }
      }
    };
    if (typeof window !== 'undefined') {
      const savedLangCode = localStorage.getItem('preferredLanguage') as LangCode | null;
       if (savedLangCode && (Object.keys(mapPointTranslations) as LangCode[]).includes(savedLangCode)) {
           setCurrentLanguageCode(prevCode => prevCode !== savedLangCode ? savedLangCode : prevCode);
       }
    }
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const translatedPointName = mapPointTranslations[currentLanguageCode]?.[point.id] || point.name;

  const markerPinSizeClasses = isActive
    ? 'w-8 h-8 md:w-10 md:h-10'
    : 'w-5 h-5 md:w-6 md:h-6';

  const fallbackThemeColor = '#78716C'; // stone-500 hex
  const actualThemeColor = point.themeColor || fallbackThemeColor;
  // isHexTheme is removed as actualThemeColor is now always hex

  const actualPlaceholderColor = point.placeholderColor || actualThemeColor;
  const isHexPlaceholder = actualPlaceholderColor.startsWith('#'); 

  const getColorClass = (
    property: 'text' | 'bg' | 'fill' | 'border',
    colorValue: string,
    isHexColor: boolean, 
    opacity?: string | number
  ): string => {
    let classString = `${property}-`;
    if (isHexColor) {
      classString += `[${colorValue}]`;
    } else {
      classString += colorValue;
    }
    if (opacity !== undefined && opacity !== '' && opacity !== 100) {
      classString += `/${opacity}`;
    }
    return classString;
  };

  // Using `let` is appropriate here as we are conditionally building these arrays.
  // ESLint might prefer `const` if it doesn't detect the conditional pushes effectively,
  // but for readability in this pattern, `let` is fine.
  // You can add // eslint-disable-next-line prefer-const above each if needed.
  const pinClassesArr: string[] = [];
  const labelClassesArr: string[] = [];
  const placeholderBgClassesArr: string[] = ['border'];

  const pulseBgClasses = `${getColorClass('bg', actualThemeColor, true, 30)} dark:${getColorClass('bg', actualThemeColor, true, 25)}`;
  const innerAccentBgClass = getColorClass('bg', actualThemeColor, true);


  if (isActive) {
    // PIN
    pinClassesArr.push(getColorClass('text', actualThemeColor, true));
    pinClassesArr.push(getColorClass('fill', actualThemeColor, true, 40));
    pinClassesArr.push(`dark:${getColorClass('text', actualThemeColor, true)}`);
    pinClassesArr.push(`dark:${getColorClass('fill', actualThemeColor, true, 35)}`);

    // LABEL
    labelClassesArr.push(getColorClass('text', actualThemeColor, true));
    labelClassesArr.push(`dark:${getColorClass('text', actualThemeColor, true)}`);
    labelClassesArr.push('font-semibold');

    // PLACEHOLDER
    placeholderBgClassesArr.push(getColorClass('bg', actualPlaceholderColor, isHexPlaceholder, 10));
    placeholderBgClassesArr.push(getColorClass('border', actualPlaceholderColor, isHexPlaceholder, 40));
    placeholderBgClassesArr.push(`dark:${getColorClass('bg', actualPlaceholderColor, isHexPlaceholder, 5)}`);
    placeholderBgClassesArr.push(`dark:${getColorClass('border', actualPlaceholderColor, isHexPlaceholder, 30)}`);

  } else if (isHovered) {
    // PIN
    pinClassesArr.push(getColorClass('text', actualThemeColor, true));
    pinClassesArr.push(getColorClass('fill', actualThemeColor, true, 30));
    pinClassesArr.push(`dark:${getColorClass('text', actualThemeColor, true)}`);
    pinClassesArr.push(`dark:${getColorClass('fill', actualThemeColor, true, 25)}`);

    // LABEL
    labelClassesArr.push(getColorClass('text', actualThemeColor, true));
    labelClassesArr.push(`dark:${getColorClass('text', actualThemeColor, true, 90)}`);
    labelClassesArr.push('font-medium');

    // PLACEHOLDER
    placeholderBgClassesArr.push(getColorClass('bg', actualPlaceholderColor, isHexPlaceholder, 10));
    placeholderBgClassesArr.push(getColorClass('border', actualPlaceholderColor, isHexPlaceholder, 30));
    placeholderBgClassesArr.push(`dark:${getColorClass('bg', actualPlaceholderColor, isHexPlaceholder, 5)}`);
    placeholderBgClassesArr.push(`dark:${getColorClass('border', actualPlaceholderColor, isHexPlaceholder, 20)}`);

  } else { // IDLE STATE
    // PIN - Make it colorful by default!
    pinClassesArr.push(getColorClass('text', actualThemeColor, true));         
    pinClassesArr.push(getColorClass('fill', actualThemeColor, true, 80));     
    pinClassesArr.push(`dark:${getColorClass('text', actualThemeColor, true, 90)}`); 
    pinClassesArr.push(`dark:${getColorClass('fill', actualThemeColor, true, 70)}`);     

    // LABEL - Default slate colors for idle non-hovered label
    labelClassesArr.push('font-medium text-slate-600 dark:text-slate-400');
    
    // Group Hover styling
    pinClassesArr.push(`group-hover:${getColorClass('text', actualThemeColor, true)}`);
    pinClassesArr.push(`group-hover:${getColorClass('fill', actualThemeColor, true, 90)}`);
    pinClassesArr.push(`dark:group-hover:${getColorClass('text', actualThemeColor, true)}`);
    pinClassesArr.push(`dark:group-hover:${getColorClass('fill', actualThemeColor, true, 85)}`);
    labelClassesArr.push('group-hover:text-slate-700 dark:group-hover:text-slate-300');


    // PLACEHOLDER
    placeholderBgClassesArr.push('border-transparent');
    placeholderBgClassesArr.push(`group-hover:${getColorClass('bg', actualPlaceholderColor, isHexPlaceholder, 5)}`);
    placeholderBgClassesArr.push(`group-hover:dark:${getColorClass('bg', actualPlaceholderColor, isHexPlaceholder, '[0.03]')}`);
    placeholderBgClassesArr.push(`group-hover:${getColorClass('border', actualPlaceholderColor, isHexPlaceholder, 20)}`);
    placeholderBgClassesArr.push(`group-hover:dark:${getColorClass('border', actualPlaceholderColor, isHexPlaceholder, 15)}`);
  }

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: 10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      whileTap={{ scale: isActive ? 1.0 : 0.94 }}
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={cn(
        'absolute focus:outline-none group cursor-pointer',
        'flex flex-col items-center justify-center',
        isActive ? 'z-30' : 'z-20' 
      )}
      style={{
        left: point.svgCoords.x,
        top: point.svgCoords.y,
        transform: 'translateX(-50%) translateY(-100%)',
      }}
      aria-label={`Discover ${translatedPointName}`}
    >
      <motion.div
        layoutId={`marker-ph-bg-${point.id}`}
        className={cn(
          "absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2",
          "w-max min-w-[calc(100%+12px)] px-1.5 pt-[1px] pb-[2px] rounded-full",
          "transition-all duration-150 ease-out",
          placeholderBgClassesArr, 
          "-z-10" 
        )}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: (isHovered) ? 1 : 0, y: (isHovered) ? 0 : 5 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.15 }}
      />

      {isActive && (
        <motion.div
          className={cn(
            "absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
            "pointer-events-none -z-20", 
            pulseBgClasses
          )}
          style={{
            width: '200%', 
            paddingBottom: '200%' 
          }}
          animate={{ scale: [0.7, 1.6, 0.7], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, ease: "linear", repeat: Infinity, delay: 0.1 }}
        />
      )}

      <div className="relative">
        <MapPin
          className={cn(
            'transition-all duration-150 ease-in-out', 
            markerPinSizeClasses,
            pinClassesArr, 
            "relative z-10" 
          )}
          strokeWidth={isActive || isHovered ? 2.25 : 1.75}
        />
        {(isActive || isHovered) && (
          <motion.div
            className={cn(
                "absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full opacity-40", 
                innerAccentBgClass
            )}
            initial={{scale:0}} animate={{scale:1}} transition={{delay:0.05, duration:0.2}}
            />
        )}
      </div>

      <motion.div
        layout
        className={cn(
          "mt-1 text-[10px] md:text-xs whitespace-nowrap select-none",
          "transition-colors duration-150 ease-in-out", 
          labelClassesArr, 
          "relative z-10 leading-tight pt-0.5"
        )}
      >
        {translatedPointName}
      </motion.div>

      <AnimatePresence>
        {isHovered && !isActive && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness:280, damping:20 }}
            className={cn(
              'absolute top-full left-1/2 -translate-x-1/2 mt-2.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold shadow-xl pointer-events-none',
              "bg-slate-800 text-white dark:bg-black/85 dark:text-slate-100", 
              "border border-slate-700 dark:border-slate-600",
              "backdrop-blur-sm",
              "z-40"
            )}
          >
            {translatedPointName}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}