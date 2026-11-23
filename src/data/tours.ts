export interface PricingTier {
  minPax: number;
  maxPax: number;
  label: string;
  adultEur: number;
  childEur: number;
}

export interface ItineraryStop {
  timeOrDuration: string;
  title: string;
  detail: string;
  ticketNote?: string;
}

export interface TourFaq {
  question: string;
  answer: string;
}

export interface TourVideo {
  youtubeId: string;
  title: string;
  caption: string;
  durationLabel?: string;
  uploadDate?: string;
}

export interface OptionalExtra {
  id: 'zipline' | 'atv' | 'honey' | 'lunch';
  label: string;
  shortLabel: string;
  detail: string;
}

export interface Tour {
  slug: string;
  title: string;
  shortTitle: string;
  status: 'bookable' | 'seasonal' | 'inquiry';
  statusLabel: string;
  pricingNote: string;
  region: string;
  regionSlug: string;
  category: 'Day Hike' | 'Nature & Culture' | 'Culinary Hike' | 'Urban Walk' | 'Multi-Day Trek' | 'Alpine Expedition';
  duration: string;
  durationHours: number;
  durationBucket: 'half-day' | 'full-day' | 'multi-day';
  difficulty: 'Easy' | 'Easy–Moderate' | 'Moderate' | 'Moderate–Challenging' | 'Challenging';
  groupSize: string;
  minAge: string;
  startingPriceEur: number | null;
  pricingTiers: PricingTier[];
  gygTourId?: string;
  gygUrl?: string;
  tripadvisorUrl?: string;
  heroImage: string;
  heroAlt: string;
  gallery: { src: string; alt: string }[];
  videos?: TourVideo[];
  summary: string;
  highlights: string[];
  itinerary: ItineraryStop[];
  included: string[];
  excluded: string[];
  optionalExtras?: OptionalExtra[];
  weatherPlan: string;
  packingList: string[];
  faqs: TourFaq[];
  seoDescription: string;
  keywords: string[];
}

const MTIRALA_OPTIONAL_EXTRAS: Record<OptionalExtra['id'], OptionalExtra> = {
  zipline: {
    id: 'zipline',
    label: 'Zipline',
    shortLabel: 'Zipline',
    detail: 'Optional rainforest zipline across the Mtirala canyon (seasonal, paid on site only if desired).',
  },
  atv: {
    id: 'atv',
    label: 'ATV Quad Ride',
    shortLabel: 'ATV Ride',
    detail: 'Optional ATV mountain ride along designated valley tracks arranged on guest request.',
  },
  honey: {
    id: 'honey',
    label: 'Local Mountain Honey',
    shortLabel: 'Local Honey',
    detail: 'Optional stop to taste and purchase authentic Adjarian chestnut and mountain honey from local beekeepers.',
  },
  lunch: {
    id: 'lunch',
    label: 'Georgian Lunch',
    shortLabel: 'Lunch',
    detail: 'Optional homemade Adjarian village lunch or riverside café stop tailored to your group’s preferences.',
  },
};

