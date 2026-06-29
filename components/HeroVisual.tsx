"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SpecRow from "./SpecRow";

/**
 * Hero visual: a single cinematic product plate (the studio's real work) with a
 * restrained wireframe accent floating behind it — a quiet nod to 3D / digital
 * fabrication. Motion is transform/opacity only and pauses under
 * prefers-reduced-motion. No glow, no glass, no particles.
 */
export default function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative order-1 md:order-2 mx-auto w-full"
      style={{ maxWidth: "440px" }}
      initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Wireframe accent — line-art octahedron, behind and offset from the plate */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ top: "-7%", right: "-12%", width: "46%", maxWidth: "200px", zIndex: 0 }}
      >
        <div className="hero-float">
          <svg
            viewBox="0 0 100 100"
            className="hero-wire"
            style={{ width: "100%", height: "auto", opacity: 0.5 }}
          >
            <g
              fill="none"
              stroke="var(--color-violet-200)"
              strokeWidth="0.7"
              strokeLinejoin="round"
              opacity="0.7"
            >
              {/* octahedron */}
              <path d="M50 6 L88 50 L50 94 L12 50 Z" />
              <path d="M12 50 L50 32 L88 50" />
              <path d="M50 32 L50 6 M50 32 L50 94" />
              <path d="M12 50 L50 68 L88 50" opacity="0.5" />
              <path d="M50 68 L50 94" opacity="0.5" />
            </g>
          </svg>
        </div>
      </div>

      <figure className="relative" style={{ margin: 0, zIndex: 1 }}>
        <div
          style={{
            position: "relative",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--color-line)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(109,40,217,0.16)",
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
  );
}
