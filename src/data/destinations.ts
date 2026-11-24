export interface Destination {
  slug: string;
  name: string;
  regionLabel: string;
  tagline: string;
  bestSeason: string;
  driveTimeFromBatumi: string;
  elevation: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  mapCoords: { x: number; y: number }; // Percentage positions on clean Georgia SVG map
  tourSlugs: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'mtirala',
    name: 'Mtirala National Park',
    regionLabel: 'Adjara · UNESCO Colchic Rainforest',
    tagline: 'Moss-draped beech canopy, crystal waterfalls, and manual river cable cars 45 minutes from the Black Sea.',
    bestSeason: 'April – November (year-round coastal forest access)',
    driveTimeFromBatumi: '~45 min by 4x4 / van',
    elevation: '250m – 1,381m',
    image: '/images/mtirala-hero.webp',
    imageAlt: 'Wooden footbridge crossing a clear stream beneath lush Colchic forest canopy in Mtirala National Park, Adjara',
    description:
      'Part of the UNESCO World Natural Heritage Colchic Rainforests and Wetlands, Mtirala catches humid Black Sea air to sustain ancient chestnut, beech, and Pontic rhododendron slopes above clear mountain rivers.',
    highlights: [
      'UNESCO-listed Colchic rainforest biodiversity',
      'Tsablnari waterfall & mountain lake trail',
      'Traditional manual river cable-car crossing',
      '2-day ridge hike with wooden A-frame mountain shelter',
    ],
    mapCoords: { x: 20, y: 69 },
    tourSlugs: [
      'mtirala-lake-waterfall-hike',
      'mtirala-botanical-garden-tour',
      'mtirala-hike-homemade-food',
      'mtirala-2-day-shelter-hike',
    ],
  },
  {
    slug: 'batumi',
    name: 'Batumi & Green Cape',
    regionLabel: 'Adjara · Black Sea Coast',
    tagline: 'Belle-Époque facades, botanical terraces overlooking the sea, and living port-city stories.',
    bestSeason: 'Year-round (mild coastal climate)',
    driveTimeFromBatumi: 'Walking in central Batumi · 20 min to Botanical Garden',
    elevation: '0m – 160m',
    image: '/images/batumi-walk.webp',
    imageAlt: 'Batumi lighthouse, illuminated Ferris wheel, and palm boulevard along the Black Sea coast',
    description:
      'Beyond the casino towers lies a layered Black Sea port shaped by early-1900s oil-boom merchants, Georgian writers, cobblestone Old Town lanes, and the terraced ridges of Batumi Botanical Garden.',
    highlights: [
      'Old Town courtyards and architectural history',
      'Europe Square, Medea & maritime boulevard',
      'Batumi Botanical Garden coastal flora terraces',
    ],
    mapCoords: { x: 14, y: 74 },
    tourSlugs: ['batumi-architecture-walking-tour', 'mtirala-botanical-garden-tour'],
  },
  {
    slug: 'machakhela',
    name: 'Machakhela National Park',
    regionLabel: 'Adjara · Gorge & Borderland Heritage',
    tagline: 'Forested gorges, medieval arched stone bridges, and quiet Adjarian highland villages.',
    bestSeason: 'April – November',
    driveTimeFromBatumi: '~55 min southeast',
    elevation: '300m – 1,500m',
    image: '/images/machakhela-tour.webp',
    imageAlt: 'Small hiking group resting at a green forest clearing inside Machakhela National Park, Adjara, Georgia',
    description:
      'Tucked along Georgia’s southwestern ridge, Machakhela combines quiet forest trails, cascading gorge waterfalls, centuries-old gunmaking and agricultural heritage, and warm village hospitality.',
    highlights: [
      'Archangel & gorge forest hiking trails',
      'Mirveti Waterfall and medieval Queen Tamar arched bridge',
      'Authentic Adjarian rural heritage away from crowded coaches',
    ],
    mapCoords: { x: 18, y: 83 },
    tourSlugs: ['machakhela-guided-hiking'],
  },
  {
    slug: 'green-lake',
    name: 'Green Lake (Mtsvane Tba)',
    regionLabel: 'Upper Adjara · Goderdzi Pass',
    tagline: 'Emerald subalpine lake framed by spruce ridges and traditional wooden summer pastures.',
    bestSeason: 'June – October',
    driveTimeFromBatumi: '~3.5 hours via Khulo & Goderdzi',
    elevation: '2,058m',
    image: '/images/green-lake.webp',
    imageAlt: 'Aerial view of deep emerald-blue Green Lake surrounded by evergreen forest in Upper Adjara, Georgia',
    description:
      'High above the Adjarian valleys near Goderdzi Pass, mineral-rich waters stay crisp turquoise-green through summer while shepherd families pasture cattle on open alpine meadows.',
    highlights: [
      '2,058m subalpine volcanic-valley lake',
      'Goderdzi mountain pass scenic 4x4 ascent',
      'Available on custom private day & overnight Adjara itineraries',
    ],
    mapCoords: { x: 29, y: 76 },
    tourSlugs: [],
  },
  {
    slug: 'kolkheti',
    name: 'Kolkheti National Park',
    regionLabel: 'Samegrelo & Guria · Paliastomi Wetlands',
    tagline: 'Quiet black-water rivers, relic alder swamps, and migratory bird corridors near the Black Sea.',
    bestSeason: 'April – October (spring & autumn bird migrations)',
    driveTimeFromBatumi: '~1h 15m north',
    elevation: '0m – 10m',
    image: '/images/kolkheti-wetlands.webp',
    imageAlt: 'Calm Paliastomi Lake wooden boat jetty and clear coastal sky in Kolkheti National Park, Georgia',
    description:
      'Shared with Mtirala as part of Georgia’s UNESCO Colchic heritage, Kolkheti preserves primeval wetland ecosystems where wooden boats and quiet trails trace the Pichori river channel.',
    highlights: [
      'UNESCO Colchic Wetlands ecosystem',
      'Paliastomi Lake and Pichori River calm water routes',
      'Custom private ecology & birdwatching excursions from Batumi',
    ],
    mapCoords: { x: 22, y: 54 },
    tourSlugs: [],
  },
  {
    slug: 'kazbegi-svaneti',
    name: 'Kazbegi & Upper Svaneti',
    regionLabel: 'Greater Caucasus · High Alpine',
    tagline: 'Glaciated 5,000m summits, alpine ridge traverses, and medieval stone-tower villages.',
    bestSeason: 'June – September',
    driveTimeFromBatumi: 'Multi-day Caucasus expedition (via Kutaisi / Tbilisi / Mestia)',
    elevation: '1,400m – 5,054m',
    image: '/images/mestia-svaneti.webp',
    imageAlt: 'Hiker walking a high green alpine ridge overlooking snow-capped Greater Caucasus peaks in Georgia',
    description:
      'For seasoned walkers and mountaineers ready to step beyond the coast, our summer Caucasus expeditions pair Adventure Tourism School certified trekking leadership with measured acclimatization across Svaneti ridges and Mount Kazbek (5,054m).',
    highlights: [
      'Mount Kazbek (5,054m) 5-day guided summit expedition',
      'Gergeti Glacier & Betlemi Hut (3,653m) alpine terrain',
      'Custom Svaneti ridge treks from Mestia to Ushguli',
    ],
    mapCoords: { x: 64, y: 21 },
    tourSlugs: ['kazbegi-mount-kazbek-expedition'],
  },
];
