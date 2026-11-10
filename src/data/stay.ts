import type { ImageMetadata } from "astro";
import type { Language } from "./site";
import bathroom from "../assets/bagno-falegname.jpg";
import daylightPool from "../assets/piscina-giorno.jpg";
import kitchen from "../assets/camera.jpg";
import suite from "../assets/suite.jpg";
import suiteDetail from "../assets/suite-dettaglio.jpg";
import canopy from "../assets/suite-baldacchino.jpg";
import barbolana from "../assets/barbolana.jpg";
import barbolanaRoom from "../assets/barbolana-ambiente.jpg";
import dresser from "../assets/barbolana-dettaglio.jpg";
import nonni from "../assets/camera-nonni.jpg";
import nonniRoom from "../assets/camera-nonni-ambiente.jpg";
import nonniDetail from "../assets/camera-nonni-dettaglio.jpg";
import superior from "../assets/superior.jpg";
import superiorRoom from "../assets/superior-vista.jpg";
import superiorDetail from "../assets/superior-dettaglio.jpg";
import superiorFurniture from "../assets/superior-ambiente.jpg";
import house from "../assets/casolare.jpg";
import pool from "../assets/piscina.jpg";
import garden from "../assets/giardino.jpg";
import veranda from "../assets/veranda.jpg";

export type Localized = Record<Language, string>;
export type PhotoCategory = "interiors" | "outdoors" | "pool";
export interface Photo {
  id: string;
  image: ImageMetadata;
  category: PhotoCategory;
  caption: Localized;
  alt: Localized;
}

