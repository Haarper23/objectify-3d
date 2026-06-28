/**
 * Single source of truth for the studio's pieces — image metadata (with real
 * intrinsic dimensions so native aspect ratios are respected) plus editorial
 * framing microcopy (brief + fabrication specs). Core descriptions preserved
 * from the original copy; spec lines added as supporting microcopy.
 */
export type Work = {
  slug: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
};

export const works: Work[] = [
  {
    slug: "beholder",
    src: "/images/monster-figure.jpeg",
    width: 576,
    height: 955,
    alt: "3D printed Beholder fantasy figure on a stone plinth",
    title: "Beholder",
    category: "Fantasy Figure",
    description:
      "Multi-gradient filament, complex eyestalks and texture — one of the most technically demanding prints in the collection.",
    specs: ["Multi-gradient PLA", "Hand-finished", "Display scale", "One-off commission"],
  },
  {
    slug: "mario-luma",
    src: "/images/mario-figure.jpeg",
    width: 576,
    height: 905,
    alt: "Mario and Luma 3D printed figure",
    title: "Mario & Luma",
    category: "Fan Art Print",
    description:
      "Hand-painted and post-processed with a golden cosmic base and swirling star trail.",
    specs: ["PLA", "Hand-painted", "Custom base", "Game-inspired"],
  },
  {
    slug: "gengar",
    src: "/images/gengar-figure.jpeg",
    width: 896,
    height: 1103,
    alt: "Gengar Pokémon 3D printed figure",
    title: "Gengar",
    category: "Pokémon Collectible",
    description:
      "Smooth purple finish, multi-material white teeth, vivid red eyes — a collector favourite.",
    specs: ["Multi-material", "Smooth finish", "Collector grade"],
  },
  {
    slug: "silent-one",
    src: "/images/hooded-figure.jpeg",
    width: 576,
    height: 942,
    alt: "Mysterious hooded original character figure",
    title: "The Silent One",
    category: "Original Design",
    description:
      "Original character with matte hoodie, metallic visor, and skull graphic — dark, moody, precise.",
    specs: ["Original design", "Matte + metallic", "Mixed finish"],
  },
  {
    slug: "portrait-miniature",
    src: "/images/couple-figure.jpeg",
    width: 576,
    height: 952,
    alt: "Custom couple portrait miniature",
    title: "Portrait Miniature",
    category: "Personalized Gift",
    description:
      "A fully custom couple figurine — poses, clothing, and likeness all made to order.",
    specs: ["Made to order", "Hand-painted likeness", "Personalized", "Keepsake"],
  },
  {
    slug: "hagrid",
    src: "/images/hagrid-figure.jpeg",
    width: 768,
    height: 952,
    alt: "Rubeus Hagrid chibi 3D printed figure",
    title: "Rubeus Hagrid",
    category: "Chibi Character",
    description:
      "Chibi-style interpretation of Hogwarts' most beloved groundskeeper, with hand-painted detail.",
    specs: ["Chibi style", "Hand-painted", "Character print"],
  },
  {
    slug: "raphael",
    src: "/images/turtle-figure.jpeg",
    width: 576,
    height: 952,
    alt: "TMNT Raphael egg-form mini figure",
    title: "Raphael",
    category: "TMNT Mini",
    description:
      "Compact egg-form Raphael — the red-masked turtle in adorable chibi format.",
    specs: ["Compact mini", "Hand-painted", "Egg-form"],
  },
];

export const bySlug = (slug: string) => works.find((w) => w.slug === slug)!;
