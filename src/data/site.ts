export interface PickupPoint {
  id: string;
  name: string;
  address: string;
  district: string;
  mapsUrl: string;
}

export interface VehicleOption {
  name: string;
  capacity: string;
  idealFor: string;
  amenities: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  scope: string;
}

export interface SeasonPlan {
  id: string;
  months: string;
  title: string;
  focus: string;
  recommendedRegions: string[];
  practicalNote: string;
}

export interface SocialChannel {
  id: 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'telegram' | 'pinterest' | 'snapchat';
  name: string;
  handle: string;
  url: string;
}

export interface B2BPartnerType {
  tag: string;
  title: string;
  summary: string;
  points: string[];
}

export interface B2BGuarantee {
  title: string;
  detail: string;
}

export const SITE = {
  brandName: 'Minimalism Tours Georgia',
  shortBrand: 'Minimalism Tours',
  motto: 'Break Your Routine',
  campaignTagline: 'Georgia, Beyond the Postcard',
  description:
    'Batumi-based licensed tour operator and Adjara DMC offering small-group, private, and B2B guided nature hikes, UNESCO Colchic rainforest trails, cultural walks, and Caucasus expeditions across Georgia.',
  experienceYears: 10,
  baseCity: 'Batumi',
  baseRegion: 'Adjara',
  country: 'Georgia',
  phoneDisplay: '+995 592 04 30 80',
  phoneRaw: '+995592043080',
  email: 'minimalismtoursgeorgia@gmail.com',
  whatsappNumber: '995592043080',
  whatsappUrl: 'https://wa.me/995592043080',
  telegramUrl: 'https://t.me/MinimalismToursGeorgia',
  streetAddress: 'Selim Khimshiashvili St',
  postalCode: '6010',
  officeAddressDisplay: 'Selim Khimshiashvili St, Batumi 6010, Georgia',
  officeHoursDisplay: 'Open 24 hours · Monday–Sunday',
  googleBusinessUrl:
    'https://www.google.com/maps/search/?api=1&query=Minimalism+Tours+Georgia+Batumi',
  googleReviewUrl: 'https://g.page/r/CVoYIo0JHrCdEBI/review',
  trustpilotUrl: 'https://www.trustpilot.com/review/minimalismtoursgeorgia.github.io',
  tripadvisorUrl:
    'https://www.tripadvisor.com/Attraction_Review-g297576-d26844789-Reviews-Minimalism_Tours_Georgia-Batumi_Adjara_Region.html',
  tripadvisorReviewUrl:
    'https://www.tripadvisor.com/AttractionProductReview-g297576-d27942060-From_Batumi_UNESCO_Mtirala_National_Park_Lake_Waterfall_Hike-Batumi_Adjara_Region.html#REVIEWS',
  youtubeUrl: 'https://www.youtube.com/@MinimalismToursGeorgia',
  getYourGuideSupplierUrl: 'https://www.getyourguide.com/minimalism-tours-georgia-s433573/',
  getYourGuideTourUrl: 'https://www.getyourguide.com/-t1525407/',
  /**
   * Optional free form backend (e.g. Formspree or Web3Forms endpoint).
   * Leave empty to route direct inquiries seamlessly through WhatsApp, Telegram, and instant clipboard quote copy.
   */
  formspreeEndpoint: '',
  defaultStartTime: '10:00',
  cancellationPolicy: 'Free cancellation up to 24 hours before departure',
  languages: ['English', 'Georgian (ქართული)'],
  currencyRates: {
    EUR: { symbol: '€', rate: 1, label: 'EUR (€)' },
    USD: { symbol: '$', rate: 1.06, label: 'USD ($)' },
    GEL: { symbol: '₾', rate: 2.85, label: 'GEL (₾)' },
  },
  childDiscountRatio: 0.75,
  logoPath: '/images/brand-logo.png',
  ogImagePath: '/images/og-default.jpg',
  coordinates: {
    lat: 41.6509,
    lng: 41.6359,
  },
} as const;

