export type ReviewCategory = 'tour' | 'safety-cancellation' | 'b2b';

export interface GuestReview {
  id: string;
  category: ReviewCategory;
  title: string;
  quote: string;
  originalQuote?: string;
  originalLang?: string;
  contextNote?: string;
  authorLabel: string;
  platform: 'Tripadvisor' | 'Google' | 'GetYourGuide' | 'Trustpilot' | 'Viator' | 'WhatsApp';
  dateLabel: string;
  datePublished: string;
  country?: string;
  countryFlag?: string;
  tourSlug?: string;
  tourTitle?: string;
}

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'tripadvisor-2026-11-batumi-waterfalls',
    category: 'tour',
    title: 'Batumi waterfalls',
    quote:
      'We had a wonderful experience exploring the beautiful waterfalls near Batumi, and a big part of it was thanks to our excellent guide! He was friendly, knowledgeable, professional and always happy to share interesting information about the area. He made the whole trip enjoyable, comfortable and memorable. Highly recommended to anyone visiting Batumi. Thank you for such a fantastic experience!',
    authorLabel: 'Tripadvisor Reviewer',
    platform: 'Tripadvisor',
    dateLabel: 'Nov 2026',
    datePublished: '2026-11',
    tourSlug: 'mtirala-lake-waterfall-hike',
    tourTitle: 'Mtirala Lake & Waterfall Hike',
  },
  {
    id: 'viator-2026-11-heavy-weather-refund',
    category: 'safety-cancellation',
    title: 'Heavy-Weather Cancellation & Full Refund',
    contextNote:
      'Severe storm forecast before departure — our guide refused to risk unsafe mountain trails, advised cancelling, and arranged a full refund.',
    quote:
      'Thank you for everything, the money was refunded. When I come again I will definitely reach out to you and recommend you to friends.',
    originalQuote:
      'Спасибо за всё, деньги вернули. Когда приеду ещё раз точно обращусь к вам и друзьям посоветую',
    originalLang: 'ru',
    authorLabel: 'Viator Guest',
    platform: 'Viator',
    dateLabel: 'Nov 2026',
    datePublished: '2026-11',
    country: 'Lithuania',
    countryFlag: '🇱🇹',
    tourSlug: 'mtirala-lake-waterfall-hike',
    tourTitle: 'Mtirala Lake & Waterfall Hike',
  },
  {
    id: 'tripadvisor-2024-07-dream-to-do-again',
    category: 'tour',
    title: 'A tour we would dream to do again',
    quote:
      'We had super amazing time with our guide! There are no word that will explain the high care, kindness and proffesional person we gift with, with time for personal care, full info and safe',
    authorLabel: 'Tripadvisor Reviewer',
    platform: 'Tripadvisor',
    dateLabel: 'Jul 2024',
    datePublished: '2024-07',
    tourSlug: 'mtirala-lake-waterfall-hike',
    tourTitle: 'Mtirala Lake & Waterfall Hike',
  },
  {
    id: 'whatsapp-2026-07-machakhela-weather-safety',
    category: 'safety-cancellation',
    title: 'Honest Weather Safety Call Before a Family Hike',
    contextNote:
      'Heavy mountain rain forecast ahead of a 4-person family hike with children — our guide put trail safety first and honestly advised cancelling.',
    quote:
      "Okay, unfortunately we'll have to cancel. It's really disappointing, but thank you for your honesty and professionalism. Thank you very much. I really appreciate all your effort — it was very responsible of you.",
    authorLabel: 'Family Hiking Group (4 guests)',
    platform: 'WhatsApp',
    dateLabel: 'Jul 2026',
    datePublished: '2026-07',
    country: 'Israel',
    countryFlag: '🇮🇱',
    tourSlug: 'machakhela-guided-hiking',
    tourTitle: 'Machakhela Guided Hiking',
  },
  {
    id: 'whatsapp-2026-06-private-group-trip',
    category: 'tour',
    title: 'Perfect and Unforgettable Trip',
    quote:
      'You’re absolutely amazing and deserve all the compliments. You made our trip perfect and unforgettable.',
    authorLabel: 'Private Group Guest',
    platform: 'WhatsApp',
    dateLabel: 'Jun 2026',
    datePublished: '2026-06',
    country: 'Israel',
    countryFlag: '🇮🇱',
  },
  {
    id: 'whatsapp-2026-10-rahhalah-b2b',
    category: 'b2b',
    title: 'Professionalism & Guest Care in the Greater Caucasus',
    contextNote:
      'Multi-day Greater Caucasus hiking program (Juta, Gergeti–Sabertse & Truso Valley) operated for an international adventure tour operator.',
    quote:
      'We truly appreciate your professionalism, assistance, and the care you have shown to Guests during their time there. Thank you for all your efforts — it was really a great trip because of you. Until next time.',
    authorLabel: 'Rahhalah Operations Team',
    platform: 'WhatsApp',
    dateLabel: 'Sep–Oct 2026',
    datePublished: '2026-10',
    country: 'UAE',
    countryFlag: '🇦🇪',
    tourSlug: 'kazbegi-mount-kazbek-expedition',
    tourTitle: 'Kazbegi & Greater Caucasus',
  },
];

export function getReviewsByTourSlug(slug: string): GuestReview[] {
  return GUEST_REVIEWS.filter((review) => review.tourSlug === slug);
}

export function getPartnerProofReviews(): GuestReview[] {
  return GUEST_REVIEWS.filter(
    (review) => review.category === 'b2b' || review.category === 'safety-cancellation',
  );
}