// Add a photo here to make it available in the gallery and full-screen viewer.
// These images come from the property's original website, not a stock library.
export const photos: Photo[] = [
  {
    id: "bagno-falegname",
    image: bathroom,
    category: "interiors",
    caption: {
      it: "Il bagno · Il banco da falegname",
      en: "The bathroom · The carpenter’s workbench",
    },
    alt: {
      it: "Due lavabi a ciotola su un antico banco da falegname in legno",
      en: "Two bowl basins on an old wooden carpenter’s workbench",
    },
  },
  {
    id: "piscina-paesaggio",
    image: daylightPool,
    category: "pool",
    caption: {
      it: "La piscina · Solo per il vostro gruppo",
      en: "The pool · Exclusively for your group",
    },
    alt: {
      it: "Piscina privata con pedana in legno e campagna intorno",
      en: "Private pool with a timber deck and countryside views",
    },
  },
  {
    id: "cucina",
    image: kitchen,
    category: "interiors",
    caption: {
      it: "La cucina · Pietra e design",
      en: "The kitchen · Stone meets design",
    },
    alt: {
      it: "Cucina con isola contemporanea, pareti in pietra e tavolo in legno",
      en: "Kitchen with a contemporary island, stone walls and wooden table",
    },
  },
  {
    id: "suite",
    image: suite,
    category: "interiors",
    caption: {
      it: "La Suite · Baldacchino e vasca",
      en: "The Suite · Canopy bed and bathtub",
    },
    alt: {
      it: "La Suite con letto a baldacchino, travi a vista e vasca freestanding",
      en: "The Suite with a canopy bed, exposed beams and freestanding bathtub",
    },
  },
  {
    id: "barbolana",
    image: barbolanaRoom,
    category: "interiors",
    caption: {
      it: "Barbolana · Colori e arredi",
      en: "Barbolana · Colour and character",
    },
    alt: {
      it: "Camera Barbolana con letto matrimoniale e cassettiera in legno",
      en: "Barbolana bedroom with a double bed and wooden chest of drawers",
    },
  },
  {
    id: "nonni",
    image: nonniRoom,
    category: "interiors",
    caption: {
      it: "Camera dei nonni · Geometrie di luce",
      en: "Camera dei nonni · Patterns of light",
    },
    alt: {
      it: "Camera dei nonni con letto matrimoniale, lampade e pareti decorate",
      en: "Camera dei nonni with a double bed, pendant lights and decorated walls",
    },
  },
  {
    id: "superior",
    image: superiorRoom,
    category: "interiors",
    caption: {
      it: "Superior Room · Il camino",
      en: "Superior Room · The fireplace",
    },
    alt: {
      it: "Il camino della Superior Room tra pietra a vista e arredi in legno",
      en: "The Superior Room fireplace, exposed stone and wooden furniture",
    },
  },
  {
    id: "piscina",
    image: pool,
    category: "pool",
    caption: {
      it: "La piscina · La luce del tramonto",
      en: "The pool · Evening light",
    },
    alt: {
      it: "Piscina con pedana in legno affacciata sulle colline al tramonto",
      en: "Pool with a wooden deck overlooking the hills at sunset",
    },
  },
  {
    id: "giardino",
    image: garden,
    category: "outdoors",
    caption: {
      it: "Il giardino · Un angolo all’ombra",
      en: "The garden · A shady corner",
    },
    alt: {
      it: "Pergolato in giardino con poltrone, tavolino e lettini",
      en: "Garden pergola with armchairs, a small table and loungers",
    },
  },
  {
    id: "casolare",
    image: house,
    category: "outdoors",
    caption: {
      it: "Il casolare · La nostra casa di famiglia",
      en: "The farmhouse · Our family home",
    },
    alt: {
      it: "Casolare in pietra tra le querce e i campi della campagna toscana",
      en: "Stone farmhouse among oak trees and Tuscan fields",
    },
  },
  {
    id: "suite-vasca",
    image: suiteDetail,
    category: "interiors",
    caption: {
      it: "La Suite · Il piacere dei dettagli",
      en: "The Suite · The pleasure of detail",
    },
    alt: {
      it: "La vasca freestanding della Suite, vicino al letto a baldacchino",
      en: "The Suite freestanding bathtub beside the canopy bed",
    },
  },
  {
    id: "baldacchino",
    image: canopy,
    category: "interiors",
    caption: {
      it: "La Suite · Legno e travi a vista",
      en: "The Suite · Timber and exposed beams",
    },
    alt: {
      it: "Letto a baldacchino in legno sotto il soffitto con travi a vista",
      en: "Wooden canopy bed beneath an exposed-beam ceiling",
    },
  },
  {
    id: "barbolana-dettaglio",
    image: dresser,
    category: "interiors",
    caption: {
      it: "Barbolana · Una nuova vita agli arredi",
      en: "Barbolana · A new life for old furniture",
    },
    alt: {
      it: "Cassettiera in legno con piano chiaro e vaso di fiori nella Barbolana",
      en: "Wooden chest of drawers with a light-coloured top and flowers in Barbolana",
    },
  },
  {
    id: "barbolana-finestra",
    image: barbolana,
    category: "interiors",
    caption: {
      it: "Barbolana · Affacci sulla campagna",
      en: "Barbolana · A window onto the countryside",
    },
    alt: {
      it: "Letto matrimoniale della Barbolana e finestra aperta verso la campagna",
      en: "Barbolana double bed and open window towards the countryside",
    },
  },
  {
    id: "nonni-lettura",
    image: nonniDetail,
    category: "interiors",
    caption: {
      it: "Camera dei nonni · Un angolo per sé",
      en: "Camera dei nonni · A corner of your own",
    },
    alt: {
      it: "Poltrona e mobile restaurato nella Camera dei nonni",
      en: "Armchair and restored furniture in Camera dei nonni",
    },
  },
  {
    id: "nonni-luce",
    image: nonni,
    category: "interiors",
    caption: {
      it: "Camera dei nonni · Luci e colori",
      en: "Camera dei nonni · Light and colour",
    },
    alt: {
      it: "Lampade sospese e dettagli del letto nella Camera dei nonni",
      en: "Pendant lights and bed details in Camera dei nonni",
    },
  },
  {
    id: "superior-arco",
    image: superior,
    category: "interiors",
    caption: {
      it: "Superior Room · L’arco in mattoni",
      en: "Superior Room · The brick arch",
    },
    alt: {
      it: "Arco in mattoni a vista che incornicia il camino della Superior Room",
      en: "Exposed brick arch framing the Superior Room fireplace",
    },
  },
  {
    id: "superior-angolo",
    image: superiorDetail,
    category: "interiors",
    caption: {
      it: "Superior Room · Spazio e luce",
      en: "Superior Room · Space and light",
    },
    alt: {
      it: "Vista della Superior Room con arco in mattoni, finestra e divano",
      en: "View of the Superior Room with a brick arch, window and sofa",
    },
  },
  {
    id: "superior-arredi",
    image: superiorFurniture,
    category: "interiors",
    caption: {
      it: "Superior Room · Arredi di casa",
      en: "Superior Room · Furniture with a story",
    },
    alt: {
      it: "Arredi in legno e angolo con divano sotto l’arco in mattoni",
      en: "Wooden furniture and sofa corner beneath the brick arch",
    },
  },
  {
    id: "veranda",
    image: veranda,
    category: "outdoors",
    caption: {
      it: "La veranda · La pietra del casolare",
      en: "The veranda · Farmhouse stonework",
    },
    alt: {
      it: "Veranda del casolare con facciata in pietra e strutture in legno",
      en: "Farmhouse veranda with a stone façade and wooden beams",
    },
  },
];

