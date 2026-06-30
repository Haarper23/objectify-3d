import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { processContent, type ProcessStep } from "@/src/data/site-content";

function Step({ step, index }: { step: ProcessStep; index: number }) {
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
            color: "rgba(255,255,255,0.18)",
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
              color: "var(--color-text-primary)",
              marginBottom: "0.625rem",
            }}
          >
            {step.title}
          </h3>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem", lineHeight: 1.75 }}>
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
      style={{ background: "var(--color-surface)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <SectionHeader
          overline={processContent.overline}
          title={processContent.title}
          accent={processContent.accent}
          lead={processContent.lead}
          className="mb-12 md:mb-16"
        />

        <div style={{ borderBottom: "1px solid var(--color-line-soft)" }}>
          {processContent.steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
