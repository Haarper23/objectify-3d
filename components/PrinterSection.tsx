"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PrinterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      style={{
        background: "#0a0a15",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            Production Equipment
          </span>
          <div style={{ width: "2rem", height: "1px", background: "linear-gradient(to left, transparent, #7c3aed)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
          Professional{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Print Studio
          </span>
        </motion.h2>

        {/* Placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            marginTop: "3rem",
            padding: "3.5rem 2.5rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px dashed rgba(124,58,237,0.3)",
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Corner decorations */}
          <div style={{ position: "absolute", top: "1rem", left: "1rem", width: "1.25rem", height: "1.25rem", borderTop: "2px solid rgba(124,58,237,0.5)", borderLeft: "2px solid rgba(124,58,237,0.5)" }} />
          <div style={{ position: "absolute", top: "1rem", right: "1rem", width: "1.25rem", height: "1.25rem", borderTop: "2px solid rgba(124,58,237,0.5)", borderRight: "2px solid rgba(124,58,237,0.5)" }} />
          <div style={{ position: "absolute", bottom: "1rem", left: "1rem", width: "1.25rem", height: "1.25rem", borderBottom: "2px solid rgba(124,58,237,0.5)", borderLeft: "2px solid rgba(124,58,237,0.5)" }} />
          <div style={{ position: "absolute", bottom: "1rem", right: "1rem", width: "1.25rem", height: "1.25rem", borderBottom: "2px solid rgba(124,58,237,0.5)", borderRight: "2px solid rgba(124,58,237,0.5)" }} />

          {/* Printer icon */}
          <div
            style={{
              width: "5rem",
              height: "5rem",
              margin: "0 auto 2rem",
              borderRadius: "20px",
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#7c3aed",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
              <circle cx="18" cy="11.5" r="0.5" fill="currentColor"/>
            </svg>
          </div>

          <h3
            style={{
              color: "#f1f5f9",
              fontSize: "1.375rem",
              fontWeight: 700,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Machine & Technical Specs
          </h3>

          <p
            style={{
              color: "#64748b",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 2rem",
            }}
          >
            Printer details, filament types, build volume specifications, and full
            production capabilities will be documented and added here soon.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: "9999px",
              color: "#a78bfa",
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#a78bfa",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <style>{`
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
              }
            `}</style>
            Coming Soon
          </div>
        </motion.div>
      </div>
    </section>
  );
}
