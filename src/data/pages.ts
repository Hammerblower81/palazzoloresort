import type { Language } from "./site";
export const pageKeys = [
  "home",
  "house",
  "experiences",
  "gallery",
  "reviews",
  "contact",
] as const;
export type PageKey = (typeof pageKeys)[number];
export const slugs = {
  it: {
    home: "",
    house: "il-casolare",
    experiences: "esperienze",
    gallery: "galleria",
    reviews: "recensioni",
    contact: "contatti",
  },
  en: {
    home: "",
    house: "the-farmhouse",
    experiences: "experiences",
    gallery: "gallery",
    reviews: "reviews",
    contact: "contact",
  },
};
export const pathFor = (lang: Language, key: PageKey) =>
  `${lang === "en" ? "/en/" : "/"}${slugs[lang][key] ? slugs[lang][key] + "/" : ""}`;
export const labels = {
  it: {
    home: "Home",
    house: "Il casolare",
    experiences: "Esperienze",
    gallery: "Galleria",
    reviews: "Recensioni",
    contact: "Contatti",
  },
  en: {
    home: "Home",
    house: "The farmhouse",
    experiences: "Experiences",
    gallery: "Gallery",
    reviews: "Reviews",
    contact: "Contact",
  },
};
export const experienceCopy = {
  it: [
    [
      "A piedi, nella campagna",
      "Passi lenti, orizzonti aperti.",
      "Le colline intorno a Palazzolo invitano a uscire a piedi: strade di campagna, scorci sulla valle e un paesaggio che cambia con le stagioni. Una passeggiata può diventare il modo più semplice per conoscere questi luoghi.",
      "Chiedeteci un suggerimento per una passeggiata adatta ai vostri ritmi.",
    ],
    [
      "In bicicletta",
      "Una curva, un nuovo panorama.",
      "La zona di Anghiari si presta ai giri in bici, tra salite, strade di campagna e borghi. Che cerchiate una pedalata tranquilla o un giro più impegnativo, la Valtiberina offre buoni motivi per portare la bicicletta in vacanza.",
      "Scriveteci prima di partire per orientarvi nella scelta dei percorsi.",
    ],
    [
      "Anghiari e i borghi",
      "La bellezza, qui vicino.",
      "Il borgo di Anghiari è a pochi passi: vicoli in pietra, piccole piazze e affacci sulla valle. Per una giornata fuori porta, Sansepolcro e Arezzo aggiungono arte, storia e nuove strade da percorrere.",
      "Partite da Anghiari, poi lasciate spazio alla curiosità.",
    ],
    [
      "Tra vigna e olivi",
      "Il paesaggio di casa.",
      "La vigna e gli olivi fanno parte del paesaggio di Palazzolo. Ci piace che una vacanza qui sia anche questo: riconoscere il ritmo della campagna, fermarsi all’ombra e ritrovare il piacere di stare all’aperto.",
      "Per una giornata senza spostamenti, il giardino e la piscina sono tutti vostri.",
    ],
  ],
  en: [
    [
      "On foot",
      "Slow steps, open horizons.",
      "The hills around Palazzolo invite you outside: country lanes, views across the valley and a landscape that changes with the seasons. A walk is a lovely way to get to know the area.",
      "Ask us for suggestions for a walk that suits your pace.",
    ],
    [
      "By bicycle",
      "Another bend, another view.",
      "The Anghiari area is made for exploring by bicycle, with hills, country roads and villages along the way. From a gentle ride to a more demanding outing, the Valtiberina gives you plenty of reasons to bring your bike.",
      "Contact us before your trip for help choosing routes.",
    ],
    [
      "Anghiari and beyond",
      "Beauty, close to home.",
      "Anghiari is close by, with stone lanes, little squares and views over the valley. For a day out, Sansepolcro and Arezzo offer art, history and more places to explore.",
      "Begin with Anghiari, then see where your curiosity takes you.",
    ],
    [
      "Vines and olive trees",
      "The landscape of home.",
      "Vines and olive trees are part of the landscape at Palazzolo. A holiday here is also an invitation to notice the rhythm of the countryside, find a shady spot and enjoy time outside.",
      "For a day at home, the garden and pool are exclusively yours.",
    ],
  ],
};
