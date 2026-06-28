"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Custom 3D Figures",
    description:
      "Any character, concept, or original design transformed into a physical 3D printed figure — built to your exact vision.",
  },
  {
    title: "Personalized Gifts",
    description:
      "Turn a meaningful person, memory, or moment into a lasting physical piece — unique, thoughtful, and unforgettable.",
  },
  {
    title: "Character & Fan Art Prints",
    description:
      "From Pokémon to Harry Potter, Mario to D&D — beloved characters crafted with respect for the original design.",
  },
  {
    title: "Decorative Display Models",
    description:
      "Statement pieces designed for shelves, desks, and display cases — sculptural objects that define a space.",
  },
  {
    title: "Couple & Portrait Miniatures",
    description:
      "Custom couple or individual portrait miniatures — capturing pose, likeness, clothing, and personality in 3D form.",
  },
  {
    title: "Fantasy & Game-Inspired Models",
    description:
      "D&D creatures, RPG characters, fantasy beasts, and game-world props — brought into the physical realm.",
  },
  {
    title: "Special Project Production",
    description:
      "Event pieces, architectural models, branded objects, creative prototypes — ambitious projects handled with precision.",
  },
];

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
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(124,58,237,0.04)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "var(--text-caption)",
            color: "var(--color-violet)",
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
            color: "var(--color-bone)",
          }}
        >
          {title}
        </h3>
        <p
          className="col-span-2 md:col-span-1"
          style={{ color: "var(--color-faint)", fontSize: "0.9375rem", lineHeight: 1.7 }}
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
      style={{ background: "var(--color-ink-800)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <SectionHeader
          overline="Services"
          title="What We"
          accent="Create"
          lead="Every commission is treated as a unique creative challenge — no templates, no shortcuts."
          className="mb-12 md:mb-16"
        />

        <div style={{ borderBottom: "1px solid var(--color-line-soft)" }}>
          {services.map((s, i) => (
            <ServiceRow key={s.title} index={i} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
