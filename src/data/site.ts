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

export const SITE = {
  brandName: 'Minimalism Tours Georgia',
  shortBrand: 'Minimalism Tours',
  motto: 'Break Your Routine',
  campaignTagline: 'Georgia, Beyond the Postcard',
  description:
    'Guided small-group and private nature hikes, rainforest trails, village hospitality, and cultural walks from Batumi across Adjara and Georgia. Led by certified UNESCO heritage and Red Cross First Aid local guide Beka Gelashvili.',
  founderName: 'Beka Gelashvili',
  founderRole: 'Founder & Lead Local Guide',
  experienceYears: 8,
  baseCity: 'Batumi',
  baseRegion: 'Adjara',
  country: 'Georgia',
  phoneDisplay: '+995 592 04 30 80',
  phoneRaw: '+995592043080',
  whatsappNumber: '995592043080',
  whatsappUrl: 'https://wa.me/995592043080',
  telegramUrl: 'https://t.me/MinimalismToursGeorgia',
  email: 'beqa.gelashvili.2@gmail.com',
  streetAddress: 'Selim Khimshiashvili St',
  postalCode: '6010',
  officeAddressDisplay: 'Selim Khimshiashvili St, Batumi 6010, Georgia',
  officeHoursDisplay: 'Open 24 hours · Monday–Sunday',
  googleBusinessUrl:
    'https://www.google.com/maps/search/?api=1&query=Minimalism+Tours+Georgia+Batumi',
  googleReviewUrl: 'https://g.page/r/CVoYIo0JHrCdEBI/review',
  youtubeUrl: 'https://www.youtube.com/@MinimalismToursGeorgia',
  getYourGuideSupplierUrl: 'https://www.getyourguide.com/minimalism-tours-georgia-s433573/',
  getYourGuideTourUrl: 'https://www.getyourguide.com/-t1525407/',
  /**
   * Optional free form backend (e.g. Formspree or Web3Forms endpoint).
   * Leave empty to route direct inquiries seamlessly through WhatsApp, Email, and instant clipboard quote copy.
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
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'UNESCO World Natural Heritage Site Guide',
    issuer: 'Adjara Tourism Administration',
    scope: 'Colchic rainforest ecology, conservation rules, and Mtirala/Kolkheti heritage interpretation',
  },
  {
    title: 'Certified Trekking Guide',
    issuer: 'Adventure Tourism School (Georgia)',
    scope: 'Mountain route navigation, trail pacing, weather contingencies, and group management',
  },
  {
    title: 'First Aid Certified Guide',
    issuer: 'Adjara Tourism Administration',
    scope: 'Trail-ready first response, altitude and terrain risk awareness',
  },
  {
    title: 'Red Cross First Aid Certified Guide',
    issuer: 'Georgia Red Cross Society',
    scope: 'Emergency stabilization and outdoor guest care protocols',
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
      'No hidden gate surprises. Each tour page explicitly lists what is included (such as Botanical Garden entry on the combined tour or homemade Adjarian lunch on the culinary hike) versus personal extras before you confirm.',
  },
  {
    question: 'How does group pricing and child discounting work?',
    answer:
      'Private and small-group tours scale smoothly from 1 to 16 travelers so solo visitors, couples, and larger groups get clear per-person pricing. Children aged 0–17 receive a 25% discount (75% of the adult rate) on standard day tours.',
  },
  {
    question: 'How do I reserve a tour without paying an upfront website fee?',
    answer:
      'Choose your group size and date in any tour’s calculator and click Book via WhatsApp or Email to message Beka directly — or book the live Mtirala Lake & Waterfall Hike directly on GetYourGuide. No middleman booking fees apply on direct reservations.',
  },
];