export interface Room {
  id: string;
  name: string;
  photoId: string;
  area: number;
  description: Localized;
  bed: Localized;
  view: Localized;
  detail: Localized;
}

// Dimensions and bed arrangements are retained from /our-rooms/ on the original site.
// Rooms are presented as part of the whole-house stay, not as separate bookings.
export const rooms: Room[] = [
  {
    id: "suite",
    name: "La Suite",
    photoId: "suite",
    area: 30,
    description: {
      it: "Il legno del baldacchino, le travi originali e una vasca freestanding: un ambiente che custodisce il carattere del casolare e lo interpreta con dettagli contemporanei.",
      en: "A wooden canopy bed, original beams and a freestanding bathtub: a room that preserves the farmhouse character with a contemporary touch.",
    },
    bed: { it: "Matrimoniale a baldacchino", en: "Double canopy bed" },
    view: { it: "Colline", en: "Hills" },
    detail: {
      it: "Bagno in camera con vasca freestanding",
      en: "En-suite bathroom with freestanding bathtub",
    },
  },
  {
    id: "barbolana",
    name: "Barbolana",
    photoId: "barbolana",
    area: 22,
    description: {
      it: "Toni delicati, arredi in legno e una finestra sulla campagna. La semplicità di una camera di casa, con ogni dettaglio al proprio posto.",
      en: "Soft colours, wooden furniture and a window onto the countryside. The simplicity of a room that feels like home, with care in every detail.",
    },
    bed: { it: "Matrimoniale", en: "Double bed" },
    view: { it: "Colline", en: "Hills" },
    detail: {
      it: "Arredi in legno e colori delicati",
      en: "Wooden furniture and soft colours",
    },
  },
  {
    id: "nonni",
    name: "Camera dei nonni",
    photoId: "nonni",
    area: 25,
    description: {
      it: "Un nome che racconta le nostre radici. Il mobile restaurato e i giochi di luce delle lampade portano la memoria di famiglia dentro una stanza dal carattere personale.",
      en: "A name that speaks of our roots. Restored furniture and the patterns cast by pendant lights bring family memories into a room with a character of its own.",
    },
    bed: {
      it: "Matrimoniale, con possibilità di singolo",
      en: "Double bed, with an additional single bed possible",
    },
    view: { it: "Colline", en: "Hills" },
    detail: {
      it: "Mobile d’epoca restaurato",
      en: "Restored vintage furniture",
    },
  },
  {
    id: "superior",
    name: "Superior Room",
    photoId: "superior",
    area: 20,
    description: {
      it: "L’arco in mattoni, il camino e la luce che entra dalla finestra. Un incontro tra materiali della tradizione e arredi recuperati, con affaccio verso Villa della Barbolana.",
      en: "A brick arch, a fireplace and light through the window. Traditional materials meet restored furniture, with a view towards Villa della Barbolana.",
    },
    bed: { it: "Due letti singoli", en: "Twin beds" },
    view: { it: "Villa della Barbolana", en: "Villa della Barbolana" },
    detail: { it: "Camino a legna", en: "Wood-burning fireplace" },
  },
];

