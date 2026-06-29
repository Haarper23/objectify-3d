"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Send Your Idea",
    description: "Reference images, sketches, or a simple description.",
  },
  {
    number: "02",
    title: "Design & Approval",
    description: "We model the piece and share previews before production.",
  },
  {
    number: "03",
    title: "Print & Finish",
    description: "Your piece is printed, cleaned, and finished by hand.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Carefully packaged and shipped to your address.",
  },
];

function Step({ step, index }: { step: (typeof steps)[0]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <div
        className="grid grid-cols-[auto_1fr] items-baseline"
        style={{ gap: "clamp(1.25rem, 4vw, 3rem)", padding: "2.5rem 0", borderTop: "1px solid var(--color-line-soft)" }}
      >
        <span
          className="serif"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1,
            color: "rgba(167,139,250,0.55)",
          }}
        >
          {step.number}
        </span>
        <div style={{ maxWidth: "640px" }}>
          <h3
            className="serif"
            style={{
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "var(--color-bone)",
              marginBottom: "0.625rem",
            }}
          >
            {step.title}
          </h3>
          <p style={{ color: "var(--color-mist)", fontSize: "1rem", lineHeight: 1.75 }}>
            {step.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
      style={{ background: "var(--color-ink-700)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <SectionHeader
          overline="Process"
          title="How It"
          accent="Works"
          lead="From first message to finished piece — a transparent, hands-on process with no surprises."
          className="mb-12 md:mb-16"
        />

        <div style={{ borderBottom: "1px solid var(--color-line-soft)" }}>
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
