"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Layer by Layer",
    desc: "Every print is built from the ground up with meticulous precision — each layer adding depth to the final form.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Designed for Display",
    desc: "Each piece is designed with the eye of a collector — meant to be seen, appreciated, and kept.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Made for You",
    desc: "Custom commissions welcome. Bring a character, a memory, a concept — and it becomes a physical reality.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      ref={ref}
      id="about"
      style={{
        background: "#0a0a15",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative corner glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(ellipse at top left, rgba(79,70,229,0.09) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
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
            About
          </span>
          <div style={{ width: "2rem", height: "1px", background: "linear-gradient(to left, transparent, #7c3aed)" }} />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#f8fafc",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Where Imagination
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Meets Precision
          </span>
        </motion.h2>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            maxWidth: "680px",
            margin: "0 auto 4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Objectify 3D is the creative studio of{" "}
            <span style={{ color: "#e2e8f0", fontWeight: 500 }}>
              Mehmet Eren Kiraz
            </span>{" "}
            — a maker, designer, and passionate collector based in Istanbul. Every
            piece starts as an idea: a character loved, a moment worth preserving, a
            figure deserving a physical form.
          </p>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
            }}
          >
            From fantasy creatures to beloved pop-culture icons, from personalized
            couple miniatures to decorative display pieces — Objectify 3D transforms
            digital concepts into physical art. The focus is always the same:
            craftsmanship, attention to detail, and a result that feels genuinely
            collectible.
          </p>
        </motion.div>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="grid-cols-1 sm:!grid-cols-3"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "1.75rem 1.5rem",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.3)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "12px",
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a78bfa",
                  marginBottom: "1.25rem",
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  color: "#f1f5f9",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  marginBottom: "0.625rem",
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
