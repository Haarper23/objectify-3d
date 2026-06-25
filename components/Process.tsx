"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Idea & Request",
    description:
      "You share your concept — a character, a reference image, a brief description. The more detail, the better. We discuss scope and options.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Preparation",
    description:
      "The model is sourced, adapted, or designed from scratch. File prep, scale decisions, and material choices happen here before anything is printed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Printing",
    description:
      "The print runs with precision settings tuned to the model's geometry. Layer by layer, the form emerges. Quality is checked throughout.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="6 9 6 2 18 2 18 9"/>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect x="6" y="14" width="12" height="8"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Finishing & Delivery",
    description:
      "Support removal, sanding, painting, and final inspection. The piece is packed carefully and delivered ready for display.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function Process() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="process"
      style={{
        background: "#0a0a15",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div ref={titleRef} style={{ marginBottom: "5rem", textAlign: "center" }}>
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
              Process
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
            How It{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Works
            </span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            position: "relative",
          }}
          className="grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4"
        >
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              top: "2.75rem",
              left: "calc(12.5% + 1.5rem)",
              right: "calc(12.5% + 1.5rem)",
              height: "1px",
              background: "linear-gradient(to right, rgba(124,58,237,0.15), rgba(124,58,237,0.5), rgba(124,58,237,0.15))",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  delay,
}: {
  step: (typeof steps)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Number circle */}
      <div
        style={{
          width: "5.5rem",
          height: "5.5rem",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(79,70,229,0.2) 100%)",
          border: "1px solid rgba(124,58,237,0.35)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.75rem",
          flexShrink: 0,
          boxShadow: "0 0 30px rgba(124,58,237,0.12)",
        }}
      >
        <div style={{ color: "#a78bfa", marginBottom: "0.125rem" }}>{step.icon}</div>
      </div>

      {/* Step number */}
      <span
        style={{
          display: "block",
          color: "#7c3aed",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        Step {step.number}
      </span>

      <h3
        style={{
          color: "#f1f5f9",
          fontSize: "1.0625rem",
          fontWeight: 700,
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}
      >
        {step.title}
      </h3>

      <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7 }}>
        {step.description}
      </p>
    </motion.div>
  );
}
