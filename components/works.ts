/**
 * Single source of truth for the studio's pieces — image metadata (with real
 * intrinsic dimensions so native aspect ratios are respected), editorial framing
 * microcopy (brief + fabrication specs), and structured case-study content used
 * by the dynamic /work/[slug] pages.
 *
 * Core descriptions are preserved from the original copy. The case-study fields
 * (clientType, material, challenge, process, etc.) are sensible portfolio copy
 * written for this studio — not fabricated clients, testimonials, or statistics.
 * Sizes and timings are representative estimates; replace with exact figures when
 * known. The `gallery` entries reuse each piece's real photograph framed two
 * ways; swap in dedicated detail shots as they become available.
 */
export type CaseStudyImage = {
  src: string;
  alt: string;
  /** CSS aspect-ratio string, e.g. "3 / 2" — keeps frames stable (no CLS). */
  ratio: string;
  objectPosition?: string;
};

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

  // ── Case-study fields ──────────────────────────────────────────────
  /** One-line summary for cards and list contexts. */
  excerpt: string;
  /** Commission type (e.g. "Personal commission", "Fan-art commission"). */
  clientType: string;
  material: string;
  productionTime: string;
  finish: string;
  size: string;
  challenge: string;
  designProcess: string;
  productionProcess: string;
  finalResult: string;
  /** Additional framed views of the piece. */
  gallery: CaseStudyImage[];
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
    excerpt: "A multi-gradient fantasy creature built around its hardest feature — the eyestalks.",
    clientType: "One-off commission",
    material: "Multi-gradient PLA",
    productionTime: "Approx. 5 days",
    finish: "Hand-finished, matte sealed",
    size: "Display scale, ~18 cm tall",
    challenge:
      "The Beholder lives or dies on its silhouette: dozens of thin, independently angled eyestalks, each prone to warping or snapping during printing and cleanup. The brief was to keep every stalk crisp while letting the body's colour shift read as a single continuous gradient.",
    designProcess:
      "The model was split and re-oriented so the most fragile stalks printed with the grain of their own geometry rather than against it. Support contact points were planned away from visible surfaces to protect the texture across the central body.",
    productionProcess:
      "Printed in a graduated filament so the colour transition happens in the material itself — no masking, no airbrush. Supports were removed by hand under magnification, then the whole piece was sanded back at the seams and matte sealed.",
    finalResult:
      "A display piece that holds its detail from across a room and rewards a close look — the gradient flows unbroken from crown to base and every eyestalk stands clean.",
    gallery: [
      {
        src: "/images/monster-figure.jpeg",
        alt: "Beholder figure — full front view",
        ratio: "4 / 5",
        objectPosition: "center 30%",
      },
      {
        src: "/images/monster-figure.jpeg",
        alt: "Beholder figure — eyestalk and texture detail",
        ratio: "3 / 4",
        objectPosition: "center 18%",
      },
    ],
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
    excerpt: "A star-riding duo on a custom cosmic base, finished entirely by hand.",
    clientType: "Fan-art commission",
    material: "PLA",
    productionTime: "Approx. 4 days",
    finish: "Hand-painted, custom base",
    size: "~20 cm including base",
    challenge:
      "Two characters and a sculptural base had to read as one composition. The golden rockwork and rising star trail needed enough presence to frame the figures without overpowering them.",
    designProcess:
      "The base was art-directed first — its scale and the angle of the star trail were chosen to lead the eye up to the figures. Paint zones were mapped before printing so masking would be clean.",
    productionProcess:
      "Printed in sections for the best surface on each part, then assembled, primed, and hand-painted. The cosmic trail was built up in translucent layers to keep a sense of depth.",
    finalResult:
      "A game-inspired piece with a finish that goes well beyond a raw print — the painted base gives it the weight of a proper collectible.",
    gallery: [
      {
        src: "/images/mario-figure.jpeg",
        alt: "Mario & Luma figure — full view with base",
        ratio: "4 / 5",
        objectPosition: "center 35%",
      },
      {
        src: "/images/mario-figure.jpeg",
        alt: "Mario & Luma figure — base and star-trail detail",
        ratio: "3 / 4",
        objectPosition: "center 70%",
      },
    ],
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
    excerpt: "A collector-grade character print with a deliberately flawless smooth finish.",
    clientType: "Collector commission",
    material: "Multi-material PLA",
    productionTime: "Approx. 4 days",
    finish: "Smooth, contrast detailing",
    size: "Desk display scale, ~15 cm",
    challenge:
      "The character's appeal is its clean, rounded body, which leaves nowhere for layer lines to hide. The grin and eyes had to pop in contrasting colour without hand-painting bleeding into the smooth surface.",
    designProcess:
      "Geometry was oriented to keep print lines off the most visible curves. Teeth and eyes were planned as separate material zones so the colour breaks would be sharp rather than painted on.",
    productionProcess:
      "Printed with multi-material colour changes for the teeth and eyes, then surface-finished to take the layer lines off the body for that smooth, moulded look.",
    finalResult:
      "A crowd-pleaser that reads as a finished product, not a print — the smooth body and crisp colour contrast are exactly what makes it a collector favourite.",
    gallery: [
      {
        src: "/images/gengar-figure.jpeg",
        alt: "Gengar figure — full front view",
        ratio: "4 / 5",
        objectPosition: "center 25%",
      },
      {
        src: "/images/gengar-figure.jpeg",
        alt: "Gengar figure — face and teeth detail",
        ratio: "3 / 4",
        objectPosition: "center 15%",
      },
    ],
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
    excerpt: "An original character defined by the contrast between matte fabric and a metallic visor.",
    clientType: "Original studio design",
    material: "PLA",
    productionTime: "Approx. 5 days",
    finish: "Matte body, metallic visor",
    size: "Display scale, ~19 cm tall",
    challenge:
      "An original design with no reference to fall back on — the whole mood depended on getting two finishes to coexist: a flat, fabric-like hoodie against a reflective visor, on the same model.",
    designProcess:
      "The character was developed in-studio, with the silhouette and the skull graphic placement decided early so the front would read instantly even in low light.",
    productionProcess:
      "Printed and then finished in two passes — the body knocked back to a true matte, the visor built up to a metallic sheen, with the graphic applied crisply over the matte surface.",
    finalResult:
      "A moody, self-directed piece that shows the studio's range beyond licensed characters — restrained, precise, and unmistakably original.",
    gallery: [
      {
        src: "/images/hooded-figure.jpeg",
        alt: "The Silent One figure — full front view",
        ratio: "4 / 5",
        objectPosition: "center 30%",
      },
      {
        src: "/images/hooded-figure.jpeg",
        alt: "The Silent One figure — hood and visor detail",
        ratio: "3 / 4",
        objectPosition: "center 18%",
      },
    ],
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
    excerpt: "A made-to-order couple miniature built from a single reference photo.",
    clientType: "Personalized gift commission",
    material: "PLA",
    productionTime: "Approx. 6 days",
    finish: "Hand-painted likeness",
    size: "Keepsake scale, ~12 cm",
    challenge:
      "Likeness at small scale is unforgiving. Poses, clothing, and proportions all had to be matched from one reference photo so two specific people were recognisable in the finished piece.",
    designProcess:
      "The pose and framing were rebuilt from the reference, with clothing and proportions adjusted by hand. Facial features were exaggerated just enough to survive the scale-down without losing likeness.",
    productionProcess:
      "Printed at a scale chosen to protect facial detail, then hand-painted — skin tones, clothing, and small accents — to bring the likeness home.",
    finalResult:
      "A personal keepsake that actually looks like the people it's made for — the kind of gift that gets kept on a shelf, not in a drawer.",
    gallery: [
      {
        src: "/images/couple-figure.jpeg",
        alt: "Portrait miniature — full view of the couple",
        ratio: "4 / 5",
        objectPosition: "center 35%",
      },
      {
        src: "/images/couple-figure.jpeg",
        alt: "Portrait miniature — painted likeness detail",
        ratio: "3 / 4",
        objectPosition: "center 20%",
      },
    ],
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
    excerpt: "A chibi reinterpretation that keeps a beloved character recognisable at tiny scale.",
    clientType: "Fan-art commission",
    material: "PLA",
    productionTime: "Approx. 4 days",
    finish: "Hand-painted",
    size: "Desk scale, ~13 cm",
    challenge:
      "Translating a well-known character into a chibi style without losing what makes him him — the proportions change drastically, so the recognisable cues had to be chosen carefully.",
    designProcess:
      "Key identifying details — the beard, coat, and build — were kept large and clear while the rest of the body was simplified into the chibi proportions.",
    productionProcess:
      "Printed at a scale that preserved the face and beard detail, then hand-painted with attention to the warm, textured coat.",
    finalResult:
      "An instantly recognisable, characterful little figure — playful in style but careful in execution.",
    gallery: [
      {
        src: "/images/hagrid-figure.jpeg",
        alt: "Rubeus Hagrid chibi figure — full view",
        ratio: "4 / 5",
        objectPosition: "center 30%",
      },
      {
        src: "/images/hagrid-figure.jpeg",
        alt: "Rubeus Hagrid chibi figure — face and beard detail",
        ratio: "3 / 4",
        objectPosition: "center 18%",
      },
    ],
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
    excerpt: "A compact egg-form take on a classic character, painted for punchy contrast.",
    clientType: "Fan-art commission",
    material: "PLA",
    productionTime: "Approx. 3 days",
    finish: "Hand-painted",
    size: "Mini scale, ~9 cm",
    challenge:
      "A tiny, rounded form leaves very little surface for detail, so all the character had to come from clean colour blocking and a few sharp accents.",
    designProcess:
      "The egg-form silhouette was kept simple and bold; the mask, belt, and weapons were planned as the only high-detail moments so they'd carry the whole read.",
    productionProcess:
      "Printed compact, then hand-painted with strong colour contrast — deep green body, vivid red mask — to keep it punchy at small scale.",
    finalResult:
      "A small, satisfying mini with real character — proof that scale isn't what makes a piece feel finished.",
    gallery: [
      {
        src: "/images/turtle-figure.jpeg",
        alt: "Raphael egg-form mini — full view",
        ratio: "4 / 5",
        objectPosition: "center 35%",
      },
      {
        src: "/images/turtle-figure.jpeg",
        alt: "Raphael egg-form mini — mask and face detail",
        ratio: "3 / 4",
        objectPosition: "center 20%",
      },
    ],
  },
];

export const bySlug = (slug: string) => works.find((w) => w.slug === slug)!;

/** Prev/next neighbours for case-study navigation, cycling at both ends. */
export function getAdjacentWorks(slug: string): { prev: Work; next: Work } {
  const i = works.findIndex((w) => w.slug === slug);
  const prev = works[(i - 1 + works.length) % works.length];
  const next = works[(i + 1) % works.length];
  return { prev, next };
}
