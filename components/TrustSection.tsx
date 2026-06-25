"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Quality First, Always",
    desc: "No piece leaves the studio until it meets the standard. Every print is inspected, refined, and finished with care.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Crafted with Intention",
    desc: "Each design choice — scale, material, finish — is made thoughtfully to serve the piece and the person it's made for.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Fully Custom Production",
    desc: "Not a catalog. Not a template. Everything is designed and produced specifically for you — starting from your idea.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Collectible-Grade Results",
    desc: "The final piece should feel like something worth keeping. Display-ready. Detail-rich. Genuinely impressive in person.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/>
        <path d="M8 2v16M16 6v16"/>
      </svg>
    ),
    title: "Visually Distinctive",
    desc: "Every commission has its own character, its own story. The aim is always a result that stands out and surprises.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Personal & Communicative",
    desc: "Open dialogue from idea to delivery. You'll know where your piece is in the process and can ask questions at any stage.",
  },
];

export default function TrustSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px 0px" });

  return (
    <section
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
          top: "0",
          right: "-5%",
          width: "50%",
          height: "100%",
          background:
            "radial-gradient(ellipse at top right, rgba(79,70,229,0.07) 0%, transparent 60%)",
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
              Why Objectify 3D
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
            }}
          >
            Built on{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Craft & Care
            </span>
          </motion.h2>
        </div>

        {/* Values grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="grid-cols-1 md:!grid-cols-2 xl:!grid-cols-3"
        >
          {values.map((v, i) => (
            <ValueCard key={v.title} value={v} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
  delay,
}: {
  value: (typeof values)[0];
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
        display: "flex",
        gap: "1.25rem",
        padding: "1.75rem",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        transition: "border-color 0.3s ease, background 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(124,58,237,0.3)";
        el.style.background = "rgba(124,58,237,0.05)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.background = "rgba(255,255,255,0.025)";
      }}
    >
      <div
        style={{
          width: "2.75rem",
          height: "2.75rem",
          borderRadius: "12px",
          background: "rgba(124,58,237,0.12)",
          border: "1px solid rgba(124,58,237,0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#a78bfa",
          flexShrink: 0,
        }}
      >
        {value.icon}
      </div>
      <div>
        <h3
          style={{
            color: "#f1f5f9",
            fontSize: "0.9375rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          {value.title}
        </h3>
        <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65 }}>
          {value.desc}
        </p>
      </div>
    </motion.div>
  );
}