export const SOCIAL_LINKS: SocialChannel[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@minimalismtoursgeorgia',
    url: 'https://www.instagram.com/minimalismtoursgeorgia/',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Minimalism Tours Georgia',
    url: 'https://www.facebook.com/minimalismtoursgeorgia',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@MinimalismToursGeorgia',
    url: 'https://www.youtube.com/@MinimalismToursGeorgia',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@minimalismtoursgeorgia',
    url: 'https://www.tiktok.com/@minimalismtoursgeorgia',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    handle: '@MinimalismToursGeorgia',
    url: 'https://t.me/MinimalismToursGeorgia',
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    handle: '@minimalismtoursgeorgia',
    url: 'https://www.pinterest.com/minimalismtoursgeorgia/',
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    handle: '@minimalismtours',
    url: 'https://www.snapchat.com/add/minimalismtours',
  },
];

export const PICKUP_POINTS: PickupPoint[] = [
  {
    id: 'europe-square',
    name: 'Europe Square',
    address: '29 Memed Abashidze Ave, Batumi, Georgia',
    district: 'Old Batumi Center',
    mapsUrl: 'https://maps.google.com/?q=29+Memed+Abashidze+Ave,+Batumi,+Georgia',
  },
  {
    id: 'argo-cable-car',
    name: 'Argo Cable Car',
    address: '1 Bako Street, Batumi 6010, Georgia',
    district: 'Port & Cable Car Station',
    mapsUrl: 'https://maps.google.com/?q=1+Bako+Street,+Batumi+6010,+Georgia',
  },
  {
    id: 'batumi-central-park',
    name: 'Batumi Central Park',
    address: 'JJXH+6C3, H. Abashidze St, Batumi, Georgia',
    district: '6 May Park & Lakefront',
    mapsUrl: 'https://maps.google.com/?q=Batumi+Central+Park,+H.+Abashidze+St,+Batumi,+Georgia',
  },
  {
    id: 'euphoria-hotel',
    name: 'Euphoria Hotel Batumi',
    address: '1 Lech and Maria Kaczynski St, Batumi, Georgia',
    district: 'New Boulevard',
    mapsUrl: 'https://maps.google.com/?q=1+Lech+and+Maria+Kaczynski+St,+Batumi,+Georgia',
  },
];

