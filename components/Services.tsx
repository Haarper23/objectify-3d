"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { servicesContent } from "@/src/data/site-content";

function ServiceRow({ index, title, description }: { index: number; title: string; description: string }) {
  return (
    <Reveal delay={index * 0.05}>
      <div
        className="group grid grid-cols-[auto_1fr] md:grid-cols-[5rem_1fr_1.5fr] items-baseline"
        style={{
          gap: "1rem",
          padding: "1.75rem 0.5rem",
          borderTop: "1px solid var(--color-line-soft)",
          transition: "background 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "var(--text-caption)",
            color: "var(--color-text-muted)",
            letterSpacing: "0.1em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className="serif"
          style={{
            fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h3>
        <p
          className="col-span-2 md:col-span-1"
          style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem", lineHeight: 1.7 }}
        >
          {description}
        </p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
      style={{ background: "var(--color-background)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <SectionHeader
          overline={servicesContent.overline}
          title={servicesContent.title}
          accent={servicesContent.accent}
          lead={servicesContent.lead}
          className="mb-12 md:mb-16"
        />

        <div style={{ borderBottom: "1px solid var(--color-line-soft)" }}>
          {servicesContent.items.map((s, i) => (
            <ServiceRow key={s.title} index={i} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
