// Only enter owner-confirmed or directly verified public figures. Never estimate missing ratings.
// Each platform keeps its own scale; do not combine the scores.
export interface PlatformReview {
  name: string;
  url: string;
  score?: number;
  scale: number;
  count?: number;
  checked?: string;
}
export const reviewPlatforms: PlatformReview[] = [
  {
    name: "Google",
    url: "https://g.co/kgs/8wT2Jsf",
    score: 4.9,
    scale: 5,
    count: 29,
    checked: "2026-11-10",
  },
  // Public listing structured data: aggregateRating + listingRatingStats, 10 November 2026.
  {
    name: "Airbnb",
    url: "https://www.airbnb.it/rooms/49747673",
    score: 5,
    scale: 5,
    count: 11,
    checked: "2026-11-10",
  },
  {
    name: "Booking.com",
    url: "https://www.booking.com/hotel/it/farmhouse-in-anghiari.it.html",
    score: 9.8,
    scale: 10,
    count: 8,
    checked: "2026-11-10",
  },
];
export interface GuestReview {
  author: string;
  platform: string;
  date: { it: string; en: string };
  url: string;
  note: { it: string; en: string };
  text: { it: string; en: string };
}
// Excerpts from the review HTML supplied by the owner on 10 November 2026.
// Airbnb displayed these texts as translations; keep that label in both languages.
export const guestReviews: GuestReview[] = [
  {
    author: "Bettina Ufholz",
    platform: "Google",
    date: {
      it: "Consultata il 10 novembre 2026",
      en: "Read on 10 November 2026",
    },
    url: "https://share.google/KstLEDZxrEkEpiaP2",
    note: { it: "Estratto tradotto", en: "Translated excerpt" },
    text: {
      it: "Un paesaggio incantevole e tranquillo, circondato da vigneti, uliveti e prati.",
      en: "A beautiful, peaceful landscape, surrounded by vineyards, olive groves and meadows.",
    },
  },
  {
    author: "Jeanette Pearson",
    platform: "Google",
    date: {
      it: "Consultata il 10 novembre 2026",
      en: "Read on 10 November 2026",
    },
    url: "https://share.google/ZBBFLDtcgEo65gjvD",
    note: { it: "Estratto tradotto", en: "Translated excerpt" },
    text: {
      it: "La destinazione di vacanza perfetta per la nostra famiglia.",
      en: "The perfect holiday destination for our family.",
    },
  },
  {
    author: "Jerome HENDRIKS",
    platform: "Google",
    date: {
      it: "Consultata il 10 novembre 2026",
      en: "Read on 10 November 2026",
    },
    url: "https://share.google/jNjbPMVx0WkAmlSRu",
    note: { it: "Estratto tradotto", en: "Translated excerpt" },
    text: {
      it: "La casa è elegante e arredata con lusso, completamente attrezzata e impeccabile al nostro arrivo.",
      en: "The house is stylish, beautifully furnished, fully equipped and was spotless when we arrived.",
    },
  },
  {
    author: "Gediminas Miskinis",
    platform: "Google",
    date: {
      it: "Consultata il 10 novembre 2026",
      en: "Read on 10 November 2026",
    },
    url: "https://share.google/2naVHytMJisymlQlY",
    note: { it: "Estratto tradotto", en: "Translated excerpt" },
    text: {
      it: "Le camere sono arredate con gusto e risultano davvero moderne e confortevoli.",
      en: "The rooms are tastefully furnished, modern and comfortable.",
    },
  },
  {
    author: "Elke",
    platform: "Airbnb",
    date: { it: "Giugno 2026", en: "June 2026" },
    url: "https://www.airbnb.it/rooms/49747673#reviews",
    note: { it: "Estratto tradotto", en: "Translated excerpt" },
    text: {
      it: "Le camere, i bagni e soprattutto la cucina sono arredati con molto gusto e attenzione ai dettagli. Anche il grande giardino con la piscina ha contribuito a farci sentire completamente a nostro agio.",
      en: "The rooms, the bathrooms and especially the kitchen are furnished with a lot of taste and attention to detail. The large garden with the pool also played a major role in making us feel completely at ease.",
    },
  },
  {
    author: "Laura",
    platform: "Airbnb",
    date: { it: "Maggio 2026", en: "May 2026" },
    url: "https://www.airbnb.it/rooms/49747673#reviews",
    note: { it: "Estratto tradotto", en: "Translated excerpt" },
    text: {
      it: "L’alloggio era esattamente come nelle fotografie. La comunicazione e l’ospitalità di Mirko e della sua famiglia sono state davvero eccezionali. Ci siamo sentiti in ottime mani e abbiamo potuto rilassarci.",
      en: "The accommodation was exactly as shown in the photos :-). The communication and hospitality of Mirko and his family were truly outstanding. You felt you were in very good hands and could really unwind.",
    },
  },
];
