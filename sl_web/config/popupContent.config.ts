// src/config/popupContent.config.ts

export type LangCode = 'en' | 'de' | 'si';

export interface PopupImage {
  src: string;
  alt: string;
}

export interface TranslatableContent {
  areaName: string;
  description: string;
  attractions: string[];
}

export interface PopupContentEntry {
  images: PopupImage[];
  themeColor?: string; // Hex color string e.g., '#DC2626'
  translations: Record<LangCode, TranslatableContent>;
}

export const popupData: Record<string, PopupContentEntry> = {
  // --- NORTHERN PROVINCE ---
  Jaffna: {
    images: [
      { src: '/places/Jaffna1.avif', alt: 'Nallur Kandasamy Temple, Jaffna' },
      { src: '/places/Jaffna2.jpg', alt: 'Intricate carvings at Nallur Temple' },
    ],
    themeColor: '#DC2626', // red-600
    translations: {
      en: {
        areaName: 'Nallur Kandasamy Temple',
        description: 'In the hot, arid landscape of northern Sri Lanka’s Jaffna peninsula stands the Nallur Kandasamy Temple, a radiant jewel of Dravidian architecture and centuries-old devotion. Consecrated to Lord Murugan—the Hindu god of war, love, and wisdom—the temple’s towering gopurams (ornate gateway towers) gleam in gold and vermilion, guiding pilgrims from afar. Inside, the inner sanctum houses the vel (divine spear) of Murugan under a canopy of silver and sandalwood, while the walls echo with chants and the fragrance of incense. Annual festivals see thousands converge in joyous processions, vibrant dances, and traditional drumming that reverberates through the warm Jaffna air.',
        attractions: ["Nallur Temple Festival", "Jaffna Fort", "Jaffna Library"],
      },
      de: {
        areaName: 'Nallur Kandasamy Tempel',
        description: 'In der heißen, trockenen Landschaft der Jaffna-Halbinsel im Norden Sri Lankas steht der Nallur Kandasamy Tempel, ein strahlendes Juwel dravidischer Architektur und jahrhundertealter Hingabe. Geweiht Lord Murugan – dem hinduistischen Gott des Krieges, der Liebe und der Weisheit – ragen die hochaufragenden Gopurams (kunstvolle Tortürme) des Tempels in Gold und Zinnoberrot empor und weisen Pilgern von weither den Weg. Im Inneren beherbergt das Allerheiligste den Vel (göttlichen Speer) Murugans unter einem Baldachin aus Silber und Sandelholz, während die Wände von Gesängen und dem Duft von Weihrauch widerhallen. Bei jährlichen Festen strömen Tausende in freudigen Prozessionen, lebhaften Tänzen und traditionellem Trommeln zusammen, das durch die warme Luft Jaffnas hallt.',
        attractions: ["Nallur Tempelfest", "Festung Jaffna", "Bibliothek Jaffna"],
      },
      si: {
        areaName: 'නල්ලූර් කන්දසාමි කෝවිල',
        description: 'උතුරු ශ්‍රී ලංකාවේ යාපනය අර්ධද්වීපයේ උණුසුම්, වියළි භූ දර්ශනය තුළ නල්ලූර් කන්දසාමි කෝවිල පිහිටා ඇත. එය ද්‍රවිඩ ගෘහ නිර්මාණ ශිල්පයේ සහ සියවස් ගණනාවක් පැරණි භක්තියේ විචිත්‍රවත් මැණිකකි. යුද්ධයට, ආදරයට සහ ප්‍රඥාවට අධිපති හින්දු දෙවියෙකු වන මුරුගන් දෙවියන් වෙනුවෙන් කැප කරන ලද මෙම කෝවිලේ උස් වූ ගෝපුරම් (අලංකාර දොරටු කුළුණු) රන්වන් සහ වර්මිලියන් පැහැයෙන් දිදුල며 දුර සිට වන්දනාකරුවන්ට මඟ පෙන්වයි. ඇතුළත, රිදී සහ සඳුන් වියනක් යටතේ මුරුගන් දෙවියන්ගේ වේල් (දිව්‍යමය හෙල්ලය) තැන්පත් කර ඇති අතර, බිත්ති ගායනා සහ සුවඳ දුම් සුවඳින් ಪ್ರತಿധ୍වනි වේ. වාර්ෂික උත්සව වලදී දහස් ගණනක් ජනයා ප්‍රීතිමත් පෙරහැරවල්, විචිත්‍රවත් නැටුම් සහ උණුසුම් යාපනයේ වාතය පුරා ప్రతిಧ්වනි දෙන සාම්ප්‍රදායික බෙර වාදනය සඳහා එක්රැස් වෙති.',
        attractions: ["නල්ලූර් කෝවිල් උත්සවය", "යාපනය බලකොටුව", "යාපනය පුස්තකාලය"],
      },
    },
  },
  Mannar: {
    images: [
      { src: '/places/Mannar1.jfif', alt: 'Birds at Madhu Road Sanctuary, Mannar' },
      { src: '/places/Mannar2.jpg', alt: 'Scenic view in Mannar' },
      { src: '/places/Mannar3.jpg', alt: 'Traditional fishing in Mannar' },
    ],
    themeColor: '#0284C7', // sky-600
    translations: {
      en: {
        areaName: 'Madhu Road Sanctuary & Mannar Fort',
        description: 'Just south of Mannar town, Madhu Road Sanctuary covers over 30 square kilometers of brackish lagoons, rice paddies, and thorn scrub habitats—an essential refuge for migratory birds along the Central Asian Flyway. Explore the historic Mannar Fort, a star-shaped fortress built by the Portuguese, later controlled by the Dutch and British, offering glimpses into the island\'s colonial past. From November through March, the skies fill with flamingos, pelicans, and painted storks, while the shallow waters host rare shorebirds. Local fishermen still ply the glimmering channels in traditional coracles.',
        attractions: ["Bird Watching", "Mannar Fort", "Our Lady of Madhu Church (nearby)"],
      },
      de: {
        areaName: 'Madhu Road Schutzgebiet & Festung Mannar',
        description: 'Südlich der Stadt Mannar erstreckt sich das Madhu Road Schutzgebiet über 30 Quadratkilometer mit Brackwasserlagunen, Reisfeldern und Dornstrauchsavannen – ein wichtiger Zufluchtsort für Zugvögel entlang der Zentralasiatischen Flugroute. Erkunden Sie die historische Festung Mannar, eine sternförmige Festung, die von den Portugiesen erbaut und später von den Holländern und Briten kontrolliert wurde und Einblicke in die koloniale Vergangenheit der Insel bietet. Von November bis März füllen Flamingos, Pelikane und Buntstörche den Himmel, während die seichten Gewässer seltene Watvögel beherbergen. Einheimische Fischer befahren noch immer die glitzernden Kanäle in traditionellen Kähnen.',
        attractions: ["Vogelbeobachtung", "Festung Mannar", "Unsere Liebe Frau von Madhu Kirche (in der Nähe)"],
      },
      si: {
        areaName: 'මඩු පාර අභයභූමිය සහ මන්නාරම් බලකොටුව',
        description: 'මන්නාරම් නගරයට දකුණින් පිහිටි මඩු පාර අභයභූමිය වර්ග කිලෝමීටර් 30කට අධික කරදිය කලපු, කුඹුරු සහ කටු පඳුරු සහිත වාසස්ථාන වලින් සමන්විත වේ - එය මධ්‍යම ආසියානු පියාසර මාර්ගය ඔස්සේ සංක්‍රමණික පක්ෂීන් සඳහා අත්‍යවශ්‍ය රැකවරණයකි. පෘතුගීසීන් විසින් ඉදිකරන ලද, පසුව ලන්දේසීන් සහ බ්‍රිතාන්‍යයන් විසින් පාලනය කරන ලද තරු හැඩැති බලකොටුවක් වන ඓතිහාසික මන්නාරම් බලකොටුව ගවේෂණය කරන්න, එය දිවයිනේ යටත් විජිත අතීතය පිළිබඳ දර්ශන සපයයි. නොවැම්බර් සිට මාර්තු දක්වා අහස ෆ්ලෙමින්ගෝ, පෙලිකන් සහ පින්තාරු කරන ලද කොකුන්ගෙන් පිරී ඇති අතර, නොගැඹුරු ජලය දුර්ලභ වෙරළබඩ පක්ෂීන්ට සත්කාරකත්වය සපයයි. දේශීය ධීවරයින් තවමත් සාම්ප්‍රදායික ඔරු වලින් දිදුලන ඇළ මාර්ගවල ගමන් කරති.',
        attractions: ["කුරුළු නැරඹීම", "මන්නාරම් බලකොටුව", "මඩු පල්ලිය (අසල)"],
      },
    },
  },
  Elephant_Pass: {
    images: [
        { src: '/places/Elephant Pass1.jpg', alt: 'Chundikulam Bird Sanctuary landscape' },
        { src: '/places/Elephant Pass2.jpg', alt: 'Birdlife at Chundikulam' },
        { src: '/places/Elephant Pass3.jpg', alt: 'Elephant Pass Causeway view' },
    ],
    themeColor: '#F97316', // orange-500
    translations: {
      en: {
        areaName: 'Chundikulam Bird Sanctuary & Elephant Pass Causeway',
        description: 'Elephant Pass, a narrow causeway, historically significant as a strategic military location, now connects the Jaffna Peninsula to the mainland. Nearby, the Chundikulam National Park, a bird sanctuary, offers a haven for migratory birds with its diverse ecosystem of lagoons, mangroves, and scrublands. It is a prime spot for birdwatching enthusiasts, especially during the migratory season.',
        attractions: ["Birdwatching at Chundikulam", "Elephant Pass War Memorial", "Salt Pans"],
      },
      de: {
        areaName: 'Chundikulam Vogelschutzgebiet & Elefantenpass Damm',
        description: 'Der Elefantenpass, ein schmaler Damm, historisch bedeutsam als strategischer Militärstandort, verbindet heute die Jaffna-Halbinsel mit dem Festland. In der Nähe bietet der Chundikulam Nationalpark, ein Vogelschutzgebiet, mit seinem vielfältigen Ökosystem aus Lagunen, Mangroven und Buschland einen Zufluchtsort für Zugvögel. Er ist ein erstklassiger Ort für Vogelbeobachter, besonders während der Zugvogelsaison.',
        attractions: ["Vogelbeobachtung in Chundikulam", "Elefantenpass Kriegsdenkmal", "Salinen"],
      },
      si: {
        areaName: 'චුන්ඩිකුලම් කුරුළු අභයභූමිය සහ අලිමංකඩ පාළම',
        description: 'අලිමංකඩ, පටු පාළමක් වන අතර, ඓතිහාසිකව උපායමාර්ගික හමුදා ස්ථානයක් ලෙස වැදගත් වන අතර, දැන් යාපනය අර්ධද්වීපය ප්‍රධාන භූමියට සම්බන්ධ කරයි. අසල පිහිටි චුන්ඩිකුලම් ජාතික වනෝද්‍යානය, කුරුළු අභයභූමියක් වන අතර, එහි විවිධ පරිසර පද්ධතිය වන කලපු, කඩොලාන සහ ලඳු කැලෑ සමඟ සංක්‍රමණික පක්ෂීන්ට තෝතැන්නක් සපයයි. විශේෂයෙන්ම සංක්‍රමණික සමයේදී කුරුළු නැරඹීමේ ලෝලීන්ට එය ප්‍රධාන ස්ථානයකි.',
        attractions: ["චුන්ඩිකුලම්හි කුරුළු නැරඹීම", "අලිමංකඩ යුද ස්මාරකය", "ලුණු ලේවා"],
      },
    },
  },

  // --- NORTH CENTRAL PROVINCE ---
  Anuradhapura_Temple: {
    images: [
      { src: '/places/Anuradhapura_Temple.jpg', alt: 'Jethawanaramaya Stupa, Anuradhapura' },
      { src: '/places/Anuradhapura_Temple2.jpg', alt: 'Ancient ruins in Anuradhapura' },
      { src: '/places/Anuradhapura_Temple3.avif', alt: 'Devotees at a sacred site in Anuradhapura' },
    ],
    themeColor: '#C2410C', // orange-700
    translations: {
        en: {
            areaName: 'Jethawanaramaya & Anuradhapura Sacred City',
            description: 'Anuradhapura, the first ancient capital of Sri Lanka, is a UNESCO World Heritage site boasting colossal dagobas (stupas), ancient temples, and intricate stone carvings. The Jethawanaramaya stupa, once one of the tallest structures in the ancient world, stands as a testament to the city\'s grandeur. Explore the sacred Bodhi tree, monastic ruins, and vast reservoirs that sustained this remarkable civilization.',
            attractions: ["Jethawanaramaya", "Ruwanwelisaya", "Sri Maha Bodhi", "Abhayagiri Dagaba"],
        },
        de: {
            areaName: 'Jethawanaramaya & Heilige Stadt Anuradhapura',
            description: 'Anuradhapura, die erste alte Hauptstadt Sri Lankas, ist ein UNESCO-Weltkulturerbe mit kolossalen Dagobas (Stupas), alten Tempeln und kunstvollen Steinmetzarbeiten. Die Jethawanaramaya-Stupa, einst eines der höchsten Bauwerke der Antike, zeugt von der Pracht der Stadt. Erkunden Sie den heiligen Bodhi-Baum, Klosterruinen und riesige Reservoirs, die diese bemerkenswerte Zivilisation unterhielten.',
            attractions: ["Jethawanaramaya", "Ruwanwelisaya", "Sri Maha Bodhi", "Abhayagiri Dagaba"],
        },
        si: {
            areaName: 'ජේතවනාරාමය සහ අනුරාධපුර පූජා නගරය',
            description: 'ශ්‍රී ලංකාවේ පළමු පුරාණ අගනුවර වන අනුරාධපුරය, දැවැන්ත දාගැබ් (ස්තූප), පුරාණ විහාරස්ථාන සහ සංකීර්ණ ගල් කැටයම් වලින් සමන්විත යුනෙස්කෝ ලෝක උරුම අඩවියකි. පුරාණ ලෝකයේ උසම ව්‍යුහයන්ගෙන් එකක් වූ ජේතවනාරාම ස්තූපය, නගරයේ ශ්‍රී විභූතියට සාක්ෂි දරයි. පූජනීය බෝධීන් වහන්සේ, ආරාම නටබුන් සහ මෙම විස්මිත ශිෂ්ටාචාරය පවත්වාගෙන ගිය විශාල ජලාශ ගවේෂණය කරන්න.',
            attractions: ["ජේතවනාරාමය", "රුවන්වැලිසෑය", "ශ්‍රී මහා බෝධිය", "අභයගිරි දාගැබ"],
        }
    }
  },
  Anuradhapura_Statue: {
    images: [
      { src: '/places/Anuradhapura_Statue1.jfif', alt: 'Aukana Buddha Statue side view' },
      { src: '/places/Anuradhapura_Statue2.jpg', alt: 'Full view of Aukana Buddha Statue' },
    ],
    themeColor: '#78716C', // stone-500
    translations: {
        en: {
            areaName: 'Aukana Buddha Statue',
            description: 'The Aukana Buddha statue is a magnificent standing statue of the Buddha near Kekirawa in North Central Sri Lanka. Towering over 12 meters (40 feet), it is carved out of a large granite rock face and is a masterpiece of ancient Sinhalese art and engineering. The statue’s serene expression and detailed robes showcase the sculptor’s skill. It remains an important pilgrimage site.',
            attractions: ["Aukana Statue Visit", "Nearby ancient reservoirs", "Kala Wewa"],
        },
        de: {
            areaName: 'Aukana Buddha-Statue',
            description: 'Die Aukana-Buddha-Statue ist eine prächtige stehende Buddha-Statue in der Nähe von Kekirawa in Nord-Zentral-Sri Lanka. Mit einer Höhe von über 12 Metern (40 Fuß) ist sie aus einer großen Granitfelswand gehauen und ein Meisterwerk der alten singhalesischen Kunst und Ingenieurskunst. Der heitere Ausdruck und die detaillierten Gewänder der Statue zeugen von der Kunstfertigkeit des Bildhauers. Sie ist nach wie vor ein wichtiger Wallfahrtsort.',
            attractions: ["Besuch der Aukana-Statue", "Nahegelegene alte Stauseen", "Kala Wewa"],
        },
        si: {
            areaName: 'අවුකන බුද්ධ ප්‍රතිමාව',
            description: 'අවුකන බුද්ධ ප්‍රතිමාව යනු උතුරු මැද ශ්‍රී ලංකාවේ කැකිරාව අසල පිහිටි අතිවිශිෂ්ට හිටි බුද්ධ ප්‍රතිමාවකි. මීටර් 12 (අඩි 40) කට වඩා උසැති එය විශාල ග්‍රැනයිට් පර්වතයකින් නෙළා ඇති අතර පුරාණ සිංහල කලාවේ සහ ඉංජිනේරු ශිල්පයේ අග්‍රකෘතියකි. ප්‍රතිමාවේ ශාන්ත මුහුණුවර සහ සවිස්තරාත්මක චීවරය මූර්ති ශිල්පියාගේ දක්ෂතාවය විදහා දක්වයි. එය වැදගත් වන්දනා ස්ථානයක් ලෙස පවතී.',
            attractions: ["අවුකන පිළිමය නැරඹීම", "අසල පුරාණ ජලාශ", "කලා වැව"],
        }
    }
  },
  Polonnaruwa: {
    images: [
      { src: '/places/Polonnaruwa1.jpg', alt: 'Vatadage in Polonnaruwa' },
      { src: '/places/Polonnaruwa2.jpg', alt: 'Gal Vihara Buddha statues' },
      { src: '/places/Polonnaruwa3.jpg', alt: 'Ruins of Polonnaruwa ancient city' },
    ],
    themeColor: '#D97706', // amber-600
    translations: {
        en: {
            areaName: 'Polonnaruwa Sacred Quadrangle (Dalada Maluwa)',
            description: 'Polonnaruwa, the second ancient capital of Sri Lanka, is famed for its well-preserved ruins within a compact area. The Dalada Maluwa, or Sacred Quadrangle, is its heart, containing impressive structures like the Vatadage, Hatadage, and Atadage, which once housed the Sacred Tooth Relic. Discover colossal Buddha statues at Gal Vihara and the Parakrama Samudra reservoir.',
            attractions: ["Sacred Quadrangle", "Gal Vihara", "Parakrama Samudra", "Royal Palace ruins"],
        },
        de: {
            areaName: 'Heiliges Viereck Polonnaruwa (Dalada Maluwa)',
            description: 'Polonnaruwa, die zweite alte Hauptstadt Sri Lankas, ist berühmt für ihre gut erhaltenen Ruinen auf engem Raum. Das Dalada Maluwa oder Heilige Viereck ist ihr Herzstück und enthält beeindruckende Bauten wie das Vatadage, Hatadage und Atadage, die einst die Heilige Zahnreliquie beherbergten. Entdecken Sie kolossale Buddha-Statuen im Gal Vihara und den Parakrama Samudra Stausee.',
            attractions: ["Heiliges Viereck", "Gal Vihara", "Parakrama Samudra", "Ruinen des Königspalastes"],
        },
        si: {
            areaName: 'පොළොන්නරුව පූජනීය චතුරශ්‍රය (දළදා මළුව)',
            description: 'ශ්‍රී ලංකාවේ දෙවන පුරාණ අගනුවර වන පොළොන්නරුව, සංයුක්ත ප්‍රදේශයක් තුළ හොඳින් සංරක්ෂණය කර ඇති නටබුන් සඳහා ප්‍රසිද්ධය. දළදා මළුව හෙවත් පූජනීය චතුරශ්‍රය එහි හදවත වන අතර, වටදාගෙය, හැටදාගෙය සහ අටදාගෙය වැනි දළදා වහන්සේ වරක් වැඩසිටි විස්මිත ව්‍යුහයන් එහි අඩංගු වේ. ගල් විහාරයේ දැවැන්ත බුද්ධ ප්‍රතිමා සහ පරාක්‍රම සමුද්‍ර ජලාශය සොයා ගන්න.',
            attractions: ["පූජනීය චතුරශ්‍රය", "ගල් විහාරය", "පරාක්‍රම සමුද්‍රය", "රාජකීය මාලිගා නටබුන්"],
        }
    }
  },

  // --- EASTERN PROVINCE ---
  Arugambay: {
    images: [
      { src: '/places/Arugambay1.jfif', alt: 'Surfing action at Arugam Bay' },
      { src: '/places/Arugambay2.webp', alt: 'Arugam Bay beach an-d surfers' },
      { src: '/places/Arugambay3.jpg', alt: 'Relaxed atmosphere of Arugam Bay' },
    ],
    themeColor: '#3B82F6', // blue-500
    translations: {
      en: {
        areaName: 'Arugam Bay - Surfers\' Paradise',
        description: 'Renowned internationally as a top surfing destination, Arugam Bay on Sri Lanka’s southeast coast offers consistent barrels and a laid-back vibe. Main Point is the star attraction, but several other spots cater to different skill levels. Beyond surfing, enjoy the pristine beaches, explore nearby lagoons, or visit Kumana National Park for wildlife.',
        attractions: ["Surfing (Main Point, Peanut Farm, Whiskey Point)", "Muhudu Maha Viharaya", "Kumana National Park (nearby)"],
      },
      de: {
        areaName: 'Arugam Bay - Paradies für Surfer',
        description: 'Arugam Bay an der Südostküste Sri Lankas ist international als Top-Surfziel bekannt und bietet konstante Wellen und eine entspannte Atmosphäre. Main Point ist die Hauptattraktion, aber mehrere andere Spots sind für unterschiedliche Könnensstufen geeignet. Neben dem Surfen können Sie die unberührten Strände genießen, nahegelegene Lagunen erkunden oder den Kumana-Nationalpark besuchen, um Wildtiere zu beobachten.',
        attractions: ["Surfen (Main Point, Peanut Farm, Whiskey Point)", "Muhudu Maha Viharaya", "Kumana-Nationalpark (in der Nähe)"],
      },
      si: {
        areaName: 'ආරුගම්බේ - සර්ෆින් ක්‍රීඩකයන්ගේ පාරාදීසය',
        description: 'ශ්‍රී ලංකාවේ ගිනිකොනදිග වෙරළ තීරයේ පිහිටි ආරුගම්බේ, ජාත්‍යන්තරව ප්‍රමුඛතම සර්ෆින් ගමනාන්තයක් ලෙස ප්‍රසිද්ධය. එය ස්ථාවර බැරල් සහ සැහැල්ලු වටපිටාවක් පිරිනමයි. ප්‍රධාන පොයින්ට් (Main Point) එහි ප්‍රධාන ආකර්ෂණය වන නමුත්, විවිධ නිපුණතා මට්ටම් සඳහා වෙනත් ස්ථාන කිහිපයක් ද ඇත. සර්ෆින් ක්‍රීඩාවෙන් ඔබ්බට, නොකිලිටි වෙරළ තීරයන් භුක්ති විඳින්න, අසල කලපු ගවේෂණය කරන්න, නැතහොත් වනජීවීන් සඳහා කුමන ජාතික වනෝද්‍යානයට පිවිසෙන්න.',
        attractions: ["සර්ෆින් (ප්‍රධාන පොයින්ට්, රටකජු ගොවිපල, විස්කි පොයින්ට්)", "මුහුදු මහා විහාරය", "කුමන ජාතික වනෝද්‍යානය (අසල)"],
      }
    }
  },
  Batticaloa: {
    images: [
      { src: '/places/Batticaloa1.jfif', alt: 'Batticaloa Lagoon view' },
      { src: '/places/Batticaloa2.jpg', alt: 'Kallady Bridge, Batticaloa' },
      { src: '/places/Batticaloa3.jpg', alt: 'Cultural sight in Batticaloa' },
    ],
    themeColor: '#14B8A6', // teal-500
    translations: {
        en: {
            areaName: 'Batticaloa Lagoon & Kallady Bridge',
            description: 'Batticaloa, a vibrant eastern city, is defined by its vast lagoon. Famous for its "singing fish" (a phenomenon heard on moonlit nights), the lagoon is a hub of activity. The Kallady Bridge offers scenic views and connects to tranquil beaches. Explore the historic Batticaloa Fort and experience the unique culture of the region.',
            attractions: ["Batticaloa Lagoon", "Kallady Bridge", "Batticaloa Fort", "Pasikudah Beach (nearby)"],
        },
        de: {
            areaName: 'Batticaloa Lagune & Kallady Brücke',
            description: 'Batticaloa, eine pulsierende östliche Stadt, wird durch ihre riesige Lagune geprägt. Berühmt für ihre "singenden Fische" (ein Phänomen, das in mondhellen Nächten zu hören ist), ist die Lagune ein Zentrum der Aktivität. Die Kallady-Brücke bietet malerische Ausblicke und verbindet ruhige Strände. Erkunden Sie die historische Festung Batticaloa und erleben Sie die einzigartige Kultur der Region.',
            attractions: ["Batticaloa Lagune", "Kallady Brücke", "Festung Batticaloa", "Pasikudah Strand (in der Nähe)"],
        },
        si: {
            areaName: 'මඩකලපුව කලපුව සහ කල්ලඩි පාලම',
            description: 'නැගෙනහිර පළාතේ විචිත්‍රවත් නගරයක් වන මඩකලපුව, එහි විශාල කලපුව මගින් අර්ථ දැක්වේ. එහි "ගී ගයන මසුන්" (සඳ එළිය ඇති රාත්‍රී වල ඇසෙන සංසිද්ධියක්) සඳහා ප්‍රසිද්ධ මෙම කලපුව ක්‍රියාකාරකම්වල කේන්ද්‍රස්ථානයකි. කල්ලඩි පාලම මනරම් දර්ශන සපයන අතර නිස්කලංක වෙරළ තීරයන්ට සම්බන්ධ වේ. ඓතිහාසික මඩකලපු බලකොටුව ගවේෂණය කර කලාපයේ අද්විතීය සංස්කෘතිය අත්විඳින්න.',
            attractions: ["මඩකලපුව කලපුව", "කල්ලඩි පාලම", "මඩකලපු බලකොටුව", "පාසිකුඩා වෙරළ (අසල)"],
        }
    }
  },
  Passekudah: {
    images: [
      { src: '/places/Passekudah1.jfif', alt: 'Calm waters of Passekudah Bay' },
      { src: '/places/Passekudah2.webp', alt: 'Relaxing on Passekudah Beach' },
      { src: '/places/Passekudah3.jpg', alt: 'Scenic Passekudah coastline' },
    ],
    themeColor: '#06B6D4', // cyan-500
    translations: {
        en: {
            areaName: 'Passekudah & Kalkudah Beaches',
            description: 'Passekudah Bay, with its shallow waters and calm sea, is ideal for sunbathing, swimming, and relaxation. Adjacent Kalkudah Beach offers a more secluded experience. These twin beaches on the east coast are known for their pristine golden sands and clear turquoise waters, perfect for a tranquil getaway.',
            attractions: ["Swimming and Sunbathing", "Water Sports", "Relaxation by the sea"],
        },
        de: {
            areaName: 'Passekudah & Kalkudah Strände',
            description: 'Die Passekudah Bucht mit ihrem seichten Wasser und dem ruhigen Meer ist ideal zum Sonnenbaden, Schwimmen und Entspannen. Der angrenzende Kalkudah Strand bietet ein abgeschiedeneres Erlebnis. Diese Zwillingsstrände an der Ostküste sind bekannt für ihren unberührten goldenen Sand und das klare türkisfarbene Wasser, perfekt für einen ruhigen Kurzurlaub.',
            attractions: ["Schwimmen und Sonnenbaden", "Wassersport", "Entspannung am Meer"],
        },
        si: {
            areaName: 'පාසිකුඩා සහ කල්කුඩා වෙරළ තීරයන්',
            description: 'පාසිකුඩා බොක්ක, එහි නොගැඹුරු ජලය සහ සන්සුන් මුහුද සමඟ හිරු බැස යෑම, පිහිනීම සහ විවේකය සඳහා වඩාත් සුදුසු වේ. යාබද කල්කුඩා වෙරළ වඩාත් හුදකලා අත්දැකීමක් ලබා දෙයි. නැගෙනහිර වෙරළ තීරයේ පිහිටි මෙම නිවුන් වෙරළ තීරයන් ඒවායේ නොකිලිටි රන්වන් වැලි සහ පැහැදිලි ටර්කියුයිස් ජලය සඳහා ප්‍රසිද්ධ අතර, නිස්කලංක ගැලවීමක් සඳහා පරිපූර්ණයි.',
            attractions: ["පිහිනීම සහ හිරු බැස යෑම", "ජල ක්‍රීඩා", "මුහුද අසල විවේකය"],
        }
    }
  },
  Trincomalee: {
    images: [
      { src: '/places/Trincomalee1.jpg', alt: 'Koneswaram Temple, Trincomalee' },
      { src: '/places/Trincomalee2.jpg', alt: 'Trincomalee Harbour view' },
      { src: '/places/Trincomalee3.webp', alt: 'Beach near Trincomalee' },
    ],
    themeColor: '#4F46E5', // indigo-600
    translations: {
        en: {
            areaName: 'Koneswaram Temple & Trincomalee Harbour',
            description: 'Trincomalee, home to one of the world\'s finest natural harbors, is rich in history and natural beauty. The Koneswaram Temple (Thirukoneswaram), perched atop Swami Rock, offers breathtaking ocean views. Nearby are beautiful beaches like Nilaveli and Uppuveli, and Pigeon Island National Park, excellent for snorkeling.',
            attractions: ["Koneswaram Temple", "Fort Frederick", "Nilaveli Beach", "Pigeon Island Snorkeling"],
        },
        de: {
            areaName: 'Koneswaram Tempel & Trincomalee Hafen',
            description: 'Trincomalee, Heimat eines der schönsten Naturhäfen der Welt, ist reich an Geschichte und natürlicher Schönheit. Der Koneswaram-Tempel (Thirukoneswaram), der auf dem Swami Rock thront, bietet atemberaubende Ausblicke auf den Ozean. In der Nähe befinden sich wunderschöne Strände wie Nilaveli und Uppuveli sowie der Pigeon Island Nationalpark, der sich hervorragend zum Schnorcheln eignet.',
            attractions: ["Koneswaram Tempel", "Fort Frederick", "Nilaveli Strand", "Schnorcheln auf Pigeon Island"],
        },
        si: {
            areaName: 'කෝනේශ්වරම් කෝවිල සහ ත්‍රිකුණාමලය වරාය',
            description: 'ලෝකයේ විශිෂ්ටතම ස්වභාවික වරායන්ගෙන් එකක් වන ත්‍රිකුණාමලය, ඉතිහාසයෙන් සහ ස්වභාවික සෞන්දර්යයෙන් පොහොසත් ය. ස්වාමි පර්වතය මත පිහිටි කෝනේශ්වරම් කෝවිල (තිරුකෝනේශ්වරම්) විශ්මයජනක සාගර දර්ශන ලබා දෙයි. නීලවේලි සහ උප්පුවේලි වැනි සුන්දර වෙරළ තීරයන් සහ පරෙවි දූපත ජාතික වනෝද්‍යානය, ස්නෝකර්ලිං සඳහා විශිෂ්ට ස්ථාන වේ.',
            attractions: ["කෝනේශ්වරම් කෝවිල", "ෆෙඩ්රික් කොටුව", "නීලවේලි වෙරළ", "පරෙවි දූපතේ ස්නෝකර්ලිං"],
        }
    }
  },

  // --- WESTERN PROVINCE ---
  Colombo: {
    images: [
      { src: '/places/lotus-tower.jpg', alt: 'Lotus Tower, Colombo' },
      { src: '/places/Colombo1.jpg', alt: 'Colombo city skyline' },
      { src: '/places/galle-face.jpg', alt: 'Galle Face Green, Colombo' },
    ],
    themeColor: '#9333EA', // purple-600
    translations: {
      en: {
        areaName: 'Colombo - Commercial Capital',
        description: 'Colombo, Sri Lanka’s bustling commercial capital, is a vibrant mix of modern life and colonial heritage. Explore the iconic Lotus Tower (Nelum Kuluna) for panoramic city views, stroll along Galle Face Green, visit historic temples like Gangaramaya, and indulge in diverse culinary experiences. The city is a hub of shopping, entertainment, and rich cultural sites.',
        attractions: ["Lotus Tower", "Galle Face Green", "Gangaramaya Temple", "National Museum", "Pettah Market"],
      },
      de: {
        areaName: 'Colombo - Handelsmetropole',
        description: 'Colombo, Sri Lankas pulsierende Handelsmetropole, ist eine lebendige Mischung aus modernem Leben und kolonialem Erbe. Erkunden Sie den ikonischen Lotus Tower (Nelum Kuluna) für Panoramablicke auf die Stadt, schlendern Sie entlang des Galle Face Green, besuchen Sie historische Tempel wie Gangaramaya und genießen Sie vielfältige kulinarische Erlebnisse. Die Stadt ist ein Zentrum für Shopping, Unterhaltung und reiche kulturelle Stätten.',
        attractions: ["Lotus Turm", "Galle Face Green", "Gangaramaya Tempel", "Nationalmuseum", "Pettah Markt"],
      },
      si: {
        areaName: 'කොළඹ - වාණිජ අගනුවර',
        description: 'ශ්‍රී ලංකාවේ කාර්යබහුල වාණිජ අගනුවර වන කොළඹ, නවීන ජීවිතයේ සහ යටත් විජිත උරුමයේ විචිත්‍රවත් මිශ්‍රණයකි. නගරයේ පරිදර්ශනීය දසුන් සඳහා නෙළුම් කුළුණ (නෙළුම් කුළුණ) ගවේෂණය කරන්න, ගාලු මුවදොර පිටියේ ඇවිදින්න, ගංගාරාමය වැනි ඓතිහාසික විහාරස්ථාන වෙත පිවිසෙන්න, සහ විවිධ සූපශාස්ත්‍ර අත්දැකීම් භුක්ති විඳින්න. නගරය සාප්පු සවාරි, විනෝදාස්වාදය සහ පොහොසත් සංස්කෘතික ස්ථානවල කේන්ද්‍රස්ථානයකි.',
        attractions: ["නෙළුම් කුළුණ", "ගාලු මුවදොර පිටිය", "ගංගාරාම විහාරය", "ජාතික කෞතුකාගාරය", "පිටකොටුව වෙළඳපොළ"],
      },
    },
  },
  Negombo: {
    images: [
      { src: '/places/Negombo1.jfif', alt: "St. Mary's Church, Negombo" },
      { src: '/places/Negombo2.jfif', alt: 'Negombo fish market or beach' },
      { src: '/places/Negombo3.avif', alt: 'Dutch Canal in Negombo' },
    ],
    themeColor: '#EC4899', // pink-500
    translations: {
        en: {
            areaName: "Negombo - Coastal Charm & St. Mary's Church",
            description: 'Negombo, a major coastal city close to the international airport, is famous for its long sandy beaches and bustling fish market. Known as “Little Rome” due to its profusion of Christian churches, the impressive St. Mary’s Church stands out. The Dutch Canal and nearby Muthurajawela Marsh add to its diverse attractions.',
            attractions: ["Negombo Beach", "St. Mary's Church", "Fish Market", "Dutch Canal", "Muthurajawela Marsh"],
        },
        de: {
            areaName: "Negombo - Küstencharme & St. Marienkirche",
            description: 'Negombo, eine große Küstenstadt in der Nähe des internationalen Flughafens, ist berühmt für ihre langen Sandstrände und den belebten Fischmarkt. Bekannt als "Klein Rom" aufgrund der Fülle an christlichen Kirchen, sticht die beeindruckende St. Marienkirche hervor. Der Holländische Kanal und das nahegelegene Muthurajawela-Marschland tragen zu seinen vielfältigen Attraktionen bei.',
            attractions: ["Negombo Strand", "St. Marienkirche", "Fischmarkt", "Holländischer Kanal", "Muthurajawela-Marschland"],
        },
        si: {
            areaName: "මීගමුව - වෙරළබඩ අලංකාරය සහ ශාන්ත මරියා දේවස්ථානය",
            description: 'ජාත්‍යන්තර ගුවන් තොටුපළට ආසන්න ප්‍රධාන වෙරළබඩ නගරයක් වන මීගමුව, එහි දිගු වැලි සහිත වෙරළ තීරයන් සහ කාර්යබහුල මත්ස්‍ය වෙළඳපොළ සඳහා ප්‍රසිද්ධය. ක්‍රිස්තියානි පල්ලි බහුල වීම නිසා "කුඩා රෝමය" ලෙස හැඳින්වෙන මෙහි, ආකර්ෂණීය ශාන්ත මරියා දේවස්ථානය කැපී පෙනේ. ලන්දේසි ඇළ සහ අසල පිහිටි මුතුරාජවෙල වගුරු බිම එහි විවිධ ආකර්ෂණීය ස්ථානවලට එක් කරයි.',
            attractions: ["මීගමු වෙරළ", "ශාන්ත මරියා දේවස්ථානය", "මාළු වෙළඳපොළ", "ලන්දේසි ඇළ", "මුතුරාජවෙල වගුරු බිම"],
        }
    }
  },
  kalutara_info: { // Ensure key matches MapPoint.popupContentId
    images: [
      { src: '/places/Kalutara1.webp', alt: 'Kalutara Bodhiya Stupa' },
      { src: '/places/Kalutara2.jpg', alt: 'Interior of Kalutara Stupa' },
      { src: '/places/Kalutara3.jpg', alt: 'Richmond Castle near Kalutara' },
    ],
    themeColor: '#FB923C', // orange-400
    translations: {
        en: {
            areaName: 'Kalutara Bodhiya & Richmond Castle',
            description: 'Kalutara is known for the impressive Kalutara Bodhiya, a sacred Buddhist site featuring a massive hollow stupa that visitors can enter. The town is also home to Richmond Castle, a historic mansion showcasing colonial architecture. The Kalu Ganga (Black River) flows through the area, offering scenic boat rides.',
            attractions: ["Kalutara Bodhiya", "Richmond Castle", "Kalutara Beach", "Kalu Ganga boat trips"],
        },
        de: {
            areaName: 'Kalutara Bodhiya & Richmond Castle',
            description: 'Kalutara ist bekannt für die beeindruckende Kalutara Bodhiya, eine heilige buddhistische Stätte mit einer massiven hohlen Stupa, die Besucher betreten können. Die Stadt beherbergt auch Richmond Castle, ein historisches Herrenhaus, das koloniale Architektur zeigt. Der Kalu Ganga (Schwarzer Fluss) fließt durch das Gebiet und bietet malerische Bootsfahrten.',
            attractions: ["Kalutara Bodhiya", "Richmond Castle", "Kalutara Strand", "Kalu Ganga Bootsfahrten"],
        },
        si: {
            areaName: 'කළුතර බෝධිය සහ රිච්මන්ඩ් කාසල්',
            description: 'කළුතර ප්‍රසිද්ධියට පත්ව ඇත්තේ, නරඹන්නන්ට ඇතුළු විය හැකි දැවැන්ත කුහර සහිත ස්තූපයක් සහිත පූජනීය බෞද්ධ ස්ථානයක් වන ආකර්ෂණීය කළුතර බෝධිය සඳහා ය. මෙම නගරය යටත් විජිත ගෘහ නිර්මාණ ශිල්පය විදහා දක්වන ඓතිහාසික මන්දිරයක් වන රිච්මන්ඩ් කාසල් සඳහා ද නිවහන වේ. කළු ගඟ මෙම ප්‍රදේශය හරහා ගලා බසින අතර, මනරම් බෝට්ටු සවාරි පිරිනමයි.',
            attractions: ["කළුතර බෝධිය", "රිච්මන්ඩ් කාසල්", "කළුතර වෙරළ", "කළු ගඟේ බෝට්ටු සවාරි"],
        }
    }
  },
  Bentota_Beach: {
    images: [
      { src: '/places/BentotaBeach1.jpg', alt: 'Relaxing on Bentota Beach' },
      { src: '/places/BentotaBeach2.webp', alt: 'Water sports in Bentota' },
      { src: '/places/BentotaBeach3.jpg', alt: 'Bentota River Safari' },
    ],
    themeColor: '#EAB308', // yellow-500
    translations: {
        en: {
            areaName: 'Bentota - Water Sports & River Safaris',
            description: 'Bentota is a premier resort town on Sri Lanka’s southwest coast, famous for its golden beaches and diverse water sports including jet skiing, windsurfing, and banana boat rides. The Bentota Ganga (river) offers tranquil river safaris through mangrove forests, ideal for spotting wildlife. It’s a perfect blend of beach relaxation and adventure.',
            attractions: ["Bentota Beach", "Water Sports", "Madu Ganga River Safari", "Brief Garden by Bevis Bawa", "Turtle Hatcheries"],
        },
        de: {
            areaName: 'Bentota - Wassersport & Flusssafaris',
            description: 'Bentota ist ein erstklassiger Ferienort an der Südwestküste Sri Lankas, berühmt für seine goldenen Strände und vielfältigen Wassersportarten wie Jetski, Windsurfen und Bananenbootfahrten. Der Bentota Ganga (Fluss) bietet ruhige Flusssafaris durch Mangrovenwälder, ideal zur Tierbeobachtung. Es ist eine perfekte Mischung aus Strandentspannung und Abenteuer.',
            attractions: ["Bentota Strand", "Wassersport", "Madu Ganga Flusssafari", "Brief Garden von Bevis Bawa", "Schildkrötenbrütereien"],
        },
        si: {
            areaName: 'බෙන්තොට - ජල ක්‍රීඩා සහ ගංගා සෆාරි',
            description: 'බෙන්තොට යනු ශ්‍රී ලංකාවේ නිරිතදිග වෙරළ තීරයේ පිහිටි ප්‍රමුඛ පෙළේ නිවාඩු නිකේතනයකි. එය රන්වන් වෙරළ තීරයන් සහ ජෙට් ස්කීං, වින්ඩ්සර්ෆින් සහ කෙසෙල් බෝට්ටු සවාරි ඇතුළු විවිධ ජල ක්‍රීඩා සඳහා ප්‍රසිද්ධය. බෙන්තොට ගඟ වනජීවීන් නැරඹීම සඳහා වඩාත් සුදුසු කඩොලාන වනාන්තර හරහා සන්සුන් ගංගා සෆාරි පිරිනමයි. එය වෙරළ විවේකය සහ වික්‍රමාන්විතයන්ගේ පරිපූර්ණ මිශ්‍රණයකි.',
            attractions: ["බෙන්තොට වෙරළ", "ජල ක්‍රීඩා", "මාදු ගඟේ ගංගා සෆාරි", "බෙවිස් බාවාගේ බ්‍රීෆ් ගාර්ඩ්න්", "කැස්බෑ සංරක්ෂණ මධ්‍යස්ථාන"],
        }
    }
  },
  Chilaw: {
    images: [
        { src: '/places/Chilaw1.jpg', alt: 'Munneswaram Temple complex' },
        { src: '/places/Chilaw2.jfif', alt: 'Entrance gopuram of Munneswaram Kovil' },
        { src: '/places/Chilaw3.jpg', alt: 'Chilaw Lagoon scenic view' },
    ],
    themeColor: '#EF4444', // red-500
    translations: {
        en: {
            areaName: 'Munneswaram Temple & Chilaw Lagoon',
            description: 'Chilaw is notable for the historic Munneswaram Temple, one of the five ancient Ishwarams dedicated to Lord Shiva in Sri Lanka. The temple complex attracts Hindu and Buddhist devotees. The nearby Chilaw Lagoon and coastal areas offer opportunities for birdwatching and experiencing local fishing life.',
            attractions: ["Munneswaram Temple", "Chilaw Lagoon", "Anawilundawa Wetland Sanctuary (nearby)"],
        },
        de: {
            areaName: 'Munneswaram Tempel & Chilaw Lagune',
            description: 'Chilaw ist bekannt für den historischen Munneswaram-Tempel, einen der fünf alten Ishwarams, die Lord Shiva in Sri Lanka geweiht sind. Der Tempelkomplex zieht hinduistische und buddhistische Gläubige an. Die nahegelegene Chilaw-Lagune und Küstengebiete bieten Möglichkeiten zur Vogelbeobachtung und zum Erleben des lokalen Fischerlebens.',
            attractions: ["Munneswaram Tempel", "Chilaw Lagune", "Anawilundawa Feuchtgebietsschutzgebiet (in der Nähe)"],
        },
        si: {
            areaName: 'මුන්නේශ්වරම් කෝවිල සහ හලාවත කලපුව',
            description: 'ශ්‍රී ලංකාවේ ශිව දෙවියන්ට කැප වූ පුරාණ ඊශ්වරම් පහෙන් එකක් වන ඓතිහාසික මුන්නේශ්වරම් කෝවිල සඳහා හලාවත කැපී පෙනේ. මෙම කෝවිල් සංකීර්ණය හින්දු සහ බෞද්ධ බැතිමතුන් ආකර්ෂණය කරයි. අසල පිහිටි හලාවත කලපුව සහ වෙරළබඩ ප්‍රදේශ කුරුළු නැරඹීම සහ දේශීය ಮೀನುಗಾರිකා ජීවිතය අත්විඳීම සඳහා අවස්ථා සලසා දෙයි.',
            attractions: ["මුන්නේශ්වරම් කෝවිල", "හලාවත කලපුව", "ආනවිලුන්දාව තෙත්බිම් අභයභූමිය (අසල)"],
        }
    }
  },
  Kalpitiya: {
    images: [
        { src: '/places/Kalpitiya1.webp', alt: 'Kitesurfing in Kalpitiya Lagoon' },
        { src: '/places/Kalpitiya2.jpg', alt: 'Dolphin watching boat tour Kalpitiya' },
        { src: '/places/Kalpitiya3.jpg', alt: 'Scenic Kalpitiya beach' },
    ],
    themeColor: '#84CC16', // lime-500
    translations: {
        en: {
            areaName: 'Kalpitiya - Kitesurfing & Dolphin Watching',
            description: 'Kalpitiya peninsula is a prime destination for kitesurfing, thanks to its strong and consistent winds, especially from May to October. It\'s also renowned for dolphin and whale watching tours in the deeper waters off the coast. The area features serene beaches, sand dunes, and salt pans.',
            attractions: ["Kitesurfing", "Dolphin and Whale Watching", "Bar Reef Marine Sanctuary", "Alankuda Beach"],
        },
        de: {
            areaName: 'Kalpitiya - Kitesurfen & Delfinbeobachtung',
            description: 'Die Halbinsel Kalpitiya ist ein erstklassiges Ziel für Kitesurfer, dank ihrer starken und konstanten Winde, besonders von Mai bis Oktober. Sie ist auch bekannt für Delfin- und Walbeobachtungstouren in den tieferen Gewässern vor der Küste. Das Gebiet bietet ruhige Strände, Sanddünen und Salinen.',
            attractions: ["Kitesurfen", "Delfin- und Walbeobachtung", "Bar Reef Meeresschutzgebiet", "Alankuda Strand"],
        },
        si: {
            areaName: 'කල්පිටිය - සරුංගල් ක්‍රීඩාව සහ ඩොල්ෆින් නැරඹීම',
            description: 'කල්පිටිය අර්ධද්වීපය සරුංගල් ක්‍රීඩාව සඳහා ප්‍රමුඛතම ගමනාන්තයකි, විශේෂයෙන් මැයි සිට ඔක්තෝබර් දක්වා එහි ඇති ප්‍රබල සහ ස්ථාවර සුළං හේතුවෙන්. එය වෙරළෙන් ඔබ්බෙහි ගැඹුරු ජලයේ ඩොල්ෆින් සහ තල්මසුන් නැරඹීමේ චාරිකා සඳහා ද ප්‍රසිද්ධය. මෙම ප්‍රදේශයේ සන්සුන් වෙරළ තීරයන්, වැලි කඳු සහ ලුණු ලේවා ඇත.',
            attractions: ["සරුංගල් ක්‍රීඩාව", "ඩොල්ෆින් සහ තල්මසුන් නැරඹීම", "බාර් රීෆ් සමුද්‍ර අභයභූමිය", "අලංකුඩා වෙරළ"],
        }
    }
  },

  // --- SOUTHERN PROVINCE ---
  Hikkaduwa_Beach: {
    images: [
      { src: '/places/Hikkaduwa_Beach1.webp', alt: 'Snorkeling over Hikkaduwa corals' },
      { src: '/places/Hikkaduwa_Beach2.jpg', alt: 'Hikkaduwa beach life' },
      { src: '/places/Hikkaduwa_Beach3.jpg', alt: 'Surfers at Hikkaduwa' },
    ],
    themeColor: '#22C55E', // green-500
    translations: {
        en: {
            areaName: 'Hikkaduwa - Corals & Nightlife',
            description: 'Hikkaduwa is a vibrant coastal town famous for its coral reefs, making it a popular spot for snorkeling and glass-bottom boat tours. It also boasts a lively surfing scene and a bustling nightlife. The Hikkaduwa National Park protects the rich marine biodiversity.',
            attractions: ["Hikkaduwa Coral Sanctuary", "Surfing", "Turtle Hatcheries", "Seenigama Muhudu Viharaya"],
        },
        de: {
            areaName: 'Hikkaduwa - Korallen & Nachtleben',
            description: 'Hikkaduwa ist eine pulsierende Küstenstadt, berühmt für ihre Korallenriffe, was sie zu einem beliebten Ort zum Schnorcheln und für Glasbodenbootstouren macht. Sie bietet auch eine lebhafte Surfszene und ein reges Nachtleben. Der Hikkaduwa-Nationalpark schützt die reiche Meeresbiodiversität.',
            attractions: ["Hikkaduwa Korallenschutzgebiet", "Surfen", "Schildkrötenbrütereien", "Seenigama Muhudu Viharaya"],
        },
        si: {
            areaName: 'හික්කඩුව - කොරල්පර සහ රාත්‍රී ජීවිතය',
            description: 'හික්කඩුව යනු එහි කොරල්පර සඳහා ප්‍රසිද්ධ විචිත්‍රවත් වෙරළබඩ නගරයකි, එය ස්නෝකර්ලිං සහ වීදුරු පතුලේ බෝට්ටු චාරිකා සඳහා ජනප්‍රිය ස්ථානයක් බවට පත් කරයි. එය සජීවී සර්ෆින් දර්ශනයක් සහ කාර්යබහුල රාත්‍රී ජීවිතයක් ද ඇත. හික්කඩුව ජාතික වනෝද්‍යානය පොහොසත් සමුද්‍ර ජෛව විවිධත්වය ආරක්ෂා කරයි.',
            attractions: ["හික්කඩුව කොරල් අභයභූමිය", "සර්ෆින්", "කැස්බෑ සංරක්ෂණ මධ්‍යස්ථාන", "සීනිගම මුහුදු විහාරය"],
        }
    }
  },
  Ambalangoda: {
    images: [
      { src: '/places/Ambalangoda1.jpg', alt: 'Traditional Sri Lankan masks from Ambalangoda' },
      { src: '/places/Ambalangoda2.jpg', alt: 'Mask carving workshop in Ambalangoda' },
      { src: '/places/Ambalangoda3.jfif', alt: 'Display of colorful masks' },
    ],
    themeColor: '#A16207', // yellow-700
    translations: {
        en: {
            areaName: 'Ambalangoda - Mask Museum & Workshops',
            description: 'Ambalangoda is renowned as the heart of traditional Sri Lankan mask carving. Visit the Ariyapala Mask Museum to see a fascinating collection of vibrant masks used in folk dances and rituals. You can also observe artisans at work in local workshops, crafting these intricate cultural artifacts.',
            attractions: ["Ariyapala Mask Museum", "Mask Carving Workshops", "Traditional Puppet Shows"],
        },
        de: {
            areaName: 'Ambalangoda - Maskenmuseum & Werkstätten',
            description: 'Ambalangoda ist bekannt als das Herz der traditionellen srilankischen Maskenschnitzerei. Besuchen Sie das Ariyapala Maskenmuseum, um eine faszinierende Sammlung lebendiger Masken zu sehen, die in Volkstänzen und Ritualen verwendet werden. Sie können auch Handwerkern bei der Arbeit in lokalen Werkstätten zusehen, die diese komplizierten kulturellen Artefakte herstellen.',
            attractions: ["Ariyapala Maskenmuseum", "Maskenschnitzwerkstätten", "Traditionelle Puppenspiele"],
        },
        si: {
            areaName: 'අම්බලන්ගොඩ - වෙස් මුහුණු කෞතුකාගාරය සහ වැඩමුළු',
            description: 'අම්බලන්ගොඩ, සාම්ප්‍රදායික ශ්‍රී ලාංකික වෙස් මුහුණු කැටයම් කිරීමේ හදවත ලෙස ප්‍රසිද්ධය. ජන නැටුම් සහ චාරිත්‍ර වාරිත්‍ර සඳහා භාවිතා කරන විචිත්‍රවත් වෙස් මුහුණු එකතුවක් දැක ගැනීමට අරියපාල වෙස් මුහුණු කෞතුකාගාරය වෙත පිවිසෙන්න. මෙම සංකීර්ණ සංස්කෘතික කෞතුක වස්තූන් නිර්මාණය කරමින් දේශීය වැඩමුළුවල කලාකරුවන් වැඩ කරන ආකාරය ද ඔබට නිරීක්ෂණය කළ හැකිය.',
            attractions: ["අරියපාල වෙස් මුහුණු කෞතුකාගාරය", "වෙස් මුහුණු කැටයම් වැඩමුළු", "සාම්ප්‍රදායික රූකඩ සංදර්ශන"],
        }
    }
  },
  Galle: {
    images: [
      { src: '/places/Galle1.jfif', alt: 'Galle Fort lighthouse and ramparts' },
      { src: '/places/Galle2.jpg', alt: 'Street scene inside Galle Fort' },
      { src: '/places/Galle3.jpg', alt: 'Aerial view of Galle Fort' },
    ],
    themeColor: '#EA580C', // orange-600
    translations: {
        en: {
            areaName: 'Galle Fort - UNESCO World Heritage',
            description: 'Galle Fort, a UNESCO World Heritage site, is a historic sea fortress first built by the Portuguese and later extensively fortified by the Dutch. Wander through its charming cobblestone streets lined with colonial-era buildings, boutiques, cafes, and the iconic lighthouse. The ramparts offer stunning ocean views, especially at sunset.',
            attractions: ["Galle Fort Ramparts", "Galle Lighthouse", "Dutch Reformed Church", "Maritime Museum", "Boutique Shops"],
        },
        de: {
            areaName: 'Galle Fort - UNESCO-Weltkulturerbe',
            description: 'Das Galle Fort, ein UNESCO-Weltkulturerbe, ist eine historische Seefestung, die zuerst von den Portugiesen erbaut und später von den Holländern umfassend befestigt wurde. Schlendern Sie durch seine charmanten Kopfsteinpflasterstraßen, gesäumt von Gebäuden aus der Kolonialzeit, Boutiquen, Cafés und dem ikonischen Leuchtturm. Die Wälle bieten atemberaubende Ausblicke auf den Ozean, besonders bei Sonnenuntergang.',
            attractions: ["Galle Fort Wälle", "Galle Leuchtturm", "Niederländisch-reformierte Kirche", "Schifffahrtsmuseum", "Boutiquen"],
        },
        si: {
            areaName: 'ගාලු කොටුව - යුනෙස්කෝ ලෝක උරුමයක්',
            description: 'යුනෙස්කෝ ලෝක උරුමයක් වන ගාලු කොටුව, ප්‍රථමයෙන් පෘතුගීසීන් විසින් ඉදිකර පසුව ලන්දේසීන් විසින් පුළුල් ලෙස ශක්තිමත් කරන ලද ඓතිහාසික මුහුදු බලකොටුවකි. යටත් විජිත යුගයේ ගොඩනැගිලි, බුටික්, කැෆේ සහ සුවිශේෂී ප්‍රදීපාගාරයෙන් සැදුම්ලත් එහි සිත් ඇදගන්නාසුළු ගල් අතුරන ලද වීදි දිගේ ඇවිදින්න. විශේෂයෙන් හිරු බැස යන විට බලකොටුවේ පවුරෙන් විස්මිත සාගර දර්ශන දැකගත හැකිය.',
            attractions: ["ගාලු කොටු පවුර", "ගාලු ප්‍රදීපාගාරය", "ලන්දේසි ප්‍රතිසංස්කරණ පල්ලිය", "සමුද්‍ර කෞතුකාගාරය", "බුටික් සාප්පු"],
        }
    }
  },
  Unawatuna_Beach: {
    images: [
      { src: '/places/Unawatuna_Beach1.jpeg', alt: 'Unawatuna Beach golden sands' },
      { src: '/places/Unawatuna_Beach2.jpg', alt: 'Swimmers at Unawatuna' },
      { src: '/places/Unawatuna_Beach3.jpg', alt: 'Japanese Peace Pagoda near Unawatuna' },
    ],
    themeColor: '#10B981', // emerald-500
    translations: {
        en: {
            areaName: 'Unawatuna - Famous Beach & Japanese Peace Pagoda',
            description: 'Unawatuna Beach is one of Sri Lanka’s most famous beaches, known for its calm, turquoise waters ideal for swimming and its golden sands. The nearby Japanese Peace Pagoda offers panoramic views. The area is dotted with guesthouses, restaurants, and dive shops. Jungle Beach offers a more secluded spot.',
            attractions: ["Unawatuna Beach", "Japanese Peace Pagoda", "Jungle Beach", "Scuba Diving & Snorkeling", "Rumassala Sanctuary"],
        },
        de: {
            areaName: 'Unawatuna - Berühmter Strand & Japanische Friedenspagode',
            description: 'Der Unawatuna Strand ist einer der berühmtesten Strände Sri Lankas, bekannt für sein ruhiges, türkisfarbenes Wasser, ideal zum Schwimmen, und seinen goldenen Sand. Die nahegelegene Japanische Friedenspagode bietet Panoramablicke. Das Gebiet ist gespickt mit Pensionen, Restaurants und Tauchschulen. Jungle Beach bietet einen abgeschiedeneren Ort.',
            attractions: ["Unawatuna Strand", "Japanische Friedenspagode", "Jungle Beach", "Tauchen & Schnorcheln", "Rumassala Schutzgebiet"],
        },
        si: {
            areaName: 'උණවටුන - ප්‍රසිද්ධ වෙරළ සහ ජපන් සාම ස්තූපය',
            description: 'උණවටුන වෙරළ ශ්‍රී ලංකාවේ වඩාත්ම ප්‍රසිද්ධ වෙරළ තීරයන්ගෙන් එකකි. එය පිහිනීම සඳහා සුදුසු සන්සුන්, ටර්කියුයිස් ජලය සහ රන්වන් වැලි සඳහා ප්‍රසිද්ධය. අසල පිහිටි ජපන් සාම ස්තූපය පරිදර්ශනීය දසුන් සපයයි. මෙම ප්‍රදේශය ආගන්තුක නිවාස, අවන්හල් සහ කිමිදුම් සාප්පු වලින් පිරී ඇත. ජංගල් බීච් වඩාත් හුදකලා ස්ථානයක් පිරිනමයි.',
            attractions: ["උණවටුන වෙරළ", "ජපන් සාම ස්තූපය", "ජංගල් බීච්", "කිමිදීම සහ ස්නෝකර්ලිං", "රූමස්සල අභයභූමිය"],
        }
    }
  },
  Mirissa: {
    images: [
      { src: '/places/Mirissa1.jfif', alt: 'Whale watching boat in Mirissa' },
      { src: '/places/Mirissa2.jpg', alt: 'Mirissa Beach scene' },
      { src: '/places/Mirissa3.jpg', alt: 'Sunset view from Parrot Rock, Mirissa' },
    ],
    themeColor: '#D946EF', // fuchsia-500
    translations: {
        en: {
            areaName: 'Mirissa - Whale Watching & Parrot Rock',
            description: 'Mirissa is a popular destination for whale and dolphin watching tours, especially from November to April when blue whales and sperm whales migrate through the area. Its beautiful crescent-shaped beach is perfect for relaxation, and Parrot Rock offers stunning sunset views. Enjoy fresh seafood at beachfront restaurants.',
            attractions: ["Whale Watching", "Mirissa Beach", "Parrot Rock", "Secret Beach", "Coconut Tree Hill"],
        },
        de: {
            areaName: 'Mirissa - Walbeobachtung & Papageienfelsen',
            description: 'Mirissa ist ein beliebtes Ziel für Wal- und Delfinbeobachtungstouren, besonders von November bis April, wenn Blauwale und Pottwale durch das Gebiet ziehen. Sein wunderschöner halbmondförmiger Strand ist perfekt zum Entspannen, und der Papageienfelsen bietet atemberaubende Sonnenuntergangsansichten. Genießen Sie frische Meeresfrüchte in Strandrestaurants.',
            attractions: ["Walbeobachtung", "Mirissa Strand", "Papageienfelsen", "Geheimstrand", "Kokosnussbaumhügel"],
        },
        si: {
            areaName: 'මිරිස්ස - තල්මසුන් නැරඹීම සහ පැරට් රොක්',
            description: 'මිරිස්ස තල්මසුන් සහ ඩොල්ෆින් නැරඹීමේ චාරිකා සඳහා ජනප්‍රිය ගමනාන්තයකි. විශේෂයෙන් නොවැම්බර් සිට අප්‍රේල් දක්වා නිල් තල්මසුන් සහ ශුක්‍රාණු තල්මසුන් මෙම ප්‍රදේශය හරහා සංක්‍රමණය වන විට. එහි අලංකාර අඩ සඳ හැඩැති වෙරළ විවේකය සඳහා පරිපූර්ණ වන අතර, පැරට් රොක් විශ්මයජනක හිරු බැසීමේ දර්ශන ලබා දෙයි. වෙරළබඩ අවන්හල්වල නැවුම් මුහුදු ආහාර රසවිඳින්න.',
            attractions: ["තල්මසුන් නැරඹීම", "මිරිස්ස වෙරළ", "පැරට් රොක්", "සීක්‍රට් බීච්", "පොල් ගස් කන්ද"],
        }
    }
  },
  Hambantota: {
    images: [
      { src: '/places/Hambantota1.jfif', alt: 'Flamingos at Bundala National Park' },
      { src: '/places/Hambantota2.jpg', alt: 'Hambantota Port area' },
      { src: '/places/Hambantota3.jpg', alt: 'Dry zone landscape near Hambantota' },
    ],
    themeColor: '#E11D48', // rose-600
    translations: {
        en: {
            areaName: 'Hambantota - Port City & Bundala National Park',
            description: 'Hambantota is a developing port city with significant infrastructure. Its main natural attraction is the nearby Bundala National Park, a RAMSAR wetland famous for its rich avian biodiversity, including migratory flamingos. The area also has unique salt pans and a dry zone landscape.',
            attractions: ["Bundala National Park", "Hambantota Port", "Salt Pans (Levayas)", "Ridiyagama Safari Park"],
        },
        de: {
            areaName: 'Hambantota - Hafenstadt & Bundala-Nationalpark',
            description: 'Hambantota ist eine sich entwickelnde Hafenstadt mit bedeutender Infrastruktur. Ihre wichtigste natürliche Attraktion ist der nahegelegene Bundala-Nationalpark, ein RAMSAR-Feuchtgebiet, das für seine reiche Vogelwelt bekannt ist, einschließlich wandernder Flamingos. Das Gebiet hat auch einzigartige Salinen und eine Trockenzonenlandschaft.',
            attractions: ["Bundala-Nationalpark", "Hafen von Hambantota", "Salinen (Levayas)", "Ridiyagama Safari Park"],
        },
        si: {
            areaName: 'හම්බන්තොට - වරාය නගරය සහ බුන්දල ජාතික වනෝද්‍යානය',
            description: 'හම්බන්තොට යනු සැලකිය යුතු යටිතල පහසුකම් සහිත සංවර්ධනය වෙමින් පවතින වරාය නගරයකි. එහි ප්‍රධාන ස්වාභාවික ආකර්ෂණය වන්නේ අසල පිහිටි බුන්දල ජාතික වනෝද්‍යානයයි. එය සංක්‍රමණික ෆ්ලෙමින්ගෝ ඇතුළු පොහොසත් පක්ෂි ජෛව විවිධත්වය සඳහා ප්‍රසිද්ධ රැම්සා තෙත්බිමකි. මෙම ප්‍රදේශයේ අද්විතීය ලුණු ලේවා සහ වියළි කලාපීය භූ දර්ශනයක් ද ඇත.',
            attractions: ["බුන්දල ජාතික වනෝද්‍යානය", "හම්බන්තොට වරාය", "ලුණු ලේවා", "රිදියගම සෆාරි උද්‍යානය"],
        }
    }
  },
  Kataragama: {
    images: [
      { src: '/places/Kataragama1.jpg', alt: 'Kataragama Temple complex' },
      { src: '/places/Kataragama2.jpg', alt: 'Wildlife in Yala National Park' },
      { src: '/places/Kataragama3.jpg', alt: 'Pilgrims at Kataragama' },
    ],
    themeColor: '#BE185D', // pink-700
    translations: {
        en: {
            areaName: 'Kataragama - Sacred City & Yala National Park Gateway',
            description: 'Kataragama is a major multi-religious sacred city, venerated by Buddhists, Hindus, and indigenous Vedda people. The Ruhunu Maha Kataragama Devalaya is its focal point. It also serves as a popular gateway to Yala National Park, renowned for its leopard population and diverse wildlife.',
            attractions: ["Kataragama Temple", "Sella Kataragama", "Yala National Park Safari", "Kirivehera Stupa"],
        },
        de: {
            areaName: 'Kataragama - Heilige Stadt & Tor zum Yala-Nationalpark',
            description: 'Kataragama ist eine bedeutende multireligiöse heilige Stadt, die von Buddhisten, Hindus und dem indigenen Volk der Vedda verehrt wird. Das Ruhunu Maha Kataragama Devalaya ist ihr Mittelpunkt. Es dient auch als beliebtes Tor zum Yala-Nationalpark, der für seine Leopardenpopulation und vielfältige Tierwelt bekannt ist.',
            attractions: ["Kataragama-Tempel", "Sella Kataragama", "Yala-Nationalpark-Safari", "Kirivehera Stupa"],
        },
        si: {
            areaName: 'කතරගම - පූජා නගරය සහ යාල ජාතික වනෝද්‍යාන දොරටුව',
            description: 'කතරගම යනු බෞද්ධ, හින්දු සහ ස්වදේශික වැදි ජනයා විසින් වන්දනාමාන කරනු ලබන ප්‍රධාන බහු ආගමික පූජා නගරයකි. රුහුණු මහා කතරගම දේවාලය එහි කේන්ද්‍රස්ථානයයි. දිවියා ගහනය සහ විවිධ වනජීවීන් සඳහා ප්‍රසිද්ධ යාල ජාතික වනෝද්‍යානයට ජනප්‍රිය දොරටුවක් ලෙස ද එය සේවය කරයි.',
            attractions: ["කතරගම දේවාලය", "සෙල්ල කතරගම", "යාල ජාතික වනෝද්‍යාන සෆාරි", "කිරිවෙහෙර ස්තූපය"],
        }
    }
  },

  // --- CENTRAL PROVINCE ---
  Sigiriya: {
    images: [
      { src: '/places/Sigiriya1.jpg', alt: 'Sigiriya Rock Fortress view from afar' },
      { src: '/places/Sigiriya2.jpg', alt: 'Lion Paw entrance at Sigiriya' },
      { src: '/places/Sigiriya3.jpeg', alt: 'Frescoes at Sigiriya' },
    ],
    themeColor: '#CA8A04', // yellow-600
    translations: {
        en: {
            areaName: 'Sigiriya - Ancient Rock Fortress',
            description: 'Sigiriya, or Lion Rock, is an ancient rock fortress and palace ruin surrounded by extensive gardens and reservoirs. A UNESCO World Heritage site, it\'s famous for its massive lion paw entrance, ancient frescoes of celestial maidens (Sigiri Apsaras), and mirror wall. The climb to the summit offers breathtaking views.',
            attractions: ["Climb Sigiriya Rock", "Sigiriya Frescoes", "Mirror Wall", "Pidurangala Rock (for views of Sigiriya)", "Sigiriya Museum"],
        },
        de: {
            areaName: 'Sigiriya - Antike Felsenfestung',
            description: 'Sigiriya, oder Löwenfelsen, ist eine antike Felsenfestung und Palastruine, umgeben von ausgedehnten Gärten und Stauseen. Als UNESCO-Weltkulturerbe ist sie berühmt für ihren massiven Löwentatzeneingang, antike Fresken himmlischer Jungfrauen (Sigiri Apsaras) und die Spiegelwand. Der Aufstieg zum Gipfel bietet atemberaubende Ausblicke.',
            attractions: ["Besteigung des Sigiriya-Felsens", "Sigiriya-Fresken", "Spiegelwand", "Pidurangala-Felsen (für Ausblicke auf Sigiriya)", "Sigiriya-Museum"],
        },
        si: {
            areaName: 'සීගිරිය - පුරාණ ගල් පර්වතය',
            description: 'සීගිරිය හෙවත් සිංහ පර්වතය යනු පුළුල් උද්‍යාන සහ ජලාශවලින් වට වූ පුරාණ ගල් පර්වතයක් සහ මාලිගා නටබුනකි. යුනෙස්කෝ ලෝක උරුම අඩවියක් වන එය, එහි දැවැන්ත සිංහ පාද පිවිසුම, දිව්‍යමය කන්‍යාවන්ගේ (සීගිරි අප්සරා) පුරාණ බිතු සිතුවම් සහ කැටපත් පවුර සඳහා ප්‍රසිද්ධය. ඉහළට නැගීම විශ්මයජනක දර්ශන ලබා දෙයි.',
            attractions: ["සීගිරි පර්වතය නැගීම", "සීගිරි බිතුසිතුවම්", "කැටපත් පවුර", "පිදුරංගල පර්වතය (සීගිරියේ දර්ශන සඳහා)", "සීගිරි කෞතුකාගාරය"],
        }
    }
  },
  Pinnawala: {
    images: [
      { src: '/places/Pinnawala1.jpg', alt: 'Elephants bathing at Pinnawala' },
      { src: '/places/Pinnawala2.webp', alt: 'Baby elephant being fed at Pinnawala' },
      { src: '/places/Pinnawala3.webp', alt: 'Herd of elephants at Pinnawala Orphanage' },
    ],
    themeColor: '#6B7280', // gray-500
    translations: {
        en: {
            areaName: 'Pinnawala Elephant Orphanage',
            description: 'The Pinnawala Elephant Orphanage was established to care for orphaned and injured elephants. Visitors can observe elephants bathing in the nearby Maha Oya river, bottle-feeding baby elephants, and interacting with the herd. It offers a unique opportunity to get close to these gentle giants.',
            attractions: ["Elephant Bathing", "Bottle-feeding Baby Elephants", "Observing Elephant Herds"],
        },
        de: {
            areaName: 'Pinnawala Elefantenwaisenhaus',
            description: 'Das Pinnawala Elefantenwaisenhaus wurde gegründet, um verwaiste und verletzte Elefanten zu versorgen. Besucher können Elefanten beim Baden im nahegelegenen Fluss Maha Oya beobachten, Elefantenbabys mit der Flasche füttern und mit der Herde interagieren. Es bietet eine einzigartige Gelegenheit, diesen sanften Riesen nahe zu kommen.',
            attractions: ["Elefantenbaden", "Flaschenfütterung von Elefantenbabys", "Beobachtung von Elefantenherden"],
        },
        si: {
            areaName: 'පින්නවල අලි අනාථාගාරය',
            description: 'පින්නවල අලි අනාථාගාරය පිහිටුවන ලද්දේ අනාථ වූ සහ තුවාල ලැබූ අලි ඇතුන් රැකබලා ගැනීම සඳහා ය. නරඹන්නන්ට අසල ඇති මහ ඔයේ අලි ඇතුන් නාන අයුරු, අලි පැටවුන්ට බෝතලයෙන් කිරි දෙන අයුරු සහ රංචුව සමඟ අන්තර් ක්‍රියා කරන අයුරු නැරඹිය හැකිය. මෙම මෘදු යෝධයන්ට සමීප වීමට එය අද්විතීය අවස්ථාවක් ලබා දෙයි.',
            attractions: ["අලි නැහැවීම", "අලි පැටවුන්ට බෝතලයෙන් කිරි දීම", "අලි රංචු නිරීක්ෂණය"],
        }
    }
  },
  Kandy: {
    images: [
      { src: '/places/Kandy1.webp', alt: 'Temple of the Sacred Tooth Relic, Kandy' },
      { src: '/places/Kandy2.jpg', alt: 'Kandy Lake view' },
      { src: '/places/Kandy3.jpg', alt: 'Cultural dance performance in Kandy' },
    ],
    themeColor: '#7E22CE', // purple-700
    translations: {
        en: {
            areaName: 'Kandy - Last Royal Capital & Temple of Tooth',
            description: 'Kandy, nestled amidst hills, was the last capital of the Sri Lankan kings. A UNESCO World Heritage site, its heart is the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), housing a revered relic of the Buddha. The picturesque Kandy Lake, Royal Botanical Gardens in Peradeniya, and vibrant cultural shows are key attractions.',
            attractions: ["Temple of the Sacred Tooth Relic", "Kandy Lake", "Royal Botanical Gardens, Peradeniya", "Kandy Cultural Show", "Bahiravokanda Vihara Buddha Statue"],
        },
        de: {
            areaName: 'Kandy - Letzte königliche Hauptstadt & Zahntempel',
            description: 'Kandy, inmitten von Hügeln gelegen, war die letzte Hauptstadt der srilankischen Könige. Als UNESCO-Weltkulturerbe ist ihr Herzstück der Tempel der Heiligen Zahnreliquie (Sri Dalada Maligawa), der eine verehrte Reliquie Buddhas beherbergt. Der malerische Kandy-See, die Königlichen Botanischen Gärten in Peradeniya und lebendige kulturelle Darbietungen sind Hauptattraktionen.',
            attractions: ["Tempel der Heiligen Zahnreliquie", "Kandy-See", "Königliche Botanische Gärten, Peradeniya", "Kandy Kulturschau", "Bahiravokanda Vihara Buddha-Statue"],
        },
        si: {
            areaName: 'මහනුවර - අවසන් රාජකීය අගනුවර සහ දළදා මාලිගාව',
            description: 'කඳු අතර පිහිටි මහනුවර, ශ්‍රී ලාංකික රජවරුන්ගේ අවසන් අගනුවර විය. යුනෙස්කෝ ලෝක උරුම අඩවියක් වන එහි හදවත වන්නේ, බුදුන් වහන්සේගේ පූජනීය ධාතූන් වහන්සේ නමක් තැන්පත් කර ඇති ශ්‍රී දළදා මාලිගාවයි. මනරම් නුවර වැව, පේරාදෙණියේ රාජකීය උද්භිද උද්‍යානය සහ විචිත්‍රවත් සංස්කෘතික සංදර්ශන ප්‍රධාන ආකර්ෂණයන් වේ.',
            attractions: ["ශ්‍රී දළදා මාලිගාව", "නුවර වැව", "පේරාදෙණිය රාජකීය උද්භිද උද්‍යානය", "නුවර සංස්කෘතික සංදර්ශනය", "බහිරවකන්ද විහාර බුද්ධ ප්‍රතිමාව"],
        }
    }
  },
  Nuwara_Eliya: {
    images: [
      { src: '/places/Nuwara_Eliya1.jpg', alt: 'Tea plantations in Nuwara Eliya' },
      { src: '/places/Nuwara_Eliy2.jpg', alt: 'Colonial architecture in Nuwara Eliya town' },
      { src: '/places/Nuwara_Eliya3.jfif', alt: 'Gregory Lake, Nuwara Eliya' },
    ],
    themeColor: '#047857', // green-700
    translations: {
        en: {
            areaName: 'Nuwara Eliya - "Little England" & Tea Country',
            description: 'Nuwara Eliya, often called "Little England," is a cool-climate hill station known for its colonial-era architecture, beautifully manicured gardens, and sprawling tea plantations. Visit a tea factory to learn about tea production, enjoy scenic walks, and explore sites like Gregory Lake and Hakgala Botanical Gardens.',
            attractions: ["Tea Plantation & Factory Visits", "Gregory Lake", "Hakgala Botanical Gardens", "Horton Plains National Park (World\'s End)", "Ambewela Farm"],
        },
        de: {
            areaName: 'Nuwara Eliya - "Little England" & Teeland',
            description: 'Nuwara Eliya, oft als "Little England" bezeichnet, ist eine Bergstation mit kühlem Klima, bekannt für ihre Architektur aus der Kolonialzeit, wunderschön gepflegte Gärten und weitläufige Teeplantagen. Besuchen Sie eine Teefabrik, um mehr über die Teeproduktion zu erfahren, genießen Sie malerische Spaziergänge und erkunden Sie Orte wie den Gregory Lake und die Hakgala Botanical Gardens.',
            attractions: ["Besuch von Teeplantagen & Fabriken", "Gregory Lake", "Hakgala Botanical Gardens", "Horton Plains Nationalpark (World's End)", "Ambewela Farm"],
        },
        si: {
            areaName: 'නුවරඑළිය - "කුඩා එංගලන්තය" සහ තේ දේශය',
            description: 'බොහෝ විට "කුඩා එංගලන්තය" ලෙස හඳුන්වනු ලබන නුවරඑළිය, සිසිල් දේශගුණයක් සහිත කඳුකර නිකේතනයකි. එය යටත් විජිත යුගයේ ගෘහ නිර්මාණ ශිල්පය, අලංකාරව නඩත්තු කරන ලද උද්‍යාන සහ විශාල තේ වතු සඳහා ප්‍රසිද්ධය. තේ නිෂ්පාදනය ගැන ඉගෙන ගැනීමට තේ කර්මාන්ත ශාලාවකට පිවිසෙන්න, මනරම් ඇවිදීම් භුක්ති විඳින්න, සහ ග්‍රෙගරි වැව සහ හග්ගල උද්භිද උද්‍යානය වැනි ස්ථාන ගවේෂණය කරන්න.',
            attractions: ["තේ වතු සහ කර්මාන්තශාලා නැරඹීම", "ග්‍රෙගරි වැව", "හග්ගල උද්භිද උද්‍යානය", "හෝර්ටන් තැන්න ජාතික වනෝද්‍යානය (ලෝකාන්තය)", "අඹේවෙල ගොවිපල"],
        }
    }
  },

  // --- UVA PROVINCE ---
  ella_info: { // Ensure key matches MapPoint.popupContentId
    images: [
      { src: '/places/Ella1.jpg', alt: 'Nine Arch Bridge, Ella' },
      { src: '/places/Ella2.jpg', alt: 'View from Little Adam\'s Peak, Ella' },
      { src: '/places/Ella3.avif', alt: 'Train passing over Nine Arch Bridge' },
    ],
    themeColor: '#0D9488', // teal-700
    translations: {
        en: {
            areaName: 'Ella - Nine Arch Bridge & Hill Country Hikes',
            description: 'Ella is a charming hill country village renowned for its stunning views, hiking trails, and the iconic Nine Arch Bridge. Popular treks include Little Adam\'s Peak and Ella Rock. The Ravana Falls are also a nearby attraction. Ella offers a relaxed atmosphere amidst lush tea plantations.',
            attractions: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock Hike", "Ravana Falls", "Tea Plantations"],
        },
        de: {
            areaName: 'Ella - Neun-Bogen-Brücke & Wanderungen im Bergland',
            description: 'Ella ist ein charmantes Bergdorf, bekannt für seine atemberaubenden Aussichten, Wanderwege und die ikonische Neun-Bogen-Brücke. Beliebte Wanderungen sind der Little Adam\'s Peak und der Ella Rock. Die Ravana-Wasserfälle sind ebenfalls eine nahegelegene Attraktion. Ella bietet eine entspannte Atmosphäre inmitten üppiger Teeplantagen.',
            attractions: ["Neun-Bogen-Brücke", "Little Adam's Peak", "Ella Rock Wanderung", "Ravana-Wasserfälle", "Teeplantagen"],
        },
        si: {
            areaName: 'ඇල්ල - නයින් ආරුක්කු පාලම සහ කඳුකර චාරිකා',
            description: 'ඇල්ල යනු එහි විස්මිත දර්ශන, කඳු නැගීමේ මංපෙත් සහ සුවිශේෂී නයින් ආරුක්කු පාලම සඳහා ප්‍රසිද්ධ සිත් ඇදගන්නාසුළු කඳුකර ගම්මානයකි. කුඩා ආදම්ගේ කඳු මුදුන සහ ඇල්ල පර්වතය ජනප්‍රිය කඳු නැගීම් අතර වේ. රාවණා ඇල්ල ද අසල පිහිටි ආකර්ෂණයකි. ඇල්ල සශ්‍රීක තේ වතු මධ්‍යයේ විවේකී වාතාවරණයක් ලබා දෙයි.',
            attractions: ["නයින් ආරුක්කු පාලම", "කුඩා ආදම්ගේ කඳු මුදුන", "ඇල්ල පර්වතය තරණය", "රාවණා ඇල්ල", "තේ වතු"],
        }
    }
  },
  Bandarawela: {
    images: [
      { src: '/places/Bandarawela1.jpg', alt: 'Scenic view from Bandarawela area' },
      { src: '/places/Bandarawela2.jfif', alt: 'Dowa Rock Temple near Bandarawela' },
      { src: '/places/Bandarawela3.jpg', alt: 'Tea estates around Bandarawela' },
    ],
    themeColor: '#65A30D', // lime-700
    translations: {
        en: {
            areaName: 'Bandarawela & Dowa Rock Temple',
            description: 'Bandarawela is a picturesque hill station with a pleasant climate, serving as a base for exploring the surrounding tea estates and waterfalls like Ravana Ella (closer to Ella). The ancient Dowa Rock Temple, with its unfinished Buddha image carved into the rock, is a notable historical site.',
            attractions: ["Dowa Rock Temple", "Adisham Bungalow (nearby Haputale)", "Viewpoints (Lipton\'s Seat - Haputale)", "Tea Estates"],
        },
        de: {
            areaName: 'Bandarawela & Dowa Felsentempel',
            description: 'Bandarawela ist eine malerische Bergstation mit angenehmem Klima und dient als Ausgangspunkt für die Erkundung der umliegenden Teeplantagen und Wasserfälle wie Ravana Ella (näher bei Ella). Der alte Dowa Felsentempel mit seiner unvollendeten, in den Fels gehauenen Buddha-Figur ist eine bemerkenswerte historische Stätte.',
            attractions: ["Dowa Felsentempel", "Adisham Bungalow (nahe Haputale)", "Aussichtspunkte (Lipton's Seat - Haputale)", "Teeplantagen"],
        },
        si: {
            areaName: 'බණ්ඩාරවෙල සහ දෝව ගල් විහාරය',
            description: 'බණ්ඩාරවෙල යනු ප්‍රසන්න දේශගුණයක් සහිත මනරම් කඳුකර නිකේතනයකි. එය අවට තේ වතු සහ රාවණා ඇල්ල (ඇල්ලට ආසන්න) වැනි දියඇලි ගවේෂණය කිරීම සඳහා මූලස්ථානයක් ලෙස සේවය කරයි. ගලෙහි නෙළන ලද නිම නොකළ බුද්ධ ප්‍රතිමාවක් සහිත පුරාණ දෝව ගල් විහාරය කැපී පෙනෙන ඓතිහාසික ස්ථානයකි.',
            attractions: ["දෝව ගල් විහාරය", "ආදිශම් බංගලාව (හපුතලේ අසල)", "දර්ශනීය ස්ථාන (ලිප්ටන් සීට් - හපුතලේ)", "තේ වතු"],
        }
    }
  },
  Mahiyanganaya: {
    images: [
      { src: '/places/Mahiyanganaya1.jpg', alt: 'Mahiyangana Raja Maha Vihara' },
      { src: '/places/Mahiyanganaya2.jfif', alt: 'Vedda community interaction' },
      { src: '/places/Mahiyanganaya3.webp', alt: 'Scenic Sorabora Wewa (reservoir)' },
    ],
    themeColor: '#0E7490', // cyan-700
    translations: {
        en: {
            areaName: 'Mahiyanganaya - Sacred Vihara & Vedda Heritage',
            description: 'Mahiyanganaya is historically significant as the site of Buddha\'s first visit to Sri Lanka. The Mahiyangana Raja Maha Vihara, a gleaming white stupa, commemorates this event. The area is also known for its proximity to indigenous Vedda communities, offering insights into their ancient culture.',
            attractions: ["Mahiyangana Raja Maha Vihara", "Sorabora Wewa", "Dambana Vedda Village visit", "Randenigala Dam"],
        },
        de: {
            areaName: 'Mahiyanganaya - Heiliger Vihara & Vedda-Erbe',
            description: 'Mahiyanganaya ist historisch bedeutsam als Ort des ersten Besuchs Buddhas in Sri Lanka. Das Mahiyangana Raja Maha Vihara, eine glänzend weiße Stupa, erinnert an dieses Ereignis. Das Gebiet ist auch bekannt für seine Nähe zu indigenen Vedda-Gemeinschaften und bietet Einblicke in ihre alte Kultur.',
            attractions: ["Mahiyangana Raja Maha Vihara", "Sorabora Wewa", "Besuch des Dambana Vedda Dorfes", "Randenigala Damm"],
        },
        si: {
            areaName: 'මහියංගණය - පූජනීය විහාරය සහ වැදි උරුමය',
            description: 'මහියංගණය ඓතිහාසිකව වැදගත් වන්නේ බුදුන් වහන්සේගේ ප්‍රථම ශ්‍රී ලංකා ගමනේ ස්ථානය ලෙසයි. දිදුලන සුදු ස්තූපයක් වන මහියංගන රජ මහා විහාරය මෙම සිදුවීම අනුස්මරණය කරයි. මෙම ප්‍රදේශය ස්වදේශික වැදි ප්‍රජාවන්ට සමීප වීම සඳහා ද ප්‍රසිද්ධ අතර, ඔවුන්ගේ පුරාණ සංස්කෘතිය පිළිබඳ අවබෝධයක් ලබා දෙයි.',
            attractions: ["මහියංගන රජ මහා විහාරය", "සොරබොර වැව", "දඹාන වැදි ගම්මානය නැරඹීම", "රන්දෙනිගල වේල්ල"],
        }
    }
  },

  // --- SABARAGAMUWA PROVINCE ---
  Ratnapura_Gems: {
    images: [
      { src: '/places/Ratnapura_Gems1.jfif', alt: 'Gem mining process in Ratnapura' },
      { src: '/places/Ratnapura_Gems2.jpg', alt: 'Collection of Sri Lankan gems' },
      { src: '/places/Ratnapura_Gems3.jpg', alt: 'Rough gemstones from Ratnapura' },
    ],
    themeColor: '#1D4ED8', // blue-700
    translations: {
        en: {
            areaName: 'Ratnapura - City of Gems',
            description: 'Ratnapura, meaning "City of Gems" in Sinhalese, is the traditional center of Sri Lanka’s gem mining industry. Famous for its sapphires (especially blue sapphires), rubies, and other precious stones. Visit gem mines (with caution and guidance), museums, and learn about the intricate process of gem cutting and polishing.',
            attractions: ["Gem Mines (guided tours)", "Gem Museums", "Bopath Ella Falls", "Maha Saman Devalaya"],
        },
        de: {
            areaName: 'Ratnapura - Stadt der Edelsteine',
            description: 'Ratnapura, was auf Singhalesisch "Stadt der Edelsteine" bedeutet, ist das traditionelle Zentrum der srilankischen Edelsteinindustrie. Berühmt für seine Saphire (besonders blaue Saphire), Rubine und andere Edelsteine. Besuchen Sie Edelsteinminen (mit Vorsicht und Führung), Museen und erfahren Sie mehr über den komplizierten Prozess des Edelsteinschleifens und -polierens.',
            attractions: ["Edelsteinminen (geführte Touren)", "Edelsteinmuseen", "Bopath Ella Wasserfälle", "Maha Saman Devalaya"],
        },
        si: {
            areaName: 'රත්නපුර - මැණික් නගරය',
            description: 'සිංහලෙන් "මැණික් නගරය" යන අරුත දෙන රත්නපුරය, ශ්‍රී ලංකාවේ මැණික් කර්මාන්තයේ සාම්ප්‍රදායික කේන්ද්‍රස්ථානයයි. එහි නිල් මැණික් (විශේෂයෙන් නිල් මැණික්), රතු මැණික් සහ අනෙකුත් වටිනා ගල් සඳහා ප්‍රසිද්ධය. මැණික් පතල් (අවවාදයෙන් සහ මඟ පෙන්වීමෙන්), කෞතුකාගාර වෙත පිවිසෙන්න, සහ මැණික් කැපීම හා ඔප දැමීමේ සංකීර්ණ ක්‍රියාවලිය ගැන ඉගෙන ගන්න.',
            attractions: ["මැණික් පතල් (මඟ පෙන්වන චාරිකා)", "මැණික් කෞතුකාගාර", "බෝපත් ඇල්ල", "මහා සමන් දේවාලය"],
        }
    }
  },
  Ratnapura_Forest: {
    images: [
      { src: '/places/Ratnapura_Forest1.jpg', alt: 'Lush greenery of Sinharaja Rainforest' },
      { src: '/places/Ratnapura_Forest2.jpg', alt: 'Waterfall within Sinharaja Forest' },
      { src: '/places/Ratnapura_Forest3.jpg', alt: 'Trekking path in Sinharaja' },
    ],
    themeColor: '#065F46', // green-800
    translations: {
        en: {
            areaName: 'Sinharaja Forest Reserve - UNESCO Biodiveristy Hotspot',
            description: 'Sinharaja Forest Reserve, a UNESCO World Heritage site, is Sri Lanka’s last viable area of primary tropical rainforest. It is a biodiversity hotspot teeming with endemic species of flora and fauna, including unique birds, amphibians, and insects. Guided treks offer an immersive experience in this pristine ecosystem.',
            attractions: ["Guided Rainforest Treks", "Bird Watching", "Discovering Endemic Species", "Waterfalls"],
        },
        de: {
            areaName: 'Sinharaja Forest Reserve - UNESCO-Biodiversitäts-Hotspot',
            description: 'Das Sinharaja Forest Reserve, ein UNESCO-Weltkulturerbe, ist Sri Lankas letztes lebensfähiges Gebiet mit primärem tropischem Regenwald. Es ist ein Biodiversitäts-Hotspot, der von endemischen Arten von Flora und Fauna wimmelt, einschließlich einzigartiger Vögel, Amphibien und Insekten. Geführte Wanderungen bieten ein immersives Erlebnis in diesem unberührten Ökosystem.',
            attractions: ["Geführte Regenwaldwanderungen", "Vogelbeobachtung", "Entdeckung endemischer Arten", "Wasserfälle"],
        },
        si: {
            areaName: 'සිංහරාජ වන රක්ෂිතය - යුනෙස්කෝ ජෛව විවිධත්ව උණුසුම් ස්ථානය',
            description: 'යුනෙස්කෝ ලෝක උරුම අඩවියක් වන සිංහරාජ වන රක්ෂිතය, ශ්‍රී ලංකාවේ ප්‍රාථමික නිවර්තන වැසි වනාන්තරවලින් ඉතිරිව ඇති අවසන් ශක්‍ය ප්‍රදේශයයි. එය අද්විතීය පක්ෂීන්, උභයජීවීන් සහ කෘමීන් ඇතුළු ආවේණික ශාක හා සත්ත්ව විශේෂ වලින් පිරී ඇති ජෛව විවිධත්ව උණුසුම් ස්ථානයකි. මඟ පෙන්වන ලද චාරිකා මෙම නොකිලිටි පරිසර පද්ධතියේ ගිලී යන අත්දැකීමක් ලබා දෙයි.',
            attractions: ["මඟ පෙන්වන ලද වැසි වනාන්තර චාරිකා", "කුරුළු නැරඹීම", "ආවේණික විශේෂ සොයා ගැනීම", "දියඇලි"],
        }
    }
  },
  Ratnapura_Park: {
    images: [
      { src: '/places/Ratnapura_Park1.jpg', alt: 'Elephants at Udawalawe National Park' },
      { src: '/places/Ratnapura_Park2.webp', alt: 'Safari jeep in Udawalawe' },
      { src: '/places/Ratnapura_Park3.jpg', alt: 'Landscape of Udawalawe National Park' },
    ],
    themeColor: '#57534E', // Using stone-600 as a proxy for olive-600 for now (#7C6E0F is a true olive)
    translations: {
        en: {
            areaName: 'Udawalawe National Park - Elephant Haven',
            description: 'Udawalawe National Park, located on the boundary of Sabaragamuwa and Uva Provinces, is renowned for its large population of Sri Lankan elephants. Safari jeep tours offer excellent opportunities to see these majestic animals in their natural habitat, along with water buffalo, deer, crocodiles, and diverse birdlife. The Udawalawe Reservoir is a central feature.',
            attractions: ["Elephant Safaris", "Udawalawe Elephant Transit Home", "Bird Watching", "Udawalawe Reservoir"],
        },
        de: {
            areaName: 'Udawalawe-Nationalpark - Elefantenparadies',
            description: 'Der Udawalawe-Nationalpark, an der Grenze der Provinzen Sabaragamuwa und Uva gelegen, ist bekannt für seine große Population srilankischer Elefanten. Safari-Jeep-Touren bieten hervorragende Möglichkeiten, diese majestätischen Tiere in ihrem natürlichen Lebensraum zu sehen, zusammen mit Wasserbüffeln, Hirschen, Krokodilen und vielfältiger Vogelwelt. Das Udawalawe-Reservoir ist ein zentrales Merkmal.',
            attractions: ["Elefantensafaris", "Udawalawe Elefanten-Transithaus", "Vogelbeobachtung", "Udawalawe-Stausee"],
        },
        si: {
            areaName: 'උඩවලව ජාතික වනෝද්‍යානය - අලි ඇතුන්ගේ තෝතැන්න',
            description: 'සබරගමුව සහ ඌව පළාත්වල මායිමේ පිහිටි උඩවලව ජාතික වනෝද්‍යානය, ශ්‍රී ලාංකික අලි ඇතුන්ගේ විශාල ගහනය සඳහා ප්‍රසිද්ධය. සෆාරි ජීප් චාරිකා මගින් මෙම විස්මිත සතුන් ඔවුන්ගේ ස්වාභාවික වාසස්ථානවල, මී හරකුන්, මුවන්, කිඹුලන් සහ විවිධ පක්ෂීන් සමඟ නැරඹීමට විශිෂ්ට අවස්ථා ලබා දේ. උඩවලව ජලාශය මධ්‍යම අංගයකි.',
            attractions: ["අලි සෆාරි", "උඩවලව අලි ඇතුන් රැඳවුම් මධ්‍යස්ථානය", "කුරුළු නැරඹීම", "උඩවලව ජලාශය"],
        }
    }
  },

  // Default/Fallback Wilpattu (as an extra entry if key is distinct from main Wilpattu)
  // Ensure Wilpattu in MapPoints.config points to ONE of these. Assuming main one for now.
  Wilpattu: { // Note: This 'Wilpattu' entry from your original prompt. Ensure the MapPoint key points to only ONE Wilpattu entry.
               // I'll keep it as is, assuming you want it separate.
    images: [
        { src: '/places/adam-marikar-3sJIC7dKcpQ-unsplash.jpg', alt: 'Wildlife in Wilpattu National Park' },
    ],
    themeColor: '#713F12', // brown-600/700 approximate hex (using amber-900 as a close standard Tailwind one)
    translations: {
      en: {
        areaName: 'Wilpattu National Park - Land of Lakes',
        description: 'Established in 1938, Wilpattu National Park is Sri Lanka’s largest and oldest wildlife reserve, spanning over 1,300 square kilometers of dry evergreen forest and dotted with natural “villus” or lakes. Leopards stealthily stalk the undergrowth, elephants bathe in muddy pools, and waterfowl swirl above lily-pad fringes at dawn. Safari jeeps bump along sandy tracks between shimmering tanks, where crocodiles lie half-submerged in the midday sun. While it’s famed for its big cats, Wilpattu’s true magic lies in its vast, unspoiled terrain.',
        attractions: ["Leopard Spotting", "Bird Watching", "Exploring Natural Villus (Lakes)", "Sloth Bear Sightings"],
      },
      de: {
        areaName: 'Wilpattu Nationalpark - Land der Seen',
        description: 'Der 1938 gegründete Wilpattu Nationalpark ist Sri Lankas größtes und ältestes Wildreservat und erstreckt sich über 1.300 Quadratkilometer trockenen immergrünen Waldes, gesprenkelt mit natürlichen „Villus“ oder Seen. Leoparden pirschen heimlich durch das Unterholz, Elefanten baden in schlammigen Tümpeln und Wasservögel wirbeln im Morgengrauen über Seerosenrändern. Safari-Jeeps holpern über sandige Pisten zwischen schimmernden Wasserbecken, wo Krokodile mittags halb untergetaucht liegen. Obwohl er für seine Großkatzen berühmt ist, liegt Wilpattus wahre Magie in seinem riesigen, unberührten Gelände.',
        attractions: ["Leopardenbeobachtung", "Vogelbeobachtung", "Erkundung natürlicher Villus (Seen)", "Lippenbär-Sichtungen"],
      },
      si: {
        areaName: 'විල්පත්තු ජාතික වනෝද්‍යානය - විල් දේශය',
        description: '1938 දී පිහිටුවන ලද විල්පත්තු ජාතික වනෝද්‍යානය ශ්‍රී ලංකාවේ විශාලතම සහ පැරණිතම වනජීවී රක්ෂිතය වන අතර, වියළි සදාහරිත වනාන්තර වර්ග කිලෝමීටර් 1,300 කට අධික ප්‍රදේශයක විහිදී ඇති අතර ස්වාභාවික "විල්ලු" හෙවත් විල් වලින් සමන්විත වේ. දිවියන් හොර රහසේ පඳුරු අතර සැරිසරයි, අලි ඇතුන් මඩ වලවල්වල නාමින් සිටී, ජලජ පක්ෂීන් උදෑසන ලිලී පෑඩ් මායිම්වලට ඉහළින් කැරකෙයි. සෆාරි ජීප් රථ දිදුලන වැව් අතර වැලි සහිත මාර්ග දිගේ ගැටෙමින් ගමන් කරයි, එහිදී කිඹුලන් දවල් කාලයේදී අඩක් ජලයේ ගිලී සිටිති. එය එහි විශාල බළලුන් සඳහා ප්‍රසිද්ධ වුවද, විල්පත්තු වල සැබෑ මායාව එහි විශාල, නොකිලිටි භූමිය තුළ පවතී.',
        attractions: ["දිවි නැරඹීම", "කුරුළු නැරඹීම", "ස්වාභාවික විල් (විල්ලු) ගවේෂණය", "වලස් නැරඹීම"],
      },
    }
  },
};