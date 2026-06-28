"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SpecRow from "./SpecRow";
import { bySlug, type Work } from "./works";

/**
 * A featured commission with just enough presentation metadata to art-direct it.
 * `ratio` / `objectPosition` keep each framed image stable (no CLS) and figure-
 * safe — the source photos are portrait product shots, so ratios are chosen to
 * protect the figure rather than force a landscape crop.
 */
type FeaturedStudy = {
  work: Work;
  brief: string;
  layout: "lead" | "portrait" | "wide";
  ratio: string;
  objectPosition: string;
};

const studies: FeaturedStudy[] = [
  {
    work: bySlug("mario-luma"),
    brief:
      "A custom recreation of the star-riding duo — golden rockwork base and a swirling cosmic trail rising behind the figure.",
    layout: "lead",
    ratio: "5 / 7",
    objectPosition: "center 38%",
  },
  {
    work: bySlug("portrait-miniature"),
    brief:
      "A couple miniature built from a single reference photo — poses, clothing, and proportions matched by hand.",
    layout: "portrait",
    ratio: "2 / 3",
    objectPosition: "center 30%",
  },
  {
    work: bySlug("gengar"),
    brief:
      "A custom display piece — deep purple body, painted eyes, and contrasting multi-material teeth.",
    layout: "wide",
    ratio: "3 / 2",
    objectPosition: "center 30%",
  },
];

/** Framed, aspect-stable product image with a restrained hover (scale + faint scrim). */
function ProjectMedia({
  work,
  ratio,
  objectPosition,
  sizes,
}: {
  work: Work;
  ratio: string;
  objectPosition: string;
  sizes: string;
}) {
  return (
    <figure
      className="group relative m-0 overflow-hidden"
      style={{
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--color-line)",
        boxShadow: "var(--shadow-plate)",
      }}
    >
      <div className="relative w-full" style={{ aspectRatio: ratio, background: "var(--color-ink-700)" }}>
        <Image
          src={work.src}
          alt={work.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          style={{ objectPosition }}
        />
        {/* Very subtle contrast shift on hover — decorative only, no content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[650ms] group-hover:opacity-100 motion-reduce:transition-none"
          style={{ background: "linear-gradient(to top, rgba(5,5,9,0.28) 0%, transparent 55%)" }}
        />
      </div>
    </figure>
  );
}

/**
 * Project header: title + concise description, with optional minimal specs.
 * No eyebrow, rule, category label, or number — hierarchy comes from type/space.
 */
function StudyText({ study, className }: { study: FeaturedStudy; className?: string }) {
  const { work, brief, layout } = study;
  return (
    <div className={className}>
      <h3
        className="serif"
        style={{
          fontSize: layout === "lead" ? "clamp(2rem, 4vw, 3rem)" : "clamp(1.625rem, 3vw, 2.25rem)",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: 1.08,
          color: "var(--color-bone)",
        }}
      >
        {work.title}
      </h3>

      <p
        style={{
          marginTop: "1.1rem",
          maxWidth: "46ch",
          color: "var(--color-mist)",
          fontSize: "var(--text-lead)",
          lineHeight: 1.75,
        }}
      >
        {brief}
      </p>

      {work.specs?.length ? (
        <div style={{ marginTop: "1.5rem" }}>
          <SpecRow items={work.specs} />
        </div>
      ) : null}
    </div>
  );
}

function StudyBlock({ study }: { study: FeaturedStudy }) {
  const { work, layout, ratio, objectPosition } = study;

  // LEAD — image-dominant asymmetric feature (image 7 cols, text rail 5 cols).
  if (layout === "lead") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center gap-x-12 gap-y-8">
        <Reveal className="lg:col-span-7">
          <ProjectMedia
            work={work}
            ratio={ratio}
            objectPosition={objectPosition}
            sizes="(min-width: 1200px) 740px, (min-width: 1024px) 58vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
          <StudyText study={study} />
        </Reveal>
      </div>
    );
  }

  // PORTRAIT — quieter, text-led; narrow portrait image on the right.
  if (layout === "portrait") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center gap-x-12 gap-y-8">
        <Reveal className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <ProjectMedia
            work={work}
            ratio={ratio}
            objectPosition={objectPosition}
            sizes="(min-width: 1200px) 470px, (min-width: 1024px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="order-2 lg:order-1 lg:col-span-6">
          <StudyText study={study} />
        </Reveal>
      </div>
    );
  }

  // WIDE — full-width closing band with a concise text block beneath.
  return (
    <div>
      <Reveal>
        <ProjectMedia
          work={work}
          ratio={ratio}
          objectPosition={objectPosition}
          sizes="(min-width: 1200px) 1180px, 100vw"
        />
      </Reveal>
      <Reveal delay={0.12}>
        <StudyText study={study} className="mt-8 lg:mt-10 lg:max-w-2xl" />
      </Reveal>
    </div>
  );
}

export default function FeaturedWorks() {
  return (
    <section
      id="work"
      className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
      style={{ background: "var(--color-ink-800)" }}
    >
      <div className="relative mx-auto" style={{ maxWidth: "1180px" }}>
        <SectionHeader
          overline="Selected Commissions"
          title="Selected"
          accent="Work"
          lead="Custom commissions — designed, printed, and finished by hand. A few recent pieces."
          className="mb-16 md:mb-24"
        />

        <div className="flex flex-col">
          {studies.map((study, i) => (
            <div key={study.work.slug} style={i === 0 ? undefined : { marginTop: "clamp(4.5rem, 9vw, 8rem)" }}>
              <StudyBlock study={study} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