export const stayCopy = {
  it: {
    interiorsLabel: "IL RESTAURO, NEI DETTAGLI",
    interiorsTitle: "La bellezza è\nanche dentro.",
    interiorsText:
      "La casa dei nostri nonni ha una nuova vita. Abbiamo conservato ciò che la rende speciale e affiancato alla pietra e al legno materiali e linee contemporanee. Perché sentirsi in Toscana significa anche abitare i suoi spazi.",
    kitchenCaption: "La cucina · Il luogo dove ritrovarsi",
    suiteCaption: "La Suite · Una pausa tutta vostra",
    details: [
      [
        "Pietra e legno",
        "Pareti a vista e travi originali raccontano da dove veniamo.",
      ],
      [
        "Arredi recuperati",
        "I mobili di famiglia trovano posto accanto a dettagli contemporanei.",
      ],
      [
        "La casa, solo per voi",
        "Cucina e soggiorni riservati al vostro gruppo, come tutti gli altri spazi.",
      ],
    ],
    roomsLabel: "QUATTRO CAMERE, QUATTRO CARATTERI",
    roomsTitle: "A ciascuno\nil proprio angolo.",
    roomsIntro:
      "Quattro ambienti diversi per vivere insieme la stessa vacanza. Tutte le camere fanno parte del casolare, riservato in esclusiva al vostro gruppo.",
    area: "Superficie",
    bed: "Letto",
    view: "Vista",
    detail: "Il dettaglio",
    roomPhotos: "Guarda la foto",
    galleryLabel: "UNO SGUARDO A PALAZZOLO",
    galleryTitle: "Entrate,\nsiete a casa.",
    galleryIntro:
      "Gli ambienti, i dettagli e la campagna intorno. Aprite le fotografie per esplorare il casolare da vicino.",
    categories: {
      all: "Tutte le foto",
      interiors: "Interni",
      outdoors: "Esterni",
      pool: "Piscina",
    },
    filtersLabel: "Filtra le fotografie",
    openPhoto: "Ingrandisci",
    close: "Chiudi",
    previous: "Foto precedente",
    next: "Foto successiva",
    more: "Mostra altre foto",
    photoCount: "fotografie",
    photoSingular: "fotografia",
    of: "di",
    fullScreenLabel: "Galleria fotografica",
    loading: "Caricamento della fotografia…",
    loadError: "Impossibile caricare questa foto. Prova quella successiva.",
  },
  en: {
    interiorsLabel: "A RESTORATION IN THE DETAILS",
    interiorsTitle: "Beauty lives\ninside, too.",
    interiorsText:
      "Our grandparents’ home has a new life. We preserved what makes it special, pairing stone and timber with contemporary materials and clean lines. Experiencing Tuscany also means feeling at home in its spaces.",
    kitchenCaption: "The kitchen · A place to come together",
    suiteCaption: "The Suite · A moment of your own",
    details: [
      [
        "Stone and timber",
        "Exposed walls and original beams tell the story of our roots.",
      ],
      [
        "Furniture with a story",
        "Family furniture sits alongside contemporary details.",
      ],
      [
        "The house, all yours",
        "An equipped kitchen and living spaces reserved exclusively for your group.",
      ],
    ],
    roomsLabel: "FOUR BEDROOMS, FOUR CHARACTERS",
    roomsTitle: "A corner\nfor everyone.",
    roomsIntro:
      "Four individual spaces for one shared holiday. All bedrooms are part of the farmhouse, reserved exclusively for your group.",
    area: "Floor area",
    bed: "Bed",
    view: "View",
    detail: "The detail",
    roomPhotos: "View photo",
    galleryLabel: "A CLOSER LOOK AT PALAZZOLO",
    galleryTitle: "Come in,\nmake yourself at home.",
    galleryIntro:
      "The rooms, the details and the countryside beyond. Open the photographs and take a closer look around the farmhouse.",
    categories: {
      all: "All photos",
      interiors: "Interiors",
      outdoors: "Outdoors",
      pool: "Pool",
    },
    filtersLabel: "Filter photographs",
    openPhoto: "Enlarge",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
    more: "Show more photos",
    photoCount: "photographs",
    photoSingular: "photograph",
    of: "of",
    fullScreenLabel: "Photo gallery",
    loading: "Loading photograph…",
    loadError: "This photo could not be loaded. Please try the next one.",
  },
} as const;
