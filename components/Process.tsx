"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Idea & Request",
    description:
      "You share your concept — a character, a reference image, a brief description. The more detail, the better. We discuss scope and options.",
    time: "Day 1",
  },
  {
    number: "02",
    title: "Design & Preparation",
    description:
      "The model is sourced, adapted, or designed from scratch. File prep, scale decisions, and material choices happen here before anything is printed.",
    time: "1–3 days",
  },
  {
    number: "03",
    title: "Printing",
    description:
      "The print runs with precision settings tuned to the model's geometry. Layer by layer, the form emerges. Quality is checked throughout.",
    time: "1–4 days",
  },
  {
    number: "04",
    title: "Finishing & Delivery",
    description:
      "Support removal, sanding, painting, and final inspection. The piece is packed carefully and delivered ready for display.",
    time: "2–5 days",
  },
];

function Step({ step, index }: { step: (typeof steps)[0]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <div
        className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-start"
        style={{ gap: "clamp(1rem, 4vw, 3rem)", padding: "2.5rem 0", borderTop: "1px solid var(--color-line-soft)" }}
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
        <div style={{ maxWidth: "560px" }}>
          <h3
            className="serif"
            style={{
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "var(--color-bone)",
              marginBottom: "0.75rem",
            }}
          >
            {step.title}
          </h3>
          <p style={{ color: "var(--color-mist)", fontSize: "1rem", lineHeight: 1.75 }}>
            {step.description}
          </p>
        </div>
        <span
          className="md:text-right"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "var(--text-caption)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-faint)",
            whiteSpace: "nowrap",
          }}
        >
          {step.time}
        </span>
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
