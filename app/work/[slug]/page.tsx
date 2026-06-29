import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Overline from "@/components/Overline";
import { works, getAdjacentWorks, type CaseStudyImage } from "@/components/works";

type Params = { params: Promise<{ slug: string }> };

// Prerender a static page for every piece at build time.
export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return { title: "Work — Objectify 3D" };

  const title = `${work.title} — Objectify 3D`;
  return {
    title,
    description: work.excerpt,
    openGraph: {
      title,
      description: work.excerpt,
      images: [{ url: work.src }],
    },
  };
}

/** Definition pair in the spec rail. */
function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-line-soft)" }}>
      <dt
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "var(--text-overline)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--color-violet-200)",
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: "0.4rem 0 0", color: "var(--color-bone)", fontSize: "0.9375rem", lineHeight: 1.5 }}>
        {value}
      </dd>
    </div>
  );
}

/** Aspect-stable framed image (no CLS). */
function Framed({ image, sizes, priority = false }: { image: CaseStudyImage; sizes: string; priority?: boolean }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: image.ratio,
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--color-line)",
        boxShadow: "var(--shadow-plate)",
        background: "var(--color-ink-700)",
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: image.objectPosition }}
      />
    </div>
  );
}

/** Editorial narrative block — optional image alternates side on large screens. */
function Narrative({
  heading,
  body,
  image,
  flip = false,
}: {
  heading: string;
  body: string;
  image?: CaseStudyImage;
  flip?: boolean;
}) {
  const text = (
    <div className={image ? (flip ? "lg:col-span-6 lg:order-2" : "lg:col-span-6") : "lg:col-span-8 lg:col-start-3"}>
      <h2
        className="serif"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--color-bone)",
        }}
      >
        {heading}
      </h2>
      <p style={{ marginTop: "1.25rem", color: "var(--color-mist)", fontSize: "var(--text-lead)", lineHeight: 1.8 }}>
        {body}
      </p>
    </div>
  );

  if (!image) {
    return (
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12">{text}</div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-x-12 gap-y-8">
        <div className={flip ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
          <Framed image={image} sizes="(min-width: 1024px) 540px, 100vw" />
        </div>
        {text}
      </div>
    </Reveal>
  );
}

export default async function WorkPage({ params }: Params) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  const { prev, next } = getAdjacentWorks(slug);
  const heroImage: CaseStudyImage = {
    src: work.src,
    alt: work.alt,
    ratio: "3 / 2",
    objectPosition: work.gallery[0]?.objectPosition ?? "center 30%",
  };

  return (
    <main className="overflow-hidden" style={{ background: "var(--color-ink-800)" }}>
      <article className="mx-auto px-5 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28" style={{ maxWidth: "1180px" }}>
        {/* Back link */}
        <Reveal>
          <Link
            href="/#work"
            className="no-underline inline-flex items-center gap-2 hover:text-[var(--color-violet-200)] transition-colors"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--text-caption)",
              letterSpacing: "0.04em",
              color: "var(--color-mist)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Work
          </Link>
        </Reveal>

        {/* Header */}
        <header style={{ marginTop: "2rem" }}>
          <Reveal>
            <Overline>{work.category}</Overline>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="serif"
              style={{
                marginTop: "1.25rem",
                fontSize: "var(--text-display)",
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                color: "var(--color-bone)",
              }}
            >
              {work.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p
              style={{
                marginTop: "1.5rem",
                maxWidth: "62ch",
                color: "var(--color-mist)",
                fontSize: "var(--text-lead)",
                lineHeight: 1.8,
              }}
            >
              {work.description}
            </p>
          </Reveal>
        </header>

        {/* Cinematic hero image */}
        <Reveal delay={0.1}>
          <div style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
            <Framed image={heroImage} sizes="(min-width: 1180px) 1116px, 100vw" priority />
          </div>
        </Reveal>

        {/* Spec rail */}
        <Reveal>
          <dl
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6"
            style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            <Spec label="Commission" value={work.clientType} />
            <Spec label="Material" value={work.material} />
            <Spec label="Production" value={work.productionTime} />
            <Spec label="Finish" value={work.finish} />
            <Spec label="Size" value={work.size} />
          </dl>
        </Reveal>

        {/* Narrative — alternating image / text compositions */}
        <div className="flex flex-col" style={{ gap: "clamp(3.5rem, 8vw, 6.5rem)", marginTop: "clamp(4rem, 9vw, 7rem)" }}>
          <Narrative heading="The Challenge" body={work.challenge} image={work.gallery[0]} />
          <Narrative heading="Design Process" body={work.designProcess} />
          <Narrative heading="Production Process" body={work.productionProcess} image={work.gallery[1]} flip />
          <Narrative heading="Final Result" body={work.finalResult} />
        </div>

        {/* Closing CTA */}
        <Reveal>
          <div
            className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
            style={{
              marginTop: "clamp(4rem, 9vw, 7rem)",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-line)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              className="serif"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "var(--color-bone)",
                maxWidth: "22ch",
              }}
            >
              Want something like this?{" "}
              <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>Let&apos;s make it.</span>
            </p>
            <Link
              href="/#contact"
              className="hero-btn-primary no-underline inline-flex items-center gap-2 shrink-0"
              style={{
                padding: "0.95rem 2.1rem",
                background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9375rem",
                letterSpacing: "0.02em",
                borderRadius: "9999px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>

        {/* Prev / next */}
        <nav
          aria-label="More work"
          className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ marginTop: "clamp(3rem, 6vw, 4.5rem)", borderTop: "1px solid var(--color-line-soft)" }}
        >
          <Link
            href={`/work/${prev.slug}`}
            className="no-underline group flex flex-col gap-1 hover:bg-[rgba(124,58,237,0.04)] transition-colors"
            style={{ padding: "1.75rem 0.25rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--text-overline)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-faint)",
              }}
            >
              ← Previous
            </span>
            <span className="serif group-hover:text-[var(--color-violet-200)] transition-colors" style={{ fontSize: "1.25rem", color: "var(--color-bone)" }}>
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="no-underline group flex flex-col gap-1 sm:items-end sm:text-right hover:bg-[rgba(124,58,237,0.04)] transition-colors"
            style={{ padding: "1.75rem 0.25rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--text-overline)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-faint)",
              }}
            >
              Next →
            </span>
            <span className="serif group-hover:text-[var(--color-violet-200)] transition-colors" style={{ fontSize: "1.25rem", color: "var(--color-bone)" }}>
              {next.title}
            </span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
