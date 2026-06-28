"use client";

import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section
      className="relative overflow-hidden py-24 px-5 md:py-36 md:px-8"
      style={{ background: "var(--color-ink-900)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "120%",
          background: "radial-gradient(ellipse at center, rgba(109,40,217,0.12) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto text-center" style={{ maxWidth: "900px" }}>
        <Reveal>
          <p
            className="serif"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)",
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
              color: "var(--color-bone)",
            }}
          >
            Every commission is a one-off.{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>
              No catalog, no templates
            </span>{" "}
            — only objects designed, printed, and finished to be kept.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
