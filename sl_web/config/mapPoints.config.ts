// src/config/mapPoints.config.ts
export interface MapPoint {
  id: string; // Unique identifier for the point (e.g., 'colombo', 'kandy')
  name: string; // Display name of the location
  /**
   * Coordinates for positioning the marker on your SVG.
   * These are relative to the SVG's viewBox or dimensions.
   * Use percentages (e.g., '50%') or absolute numbers if you know the viewBox.
   */
  svgCoords: { x: string | number; y: string | number };
  popupContentId: string; // Key to look up content in popupContent.config.ts
}

export const sriLankaMapPoints: MapPoint[] = [
  {
    id: 'Jaffna',
    name: 'Nallur Kandasamy Temple',
    svgCoords: { x: '25%', y: '68%' }, // adjust these based on your SVG
    popupContentId: 'Jaffna'
  },
  {
    id: 'Mannar',
    name: 'Madhu Road Sanctuary',
    svgCoords: { x: '30%', y: '65%' }, // adjust these based on your SVG
    popupContentId: 'Mannar'
  },
  {
    id: 'Wilpattu',
    name: 'Wilpattu National Park',
    svgCoords: { x: '28%', y: '72%' },
    popupContentId: 'Wilpattu'
  },
  {
    id: 'Kalpitiya',
    name: 'Kite Flying in Kalpitiya Lagoon',
    svgCoords: { x: '22%', y: '60%' },
    popupContentId: 'Kalpitiya'
  },
  {
    id: 'Chilaw',
    name: 'Munneswaram Kowil',
    svgCoords: { x: '35%', y: '58%' },
    popupContentId: 'Chilaw'
  },
  {
    id: 'Negombo',
    name: "St. Mary's Church",
    svgCoords: { x: '40%', y: '55%' },
    popupContentId: 'Negombo'
  },
  {
    id: 'Colombo',
    name: 'Nelum Kuluna',
    svgCoords: { x: '45%', y: '50%' },
    popupContentId: 'Colombo'
  },
  {
    id: 'Kalutara',
    name: 'Kalutara Temple',
    svgCoords: { x: '50%', y: '60%' },
    popupContentId: 'Kalutara'
  },
  {
    id: 'Bentota Beach',
    name: 'Sun Bath',
    svgCoords: { x: '55%', y: '65%' },
    popupContentId: 'Bentota Beach'
  },
  {
    id: 'Hikkaduwa Beach',
    name: 'Surfing & Snorkelling',
    svgCoords: { x: '58%', y: '68%' },
    popupContentId: 'Hikkaduwa Beach'
  },
  {
    id: 'Ambalangoda',
    name: 'Ambalangoda Mask',
    svgCoords: { x: '60%', y: '70%' },
    popupContentId: 'Ambalangoda'
  },
  {
    id: 'Galle',
    name: 'Galle Fort',
    svgCoords: { x: '62%', y: '75%' },
    popupContentId: 'Galle'
  },
  {
    id: 'Unawatuna Beach',
    name: 'Scuba Diving',
    svgCoords: { x: '65%', y: '80%' },
    popupContentId: 'Unawatuna Beach'
  },
  {
    id: 'Mirissa',
    name: 'Whale Watching',
    svgCoords: { x: '68%', y: '78%' },
    popupContentId: 'Mirissa'
  },
  {
    id: 'Hambantota',
    name: 'Bundala Bird Sanctuary',
    svgCoords: { x: '70%', y: '85%' },
    popupContentId: 'Hambantota'
  },
  {
    id: 'Kataragama',
    name: 'Yala National Park',
    svgCoords: { x: '72%', y: '88%' },
    popupContentId: 'Kataragama'
  },
  {
    id: 'Arugambay',
    name: 'Surfing',
    svgCoords: { x: '75%', y: '82%' },
    popupContentId: 'Arugambay'
  },
  {
    id: 'Batticaloa',
    name: 'Scuba Diving',
    svgCoords: { x: '78%', y: '80%' },
    popupContentId: 'Batticaloa'
  },
  {
    id: 'Passekudah',
    name: 'Sun Bath',
    svgCoords: { x: '80%', y: '75%' },
    popupContentId: 'Passekudah'
  },
  {
    id: 'Trincomalee',
    name: 'National Harbour',
    svgCoords: { x: '82%', y: '70%' },
    popupContentId: 'Trincomalee'
  },
  {
    id: 'Elephant_Pass',
    name: 'Chundikulam Bird Sanctuary',
    svgCoords: { x: '85%', y: '65%' },
    popupContentId: 'Elephant_Pass'
  },
  {
    id: 'Anuradhapura_Temple',
    name: 'Jethawanaramaya Temple',
    svgCoords: { x: '88%', y: '60%' },
    popupContentId: 'Anuradhapura_Temple'
  },
  {
    id: 'Anuradhapura_Statue',
    name: 'Aukana Statue',
    svgCoords: { x: '90%', y: '58%' },
    popupContentId: 'Anuradhapura_Statue'
  },
  {
    id: 'Sigiriya',
    name: 'Sigiriya Rock',
    svgCoords: { x: '92%', y: '55%' },
    popupContentId: 'Sigiriya'
  },
  {
    id: 'Polonnaruwa',
    name: 'Dalada Maluwa',
    svgCoords: { x: '94%', y: '52%' },
    popupContentId: 'Polonnaruwa'
  },
  {
    id: 'Pinnawala',
    name: 'Pinnawala Elephant Orphanage',
    svgCoords: { x: '96%', y: '50%' },
    popupContentId: 'Pinnawala'
  },
  {
    id: 'Kandy',
    name: 'Temple of the Sacred Tooth Relic',
    svgCoords: { x: '98%', y: '48%' },
    popupContentId: 'Kandy'
  },
  {
    id: 'Nuwara Eliya',
    name: 'Tea Factory',
    svgCoords: { x: '95%', y: '45%' },
    popupContentId: 'Nuwara Eliya'
  },
  {
    id: 'Ella',
    name: 'Nine Arch Bridge',
    svgCoords: { x: '90%', y: '42%' },
    popupContentId: 'Ella'
  },
  {
    id: 'Mahiyanganaya',
    name: 'Tribal Village',
    svgCoords: { x: '85%', y: '40%' },
    popupContentId: 'Mahiyanganaya'
  },
  {
    id: 'Bandarawela',
    name: 'Rawana Ella Falls',
    svgCoords: { x: '80%', y: '38%' },
    popupContentId: 'Bandarawela'
  },
  {
    id: 'Ratnapura_Gems',
    name: 'Gems',
    svgCoords: { x: '75%', y: '35%' },
    popupContentId: 'Ratnapura_Gems'
  },
  {
    id: 'Ratnapura_Forest',
    name: 'Sinharaja Rain Forest',
    svgCoords: { x: '70%', y: '32%' },
    popupContentId: 'Ratnapura_Forest'
  },
  {
    id: 'Ratnapura_Park',
    name: 'Uda Walawe National Park',
    svgCoords: { x: '65%', y: '30%' },
    popupContentId: 'Ratnapura_Park'
  }
  // Add more points...
];
