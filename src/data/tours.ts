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
  id: 'zipline' | 'atv' | 'honey' | 'propolis' | 'lunch';
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
  meals?: string;
  season?: string;
  cardTags?: string[];
  quoteLabel?: string;
  isGroupProgram?: boolean;
  defaultGroupSize?: string;
  hasRouteOptions?: boolean;
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
    label: 'Zipline (80 GEL)',
    shortLabel: 'Zipline · 80 GEL',
    detail: 'Optional rainforest zipline across the Mtirala canyon — 80 GEL (seasonal, paid on site only if desired).',
  },
  atv: {
    id: 'atv',
    label: 'ATV Quad Ride (150 GEL)',
    shortLabel: 'ATV Ride · 150 GEL',
    detail: 'Optional ATV mountain ride along designated valley tracks — 150 GEL, arranged on guest request.',
  },
  honey: {
    id: 'honey',
    label: 'Local Mountain Honey — Comb or Strained (50 GEL)',
    shortLabel: 'Honey · 50 GEL',
    detail: 'Optional authentic Adjarian mountain honey, available with honeycomb or strained (ფიჭიანი / უფიჭო) — 50 GEL.',
  },
  propolis: {
    id: 'propolis',
    label: 'Propolis / დინდგელი (40 GEL)',
    shortLabel: 'Propolis · 40 GEL',
    detail: 'Optional natural mountain bee propolis (დინდგელი) from local Adjarian beekeepers — 40 GEL.',
  },
  lunch: {
    id: 'lunch',
    label: 'Georgian Lunch (Suggested with Guide)',
    shortLabel: 'Lunch · With Guide',
    detail: 'Optional homemade Adjarian village lunch or riverside café stop — suggested and arranged directly with your guide based on your group’s preferences.',
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
      { minPax: 2, maxPax: 2, label: '2 people', adultEur: 48, childEur: 36 },
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
      MTIRALA_OPTIONAL_EXTRAS.propolis,
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
      {
        question: 'Can I pay with a bank card, or is cash easier?',
        answer:
          'Bank cards are accepted in Batumi and at many restaurants, but it is much easier to carry cash (GEL) in the mountains, villages, and for optional on-site activities (zipline 80 GEL, ATV ride 150 GEL, honey 50 GEL, propolis 40 GEL, or lunch with your guide).',
      },
      {
        question: 'Where can I find the best cash exchange rates in Batumi?',
        answer:
          'Local guide tip: for the best cash exchange rates in Batumi, look for Rico Credit exchange offices.',
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
      MTIRALA_OPTIONAL_EXTRAS.propolis,
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
      MTIRALA_OPTIONAL_EXTRAS.propolis,
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
    groupSize: '1–16 guests (Shared & Private)',
    minAge: 'Ages 8+',
    startingPriceEur: 38,
    pricingTiers: [
      { minPax: 1, maxPax: 1, label: '1 person (Private)', adultEur: 95, childEur: 71 },
      { minPax: 2, maxPax: 2, label: '2 people', adultEur: 48, childEur: 36 },
      { minPax: 3, maxPax: 3, label: '3 people', adultEur: 48, childEur: 36 },
      { minPax: 4, maxPax: 4, label: '4 people', adultEur: 42, childEur: 32 },
      { minPax: 5, maxPax: 16, label: '5–16 people', adultEur: 38, childEur: 29 },
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
      'Leave crowded bus stops behind for a genuine hiking day in Machakhela National Park. Walk the forested Archangel ridge trail, visit the mossy Mirveti Waterfall and medieval Queen Tamar stone-arched bridge over rushing mountain rivers, and hear the borderland crafts and history of the Machakhela gorge.',
    highlights: [
      'Real guided forest trekking (Archangel / gorge trails) rather than hurried coach stops',
      'Mirveti Waterfall in mossy Colchic boxwood forest & medieval Queen Tamar stone-arch bridge',
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
        title: 'Mirveti Waterfall, Queen Tamar Stone Bridge & Craft Heritage',
        detail: 'Walk the mossy boxwood path to Mirveti Waterfall and the medieval Queen Tamar arched stone bridge, then explore traditional Machakhela valley craft heritage.',
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
      'Guided park trail walk, Mirveti Waterfall & medieval stone bridge stops',
    ],
    excluded: [
      'Meals/wine tasting (optional local family lunch stop can be arranged on request)',
      'Personal snacks & water',
    ],
    weatherPlan:
      'Lower gorge Mirveti Waterfall path, stone bridges, and sheltered forest trails stay accessible in passing showers; steep sections are adapted when slick.',
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
      'Guided hiking tour in Machakhela National Park & Mirveti Waterfall from Batumi. Real forest trails, Queen Tamar stone bridge, waterfalls, and local history with certified local guides from Minimalism Tours Georgia.',
    keywords: [
      'Machakhela National Park hiking tour',
      'Batumi Machakhela guided hike',
      'Adjara waterfalls and bridges tour',
      'Mirveti Waterfall tour from Batumi',
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
      MTIRALA_OPTIONAL_EXTRAS.propolis,
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
  {
    slug: 'student-beginner-ski-bakuriani',
    title: 'Student Beginner Ski Course & Easy Snow Hike',
    shortTitle: 'Student Beginner Ski Course & Snow Hike',
    status: 'inquiry',
    statusLabel: 'Winter Group Tour · Jan–Feb',
    pricingNote: 'January or February · 20–25 students · Full Board',
    region: 'Bakuriani & Borjomi-Kharagauli',
    regionSlug: 'bakuriani-borjomi',
    category: 'Multi-Day Trek',
    duration: '8 Days / 7 Nights',
    durationHours: 192,
    durationBucket: 'multi-day',
    difficulty: 'Easy',
    groupSize: '20–25 students',
    minAge: 'Student Groups',
    meals: 'Full Board (3 meals/day included)',
    season: 'January or February',
    cardTags: ['8 Days / 7 Nights', 'Full Board', 'Group Tour'],
    quoteLabel: 'Winter Group Quote',
    isGroupProgram: true,
    defaultGroupSize: '20–25 students',
    startingPriceEur: null,
    pricingTiers: [],
    heroImage: '/images/kazbegi-peak.webp',
    heroAlt: 'Snow-covered Georgian Caucasus peaks and winter mountain slopes ideal for beginner ski groups',
    gallery: [
      {
        src: '/images/kazbegi-peak.webp',
        alt: 'Snow-covered Georgian mountain landscape in winter season',
      },
      {
        src: '/images/kazbegi-glacier.webp',
        alt: 'Highland snow terrain in Georgia during winter',
      },
      {
        src: '/images/mtirala-2day.webp',
        alt: 'Sheltered forest trail and timber lodge environment in Georgian national parks',
      },
    ],
    summary:
      'An 8-day / 7-night winter group program designed specifically for 20–25 beginner students in January or February. Based in Bakuriani’s wide, gentle nursery slopes with small-group certified ski instruction (6–8 students per instructor), full-board hotel dining, and an avalanche-safe winter forest snowshoe hike in Borjomi-Kharagauli National Park.',
    highlights: [
      '6 nights in Bakuriani with wide, gentle nursery slopes at moderate elevation — ideal for first-time skiers',
      '4–5 structured beginner ski lessons split into small groups of 6–8 students per certified instructor',
      'Full Board included: 3 meals/day at the group hotel plus packed hot lunch on the National Park hike day',
      '1 rest & snowshoe day in Borjomi-Kharagauli National Park (5–8 km sheltered winter forest loop, avalanche-safe)',
      'Mandatory morning group trail registration & snowshoe coordination with Borjomi-Kharagauli National Park Administration',
      'Tbilisi arrival & departure hub with welcome dinner, farewell city walk/meal, and ~3-hour coach transfer',
    ],
    itinerary: [
      {
        timeOrDuration: 'Day 1',
        title: 'Tbilisi Arrival, Welcome Dinner & ~3h Coach Transfer',
        detail:
          'Group arrival at Tbilisi hub, welcome dinner, and comfortable ~3-hour private coach transfer into the Lesser Caucasus to Bakuriani (or overnight in Tbilisi depending on flight timing).',
        ticketNote: 'Full Board · Coach included',
      },
      {
        timeOrDuration: 'Days 2–3',
        title: 'Bakuriani Beginner Ski Lessons (Sessions 1–2)',
        detail:
          'Equipment fitting and first two structured beginner ski lessons on Bakuriani’s wide, gentle nursery slopes. Students are divided into small groups of 6–8 per certified instructor for safe progression.',
        ticketNote: '6–8 students / instructor',
      },
      {
        timeOrDuration: 'Day 4 or 5',
        title: 'Borjomi-Kharagauli National Park: Easy Winter Forest Snow Hike',
        detail:
          'Active recovery day off skis. Mandatory morning group trail registration, winter trail condition check, and snowshoe coordination at Borjomi-Kharagauli National Park Administration (open daily 9:00 AM–6:00 PM). Followed by an easy, sheltered 5–8 km forest loop with minimal elevation gain, avalanche-safe terrain, and a packed hot lunch.',
        ticketNote: 'Park registration & hot lunch',
      },
      {
        timeOrDuration: 'Days 5–7',
        title: 'Bakuriani Beginner Ski Progression (Sessions 3–5)',
        detail:
          'Continue building confidence across 2–3 additional structured ski sessions on gentle resort slopes, with full-board group hotel breakfast, lunch, and dinner each day.',
        ticketNote: 'Full Board (3 meals/day)',
      },
      {
        timeOrDuration: 'Day 8',
        title: 'Return Coach to Tbilisi, Farewell City Walk & Departure',
        detail:
          'Morning ~3-hour coach transfer back to Tbilisi, farewell Old Town walk and group meal, and departure transfers.',
        ticketNote: 'Farewell meal & transfer',
      },
    ],
    included: [
      '7 nights accommodation (6 nights Bakuriani group hotel + Tbilisi hub logistics)',
      'Full Board dining: 3 meals/day included throughout (plus packed hot lunch on hike day)',
      '~3-hour private coach transfers between Tbilisi and Bakuriani',
      '4–5 structured beginner ski lessons (6–8 students per certified instructor)',
      'Borjomi-Kharagauli National Park winter snowshoe day with morning administration registration & snowshoe coordination',
      'Tbilisi welcome dinner and farewell city walk/meal',
    ],
    excluded: [
      'International flights to/from Tbilisi (TBS)',
      'Personal ski clothing & winter travel/ski insurance',
      'Optional personal ski pass or rental upgrades outside the group package (quoted transparently)',
    ],
    weatherPlan:
      'Bakuriani’s moderate elevation and sheltered nursery slopes keep conditions beginner-friendly. On the Borjomi-Kharagauli National Park hike day, morning trail condition checks with the Park Administration (9:00 AM–6:00 PM) ensure an avalanche-safe, sheltered forest loop.',
    packingList: [
      'Waterproof ski jacket and snow pants',
      'Thermal base layers, fleece mid-layer, and warm wool/ski socks',
      'Waterproof ski gloves, warm beanie, neck gaiter, and UV ski goggles/sunglasses',
      'Sturdy waterproof winter walking boots for the Borjomi-Kharagauli snowshoe loop',
    ],
    faqs: [
      {
        question: 'Is this program suitable for students who have never skied before?',
        answer:
          'Yes. Bakuriani is chosen specifically for its wide, gentle nursery slopes and moderate elevation. Students are split into small groups of 6–8 per certified instructor across 4–5 structured beginner lessons.',
      },
      {
        question: 'How is safety handled on the Borjomi-Kharagauli snow hike?',
        answer:
          'The 5–8 km winter forest loop is sheltered with minimal elevation gain and is avalanche-safe. Every morning includes mandatory group trail registration, winter condition verification, and snowshoe coordination with the Borjomi-Kharagauli National Park Administration (open daily 9:00 AM–6:00 PM).',
      },
      {
        question: 'Are all meals included for the whole 8-day trip?',
        answer:
          'Yes, Full Board (3 meals/day) is included across the 8 Days / 7 Nights, including group hotel dining in Bakuriani, a packed hot lunch on the National Park hike day, and Tbilisi welcome/farewell meals.',
      },
    ],
    seoDescription:
      '8-day / 7-night Student Beginner Ski Course in Bakuriani & easy Borjomi-Kharagauli snowshoe hike. Full board (3 meals/day) for 20–25 students in January or February.',
    keywords: [
      'Bakuriani student ski course',
      'beginner ski trip Georgia students',
      'Borjomi-Kharagauli winter snow hike',
      'Georgia winter group tour',
    ],
  },
  {
    slug: 'jorunners-mountain-lodge-program',
    title: 'Jorunners — Scenic ~50 km Mountain Lodge Program',
    shortTitle: 'Jorunners: ~50 km Mountain Lodge Program',
    status: 'inquiry',
    statusLabel: 'Group Program · Mountain Lodges',
    pricingNote: '8 Days / 7 Nights · Full Board · ~50 km Scenic Trails',
    region: 'Kazbegi or Svaneti',
    regionSlug: 'kazbegi-svaneti',
    category: 'Multi-Day Trek',
    duration: '8 Days / 7 Nights',
    durationHours: 192,
    durationBucket: 'multi-day',
    difficulty: 'Easy–Moderate',
    groupSize: 'Active Running & Trail Group',
    minAge: 'Ages 16+',
    meals: 'Full Board (3 meals/day included)',
    season: 'Option A: Spring–Autumn | Option B: June–September',
    cardTags: ['8 Days / 7 Nights', 'Full Board', 'Group Tour'],
    quoteLabel: 'Group Custom Quote',
    isGroupProgram: true,
    defaultGroupSize: '12–20 runners',
    hasRouteOptions: true,
    startingPriceEur: null,
    pricingTiers: [],
    heroImage: '/images/mestia-svaneti.webp',
    heroAlt: 'Scenic Greater Caucasus mountain valley trail and stone villages for Jorunners ~50 km mountain lodge program',
    gallery: [
      {
        src: '/images/mestia-svaneti.webp',
        alt: 'High-mountain valley trail in the Greater Caucasus',
      },
      {
        src: '/images/kazbegi-peak.webp',
        alt: 'Stepantsminda and Mount Kazbek mountain valley scenery',
      },
      {
        src: '/images/kazbegi-glacier.webp',
        alt: 'Glacier-backed Caucasus peaks above mountain valleys',
      },
    ],
    summary:
      'Tailored for Jorunners: an easy, scenic 8-day / 7-night mountain lodge program totaling ~50 km across the week with Full Board (3 meals/day). Compare two curated route options below — Option A (Recommended: Stepantsminda Valley Basecamp with Truso Valley & Juta day trails) or Option B (Classic Mestia-to-Ushguli point-to-point lodges, June–September).',
    highlights: [
      'Designed for running & active mountain groups: easy and scenic ~50 km total across 8 Days / 7 Nights',
      'Full Board included: 3 nutritious meals/day tailored to active travelers and dietary preferences',
      'Option A (Recommended): Stepantsminda valley basecamp (6 nights in mountain lodges + 1 night Tbilisi) with zero daily packing/unpacking',
      'Option B (June–September): Classic Mestia to Ushguli point-to-point family-run mountain lodges with 4x4 luggage support & optional vehicle skips',
      'Flexible daily turn-back points and pace management so the entire group enjoys the mountains together',
    ],
    itinerary: [
      {
        timeOrDuration: 'Day 1',
        title: 'Tbilisi Arrival & Mountain Transfer',
        detail:
          'Arrive in Tbilisi (1 night in Tbilisi included in program logistics). Option A transfers ~3 hours north to Stepantsminda; Option B travels ~8–9 hours by road (or domestic flight when available) to Mestia.',
        ticketNote: 'Full Board starts',
      },
      {
        timeOrDuration: 'Days 2–3',
        title: 'Valley Warm-Up & Scenic ~8–12 km Outings',
        detail:
          'Option A: Easy 8–12 km valley runs/hikes from Stepantsminda mountain lodge basecamp with no daily packing. Option B: Opening village-to-village stages from Mestia toward traditional family-run mountain lodges.',
        ticketNote: 'Mountain Lodges',
      },
      {
        timeOrDuration: 'Days 4–5',
        title: 'Signature Scenic Stage (Truso Valley / Central Svaneti)',
        detail:
          'Option A: Truso Valley — wide, mostly flat gravel valley road (15–20 km round-trip, customizable) past travertine mineral springs, abandoned stone villages, and river panoramas. Option B: Mid-route Svaneti valleys with 4x4 luggage support and optional vehicle skips on the steepest pass.',
        ticketNote: '~15–20 km customizable',
      },
      {
        timeOrDuration: 'Day 6',
        title: 'High-Mountain Finale (Juta Valley or Ushguli)',
        detail:
          'Option A: Juta high-mountain valley out-and-back trail (8–12 km, easy-to-moderate, turn-back flexible) with optional mountain lodge overnight. Option B: Finish in Ushguli among medieval stone defensive towers and glacier-backed valleys.',
        ticketNote: 'Turn-back flexible',
      },
      {
        timeOrDuration: 'Days 7–8',
        title: 'Return to Tbilisi, Celebration Dinner & Departure',
        detail:
          'Return transfer to Tbilisi for final night, celebratory group dinner, and departure transfers on Day 8.',
        ticketNote: 'Full Board · Transfers',
      },
    ],
    included: [
      '7 nights accommodation (mountain lodges for the mountain stay + 1 night Tbilisi)',
      'Full Board dining: 3 meals/day included throughout the 8-day program',
      'Private group transport from/to Tbilisi (and 4x4 luggage support on Option B)',
      'Certified local mountain & trail guides pacing ~50 km across the week',
      'Flexible daily distance & optional vehicle support on steeper sections',
    ],
    excluded: [
      'International flights to/from Tbilisi (TBS)',
      'Personal trail running shoes, hydration vest, and travel insurance',
      'Optional domestic flight upgrade for Mestia (Option B, subject to weather/availability)',
    ],
    weatherPlan:
      'Option A operates with ~3-hour Tbilisi transfers and flexible valley turn-backs in Truso and Juta. Option B operates exclusively in Summer / Early Autumn (June–September) with 4x4 support vehicles ready for weather or steep-pass skips.',
    packingList: [
      'Trail running shoes with good gravel/dirt grip',
      'Lightweight windproof/waterproof running shell and breathable layers',
      '1–1.5L hydration vest or soft flasks, sun cap, and sunglasses',
      'Warm evening fleece/down layer for cool mountain lodge nights',
    ],
    faqs: [
      {
        question: 'Which option is better for an easy, scenic group week: Option A or Option B?',
        answer:
          'Option A (Stepantsminda Valley Basecamp) is recommended if you want easy terrain, ~3-hour transfers from Tbilisi, and no daily packing/unpacking. Option B (Mestia to Ushguli) is ideal for June–September groups seeking a classic point-to-point lodge trek with 4x4 luggage support.',
      },
      {
        question: 'How is the ~50 km total distance paced across the week?',
        answer:
          'Daily outings average 8–12 km (with Truso Valley customizable between 15–20 km round-trip on flat gravel). Out-and-back trails like Juta and optional vehicle skips in Svaneti keep the effort easy-to-moderate for the whole group.',
      },
      {
        question: 'Are 3 meals/day included at the mountain lodges?',
        answer:
          'Yes, Full Board (3 meals/day) is included across both options, featuring fresh local mountain lodge dining and dietary accommodations on request.',
      },
    ],
    seoDescription:
      'Jorunners 8-day / 7-night scenic ~50 km mountain lodge program in Georgia with Full Board. Compare Option A (Stepantsminda basecamp) and Option B (Mestia to Ushguli).',
    keywords: [
      'Jorunners Georgia mountain lodge program',
      'Stepantsminda Truso Juta trail running',
      'Mestia to Ushguli 50km lodge trek',
      'Georgia group trail running tour',
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return TOURS.find((t) => t.slug === slug);
}

export function getToursByRegion(regionSlug: string): Tour[] {
  return TOURS.filter((t) => t.regionSlug === regionSlug);
}
