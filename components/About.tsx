"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import Overline from "./Overline";

const facts = ["Ships worldwide", "Fully made to order"];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
      style={{ background: "var(--color-ink-700)" }}
    >
      <div
        className="relative mx-auto grid grid-cols-1 md:grid-cols-2 items-center"
        style={{ maxWidth: "1180px", gap: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        {/* Text */}
        <div>
          <Reveal>
            <Overline>About the Studio</Overline>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="serif"
              style={{
                marginTop: "1.25rem",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "var(--color-bone)",
              }}
            >
              Where Imagination Meets{" "}
              <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>Precision</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: "1.75rem", color: "var(--color-mist)", fontSize: "var(--text-lead)", lineHeight: 1.8 }}>
              Objectify 3D is the creative studio of{" "}
              <span style={{ color: "var(--color-bone)", fontWeight: 500 }}>Mehmet Eren Kiraz</span> — a
              maker, designer, and passionate collector. Every piece starts as an idea: a
              character loved, a moment worth preserving, a figure deserving a physical form.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p style={{ marginTop: "1.25rem", color: "var(--color-mist)", fontSize: "var(--text-lead)", lineHeight: 1.8 }}>
              From fantasy creatures to beloved pop-culture icons, from personalized couple miniatures to
              decorative display pieces — the focus is always the same: craftsmanship, attention to detail, and
              a result that feels genuinely collectible.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="flex flex-wrap gap-x-8 gap-y-3" style={{ marginTop: "2rem" }}>
              {facts.map((f) => (
                <span
                  key={f}
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--text-caption)",
                    letterSpacing: "0.04em",
                    color: "var(--color-faint)",
                  }}
                >
                  <span style={{ color: "var(--color-violet)" }}>—</span> {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={0.1}>
          <figure style={{ margin: 0 }}>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--color-line)",
                boxShadow: "var(--shadow-plate)",
              }}
            >
              <Image
                src="/images/hooded-figure.jpeg"
                alt="The Silent One — original hooded character figure"
                width={576}
                height={942}
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
