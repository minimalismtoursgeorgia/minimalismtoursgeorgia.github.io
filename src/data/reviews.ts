export interface GuestReview {
  id: string;
  title: string;
  quote: string;
  authorLabel: string;
  platform: 'Tripadvisor' | 'Google' | 'GetYourGuide' | 'Trustpilot';
  dateLabel: string;
  datePublished: string;
  tourSlug?: string;
  tourTitle?: string;
}

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'tripadvisor-2026-11-batumi-waterfalls',
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
    id: 'tripadvisor-2024-07-dream-to-do-again',
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
];

export function getReviewsByTourSlug(slug: string): GuestReview[] {
  return GUEST_REVIEWS.filter((review) => review.tourSlug === slug);
}
