import Reveal from "./Reveal";
import Overline from "./Overline";
import { aboutContent, brand } from "@/src/data/site-content";

/**
 * About Me — the landing section and first screen of the site.
 *
 * Content is driven entirely by `aboutContent` in src/data/site-content.ts and
 * ships empty on purpose. Only fields that contain text are rendered, so the
 * layout never shows empty cards, labels, or broken spacing. With everything
 * empty the section still reads as intentional: the brand eyebrow, the fixed
 * "Hakkımda" heading, and a restrained grayscale wireframe carry it.
 *
 * Server Component — no client-side interactivity (the wireframe drift is pure
 * CSS and pauses under prefers-reduced-motion).
 */

const headingStyle = {
  fontSize: "var(--text-display)",
  fontWeight: 500,
  lineHeight: 1.02,
  letterSpacing: "-0.025em",
  color: "var(--color-text-primary)",
} as const;

const bodyStyle = {
  color: "var(--color-text-secondary)",
  fontSize: "var(--text-lead)",
  lineHeight: 1.8,
} as const;

/** A labelled meta entry (experience / approach / location) — rendered only when set. */
function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ paddingTop: "1.1rem", borderTop: "1px solid var(--color-line-soft)" }}>
      <dt
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "var(--text-overline)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: "0.45rem 0 0", color: "var(--color-text-primary)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
        {value}
      </dd>
    </div>
  );
}

export default function About() {
  const a = aboutContent;
  const eyebrow = a.eyebrow || brand.name;
  const metas = [
    { label: "Deneyim", value: a.experience },
    { label: "Yaklaşım", value: a.approach },
    { label: "Konum", value: a.location },
  ].filter((m) => m.value);

  return (
    <section
      id="about"
      className="relative flex items-center overflow-hidden min-h-[88svh] md:min-h-[100svh]"
      style={{ background: "var(--color-background)" }}
    >
      {/* A single, very soft grayscale glow for depth — no colour. */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          right: "-5%",
          top: "6%",
          width: "55%",
          height: "80%",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 65%)",
        }}
      />

      <div
        className="relative mx-auto grid w-full grid-cols-1 md:grid-cols-2 items-center px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20"
        style={{ maxWidth: "1280px", gap: "clamp(2.5rem, 6vw, 4rem)", zIndex: 1 }}
      >
        {/* LEFT: About Me copy */}
        <div className="order-2 md:order-1">
          <Reveal>
            <Overline>{eyebrow}</Overline>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="serif" style={{ marginTop: "1.5rem", ...headingStyle }}>
              Hakkımda
            </h1>
          </Reveal>

          {a.name && (
            <Reveal delay={0.16}>
              <p
                className="serif"
                style={{
                  marginTop: "1.25rem",
                  fontSize: "var(--text-h2)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text-primary)",
                }}
              >
                {a.name}
              </p>
            </Reveal>
          )}

          {a.role && (
            <Reveal delay={0.2}>
              <p
                style={{
                  marginTop: a.name ? "0.75rem" : "1.25rem",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--text-caption)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-secondary)",
                }}
              >
                {a.role}
              </p>
            </Reveal>
          )}

          {a.introduction && (
            <Reveal delay={0.24}>
              <p style={{ marginTop: "1.75rem", maxWidth: "52ch", ...bodyStyle }}>{a.introduction}</p>
            </Reveal>
          )}

          {a.description && (
            <Reveal delay={0.28}>
              <p style={{ marginTop: "1.25rem", maxWidth: "52ch", ...bodyStyle }}>{a.description}</p>
            </Reveal>
          )}

          {a.secondaryDescription && (
            <Reveal delay={0.32}>
              <p style={{ marginTop: "1.25rem", maxWidth: "52ch", ...bodyStyle }}>{a.secondaryDescription}</p>
            </Reveal>
          )}

          {metas.length > 0 && (
            <Reveal delay={0.36}>
              <dl
                className="grid grid-cols-1 sm:grid-cols-3"
                style={{ marginTop: "2.25rem", gap: "1.5rem" }}
              >
                {metas.map((m) => (
                  <Meta key={m.label} label={m.label} value={m.value} />
                ))}
              </dl>
            </Reveal>
          )}

          {(a.primaryCtaLabel || a.secondaryCtaLabel) && (
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {a.primaryCtaLabel && (
                  <a
                    href="#contact"
                    className="btn-primary no-underline inline-flex items-center gap-2"
                    style={{
                      padding: "0.9rem 2rem",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      letterSpacing: "0.03em",
                      borderRadius: "9999px",
                    }}
                  >
                    {a.primaryCtaLabel}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
                {a.secondaryCtaLabel && (
                  <a
                    href="#work"
                    className="btn-ghost no-underline inline-flex items-center"
                    style={{
                      padding: "0.9rem 2rem",
                      border: "1px solid var(--color-line)",
                      color: "var(--color-text-primary)",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      letterSpacing: "0.03em",
                      borderRadius: "9999px",
                      transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
                    }}
                  >
                    {a.secondaryCtaLabel}
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>

        {/* RIGHT: restrained grayscale wireframe — no photograph. */}
        <Reveal delay={0.15} className="order-1 md:order-2">
          <div
            className="relative mx-auto w-full"
            style={{
              maxWidth: "440px",
              aspectRatio: "4 / 5",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-line)",
              background:
                "linear-gradient(160deg, var(--color-surface) 0%, var(--color-ink-900) 100%)",
              boxShadow: "var(--shadow-plate)",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="hero-float" style={{ width: "55%" }}>
                <svg viewBox="0 0 100 100" className="hero-wire" style={{ width: "100%", height: "auto", opacity: 0.6 }}>
                  <g fill="none" stroke="var(--color-text-secondary)" strokeWidth="0.6" strokeLinejoin="round">
                    <path d="M50 6 L88 50 L50 94 L12 50 Z" />
                    <path d="M12 50 L50 32 L88 50" />
                    <path d="M50 32 L50 6 M50 32 L50 94" />
                    <path d="M12 50 L50 68 L88 50" opacity="0.5" />
                    <path d="M50 68 L50 94" opacity="0.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
