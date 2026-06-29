"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Plate from "./Plate";
import SectionHeader from "./SectionHeader";
import SpecRow from "./SpecRow";
import { works, type Work } from "./works";

function Lightbox({ work, onClose }: { work: Work; onClose: () => void }) {
  const reduce = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Move focus into the dialog on open and trap Tab within it. (Escape and
  // focus restoration are handled by the parent Gallery effect.)
  useEffect(() => {
    closeRef.current?.focus();
    const node = overlayRef.current;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !node) return;
      const focusables = Array.from(
        node.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${work.title} — ${work.category}`}
        initial={reduce ? false : { scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={reduce ? { opacity: 0 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col md:flex-row"
        style={{
          maxWidth: "920px",
          width: "100%",
          maxHeight: "88vh",
          background: "var(--color-ink-600)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--color-line)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
        }}
      >
        <div className="md:w-[55%]" style={{ position: "relative", background: "var(--color-ink-900)" }}>
          <Image
            src={work.src}
            alt={work.alt}
            width={work.width}
            height={work.height}
            sizes="(min-width: 768px) 500px, 100vw"
            style={{ display: "block", width: "100%", height: "auto", maxHeight: "88vh", objectFit: "contain" }}
          />
        </div>
        <div className="md:flex-1 flex flex-col justify-center" style={{ padding: "2.5rem 2rem" }}>
          <span className="overline">{work.category}</span>
          <h3
            className="serif"
            style={{
              marginTop: "0.75rem",
              fontSize: "1.875rem",
              fontWeight: 500,
              letterSpacing: "-0.015em",
              color: "var(--color-bone)",
            }}
          >
            {work.title}
          </h3>
          <p style={{ marginTop: "1rem", color: "var(--color-mist)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
            {work.description}
          </p>
          <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--color-line-soft)" }}>
            <SpecRow items={work.specs} />
          </div>
          <a
            href="#contact"
            onClick={onClose}
            className="no-underline inline-flex items-center gap-2"
            style={{
              marginTop: "2rem",
              alignSelf: "flex-start",
              padding: "0.75rem 1.75rem",
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              color: "white",
              fontWeight: 600,
              fontSize: "0.875rem",
              borderRadius: "9999px",
            }}
          >
            Commission Similar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>

      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid var(--color-line)",
          color: "var(--color-bone)",
          fontSize: "1.25rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      >
        ✕
      </button>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<Work | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const openLightbox = (work: Work) => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setSelected(work);
  };
  const closeLightbox = () => {
    setSelected(null);
    lastFocusedRef.current?.focus();
  };

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
        style={{ background: "var(--color-ink-700)" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1280px" }}>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14 md:mb-20">
            <SectionHeader overline="Interactive Gallery" title="The" accent="Collection" />
            <p style={{ color: "var(--color-faint)", fontSize: "var(--text-caption)" }}>
              Hover to explore · Click to expand
            </p>
          </div>

          {/* Staggered masonry — native aspect ratios, no cropping */}
          <div
            className="columns-2 md:columns-3 lg:columns-4"
            style={{ columnGap: "1.25rem" }}
          >
            {works.map((work) => (
              <div key={work.slug} style={{ breakInside: "avoid", marginBottom: "1.25rem" }}>
                <Plate
                  src={work.src}
                  alt={work.alt}
                  width={work.width}
                  height={work.height}
                  category={work.category}
                  title={work.title}
                  interactive
                  label={`View ${work.title}`}
                  onClick={() => openLightbox(work)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <Lightbox work={selected} onClose={closeLightbox} />}
      </AnimatePresence>
    </>
  );
}
