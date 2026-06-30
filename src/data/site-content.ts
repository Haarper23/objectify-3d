/**
 * Centralized, strongly typed site content for KİRAZ Üç Boyut.
 *
 * The site owner edits text here — not inside components. Shorten, replace, or
 * empty any string and the UI adapts. Optional fields that are left empty are
 * simply not rendered (no empty cards, labels, or broken spacing).
 *
 * Personal "About Me" copy lives in `aboutContent` below and ships empty on
 * purpose — fill it in when ready.
 */

// ── Brand ─────────────────────────────────────────────────────────────────
export const brand = {
  /** Full visible brand name — exact capitalization matters. */
  name: "KİRAZ Üç Boyut",
  /** Wordmark split for two-tone styling. */
  nameLead: "KİRAZ",
  nameAccent: "Üç Boyut",
  shortDescription: "Üç boyutlu üretim, modelleme ve proje stüdyosu",
} as const;

// ── Navigation ──────────────────────────────────────────────────────────────
export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Hakkımda", href: "/#about" },
  { label: "Çalışmalar", href: "/#work" },
  { label: "Hizmetler", href: "/#services" },
  { label: "Süreç", href: "/#process" },
  { label: "İletişim", href: "/#contact" },
];

// ── Contact + social ────────────────────────────────────────────────────────
export const contactInfo = {
  email: "kirazeren3@gmail.com",
  /** Brand Instagram — visible label per brief, URL unchanged. */
  instagramBrand: {
    label: "KİRAZ Üç Boyut Instagram",
    href: "https://www.instagram.com/objectify3d/",
  },
  /** Personal Instagram. */
  instagramPersonal: {
    label: "Eren Kiraz Instagram",
    href: "https://www.instagram.com/erenkiraz8/",
  },
} as const;

// ── About Me (landing) ──────────────────────────────────────────────────────
/**
 * Modular, editable About Me fields. Every field except the section heading
 * ("Hakkımda", fixed in the component) ships empty — fill in real content here.
 * Empty fields are not rendered, and the landing still looks intentional.
 */
export type AboutContent = {
  eyebrow: string;
  name: string;
  role: string;
  introduction: string;
  description: string;
  secondaryDescription: string;
  experience: string;
  approach: string;
  location: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export const aboutContent: AboutContent = {
  eyebrow: "",
  name: "",
  role: "",
  introduction: "",
  description: "",
  secondaryDescription: "",
  experience: "",
  approach: "",
  location: "",
  primaryCtaLabel: "",
  secondaryCtaLabel: "",
};

// ── Works ───────────────────────────────────────────────────────────────────
export const worksContent = {
  overline: "Çalışmalar",
  title: "Seçili",
  accent: "Projeler",
  lead: "Üç boyutlu modelleme ve üretim çalışmaları — eklendikçe burada yer alacak.",
  emptyTitle: "Yeni çalışmalar yakında",
  emptyDescription: "Yeni modeller ve projeler bu alana sırayla eklenecek.",
} as const;

// ── Services ────────────────────────────────────────────────────────────────
export type Service = { title: string; description: string };

export const servicesContent = {
  overline: "Hizmetler",
  title: "Neler",
  accent: "Üretiyoruz",
  lead: "Her iş kendine özgü bir üretim olarak ele alınır — şablon yok, kestirme yok.",
  items: [
    {
      title: "Özel Üç Boyutlu Figürler",
      description:
        "Her karakter, konsept ya da özgün tasarım, isteğinize göre fiziksel bir üç boyutlu figüre dönüşür.",
    },
    {
      title: "Kişiye Özel Hediyeler",
      description:
        "Anlamlı bir kişiyi, anıyı ya da anı kalıcı bir nesneye dönüştürün — özgün ve unutulmaz.",
    },
    {
      title: "Karakter ve Hayran İşi Baskılar",
      description:
        "Sevilen karakterler, özgün tasarıma saygıyla yeniden yorumlanarak üretilir.",
    },
    {
      title: "Dekoratif Sergi Modelleri",
      description:
        "Raflar, masalar ve vitrinler için tasarlanmış, mekâna karakter katan heykelsi nesneler.",
    },
    {
      title: "Çift ve Portre Minyatürleri",
      description:
        "Duruşu, benzerliği ve detayları yakalayan kişiye özel çift veya portre minyatürleri.",
    },
    {
      title: "Fantastik ve Oyun Temalı Modeller",
      description:
        "Fantastik yaratıklar, oyun karakterleri ve dünyaları fiziksel forma kavuşturulur.",
    },
    {
      title: "Özel Proje Üretimi",
      description:
        "Etkinlik parçaları, mimari modeller, markalı nesneler ve prototipler titizlikle üretilir.",
    },
  ] satisfies Service[],
} as const;

// ── Process ─────────────────────────────────────────────────────────────────
export type ProcessStep = { number: string; title: string; description: string };

export const processContent = {
  overline: "Süreç",
  title: "Nasıl",
  accent: "İlerliyoruz",
  lead: "İlk mesajdan teslimata kadar — şeffaf, elle yürütülen ve sürprizsiz bir süreç.",
  steps: [
    {
      number: "01",
      title: "Fikrinizi İletin",
      description: "Referans görseller, eskizler ya da kısa bir açıklama yeterli.",
    },
    {
      number: "02",
      title: "Tasarım ve Onay",
      description: "Modeli hazırlar, üretimden önce önizlemeleri sizinle paylaşırız.",
    },
    {
      number: "03",
      title: "Baskı ve Bitirme",
      description: "Parça basılır, temizlenir ve elde özenle bitirilir.",
    },
    {
      number: "04",
      title: "Teslimat",
      description: "Dikkatle paketlenir ve adresinize gönderilir.",
    },
  ] satisfies ProcessStep[],
} as const;

// ── Contact section ─────────────────────────────────────────────────────────
export const contactContent = {
  overline: "İletişim",
  title: "Bir Fikriniz mi Var?",
  accent: "Birlikte Üretelim.",
  lead: "Aklınızdaki parçayı anlatın; kapsam, süre ve detaylarla birlikte size dönelim. Her üretim bir sohbetle başlar.",
  steps: [
    "Bir referans görsel ya da açıklama gönderin",
    "İstediğiniz boyut ve bitirişi belirtin",
    "Kapsamı, süreyi ve detayları birlikte netleştirelim",
  ],
  directHeading: "Ya da doğrudan ulaşın",
} as const;

// ── Footer ──────────────────────────────────────────────────────────────────
export const footerContent = {
  ctaTitle: "Aklınızda bir fikir mi var?",
  ctaAccent: "Birlikte gerçeğe dönüştürelim.",
  ctaButton: "İletişime Geç",
  tagline: "Üç boyutlu üretim ve modelleme",
  elsewhere: "Bağlantılar",
} as const;

// ── Metadata ────────────────────────────────────────────────────────────────
export const siteMeta = {
  title: brand.name,
  description:
    "KİRAZ Üç Boyut için hazırlanan üç boyutlu üretim, modelleme ve proje portfolyosu.",
} as const;