export const TOURS: Tour[] = [
  {
    slug: 'mtirala-lake-waterfall-hike',
    title: 'From Batumi: Mtirala National Park Lake & Waterfall Hike',
    shortTitle: 'Mtirala Lake & Waterfall Hike',
    status: 'bookable',
    statusLabel: 'Bookable Live · Day Hike',
    pricingNote: 'Direct group tiers below or book instantly on GetYourGuide',
    region: 'Mtirala National Park',
    regionSlug: 'mtirala',
    category: 'Day Hike',
    duration: '~6h 15m',
    durationHours: 6.25,
    durationBucket: 'full-day',
    difficulty: 'Moderate',
    groupSize: '1–16 guests (Shared & Private)',
    minAge: 'Ages 6+',
    startingPriceEur: 38,
    pricingTiers: [
      { minPax: 1, maxPax: 1, label: '1 person (Private)', adultEur: 95, childEur: 71 },
      { minPax: 2, maxPax: 2, label: '2 people', adultEur: 60, childEur: 45 },
      { minPax: 3, maxPax: 3, label: '3 people', adultEur: 48, childEur: 36 },
      { minPax: 4, maxPax: 4, label: '4 people', adultEur: 42, childEur: 32 },
      { minPax: 5, maxPax: 16, label: '5–16 people', adultEur: 38, childEur: 29 },
    ],
    gygTourId: '1525407',
    gygUrl: 'https://www.getyourguide.com/-t1525407/',
    tripadvisorUrl:
      'https://www.tripadvisor.com/AttractionProductReview-g297576-d27942060-From_Batumi_UNESCO_Mtirala_National_Park_Lake_Waterfall_Hike-Batumi_Adjara_Region.html#REVIEWS',
    heroImage: '/images/mtirala-hero.webp',
    heroAlt: 'Wooden footbridge crossing a clear mountain stream inside luminous green Mtirala National Park rainforest in Georgia',
    gallery: [
      {
        src: '/images/mtirala-hero.webp',
        alt: 'Wooden footbridge over clear mountain stream inside Mtirala National Park Colchic rainforest',
      },
      {
        src: '/images/mtirala-river.webp',
        alt: 'Emerald Chakvistskali mountain river viewed from timber shelter along the Mtirala trail',
      },
      {
        src: '/images/mtirala-canopy.webp',
        alt: 'Hikers walking through sunlit Colchic beech and chestnut canopy in Mtirala National Park',
      },
    ],
    videos: [
      {
        youtubeId: 'URVIUGoEYf8',
        title: 'Mtirala National Park Lake & Waterfall Hike — Trail Preview',
        caption: 'Real Colchic rainforest trail footage from Minimalism Tours Georgia.',
        durationLabel: '4K Trail Preview',
        uploadDate: '2026-11-01',
      },
    ],
    summary:
      'Step straight from Batumi into Georgia’s UNESCO-listed Colchic rainforest. Travel by comfortable mountain vehicle into Mtirala National Park, cross the river by hand-cranked cable car, hike past mossy beech trees to the Tsablnari waterfall and forest lake, and learn real ecology from a certified UNESCO heritage guide.',
    highlights: [
      'Cross the Chakvistskali mountain river on a classic hand-operated cable car',
      'Hike the mossy Chestnut Forest trail to Tsablnari Waterfall and the emerald swimming lake',
      'Guided by a UNESCO World Natural Heritage & Red Cross First Aid certified local guide',
      'Four Batumi pickup points with air-conditioned vehicle and onboard Wi-Fi',
    ],
    itinerary: [
      {
        timeOrDuration: '0:00 – 0:45',
        title: 'Batumi Pickup & Mountain Drive',
        detail:
          'Meet at your selected Batumi pickup point at 10:00 AM and ascend along the scenic Chakvistskali valley road into the Colchic foothills.',
        ticketNote: 'Transport included',
      },
      {
        timeOrDuration: '0:45 – 1:15',
        title: 'Manual River Cable Car & Visitor Entry',
        detail:
          'Experience the iconic hand-pulled river cable car crossing and review park conservation rules at the Mtirala entrance.',
        ticketNote: 'National park access free',
      },
      {
        timeOrDuration: '1:15 – 4:15',
        title: 'Guided Lake & Tsablnari Waterfall Trail (~6 km)',
        detail:
          'Walk through ancient Colchic beech, chestnut, and Pontic rhododendron forest to the mountain waterfall and natural river pool.',
        ticketNote: 'Guided hike included',
      },
      {
        timeOrDuration: '4:15 – 5:30',
        title: 'Riverside Pause & Optional Village Tea/Snack',
        detail:
          'Unwind beside the river with time for photos, hydration, and optional local tea or snacks before descending.',
        ticketNote: 'Optional food paid on site',
      },
      {
        timeOrDuration: '5:30 – 6:15',
        title: 'Return Drive to Batumi',
        detail: 'Relaxed return to your original Batumi pickup location with local recommendations for dinner.',
        ticketNote: 'Drop-off included',
      },
    ],
    included: [
      'Certified UNESCO Natural Heritage & Red Cross First Aid English-speaking guide',
      'Round-trip transport from 4 central Batumi pickup points (AC + onboard Wi-Fi)',
      'Guided ~3-hour hike along the Mtirala waterfall & lake circuit',
      'Trekking poles available on request',
    ],
    excluded: [
      'Optional Georgian lunch, snacks, and drinks (available at local village kitchen or riverside café on request)',
      'Optional zipline, ATV quad ride, or local mountain honey tasting (only if desired, paid separately)',
      'Personal travel insurance',
    ],
    optionalExtras: [
      MTIRALA_OPTIONAL_EXTRAS.zipline,
      MTIRALA_OPTIONAL_EXTRAS.atv,
      MTIRALA_OPTIONAL_EXTRAS.honey,
      MTIRALA_OPTIONAL_EXTRAS.lunch,
    ],
    weatherPlan:
      'Light rainforest drizzle enhances the forest atmosphere; we carry spare dry layers, adjust trail pace over wet roots, and shift to lower canopy viewpoints during heavy storms.',
    packingList: [
      'Grippy walking shoes or trail sneakers (trails can be damp)',
      'Light waterproof jacket or shell',
      '1 liter of drinking water & sun protection in summer',
      'Swimwear & quick-dry towel (optional summer river dip)',
    ],
    faqs: [
      {
        question: 'How challenging is the Mtirala Lake & Waterfall hike?',
        answer:
          'Moderate (~6 km round trip with gradual stone and dirt forest paths). Travelers with normal everyday walking fitness handle it comfortably with regular guide pacing.',
      },
      {
        question: 'Can we book last minute if Batumi weather clears in the morning?',
        answer:
          'Yes — reach out directly via WhatsApp for same-morning availability on Shared or Private departures before heading out.',
      },
    ],
    seoDescription:
      'Book the Mtirala National Park Lake & Waterfall Hike from Batumi with Minimalism Tours Georgia. UNESCO certified guide, manual river cable car, 4 Batumi pickups, transparent pricing.',
    keywords: [
      'Mtirala National Park tour from Batumi',
      'Mtirala waterfall hike Georgia',
      'Batumi nature day tour',
      'UNESCO Colchic rainforest tour',
    ],
  },
  {
    slug: 'mtirala-botanical-garden-tour',
    title: 'From Batumi: Mtirala National Park & Botanical Garden Tour',
    shortTitle: 'Mtirala & Botanical Garden',
    status: 'bookable',
    statusLabel: 'Full-Day Duo · Ticket Included',
    pricingNote: 'Verified 5-tier pricing · Botanical Garden entry included',
    region: 'Mtirala & Batumi Coast',
    regionSlug: 'mtirala',
    category: 'Nature & Culture',
    duration: '~6h 20m',
    durationHours: 6.33,
    durationBucket: 'full-day',
    difficulty: 'Easy–Moderate',
    groupSize: '1–16 guests (Private & Small Group)',
    minAge: 'All ages',
    startingPriceEur: 40,
    pricingTiers: [
      { minPax: 1, maxPax: 1, label: '1 person (Private)', adultEur: 100, childEur: 75 },
      { minPax: 2, maxPax: 2, label: '2 people', adultEur: 63, childEur: 47 },
      { minPax: 3, maxPax: 3, label: '3 people', adultEur: 50, childEur: 38 },
      { minPax: 4, maxPax: 4, label: '4 people', adultEur: 44, childEur: 33 },
      { minPax: 5, maxPax: 16, label: '5–16 people', adultEur: 40, childEur: 30 },
    ],
    heroImage: '/images/botanical-tour.webp',
    heroAlt: 'Sunlit shaded path beneath towering subtropical trees in Batumi Botanical Garden, Georgia',
    gallery: [
      {
        src: '/images/botanical-tour.webp',
        alt: 'Guided group strolling under lush coastal canopy in Batumi Botanical Garden',
      },
      {
        src: '/images/mtirala-river.webp',
        alt: 'Mtirala National Park forest shelter and river pool',
      },
    ],
    summary:
      'Contrast two extraordinary Adjarian worlds in one seamless day: wild UNESCO Colchic mountain rainforest in Mtirala National Park paired with the cliffside global plant terraces of Batumi Botanical Garden overlooking the Black Sea — with the Botanical Garden entrance ticket folded into the tour so you face zero gate surprises.',
    highlights: [
      'Two signature Adjara nature highlights in one well-paced 6h 20m itinerary',
      'Zero hidden fees: Batumi Botanical Garden entry (~25 GEL value) already included',
      '3 hours of guided rainforest trail time + 1h 30m in the coastal Botanical Garden',
      'Transparent 5-tier pricing protecting solo travelers and rewarding groups up to 16',
    ],
    itinerary: [
      {
        timeOrDuration: '0:00 – 0:45',
        title: 'Batumi Pickup & Valley Ascent',
        detail: '10:00 AM pickup from Europe Square, Argo Cable Car, Central Park, or Euphoria Hotel.',
        ticketNote: 'Included',
      },
      {
        timeOrDuration: '0:45 – 3:45',
        title: 'Mtirala National Park Rainforest Walk',
        detail: 'Cross the river cable car and walk the mossy Chestnut Forest trail to waterfalls and clear pools.',
        ticketNote: 'Free park entry',
      },
      {
        timeOrDuration: '3:45 – 4:25',
        title: 'Transfer to Green Cape (Mtsvane Kontskhi)',
        detail: 'Scenic descent from lush mountain ridges down to the Black Sea cliffs.',
        ticketNote: 'Included',
      },
      {
        timeOrDuration: '4:25 – 5:55',
        title: 'Batumi Botanical Garden Guided Walk',
        detail: 'Explore global flora zones, bamboo groves, and Black Sea cliff panoramas with stories on 19th-century botany.',
        ticketNote: 'Entry ticket included',
      },
      {
        timeOrDuration: '5:55 – 6:20',
        title: 'Coastal Return to Batumi',
        detail: 'Drop-off back at your original Batumi meeting point.',
        ticketNote: 'Included',
      },
    ],
    included: [
      'Batumi Botanical Garden admission ticket (zero extra gate fees)',
      'Certified UNESCO Heritage & Trekking Guide',
      'Private or small-group AC vehicle with onboard Wi-Fi',
      'Pickup and drop-off at 4 Batumi points',
    ],
    excluded: [
      'Optional Georgian lunch and personal drinks (arranged on guest request)',
      'Optional zipline, ATV quad ride, or local mountain honey tasting (only if desired)',
      'Optional electric shuttle inside the Botanical Garden if desired instead of walking',
    ],
    optionalExtras: [
      MTIRALA_OPTIONAL_EXTRAS.zipline,
      MTIRALA_OPTIONAL_EXTRAS.atv,
      MTIRALA_OPTIONAL_EXTRAS.honey,
      MTIRALA_OPTIONAL_EXTRAS.lunch,
    ],
    weatherPlan:
      'Paved pathways in the Botanical Garden ensure comfortable walking even after rain; umbrellas or poncho guidance provided on damp days.',
    packingList: [
      'Comfortable walking shoes',
      'Light rain layer',
      'Camera, water bottle, and sunglasses',
    ],
    faqs: [
      {
        question: 'Is the Botanical Garden entrance ticket really included?',
        answer:
          'Yes — unlike standard transport-only offers that charge extra at the gate, your ticket is included in the quoted EUR tour rate.',
      },
      {
        question: 'How much walking is involved in the Botanical Garden?',
        answer:
          'The garden follows paved cliffside paths (~1.5 hours at an unhurried sightseeing pace), suitable for travelers of all ages.',
      },
    ],
    seoDescription:
      'Combined Mtirala National Park & Batumi Botanical Garden day tour from Batumi. Ticket included, 5-tier group pricing from €40, UNESCO-certified local guide.',
    keywords: [
      'Batumi Botanical Garden tour',
      'Mtirala and Botanical Garden day trip',
      'Batumi private tour pricing',
      'Adjara nature tour',
    ],
  },
  {
    slug: 'mtirala-hike-homemade-food',
    title: 'From Batumi: Mtirala National Park Hike & Homemade Georgian Food',
    shortTitle: 'Mtirala Hike & Homemade Food',
    status: 'bookable',
    statusLabel: 'Trail + Village Table · Day Tour',
    pricingNote: 'Direct group estimate — confirm dietary needs on WhatsApp',
    region: 'Mtirala National Park',
    regionSlug: 'mtirala',
    category: 'Culinary Hike',
    duration: '~7h',
    durationHours: 7,
    durationBucket: 'full-day',
    difficulty: 'Moderate',
    groupSize: '2–12 guests',
    minAge: 'Ages 8+',
    startingPriceEur: 47,
    pricingTiers: [
      { minPax: 1, maxPax: 1, label: '1 person (Private)', adultEur: 115, childEur: 86 },
      { minPax: 2, maxPax: 2, label: '2 people', adultEur: 72, childEur: 54 },
      { minPax: 3, maxPax: 3, label: '3 people', adultEur: 58, childEur: 44 },
      { minPax: 4, maxPax: 4, label: '4 people', adultEur: 52, childEur: 39 },
      { minPax: 5, maxPax: 12, label: '5–12 people', adultEur: 47, childEur: 35 },
    ],
    heroImage: '/images/mtirala-food.webp',
    heroAlt: 'Traditional Georgian clay qvevri wine amphorae in a lush Adjarian mountain village courtyard near Mtirala',
    gallery: [
      {
        src: '/images/mtirala-food.webp',
        alt: 'Traditional clay qvevri vessels and stone garden terrace at a rural Adjarian host yard near Mtirala',
      },
      {
        src: '/images/mtirala-canopy.webp',
        alt: 'Forest hiking trail before the village lunch in Adjara',
      },
    ],
    summary:
      'Earn your appetite on the lush forest trails of Mtirala National Park, then sit down to an unhurried, seasonal homemade Adjarian meal prepared in a local village kitchen — warm khachapuri or corn mchadi, walnut-herb salads, mountain honey, and genuine Georgian hospitality beyond commercial restaurant buffets.',
    highlights: [
      'Full ~3-hour guided rainforest hike through Mtirala’s waterfall & lake circuit',
      'Authentic homemade Adjarian lunch hosted in a local mountain setting',
      'Vegetarian-friendly seasonal dishes available on advance request',
      'Small-group rhythm focused on conversation, nature, and regional food traditions',
    ],
    itinerary: [
      {
        timeOrDuration: '0:00 – 0:45',
        title: 'Batumi Pickup & Ascent into Chakvistskali',
        detail: 'Morning departure from Batumi toward Mtirala National Park.',
      },
      {
        timeOrDuration: '0:45 – 3:45',
        title: 'Guided Rainforest Hike',
        detail: 'Walk the mossy Chestnut Forest trail past ancient trees, clear mountain springs, and waterfall viewpoints.',
      },
      {
        timeOrDuration: '3:45 – 5:45',
        title: 'Homemade Adjarian Village Lunch',
        detail: 'Share freshly cooked seasonal Georgian specialties, local cheese, herbs, and herbal mountain tea.',
        ticketNote: 'Homemade meal included',
      },
      {
        timeOrDuration: '5:45 – 7:00',
        title: 'Scenic Descent to Batumi',
        detail: 'Return comfortably to your original Batumi drop-off point.',
      },
    ],
    included: [
      'Homemade Adjarian Georgian lunch & mountain herbal tea',
      'Guided Mtirala rainforest hike with certified guide',
      'Round-trip transport from 4 Batumi pickup points',
    ],
    excluded: [
      'Extra bottled drinks or wine beyond the family meal spread',
      'Optional zipline, ATV quad ride, or extra honey purchases (only if desired)',
      'Gratuities (optional)',
    ],
    optionalExtras: [
      MTIRALA_OPTIONAL_EXTRAS.zipline,
      MTIRALA_OPTIONAL_EXTRAS.atv,
      MTIRALA_OPTIONAL_EXTRAS.honey,
    ],
    weatherPlan:
      'Covered wooden veranda dining ensures the homemade culinary stop runs smoothly in all weather conditions.',
    packingList: [
      'Hiking or trail walking shoes',
      'Light waterproof jacket',
      'Please share any allergies or vegetarian/vegan preferences 24h ahead',
    ],
    faqs: [
      {
        question: 'Can vegetarians enjoy the homemade Georgian lunch?',
        answer:
          'Yes — Georgian village kitchens naturally excel at vegetarian dishes (walnut-stuffed eggplant, pkhali greens, bean lobio, fresh village cheese, and warm bread). Let us know when booking.',
      },
    ],
    seoDescription:
      'Hike Mtirala National Park from Batumi and share an authentic homemade Georgian village lunch. Small groups, vegetarian options, direct booking with local guide.',
    keywords: [
      'Mtirala hike and Georgian food',
      'Adjara culinary tour Batumi',
      'homemade Georgian lunch tour',
    ],
  },
  {
    slug: 'machakhela-guided-hiking',
    title: 'From Batumi: Machakhela National Park Guided Hiking Adventure',
    shortTitle: 'Machakhela Guided Hiking',
    status: 'bookable',
    statusLabel: 'Active Trail Hike · Gorge & History',
    pricingNote: 'Direct group estimate · Shared & Private available',
    region: 'Machakhela National Park',
    regionSlug: 'machakhela',
    category: 'Day Hike',
    duration: '~6h',
    durationHours: 6,
    durationBucket: 'full-day',
    difficulty: 'Moderate',
    groupSize: '1–14 guests',
    minAge: 'Ages 8+',
    startingPriceEur: 43,
    pricingTiers: [
      { minPax: 1, maxPax: 1, label: '1 person (Private)', adultEur: 110, childEur: 83 },
      { minPax: 2, maxPax: 2, label: '2 people', adultEur: 68, childEur: 51 },
      { minPax: 3, maxPax: 3, label: '3 people', adultEur: 54, childEur: 41 },
      { minPax: 4, maxPax: 4, label: '4 people', adultEur: 48, childEur: 36 },
      { minPax: 5, maxPax: 14, label: '5–14 people', adultEur: 43, childEur: 32 },
    ],
    heroImage: '/images/machakhela-tour.webp',
    heroAlt: 'Small hiking group gathered around a trailhead campfire clearing inside lush green Machakhela National Park, Georgia',
    gallery: [
      {
        src: '/images/machakhela-tour.webp',
        alt: 'Trail hiking inside lush Machakhela National Park gorge',
      },
      {
        src: '/images/machakhela-museum.webp',
        alt: 'Traditional woodcraft and highland heritage displays at Machakhela valley center',
      },
    ],
    summary:
      'Leave crowded bus stops behind for a genuine hiking day in Machakhela National Park. Walk the forested Archangel ridge trail, cross medieval stone-arched bridges over rushing mountain rivers, spot hidden waterfalls, and hear the borderland crafts and history of the Machakhela gorge.',
    highlights: [
      'Real guided forest trekking (Archangel / gorge trails) rather than hurried coach stops',
      'Medieval Queen Tamar stone-arch bridge & gorge waterfall views',
      'Insights into traditional Machakhela craftsmanship and borderland history',
      'UNESCO heritage & Red Cross First Aid certified hiking leader',
    ],
    itinerary: [
      {
        timeOrDuration: '0:00 – 0:55',
        title: 'Batumi to Machakhela Gorge',
        detail: 'Morning pickup in Batumi and scenic drive up the Chorokhi and Machakhela rivers.',
      },
      {
        timeOrDuration: '0:55 – 4:00',
        title: 'Guided Machakhela Forest Hike',
        detail: 'Walk verdant ridge and stream paths with botanical and historical commentary along the way.',
      },
      {
        timeOrDuration: '4:00 – 5:05',
        title: 'Stone Bridge, Waterfall & Craft Heritage',
        detail: 'Pause at a historic arched bridge and cascading waterfall before visiting valley craft heritage.',
      },
      {
        timeOrDuration: '5:05 – 6:00',
        title: 'Return to Batumi',
        detail: 'Drop-off back at your central Batumi pickup location.',
      },
    ],
    included: [
      'Certified trekking & First Aid guide',
      'Round-trip AC transport from Batumi with Wi-Fi',
      'Guided park trail walk & bridge/waterfall stops',
    ],
    excluded: [
      'Meals/wine tasting (optional local family lunch stop can be arranged on request)',
      'Personal snacks & water',
    ],
    weatherPlan:
      'Lower gorge waterfall bridges and sheltered forest trails stay accessible in passing showers; steep sections are adapted when slick.',
    packingList: [
      'Sturdy hiking or trail shoes',
      'Breathable layers + light rain jacket',
      '1L water & passport/ID (borderland valley check note)',
    ],
    faqs: [
      {
        question: 'Do we need to carry our passport in Machakhela?',
        answer:
          'Yes — because Machakhela sits near Georgia’s southern border ridge, bringing a passport or official ID is standard practice when exploring the upper gorge.',
      },
    ],
    seoDescription:
      'Guided hiking tour in Machakhela National Park from Batumi. Real forest trails, stone bridges, waterfalls, and local history with certified local guides from Minimalism Tours Georgia.',
    keywords: [
      'Machakhela National Park hiking tour',
      'Batumi Machakhela guided hike',
      'Adjara waterfalls and bridges tour',
    ],
  },
  {
    slug: 'batumi-architecture-walking-tour',
    title: 'Batumi Old Town, Architecture & Coastal Heritage Walk',
    shortTitle: 'Batumi Architecture Walk',
    status: 'bookable',
    statusLabel: 'Urban Heritage · 3h Walk',
    pricingNote: 'Direct small-group walking rate · Great for any season',
    region: 'Batumi Old Town',
    regionSlug: 'batumi',
    category: 'Urban Walk',
    duration: '~3h',
    durationHours: 3,
    durationBucket: 'half-day',
    difficulty: 'Easy',
    groupSize: '1–12 guests',
    minAge: 'All ages',
    startingPriceEur: 16,
    pricingTiers: [
      { minPax: 1, maxPax: 1, label: '1 person (Private)', adultEur: 45, childEur: 34 },
      { minPax: 2, maxPax: 2, label: '2 people', adultEur: 28, childEur: 21 },
      { minPax: 3, maxPax: 3, label: '3 people', adultEur: 22, childEur: 17 },
      { minPax: 4, maxPax: 4, label: '4 people', adultEur: 19, childEur: 14 },
      { minPax: 5, maxPax: 12, label: '5–12 people', adultEur: 16, childEur: 12 },
    ],
    heroImage: '/images/batumi-walk.webp',
    heroAlt: 'Batumi coastal lighthouse, illuminated Ferris wheel, and palm boulevard along the Black Sea at dusk',
    gallery: [
      {
        src: '/images/batumi-walk.webp',
        alt: 'Batumi lighthouse, Ferris wheel, and Black Sea palm promenade at evening twilight',
      },
    ],
    summary:
      'Discover the living city behind Batumi’s seaside postcards. Stroll through quiet Old Town courtyards, Belle-Époque merchant townhouses, hidden mosaics, and the waterfront boulevard while separating checked local history from tourist myths.',
    highlights: [
      'Flat, unhurried ~3-hour walk ideal for arrival days and winter/rainy mornings',
      'Hidden Old Town courtyards, historical port streets, and architectural details',
      'Curated local bakery, coffee, and neighborhood dining recommendations',
    ],
    itinerary: [
      {
        timeOrDuration: '0:00 – 0:45',
        title: 'Europe Square & Early-1900s Port Boom',
        detail: 'Meet at Europe Square to unpack how oil pipelines, tea trade, and maritime commerce built Old Batumi.',
      },
      {
        timeOrDuration: '0:45 – 2:00',
        title: 'Old Town Lanes, Courtyards & Sacred Landmarks',
        detail: 'Trace hidden wooden balconies, mosaic facades, and multi-faith neighborhood heritage.',
      },
      {
        timeOrDuration: '2:00 – 3:00',
        title: 'Seaside Boulevard, Alphabet Tower & Modern Contrast',
        detail: 'Finish along the Black Sea promenade comparing Soviet modernism and 21st-century skyline landmarks.',
      },
    ],
    included: [
      'Certified local Georgian guide',
      'Curated digital neighborhood map & food recommendations',
    ],
    excluded: [
      'Coffee/pastry stops along the way',
      'Optional tower or museum entrance tickets',
    ],
    weatherPlan:
      'Year-round urban route easily adapted with covered courtyard stops and café breaks if Black Sea showers pass through.',
    packingList: [
      'Comfortable city walking shoes',
      'Compact umbrella or light jacket',
    ],
    faqs: [
      {
        question: 'Is this walk suitable in winter (January–March)?',
        answer:
          'Yes — Batumi stays relatively mild year-round, making this our flagship winter and shoulder-season cultural experience.',
      },
    ],
    seoDescription:
      'Explore Batumi Old Town architecture, hidden courtyards, and Black Sea history on a 3-hour guided walking tour with Minimalism Tours Georgia.',
    keywords: [
      'Batumi walking tour',
      'Batumi Old Town architecture guide',
      'things to do in Batumi winter',
    ],
  },
  {
    slug: 'mtirala-2-day-shelter-hike',
    title: 'Mtirala National Park: 2-Day Hike With Shelter Stay',
    shortTitle: 'Mtirala 2-Day Shelter Trek',
    status: 'seasonal',
    statusLabel: '2 Days / 1 Night · Multi-Day',
    pricingNote: 'Direct group estimate · Advance booking (48h+)',
    region: 'Mtirala National Park',
    regionSlug: 'mtirala',
    category: 'Multi-Day Trek',
    duration: '2 Days / 1 Night',
    durationHours: 32,
    durationBucket: 'multi-day',
    difficulty: 'Moderate–Challenging',
    groupSize: '2–8 guests',
    minAge: 'Ages 14+',
    startingPriceEur: 95,
    pricingTiers: [
      { minPax: 1, maxPax: 1, label: '1 person (Private)', adultEur: 220, childEur: 185 },
      { minPax: 2, maxPax: 2, label: '2 people', adultEur: 145, childEur: 120 },
      { minPax: 3, maxPax: 3, label: '3 people', adultEur: 120, childEur: 98 },
      { minPax: 4, maxPax: 4, label: '4 people', adultEur: 108, childEur: 88 },
      { minPax: 5, maxPax: 8, label: '5–8 people', adultEur: 95, childEur: 78 },
    ],
    heroImage: '/images/mtirala-2day.webp',
    heroAlt: 'Wooden A-frame mountain shelter surrounded by misty Colchic beech trees in Mtirala National Park',
    gallery: [
      {
        src: '/images/mtirala-2day.webp',
        alt: 'A-frame mountain shelter glowing softly in misty Colchic rainforest',
      },
      {
        src: '/images/mtirala-hero.webp',
        alt: 'Lower waterfall canyon inside Mtirala National Park',
      },
    ],
    summary:
      'Go deeper than day-trippers ever reach. Ascend the Colchic ridges of Mtirala National Park across two days with an overnight stay in a scenic wooden forest shelter, waking up to misty beech canopies, silent wildlife trails, and panoramic Black Sea horizon views.',
    highlights: [
      'Overnight stay in Mtirala’s atmospheric timber mountain shelter',
      'Two days of deeper ridge and cloud-forest trekking far beyond day-hike crowds',
      'Led by Adventure Tourism School certified trekking & First Aid guide',
      'Full packing check and shelter logistics handled in advance',
    ],
    itinerary: [
      {
        timeOrDuration: 'Day 1',
        title: 'Batumi Departure, Waterfall Trail & Ridge Ascent to Shelter',
        detail:
          'Morning 4x4 transfer from Batumi, cross the river cable car, ascend through old-growth beech forest to the wooden A-frame shelter for evening tea and dinner.',
      },
      {
        timeOrDuration: 'Day 2',
        title: 'Sunrise Cloud-Forest Ridge & Descent to Batumi',
        detail:
          'Early mountain breakfast, explore upper ridge viewpoints above the Black Sea basin, descend via scenic forest track for afternoon return to Batumi.',
      },
    ],
    included: [
      '2 days certified trekking guide & First Aid leadership',
      'Round-trip transport between Batumi and the trailhead',
      'Basic wooden shelter accommodation coordination',
    ],
    excluded: [
      'Personal sleeping bag (rental options available on request)',
      'Trail food & snacks (or confirm optional Georgian lunch / camp meal add-on in advance)',
      'Optional zipline, ATV quad ride, or local mountain honey tasting (only if desired)',
    ],
    optionalExtras: [
      MTIRALA_OPTIONAL_EXTRAS.zipline,
      MTIRALA_OPTIONAL_EXTRAS.atv,
      MTIRALA_OPTIONAL_EXTRAS.honey,
      MTIRALA_OPTIONAL_EXTRAS.lunch,
    ],
    weatherPlan:
      'Confirmed 48 hours ahead based on ridge forecast; lower forest loop or safe postponement offered during severe thunderstorms.',
    packingList: [
      'Broken-in waterproof hiking boots',
      '30–40L backpack + rain cover',
      'Warm fleece/insulation layer for evening shelter chill',
      'Headlamp, 2L water capacity, personal toiletries',
    ],
    faqs: [
      {
        question: 'Are sleeping bags provided or available to rent?',
        answer:
          'Guests can bring their own 3-season sleeping bag or request rental gear from our Batumi equipment kit when confirming dates.',
      },
    ],
    seoDescription:
      '2-day guided trek in Mtirala National Park with overnight mountain shelter stay from Batumi. Adventure Tourism School certified trekking guide.',
    keywords: [
      'Mtirala 2 day hike',
      'overnight trek Batumi Adjara',
      'Colchic rainforest shelter trek',
    ],
  },
  {
    slug: 'kazbegi-mount-kazbek-expedition',
    title: 'Kazbegi: 5-Day Mount Kazbek Summit Expedition',
    shortTitle: '5-Day Mount Kazbek Expedition',
    status: 'inquiry',
    statusLabel: 'Summer Seasonal · Custom Quote',
    pricingNote: 'June–September alpine season · Custom expedition quote',
    region: 'Kazbegi (Greater Caucasus)',
    regionSlug: 'kazbegi-svaneti',
    category: 'Alpine Expedition',
    duration: '5 Days',
    durationHours: 120,
    durationBucket: 'multi-day',
    difficulty: 'Challenging',
    groupSize: '1–6 climbers (strict safety ratio)',
    minAge: 'Ages 18+',
    startingPriceEur: null,
    pricingTiers: [],
    heroImage: '/images/mestia-svaneti.webp',
    heroAlt: 'High-alpine Caucasus mountain ridge above glacial valleys in Georgia',
    gallery: [
      {
        src: '/images/kazbegi-peak.webp',
        alt: 'Snow-capped Mount Kazbek rising above the volcanic canyon in Stepantsminda, Georgia',
      },
      {
        src: '/images/kazbegi-glacier.webp',
        alt: 'Crevassed alpine ice along the Gergeti Glacier ascent toward Mount Kazbek',
      },
      {
        src: '/images/mestia-svaneti.webp',
        alt: 'High-altitude summer trekking ridge in the Greater Caucasus',
      },
    ],
    summary:
      'A disciplined, acclimatization-first 5-day alpine ascent of Georgia’s iconic Mount Kazbek (5,054m) during the summer climbing window (June–September). Designed for fit trekkers and aspiring alpinists with structured glacial movement, Betlemi Hut (3,653m) pacing, and complete pre-trip equipment vetting.',
    highlights: [
      'Measured 5-day acclimatization schedule via Gergeti Trinity Church & Sabertse Pass',
      'Glacier & crampon skills check before summit push from Betlemi Hut (3,653m)',
      'Detailed Kazbek Guest Guide & priority equipment rental options available',
      'Strict guide-to-climber ratios and weather reserve day built into plan',
    ],
    itinerary: [
      {
        timeOrDuration: 'Day 1',
        title: 'Stepantsminda (1,740m) -> Sabertse / Base Camp (~3,000m)',
        detail: 'Trek past Gergeti Trinity Church into alpine pastures; gear check and hydration.',
      },
      {
        timeOrDuration: 'Day 2',
        title: 'Ascent Across Gergeti Glacier -> Betlemi Hut (3,653m)',
        detail: 'Rope-up glacier approach to the historic meteorological station.',
      },
      {
        timeOrDuration: 'Day 3',
        title: 'Acclimatization Hike (~4,200m) & Snow/Crampon Drills',
        detail: 'Practice self-arrest, crampon footwork, and rope travel for summit night.',
      },
      {
        timeOrDuration: 'Day 4',
        title: 'Mount Kazbek Summit Attempt (5,054m)',
        detail: 'Pre-dawn alpine push across the plateau to the summit crater rim, returning to Betlemi Hut.',
      },
      {
        timeOrDuration: 'Day 5',
        title: 'Weather Buffer / Descent to Stepantsminda',
        detail: 'Built-in summit weather contingency or descent back to Stepantsminda.',
      },
    ],
    included: [
      'Mountain expedition leadership & pre-departure gear briefing',
      'Detailed Kazbek preparation handbook & acclimatization schedule',
      'Group glacier safety ropes & navigation equipment',
    ],
    excluded: [
      'Betlemi Hut / shelter bunks & camp meals (itemized transparently in custom quote)',
      'Personal mountaineering boots, crampons, ice axe, harness (rental available)',
      'Mandatory high-altitude rescue/mountaineering insurance',
    ],
    weatherPlan:
      'Day 5 provides an integrated summit buffer day; route decisions depend on wind, avalanche/crevasse stability, and climber acclimatization.',
    packingList: [
      'Crampon-compatible B2/B3 mountaineering boots',
      'Hardshell jacket & pants, down parka (-15°C rated), glacier sunglasses (Cat 4)',
      'Crampons, mountaineering axe, helmet, harness (rental guide provided)',
      'High-altitude travel insurance covering >5,000m rescue',
    ],
    faqs: [
      {
        question: 'When does Mount Kazbek operate?',
        answer:
          'Standard summit season runs June through September. Send your target window and fitness background via WhatsApp or the Contact page for a tailored itinerary and itemized quote.',
      },
    ],
    seoDescription:
      '5-day guided Mount Kazbek (5,054m) summit expedition in Kazbegi, Georgia. Summer alpine season June–September with acclimatization day and full gear guide.',
    keywords: [
      'Mount Kazbek summit expedition',
      'Kazbegi 5 day climbing tour Georgia',
      'Mount Kazbek 5054m guide',
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return TOURS.find((t) => t.slug === slug);
}

export function getToursByRegion(regionSlug: string): Tour[] {
  return TOURS.filter((t) => t.regionSlug === regionSlug);
}
