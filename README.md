# KİRAZ Üç Boyut

Üç boyutlu üretim, modelleme ve proje portfolyo sitesi. Next.js 16 (App Router)
+ TypeScript + Tailwind CSS v4 ile geliştirildi.

Geliştirme sunucusunu çalıştırmak için:

```bash
npm run dev
```

Ardından tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

---

## İçeriği düzenleme (Content editing)

Tüm düzenlenebilir metinler tek bir yerde toplanmıştır. Bileşenleri (component)
düzenlemeniz gerekmez.

### 1. Hakkımda metni — `src/data/site-content.ts` → `aboutContent`

Açılış (landing) ekranındaki "Hakkımda" bölümünün tüm alanları burada bulunur ve
**varsayılan olarak boştur**. Doldurmak istediğiniz alanı yazmanız yeterli; boş
bıraktığınız alanlar otomatik olarak gizlenir.

```ts
export const aboutContent: AboutContent = {
  eyebrow: "",              // üst başlık (boşsa marka adı gösterilir)
  name: "",                 // ad soyad
  role: "",                 // ünvan / rol
  introduction: "",         // kısa tanıtım
  description: "",          // detaylı biyografi
  secondaryDescription: "", // ek paragraf
  experience: "",           // deneyim
  approach: "",             // çalışma yaklaşımı
  location: "",             // konum
  primaryCtaLabel: "",      // ana buton metni (boşsa buton gizlenir → #contact)
  secondaryCtaLabel: "",    // ikincil buton metni (boşsa gizlenir → #work)
};
```

> "Hakkımda" başlığı sabittir ve her zaman görünür. Diğer tüm alanlar yukarıdan
> düzenlenir.

### 2. Diğer metinler — `src/data/site-content.ts`

Marka adı, navigasyon, hizmetler, süreç adımları, iletişim metinleri, footer ve
SEO/metadata metinleri de bu dosyadadır.

---

## Yeni proje ekleme (Adding a project)

Çalışmalar (gallery) bölümü tamamen modülerdir. Yeni bir proje eklemek için
yalnızca iki adım gerekir — **hiçbir bileşen kodu düzenlenmez.**

1. **Görseli ekleyin:** Proje görselini `public/images/` klasörüne koyun
   (örn. `public/images/figur.jpg`).
2. **Veriyi ekleyin:** `src/data/projects.ts` içindeki `projects` dizisine bir
   nesne ekleyin:

```ts
export const projects: ProjectItem[] = [
  {
    id: "figur-01",
    slug: "figur-01",
    title: "Örnek Figür",
    description: "Kısa açıklama (modalda gösterilir).",
    category: "Figür",
    image: "/images/figur.jpg",
    alt: "Örnek figürün görseli",
    tags: ["PLA", "Elde boyama"],
    featured: true,
    order: 1,
  },
];
```

`projects` dizisi boş olduğunda site otomatik olarak şu nazik boş durumu
gösterir: **"Yeni çalışmalar yakında"**. İlk projeyi eklediğinizde bu mesaj
kendiliğinden kaybolur.

### Sıralama (Display order)

- Sıralama `order` alanına göre yapılır (küçük sayı önce gelir).
- `order` verilmeyen projeler dizideki sıralarına göre dizilir.

### Öne çıkarma (Featured)

- Bir projeyi `featured: true` ile işaretlerseniz, kendi sıralama grubunda öne
  alınır (en başta gösterilir).

---

## Komutlar

```bash
npm run dev     # geliştirme sunucusu
npm run build   # üretim derlemesi
npm run lint    # ESLint
```
