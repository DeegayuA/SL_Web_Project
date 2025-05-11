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
    id: 'colombo',
    name: 'Colombo',
    svgCoords: { x: '25%', y: '68%' }, // Adjust these based on YOUR SVG
    popupContentId: 'colombo_info',
  },
  {
    id: 'kandy',
    name: 'Kandy',
    svgCoords: { x: '48%', y: '56%' }, // Adjust these based on YOUR SVG
    popupContentId: 'kandy_info',
  },
  {
    id: 'galle',
    name: 'Galle',
    svgCoords: { x: '37%', y: '85%' }, // Adjust these based on YOUR SVG
    popupContentId: 'galle_info',
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    svgCoords: { x: '50%', y: '42%' }, // Adjust these based on YOUR SVG
    popupContentId: 'sigiriya_info',
  },
  {
    id: 'jaffna',
    name: 'Jaffna',
    svgCoords: { x: '35%', y: '13%' }, // Adjust these based on YOUR SVG
    popupContentId: 'jaffna_info',
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    svgCoords: { x: '40%', y: '30%' }, // Adjust these based on YOUR SVG
    popupContentId: 'anuradhapura_info',
  },
  {
    id: 'ella',
    name: 'Ella',
    svgCoords: { x: '65%', y: '65%' }, // Adjust these based on YOUR SVG
    popupContentId: 'ella_info',
  },
  // Add more points...
];