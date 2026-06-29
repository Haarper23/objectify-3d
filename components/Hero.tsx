"use client";

import Reveal from "./Reveal";
import Overline from "./Overline";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden min-h-[88svh] md:min-h-[100svh]"
      style={{ background: "var(--color-ink-800)" }}
    >
      {/* A single, restrained glow — the photo's own lighting does the rest */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          right: "-5%",
          top: "8%",
          width: "55%",
          height: "80%",
          background:
            "radial-gradient(ellipse at center, rgba(109,40,217,0.14) 0%, transparent 65%)",
        }}
      />

      <div
        className="relative mx-auto grid w-full grid-cols-1 md:grid-cols-2 items-center px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20"
        style={{ maxWidth: "1280px", gap: "clamp(2.5rem, 6vw, 4rem)", zIndex: 1 }}
      >
        {/* LEFT: Editorial text */}
        <div className="order-2 md:order-1">
          <Reveal>
            <Overline>Custom 3D Printed Collectibles</Overline>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="serif"
              style={{
                marginTop: "1.5rem",
                fontSize: "var(--text-display)",
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                color: "var(--color-bone)",
              }}
            >
              We turn ideas into{" "}
              <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>
                objects worth keeping.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                marginTop: "1.75rem",
                maxWidth: "480px",
                color: "var(--color-mist)",
                fontSize: "var(--text-lead)",
                lineHeight: 1.75,
              }}
            >
              Custom 3D printed pieces, designed and produced with obsessive
              attention to detail.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="hero-btn-primary no-underline inline-flex items-center gap-2"
                style={{
                  padding: "0.9rem 2rem",
                  background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  letterSpacing: "0.03em",
                  borderRadius: "9999px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                View Selected Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="hero-btn-ghost no-underline inline-flex items-center"
                style={{
                  padding: "0.9rem 2rem",
                  border: "1px solid var(--color-line)",
                  color: "var(--color-bone)",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  letterSpacing: "0.03em",
                  borderRadius: "9999px",
                  transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
                }}
              >
                Start a Project
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p
              style={{
                marginTop: "2.25rem",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--text-caption)",
                letterSpacing: "0.04em",
                color: "var(--color-faint)",
              }}
            >
              Studio of Mehmet Eren Kiraz
              <span style={{ color: "var(--color-violet)", margin: "0 0.6em" }}>·</span>
              Ships worldwide
            </p>
          </Reveal>
        </div>

        {/* RIGHT: Single cinematic plate with wireframe accent */}
        <HeroVisual />
      </div>
    </section>
  );
}
