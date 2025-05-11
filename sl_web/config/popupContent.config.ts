// src/config/popupContent.config.ts
export interface PopupContent {
  areaName: string;
  description: string;
  images: { src: string; alt: string }[];
  attractions: string[];
  themeColor?: string;
}

export const popupData: Record<string, PopupContent> = {
  'colombo_info': {
    areaName: 'Colombo',
    description: 'Sri Lanka\'s vibrant commercial capital, a bustling metropolis with a mix of modern life and colonial buildings.',
    images: [
      // { src: '/assets/images/colombo/colombo-cityscape.jpg', alt: 'Colombo Cityscape' },
      // { src: '/assets/images/colombo/galle-face.jpg', alt: 'Galle Face Green' },
      { src: '/places/lotus-tower.jpg', alt: 'Lotus Tower' },
      { src: '/places/galle-face.jpg', alt: 'Galle Face Green (Alternate)' }
    ],
    attractions: ['Galle Face Green', 'Gangaramaya Temple', 'Pettah Market', 'Colombo National Museum'],
  },
  'kandy_info': {
    areaName: 'Kandy',
    description: 'The cultural heart of Sri Lanka, nestled amidst misty hills and home to the sacred Temple of the Tooth.',
    images: [
      { src: '/assets/images/kandy/kandy-lake.jpg', alt: 'Kandy Lake' },
      { src: '/assets/images/kandy/temple-of-tooth.jpg', alt: 'Temple of the Tooth' }
    ],
    attractions: ['Temple of the Tooth', 'Royal Botanical Gardens', 'Kandy Lake', 'Bahirawakanda Vihara Buddha Statue'],
  },
  'galle_info': {
    areaName: 'Galle',
    description: 'A historic city on the southwest coast, known for the well-preserved Galle Fort.',
    images: [
      { src: '/assets/images/galle/galle-fort.jpg', alt: 'Galle Fort' },
      { src: '/assets/images/galle/lighthouse.jpg', alt: 'Galle Lighthouse' }
    ],
    attractions: ['Galle Fort', 'Galle Lighthouse', 'Dutch Reformed Church', 'National Maritime Museum'],
  },
  'sigiriya_info': {
    areaName: 'Sigiriya',
    description: 'An ancient rock fortress with frescoes, water gardens, and a rich archaeological legacy.',
    images: [
      { src: '/assets/images/sigiriya/sigiriya-rock.jpg', alt: 'Sigiriya Rock' },
      { src: '/assets/images/sigiriya/frescoes.jpg', alt: 'Sigiriya Frescoes' }
    ],
    attractions: ['Sigiriya Rock Fortress', 'Sigiriya Museum', 'Water Gardens'],
  },
  'jaffna_info': {
    areaName: 'Jaffna',
    description: 'A northern cultural hub known for its Hindu temples, colonial history, and unique cuisine.',
    images: [
      { src: '/assets/images/jaffna/jaffna-library.jpg', alt: 'Jaffna Library' },
      { src: '/assets/images/jaffna/nallur-temple.jpg', alt: 'Nallur Kandaswamy Temple' }
    ],
    attractions: ['Nallur Temple', 'Jaffna Library', 'Nagadeepa Purana Vihara', 'Jaffna Fort'],
  },
  'anuradhapura_info': {
    areaName: 'Anuradhapura',
    description: 'An ancient city filled with stupas, monasteries, and ruins of Sri Lanka’s early civilization.',
    images: [
      { src: '/assets/images/anuradhapura/ruwanwelisaya.jpg', alt: 'Ruwanwelisaya Stupa' },
      { src: '/assets/images/anuradhapura/sri-maha-bodhi.jpg', alt: 'Sri Maha Bodhi Tree' }
    ],
    attractions: ['Ruwanwelisaya', 'Sri Maha Bodhi', 'Abhayagiri Monastery', 'Jetavanaramaya'],
  },
  'ella_info': {
    areaName: 'Ella',
    description: 'A small mountain town surrounded by tea plantations, waterfalls, and stunning hikes.',
    images: [
      { src: '/assets/images/ella/nine-arches.jpg', alt: 'Nine Arches Bridge' },
      { src: '/assets/images/ella/ella-rock.jpg', alt: 'Ella Rock' }
    ],
    attractions: ['Nine Arches Bridge', 'Ella Rock', 'Little Adam’s Peak', 'Ravana Falls'],
  }
};