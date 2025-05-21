// src/config/popupContent.config.ts
export interface PopupContent {
  areaName: string;
  description: string;
  images: { src: string; alt: string }[];
  attractions: string[];
  themeColor?: string;
}

export const popupData: Record<string, PopupContent> = {
  Jaffna: {
    areaName: 'Nallur Kandasamy Temple',
    description: 'In the hot, arid landscape of northern Sri Lanka’s Jaffna peninsula stands the Nallur Kandasamy Temple, a radiant jewel of Dravidian architecture and centuries-old devotion. Consecrated to Lord Murugan—the Hindu god of war, love, and wisdom—the temple’s towering gopurams (ornate gateway towers) gleam in gold and vermilion, guiding pilgrims from afar. Inside, the inner sanctum houses the vel (divine spear) of Murugan under a canopy of silver and sandalwood, while the walls echo with chants and the fragrance of incense. Annual festivals see thousands converge in joyous processions, vibrant dances, and traditional drumming that reverberates through the warm Jaffna air.',
    images: [],
    attractions: []
  },
  Mannar: {
    areaName: 'Madhu Road Sanctuary',
    description: 'Just south of Mannar town, Madhu Road Sanctuary covers over 30 square kilometers of brackish lagoons, rice paddies, and thorn scrub habitats—an essential refuge for migratory birds along the Central Asian Flyway. From November through March, the skies fill with flamingos, pelicans, and painted storks, while the shallow waters host rare shorebirds like the black-tailed godwit and Eurasian curlew. Local fishermen still ply the glimmering channels in traditional coracles, their nets trailing behind. A boardwalk and observation hides let you glide quietly into the heart of this avian wonderland, where sunrise casts rosy hues across reed-lined shores.',
    images: [],
    attractions: []
  },
  Wilpattu: {
    areaName: 'Wilpattu National Park',
    description: 'Established in 1938, Wilpattu National Park is Sri Lanka’s largest and oldest wildlife reserve, spanning over 1,300 square kilometers of dry evergreen forest and dotted with natural “villus” or lakes. Leopards stealthily stalk the undergrowth, elephants bathe in muddy pools, and waterfowl swirl above lily-pad fringes at dawn. Safari jeeps bump along sandy tracks between shimmering tanks, where crocodiles lie half-submerged in the midday sun. While it’s famed for its big cats, Wilpattu’s true magic lies in its vast, unspoiled terrain—untouched by roads or buildings, it feels like a journey back into prehistoric times.',
    images: [],
    attractions: []
  },
  Kalpitiya: {
    areaName: 'Kite Flying in Kalpitiya Lagoon',
    description: 'Kalpitiya’s sheltered lagoons and steady offshore winds make it one of Asia’s premier kite-surfing spots. From October through March, thrill-seekers from around the world rig their lines on wide-beach launches before skimming across glassy blue shallows. Beginners can take lessons from local schools, who provide boards, harnesses, and experienced instructors. When the wind drops, the same lagoons invite stand-up paddleboarding and serene birdwatching—pelicans, terns, and osprey patrol the skies. As the sun dips behind distant islands, kites drift like psychedelic butterflies over a mirror of water, painting perfect reflections at golden hour.',
    images: [],
    attractions: []
  },
  Chilaw: {
    areaName: 'Munneswaram Kowil',
    description: 'Perched on the banks of the Chilaw lagoon, Munneswaram Temple is a sacred Hindu-Buddhist complex devoted to Shiva, Vishnu, and local deities. Its vibrant red and white gopuram rises above swaying palms, while inside, priests chant Sanskrit mantras under the glow of oil lamps. Pilgrims — Tamils, Sinhalese, and Catholics alike — line up to receive ash blessings and participate in oil-pouring ceremonies at the shrine of Munneswaram. Each October, thousands gather for the Munneswaram Pooja festival, a three-day celebration of healing rituals, fire-walking, and communal feasts beneath star-filled skies.',
    images: [],
    attractions: []
  },
  Negombo: {
    areaName: "St. Mary's Church",
    description: 'Known as the “Queen of Churches,” St. Mary’s Basilica in Negombo blends Baroque grandeur with local Lankan flair. The two lofty towers flank an Italianate façade, while inside, 45 frescoes by Burmese Catholic monk De la Croix depict biblical scenes in vivid reds and golds. Carved wooden pews and chandeliers cast warm pools of light on marble floors, and the stained-glass windows filter tropical sunshine into rainbow hues. Each February, thousands attend the February Festival to honor Our Lady of Good Health, filling the pews and the nearby streets with fragrant flowers and festive processions.',
    images: [],
    attractions: []
  },
  Colombo: {
    areaName: 'Nelum Kuluna',
    description: 'Rising 350 meters above Galle Face Green, the Lotus Tower (Nelum Kuluna) is Sri Lanka’s tallest structure and a modern icon on Colombo’s skyline. Its design—resembling a blossoming lotus—melds cutting-edge engineering with ancient symbolism. Visitors take high-speed elevators to an observation deck for 360° views of the Indian Ocean, the city’s high-rises, and distant mountains. Below, a landscaped plaza features dancing fountains and cafes. By night, the tower’s LED cloak shifts through vibrant colors, transforming Colombo harbor into a living light show that celebrates Sri Lanka’s bright future.',
    images: [],
    attractions: []
  },
  kalutara_info: {
    areaName: 'Kalutara Temple',
    description: 'On the banks of the Kalu Ganga, the Gangatilaka Vihara in Kalutara is one of just two hollow Buddhist stupas in the world, allowing visitors to walk through its pristine white corridor. The 14-meter-tall dome shelters 24 murals and reliefs depicting Buddha’s life, while the outer walkway is flanked by statues of the Dhamma disciples. Pilgrims pour water over the paddling fish motifs at the base as a form of merit-making. Surrounded by coconut groves and tea estates, Gangatilaka offers quiet contemplation and a stunning riverside panorama at sunrise.',
    images: [],
    attractions: []
  },
  Bentota_Beach: {
    areaName: 'Sun Bath',
    description: '',
    images: [],
    attractions: []
  },
  Hikkaduwa_Beach: {
    areaName: 'Surfing, Snorkelling & Corals',
    description: '',
    images: [],
    attractions: []
  },
  Ambalangoda: {
    areaName: 'Mask Crafting',
    description: '',
    images: [],
    attractions: []
  },
  Galle: {
    areaName: 'Galle Fort',
    description: '',
    images: [],
    attractions: []
  },
  Unawatuna_Beach: {
    areaName: 'Scuba Diving',
    description: '',
    images: [],
    attractions: []
  },
  Mirissa: {
    areaName: 'Whale Watching',
    description: '',
    images: [],
    attractions: []
  },
  Hambantota: {
    areaName: 'Bundala Bird Sanctuary',
    description: '',
    images: [],
    attractions: []
  },
  Kataragama: {
    areaName: 'Yala National Park',
    description: '',
    images: [],
    attractions: []
  },
  Arugambay: {
    areaName: 'Surfing',
    description: '',
    images: [],
    attractions: []
  },
  Batticaloa: {
    areaName: 'Scuba Diving',
    description: '',
    images: [],
    attractions: []
  },
  Passekudah: {
    areaName: 'Sun Bath',
    description: '',
    images: [],
    attractions: []
  },
  Trincomalee: {
    areaName: 'National Harbour',
    description: '',
    images: [],
    attractions: []
  },
  Elephant_Pass: {
    areaName: 'Chundikulam Bird Sanctuary',
    description: '',
    images: [],
    attractions: []
  },
  Anuradhapura_Temple: {
    areaName: 'Jethawanaramaya Temple',
    description: '',
    images: [],
    attractions: []
  },
  Anuradhapura_Statue: {
    areaName: 'Aukana Statue',
    description: '',
    images: [],
    attractions: []
  },
  Sigiriya: {
    areaName: 'Sigiriya Rock',
    description: '',
    images: [],
    attractions: []
  },
  Polonnaruwa: {
    areaName: 'Dalada Maluwa',
    description: '',
    images: [],
    attractions: []
  },
  Pinnawala: {
    areaName: 'Pinnawala Elephant Orphanage',
    description: '',
    images: [],
    attractions: []
  },
  Kandy: {
    areaName: 'Temple of the Sacred Tooth Relic',
    description: '',
    images: [],
    attractions: []
  },
  Nuwara_Eliya: {
    areaName: 'Tea Factory',
    description: '',
    images: [],
    attractions: []
  },
  ella_info: {
    areaName: 'Nine Arch Bridge',
    description: '',
    images: [],
    attractions: []
  },
  Mahiyanganaya: {
    areaName: 'Tribal Village',
    description: '',
    images: [],
    attractions: []
  },
  Bandarawela: {
    areaName: 'Rawana Ella Falls',
    description: '',
    images: [],
    attractions: []
  },
  Ratnapura_Gems: {
    areaName: 'Gems',
    description: '',
    images: [],
    attractions: []
  },
  Ratnapura_Forest: {
    areaName: 'Sinharaja Rain Forest',
    description: '',
    images: [],
    attractions: []
  },
  Ratnapura_Park: {
    areaName: 'Uda Walawe National Park',
    description: '',
    images: [],
    attractions: []
  }
};

    ],
    attractions: ['Nine Arches Bridge', 'Ella Rock', 'Little Adam’s Peak', 'Ravana Falls'],
  }
};
