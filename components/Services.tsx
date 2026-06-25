"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Custom 3D Figures",
    description:
      "Any character, concept, or original design transformed into a physical 3D printed figure — built to your exact vision.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Personalized Gifts",
    description:
      "Turn a meaningful person, memory, or moment into a lasting physical piece — unique, thoughtful, and unforgettable.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Character & Fan Art Prints",
    description:
      "From Pokémon to Harry Potter, Mario to D&D — beloved characters crafted with respect for the original design.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M3 9h18M3 15h18M9 3v18"/>
      </svg>
    ),
    title: "Decorative Display Models",
    description:
      "Statement pieces designed for shelves, desks, and display cases — sculptural objects that define a space.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="7" r="4"/><circle cx="15" cy="7" r="4"/>
        <path d="M2 21v-1a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v1"/>
      </svg>
    ),
    title: "Couple & Portrait Miniatures",
    description:
      "Custom couple or individual portrait miniatures — capturing pose, likeness, clothing, and personality in 3D form.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z"/>
        <path d="M20 20s-1-5-8-5-8 5-8 5"/>
        <path d="M17 4s2 1.5 2 4-2 4-2 4"/>
        <path d="M7 4s-2 1.5-2 4 2 4 2 4"/>
      </svg>
    ),
    title: "Fantasy & Game-Inspired Models",
    description:
      "D&D creatures, RPG characters, fantasy beasts, and game-world props — brought into the physical realm.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
    title: "Special Project Production",
    description:
      "Event pieces, architectural models, branded objects, creative prototypes — ambitious projects handled with precision.",
  },
];

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="services"
      style={{
        background: "#07070e",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(ellipse at bottom left, rgba(79,70,229,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div ref={titleRef} style={{ marginBottom: "4rem", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "2rem", height: "1px", background: "linear-gradient(to right, transparent, #7c3aed)" }} />
            <span
              style={{
                color: "#a78bfa",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Services
            </span>
            <div style={{ width: "2rem", height: "1px", background: "linear-gradient(to left, transparent, #7c3aed)" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#f8fafc",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            What We{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Create
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: "#64748b",
              fontSize: "1rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every commission is treated as a unique creative challenge — no
            templates, no shortcuts.
          </motion.p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay }}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        padding: "1.75rem",
        transition: "border-color 0.3s ease, background 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(124,58,237,0.35)";
        el.style.background = "rgba(124,58,237,0.06)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.background = "rgba(255,255,255,0.025)";
        el.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "12px",
          background: "rgba(124,58,237,0.12)",
          border: "1px solid rgba(124,58,237,0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#a78bfa",
          marginBottom: "1.25rem",
          transition: "background 0.3s ease",
        }}
      >
        {service.icon}
      </div>
      <h3
        style={{
          color: "#f1f5f9",
          fontSize: "1rem",
          fontWeight: 600,
          marginBottom: "0.625rem",
          letterSpacing: "-0.01em",
        }}
      >
        {service.title}
      </h3>
      <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7 }}>
        {service.description}
      </p>
    </motion.div>
  );
}
