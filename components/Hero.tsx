"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import Overline from "./Overline";
import SpecRow from "./SpecRow";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "100dvh", background: "var(--color-ink-800)" }}
    >
      {/* A single, restrained glow — the photo's own lighting does the rest */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          right: "-5%",
          top: "8%",
          width: "55%",
          height: "80%",
          background:
            "radial-gradient(ellipse at center, rgba(109,40,217,0.16) 0%, transparent 65%)",
        }}
      />

      <div
        className="relative mx-auto grid w-full grid-cols-1 md:grid-cols-2 items-center px-5 pt-32 pb-16 md:px-8 md:pt-32 md:pb-20"
        style={{ maxWidth: "1280px", gap: "4rem", zIndex: 1 }}
      >
        {/* LEFT: Editorial text */}
        <div className="order-2 md:order-1">
          <Reveal>
            <Overline>Custom 3D Printed Collectibles</Overline>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="serif"
              style={{
                marginTop: "1.5rem",
                fontSize: "var(--text-display)",
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                color: "var(--color-bone)",
              }}
            >
              Turning Ideas Into{" "}
              <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>
                Tangible Art
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                marginTop: "1.75rem",
                maxWidth: "480px",
                color: "var(--color-mist)",
                fontSize: "var(--text-lead)",
                lineHeight: 1.75,
              }}
            >
              Premium 3D printed figures, stylized characters, and personalized
              collectibles — each piece handcrafted with precision and creative
              vision by Mehmet Eren Kiraz.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="hero-btn-primary no-underline inline-flex items-center gap-2"
                style={{
                  padding: "0.9rem 2rem",
                  background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  letterSpacing: "0.03em",
                  borderRadius: "9999px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                View the Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="no-underline inline-flex items-center"
                style={{
                  padding: "0.9rem 2rem",
                  border: "1px solid var(--color-line)",
                  color: "var(--color-bone)",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  letterSpacing: "0.03em",
                  borderRadius: "9999px",
                  transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)";
                  e.currentTarget.style.color = "var(--color-violet-200)";
                  e.currentTarget.style.background = "rgba(124,58,237,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-line)";
                  e.currentTarget.style.color = "var(--color-bone)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Start a Commission
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Single cinematic plate */}
        <motion.div
          className="order-1 md:order-2 mx-auto w-full"
          style={{ maxWidth: "440px" }}
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <figure style={{ margin: 0 }}>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--color-line)",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.7), 0 0 80px rgba(109,40,217,0.2)",
              }}
            >
              <Image
                src="/images/monster-figure.jpeg"
                alt="Beholder — multi-gradient 3D printed fantasy figure"
                width={576}
                height={955}
                priority
                sizes="(min-width: 768px) 440px, 90vw"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
            <figcaption style={{ marginTop: "1rem" }}>
              <SpecRow items={["Beholder", "Multi-gradient PLA", "One-off commission"]} />
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
