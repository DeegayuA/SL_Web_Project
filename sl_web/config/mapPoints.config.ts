// src/config/mapPoints.config.ts
export interface MapPoint {
  id: string;
  name: string; // This will be displayed below the marker
  svgCoords: { x: string | number; y: string | number };
  popupContentId: string; // Key to look up content in popupContent.config.ts
  themeColor?: string;       // Primary color for the marker/popups (e.g., '#DC2626')
  placeholderColor?: string; // Optional: Specific color for the text background placeholder (e.g., '#FEE2E2')
}

export const sriLankaMapPoints: MapPoint[] = [
  // --- NORTHERN PROVINCE ---
  {
    id: 'Jaffna',
    name: 'Nallur Kandasamy Temple',
    svgCoords: { x: '20%', y: '2%' },
    popupContentId: 'Jaffna',
    themeColor: '#DC2626', // red-600
    placeholderColor: '#FEE2E2' // red-100
  },
  {
    id: 'Mannar',
    name: 'Madhu Road Sanctuary',
    svgCoords: { x: '19%', y: '22%' },
    popupContentId: 'Mannar',
    themeColor: '#0284C7', // sky-600
    placeholderColor: '#E0F2FE' // sky-100
  },
  {
    id: 'Elephant_Pass',
    name: 'Elephant Pass Causeway',
    svgCoords: { x: '26%', y: '10%' },
    popupContentId: 'Elephant_Pass',
    themeColor: '#F97316', // orange-500
    placeholderColor: '#FFEDD5' // orange-100
  },

  // --- NORTH CENTRAL PROVINCE ---
  {
    id: 'Anuradhapura_Temple',
    name: 'Jethawanaramaya Temple',
    svgCoords: { x: '35%', y: '26%' },
    popupContentId: 'Anuradhapura_Temple',
    themeColor: '#C2410C', // orange-700
    placeholderColor: '#FFF7ED' // orange-50 (lighter than 100)
  },
  {
    id: 'Anuradhapura_Statue',
    name: 'Aukana Statue',
    svgCoords: { x: '42%', y: '33%' },
    popupContentId: 'Anuradhapura_Statue',
    themeColor: '#78716C', // stone-500
    placeholderColor: '#F5F5F4' // stone-100
  },
  {
    id: 'Polonnaruwa',
    name: 'Dalada Maluwa',
    svgCoords: { x: '52%', y: '35%' },
    popupContentId: 'Polonnaruwa',
    themeColor: '#D97706', // amber-600
    placeholderColor: '#FEF3C7' // amber-100
  },
  {
    id: 'Sigiriya',
    name: 'Sigiriya Rock',
    svgCoords: { x: '48%', y: '42%' },
    popupContentId: 'Sigiriya',
    themeColor: '#CA8A04', // yellow-600
    placeholderColor: '#FEF9C3' // yellow-100
  },
  {
    id: 'Wilpattu',
    name: 'Wilpattu National Park',
    svgCoords: { x: '17%', y: '30%' },
    popupContentId: 'Wilpattu',
    themeColor: '#16A34A', // green-600
    placeholderColor: '#DCFCE7' // green-100
  },

  // --- EASTERN PROVINCE ---
  {
    id: 'Trincomalee',
    name: 'Koneswaram Temple',
    svgCoords: { x: '58%', y: '31%' },
    popupContentId: 'Trincomalee',
    themeColor: '#4F46E5', // indigo-600
    placeholderColor: '#E0E7FF' // indigo-100
  },
  {
    id: 'Passekudah',
    name: 'Passekudah Bay',
    svgCoords: { x: '67%', y: '42%' },
    popupContentId: 'Passekudah',
    themeColor: '#06B6D4', // cyan-500
    placeholderColor: '#CFFAFE' // cyan-100
  },
  {
    id: 'Batticaloa',
    name: 'Batticaloa Lagoon',
    svgCoords: { x: '74%', y: '48%' },
    popupContentId: 'Batticaloa',
    themeColor: '#14B8A6', // teal-500
    placeholderColor: '#CCFBF1' // teal-100
  },
  {
    id: 'Arugambay',
    name: 'Arugam Bay Surfing',
    svgCoords: { x: '75%', y: '60%' },
    popupContentId: 'Arugambay',
    themeColor: '#3B82F6', // blue-500
    placeholderColor: '#DBEAFE' // blue-100
  },

  // --- WESTERN PROVINCE ---
  {
    id: 'Kalpitiya',
    name: 'Kalpitiya Kitesurfing',
    svgCoords: { x: '5%', y: '36%' },
    popupContentId: 'Kalpitiya',
    themeColor: '#84CC16', // lime-500
    placeholderColor: '#F7FEE7' // lime-100
  },
  {
    id: 'Chilaw',
    name: 'Munneswaram Temple',
    svgCoords: { x: '10%', y: '50%' },
    popupContentId: 'Chilaw',
    themeColor: '#EF4444', // red-500
    placeholderColor: '#FEE2E2' // red-100 (shared)
  },
  {
    id: 'Negombo',
    name: "St. Mary's Church",
    svgCoords: { x: '10%', y: '56%' },
    popupContentId: 'Negombo',
    themeColor: '#EC4899', // pink-500
    placeholderColor: '#FCE7F3' // pink-100
  },
  {
    id: 'Colombo',
    name: 'Lotus Tower (Nelum Kuluna)',
    svgCoords: { x: '16%', y: '63%' },
    popupContentId: 'Colombo',
    themeColor: '#9333EA', // purple-600
    placeholderColor: '#F3E8FF' // purple-100
  },
  {
    id: 'Kalutara',
    name: 'Kalutara Bodhiya',
    svgCoords: { x: '16%', y: '70%' },
    popupContentId: 'kalutara_info',
    themeColor: '#FB923C', // orange-400
    placeholderColor: '#FFEDD5' // orange-100 (shared)
  },

  // --- SOUTHERN PROVINCE ---
  {
    id: 'Bentota_Beach',
    name: 'Bentota Beach & River',
    svgCoords: { x: '12%', y: '76%' },
    popupContentId: 'Bentota_Beach',
    themeColor: '#EAB308', // yellow-500
    placeholderColor: '#FEF9C3' // yellow-100 (shared)
  },
  {
    id: 'Ambalangoda',
    name: 'Ambalangoda Masks',
    svgCoords: { x: '15%', y: '82%' },
    popupContentId: 'Ambalangoda',
    themeColor: '#A16207', // yellow-700
    placeholderColor: '#FEF3C7' // amber-100 (similar to yellow)
  },
  {
    id: 'Hikkaduwa_Beach',
    name: 'Hikkaduwa Corals',
    svgCoords: { x: '20%', y: '88%' },
    popupContentId: 'Hikkaduwa_Beach',
    themeColor: '#22C55E', // green-500
    placeholderColor: '#DCFCE7' // green-100 (shared)
  },
  {
    id: 'Galle',
    name: 'Galle Fort',
    svgCoords: { x: '36%', y: '90%' },
    popupContentId: 'Galle',
    themeColor: '#EA580C', // orange-600
    placeholderColor: '#FFEDD5' // orange-100 (shared)
  },
  {
    id: 'Unawatuna_Beach',
    name: 'Unawatuna Bay',
    svgCoords: { x: '42%', y: '88%' },
    popupContentId: 'Unawatuna_Beach',
    themeColor: '#10B981', // emerald-500
    placeholderColor: '#D1FAE5' // emerald-100
  },
  {
    id: 'Mirissa',
    name: 'Mirissa Whale Watching',
    svgCoords: { x: '47%', y: '84%' },
    popupContentId: 'Mirissa',
    themeColor: '#D946EF', // fuchsia-500
    placeholderColor: '#FAE8FF' // fuchsia-100
  },
  {
    id: 'Hambantota',
    name: 'Bundala National Park',
    svgCoords: { x: '60%', y: '82%' },
    popupContentId: 'Hambantota',
    themeColor: '#E11D48', // rose-600
    placeholderColor: '#FFE4E6' // rose-100
  },
  {
    id: 'Kataragama',
    name: 'Kataragama Sacred City (Yala Gateway)',
    svgCoords: { x: '60%', y: '80%' },
    popupContentId: 'Kataragama',
    themeColor: '#BE185D', // pink-700
    placeholderColor: '#FCE7F3' // pink-100 (shared)
  },

  // --- CENTRAL PROVINCE (Hill Country) ---
  {
    id: 'Pinnawala',
    name: 'Pinnawala Elephant Orphanage',
    svgCoords: { x: '30%', y: '55%' },
    popupContentId: 'Pinnawala',
    themeColor: '#6B7280', // gray-500
    placeholderColor: '#F3F4F6' // gray-100
  },
  {
    id: 'Kandy',
    name: 'Temple of the Tooth Relic',
    svgCoords: { x: '40%', y: '53%' },
    popupContentId: 'Kandy',
    themeColor: '#7E22CE', // purple-700
    placeholderColor: '#F3E8FF' // purple-100 (shared)
  },
  {
    id: 'Nuwara_Eliya',
    name: 'Nuwara Eliya Tea Country',
    svgCoords: { x: '42%', y: '60%' },
    popupContentId: 'Nuwara_Eliya',
    themeColor: '#047857', // green-700
    placeholderColor: '#DCFCE7' // green-100 (shared)
  },

  // --- UVA PROVINCE (Often associated with Hill Country) ---
  {
    id: 'Ella',
    name: 'Ella - Nine Arch Bridge',
    svgCoords: { x: '55%', y: '67%' },
    popupContentId: 'ella_info',
    themeColor: '#0D9488', // teal-700
    placeholderColor: '#CCFBF1' // teal-100 (shared)
  },
  {
    id: 'Bandarawela',
    name: 'Bandarawela Town',
    svgCoords: { x: '58%', y: '64%' },
    popupContentId: 'Bandarawela',
    themeColor: '#65A30D', // lime-700
    placeholderColor: '#F7FEE7' // lime-100 (shared)
  },
  {
    id: 'Mahiyanganaya',
    name: 'Mahiyangana Temple',
    svgCoords: { x: '57%', y: '58%' },
    popupContentId: 'Mahiyanganaya',
    themeColor: '#0E7490', // cyan-700
    placeholderColor: '#CFFAFE' // cyan-100 (shared)
  },

  // --- SABARAGAMUWA PROVINCE ---
  {
    id: 'Ratnapura_Gems',
    name: 'Ratnapura - City of Gems',
    svgCoords: { x: '28%', y: '66%' },
    popupContentId: 'Ratnapura_Gems',
    themeColor: '#1D4ED8', // blue-700
    placeholderColor: '#DBEAFE' // blue-100 (shared)
  },
  {
    id: 'Ratnapura_Forest',
    name: 'Sinharaja Forest Reserve',
    svgCoords: { x: '32%', y: '72%' },
    popupContentId: 'Ratnapura_Forest',
    themeColor: '#065F46', // green-800
    placeholderColor: '#DCFCE7' // green-100 (shared)
  },
  {
    id: 'Ratnapura_Park',
    name: 'Udawalawe National Park',
    svgCoords: { x: '30%', y: '79%' },
    popupContentId: 'Ratnapura_Park',
    themeColor: '#4D7C0F', // lime-800
    placeholderColor: '#F7FEE7' // lime-100 (shared)
  }
];