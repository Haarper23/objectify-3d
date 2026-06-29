"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const values = [
  {
    title: "Quality First, Always",
    desc: "No piece leaves the studio until it meets the standard. Every print is inspected, refined, and finished with care.",
  },
  {
    title: "Crafted with Intention",
    desc: "Each design choice — scale, material, finish — is made thoughtfully to serve the piece and the person it's made for.",
  },
  {
    title: "Fully Custom Production",
    desc: "Not a catalog. Not a template. Everything is designed and produced specifically for you — starting from your idea.",
  },
  {
    title: "Collectible-Grade Results",
    desc: "The final piece should feel like something worth keeping. Display-ready, detail-rich, genuinely impressive in person.",
  },
  {
    title: "Visually Distinctive",
    desc: "Every commission has its own character and story. The aim is always a result that stands out and surprises.",
  },
  {
    title: "Personal & Communicative",
    desc: "Open dialogue from idea to delivery. You'll know where your piece is and can ask questions at any stage.",
  },
];

// Capability-focused standards — replaces the old "Coming Soon" placeholder.
const standards = [
  { label: "Materials", value: "Durable filaments selected per piece for strength, detail, and finish." },
  { label: "Finishing", value: "Support removal, sanding, priming, and hand-painting for a clean, display-ready surface." },
  { label: "Quality Control", value: "Each print is inspected throughout — geometry, layers, and detail checked before finishing." },
  { label: "Packing & Delivery", value: "Carefully protected for transit and shipped worldwide." },
];

export default function Studio() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
      style={{ background: "var(--color-ink-800)" }}
    >
      <div className="relative mx-auto" style={{ maxWidth: "1180px" }}>
        <SectionHeader
          overline="The Studio"
          title="Built on"
          accent="Craft & Care"
          lead="What goes into every commission — and the standards that hold across all of them."
          className="mb-14 md:mb-20"
        />

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "0" }}>
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.06}>
              <div
                style={{
                  padding: "1.75rem 1.5rem 1.75rem 0",
                  borderTop: "1px solid var(--color-line-soft)",
                  height: "100%",
                }}
              >
                <h3
                  className="serif"
                  style={{ fontSize: "1.1875rem", fontWeight: 500, color: "var(--color-bone)", marginBottom: "0.625rem" }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "var(--color-faint)", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Standards panel */}
        <Reveal delay={0.1}>
          <div
            style={{
              marginTop: "clamp(3rem, 6vw, 5rem)",
              padding: "clamp(1.75rem, 4vw, 3rem)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-line)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span className="overline">Studio Standards</span>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem", marginTop: "1.75rem" }}>
              {standards.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 gap-1 sm:grid-cols-[8rem_1fr] sm:gap-x-4"
                  style={{ alignItems: "baseline", paddingTop: "1.25rem", borderTop: "1px solid var(--color-line-soft)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "var(--text-caption)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--color-violet-200)",
                    }}
                  >
                    {s.label}
                  </span>
                  <span style={{ color: "var(--color-mist)", fontSize: "0.9375rem", lineHeight: 1.65 }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