export const VEHICLES: VehicleOption[] = [
  {
    name: 'Comfort Sedan',
    capacity: 'Up to 4 guests',
    idealFor: 'Solo travelers, couples, and coastal cultural days',
    amenities: ['Air-conditioning', 'Onboard Wi-Fi', 'Heating', 'Audio system'],
  },
  {
    name: 'Touring Van',
    capacity: 'Up to 6 guests',
    idealFor: 'Families and small hiking groups with backpacks',
    amenities: ['Air-conditioning', 'Onboard Wi-Fi', 'Heating', 'Audio system'],
  },
  {
    name: '4x4 Mountain SUV / Jeep',
    capacity: 'Up to 7 guests',
    idealFor: 'Mtirala forest approaches, mountain passes, and Adjarian valleys',
    amenities: ['4x4 traction', 'Air-conditioning', 'Onboard Wi-Fi', 'Heating'],
  },
  {
    name: 'Touring Minibus / Sprinter',
    capacity: '8–16+ guests (coaches on request)',
    idealFor: 'Travel agency groups, corporate retreats, and university delegations',
    amenities: ['Air-conditioning', 'Dedicated luggage space', 'Onboard Wi-Fi', 'Direct hotel or port pickup'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'GMGA & FMGA Certified Mountain & Trekking Standards',
    issuer: 'Georgian & Federation Mountain Guides',
    scope: 'Mountain safety protocols, high-altitude route leadership, and UNESCO-protected trail management',
  },
  {
    title: 'UNESCO World Natural Heritage Site Guiding',
    issuer: 'Adjara Tourism Administration',
    scope: 'Colchic rainforest ecology, conservation rules, and Mtirala/Kolkheti heritage interpretation',
  },
  {
    title: 'Certified Trekking & Field Guiding',
    issuer: 'Adventure Tourism School (Georgia)',
    scope: 'Mountain route navigation, trail pacing, weather contingencies, and group coordination',
  },
  {
    title: 'Red Cross & Adjara First Aid Operations',
    issuer: 'Georgia Red Cross Society & Adjara Tourism Administration',
    scope: 'Trail-ready emergency stabilization and outdoor guest care protocols',
  },
];

export const CONTENT_PILLARS = [
  {
    name: 'Nature',
    summary:
      'Ancient Colchic rainforests, volcanic valleys, alpine passes, and honest guidance on real trail and rain conditions.',
  },
  {
    name: 'Culture',
    summary:
      'Batumi Old Town architectural stories, Adjarian stone bridges, village kitchens, and verified local history.',
  },
  {
    name: 'People',
    summary:
      'Small-group conversations with local guides and village hosts where connection happens naturally beyond crowded coach routes.',
  },
  {
    name: 'Plan & Book',
    summary:
      'Clear route difficulty, confirmed meeting points, transparent inclusions with zero hidden gate surprises, and 24-hour flexibility.',
  },
] as const;

export const SEASONS: SeasonPlan[] = [
  {
    id: 'jan-mar',
    months: 'Jan – Mar',
    title: 'Coastal Heritage & Mild Forest Walks',
    focus:
      'Quiet Batumi Old Town architecture walks, Botanical Garden winter evergreens, and low-elevation Adjarian foothills.',
    recommendedRegions: ['Batumi', 'Botanical Coast'],
    practicalNote: 'Layered waterproof outerwear recommended; coastal temperatures stay mild compared to inland highlands.',
  },
  {
    id: 'apr-jun',
    months: 'Apr – Jun',
    title: 'Colchic Rainforest Bloom & Spring Waterfalls',
    focus:
      'Peak waterfall flow in Mtirala National Park, blooming Pontic rhododendron, and Machakhela valley trails with structured rain backups.',
    recommendedRegions: ['Mtirala National Park', 'Machakhela', 'Kolkheti'],
    practicalNote: 'Morning weather checks, trail traction boots, and flexible forest-canopy pacing.',
  },
  {
    id: 'jul-sep',
    months: 'Jul – Sep',
    title: 'High Caucasus & Emerald Alpine Lakes',
    focus:
      'Cool mountain escapes above Batumi heat: 2-day Mtirala ridge shelters, Green Lake alpine meadows, Mestia/Svaneti ridges, and Mount Kazbek expeditions.',
    recommendedRegions: ['Mtirala', 'Green Lake', 'Kazbegi', 'Mestia'],
    practicalNote: 'Advance scheduling advised for multi-day alpine expeditions and weekend summer slots.',
  },
  {
    id: 'oct-dec',
    months: 'Oct – Dec',
    title: 'Autumn Colors, Harvest Tables & Slow Culture',
    focus:
      'Golden beech forests in Mtirala and Machakhela, homemade Adjarian kitchen lunches, and crisp Batumi evening walks.',
    recommendedRegions: ['Machakhela', 'Mtirala', 'Batumi'],
    practicalNote: 'Clear autumn visibility along the Black Sea ridge; shorter daylight favors 10:00 AM starts.',
  },
];

export const GENERAL_FAQS = [
  {
    question: 'Where do day tours from Batumi pick us up?',
    answer:
      'All Batumi day tours include pickup and return to the same point across four verified central locations: Europe Square, Argo Cable Car, Batumi Central Park, and Euphoria Hotel Batumi. Custom central Batumi hotel pickups can also be confirmed via WhatsApp.',
  },
  {
    question: 'What happens if it rains in Mtirala National Park?',
    answer:
      'Mtirala is a temperate Colchic rainforest — mist and rain are part of its ecosystem. Every day hike follows an active weather plan with forest-canopy routes, grip advice, dry transport waiting nearby, and optional flexible rescheduling within standard 24-hour terms.',
  },
  {
    question: 'Are attraction tickets or park fees hidden on site?',
    answer:
      'No hidden gate surprises. Each tour page explicitly lists what is included (such as Botanical Garden entry on the combined tour or homemade Adjarian lunch on the culinary hike) versus personal extras before you confirm. Optional Mtirala experiences — such as zipline, ATV ride, local mountain honey tasting, and lunch — are arranged purely on guest request and are never mandatory.',
  },
  {
    question: 'How does group pricing and child discounting work?',
    answer:
      'Private and small-group tours scale smoothly from 1 to 16 travelers so solo visitors, couples, and larger groups get clear per-person pricing. Children aged 0–17 receive a 25% discount (75% of the adult rate) on standard day tours.',
  },
  {
    question: 'How do I reserve a tour without paying an upfront website fee?',
    answer:
      'Choose your group size and date in any tour’s calculator and click Book via WhatsApp or Telegram directly — or book on GetYourGuide. No middleman booking fees apply on direct reservations.',
  },
  {
    question: 'Can I pay with a bank card, or is cash easier?',
    answer:
      'Bank cards work in Batumi and at many restaurants, but it is much easier to have cash (GEL) in the mountains, villages, and for optional extras on site (zipline 80 GEL, ATV 150 GEL, honey 50 GEL, propolis 40 GEL, or lunch arranged with your guide).',
  },
  {
    question: 'Where can I find the best cash exchange rates in Batumi?',
    answer:
      'Local guide tip: for the best cash exchange rates in Batumi, look for Rico Credit exchange offices.',
  },
];

export const B2B_PARTNER_TYPES: B2BPartnerType[] = [
  {
    tag: 'DMC & Trade',
    title: 'Travel Agencies & DMCs',
    summary:
      'Reliable ground handling across Batumi, Adjara, Kolkheti, Svaneti, and Kazbegi with flexible B2B partner structures.',
    points: [
      'Net and commissionable partner tariffs across 1-day to 5-day routes',
      'White-label or co-branded guiding teams in English and Georgian',
      'Custom multi-day Western Georgia & Caucasus itinerary modules',
    ],
  },
  {
    tag: 'Hospitality',
    title: 'Batumi Hotels & Concierges',
    summary:
      'Turnkey daily excursions with direct lobby pickups, instant confirmation, and clear pricing for hotel guests.',
    points: [
      'Direct hotel pickup in Batumi alongside 4 central pickup hubs',
      'Fast WhatsApp and Telegram confirmation for same-day and next-day requests',
      'Zero hidden park or gate fees and structured rain-day backup routes',
    ],
  },
  {
    tag: 'Corporate',
    title: 'Corporate & Team Retreats',
    summary:
      'Private Colchic rainforest hikes, village culinary tables, Batumi architectural walks, and multi-vehicle logistics for teams up to 16+ guests.',
    points: [
      'Dedicated Sedans, 4x4 SUVs, Touring Vans, and Sprinter minibuses',
      'Curated village lunches with vegetarian and dietary accommodations',
      'Moderate coastal-to-mountain pacing tailored to mixed fitness levels',
    ],
  },
  {
    tag: 'Special Groups',
    title: 'Academic, Cruise & Special-Interest Groups',
    summary:
      'Content-rich ecological and heritage guiding aligned to port call windows and university field schedules.',
    points: [
      'UNESCO Colchic rainforest & Kolkheti wetlands field interpretation',
      'Shore-excursion timing synchronized to Batumi port arrivals',
      'GMGA/FMGA and Red Cross First Aid safety standards on every departure',
    ],
  },
];

export const B2B_GUARANTEES: B2BGuarantee[] = [
  {
    title: 'Certified Guiding Standards',
    detail: 'GMGA/FMGA, UNESCO World Natural Heritage, Adventure Tourism School, and Red Cross First Aid credentials.',
  },
  {
    title: 'Multi-Vehicle Fleet',
    detail: 'Comfort Sedans (1–4), Touring Vans (1–6), 4x4 SUVs (1–7), and Sprinter Minibuses (8–16+ guests).',
  },
  {
    title: 'Zero Hidden Gate Fees',
    detail: 'Every B2B and guest quote states exact inclusions upfront—such as Botanical Garden tickets or village meals.',
  },
  {
    title: 'Active Weather Contingencies',
    detail: 'Rainforest-ready routing, dry standby vehicles, and alternative Adjarian cultural stops when mountain weather shifts.',
  },
  {
    title: 'Flexible 24h Terms',
    detail: 'Standard 24-hour free cancellation window on day departures with clear multi-day expedition terms.',
  },
  {
    title: '24/7 Operations Desk',
    detail: 'Direct response via WhatsApp (+995 592 04 30 80) and Telegram (@MinimalismToursGeorgia) for live dispatching.',
  },
];
