"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import SpecRow from "./SpecRow";
import { orderedProjects, hasProjects, type ProjectItem } from "@/src/data/projects";
import { worksContent } from "@/src/data/site-content";

/**
 * Works — the reusable portfolio template (id="work" / "Çalışmalar").
 *
 * Reads from `orderedProjects` in src/data/projects.ts. Adding a project there
 * is the only step needed to populate this section; no component edits. While
 * the data is empty it renders a tasteful Turkish empty state that disappears
 * automatically once projects are added.
 */

function EmptyState() {
  return (
    <div
      className="flex flex-col items-center text-center mx-auto"
      style={{
        maxWidth: "520px",
        marginTop: "clamp(2rem, 5vw, 3.5rem)",
        padding: "clamp(2.5rem, 6vw, 4rem) 2rem",
        borderRadius: "var(--radius-lg)",
        border: "1px dashed var(--color-line)",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <span
        aria-hidden
        className="flex items-center justify-center"
        style={{
          width: "3.25rem",
          height: "3.25rem",
          marginBottom: "1.5rem",
          borderRadius: "12px",
          border: "1px solid var(--color-line)",
          color: "var(--color-text-secondary)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      </span>
      <h3
        className="serif"
        style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", fontWeight: 500, color: "var(--color-text-primary)" }}
      >
        {worksContent.emptyTitle}
      </h3>
      <p style={{ marginTop: "0.85rem", color: "var(--color-text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
        {worksContent.emptyDescription}
      </p>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: ProjectItem; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${project.title} çalışmasını görüntüle`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        display: "block",
        width: "100%",
        margin: 0,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "4 / 5",
          borderRadius: "var(--radius-card)",
          border: "1px solid var(--color-line-soft)",
          background: "var(--color-surface-elevated)",
          boxShadow: hovered ? "var(--shadow-plate)" : "0 4px 20px rgba(0,0,0,0.3)",
          borderColor: hovered ? "rgba(255,255,255,0.22)" : "var(--color-line-soft)",
          transition: "box-shadow 0.4s ease, border-color 0.4s ease",
        }}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          style={{
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "1.25rem 1.5rem",
            background: "linear-gradient(to top, rgba(5,5,6,0.85) 0%, transparent 50%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        >
          {project.category && <span className="overline">{project.category}</span>}
          <span
            className="serif"
            style={{ marginTop: "0.35rem", fontSize: "1.125rem", color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}
          >
            {project.shortTitle ?? project.title}
          </span>
        </div>
      </div>
    </button>
  );
}

function Lightbox({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const reduce = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const node = overlayRef.current;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !node) return;
      const focusables = Array.from(
        node.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
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
        aria-label={project.category ? `${project.title} — ${project.category}` : project.title}
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
          background: "var(--color-surface-elevated)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--color-line)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
        }}
      >
        <div className="md:w-[55%] relative" style={{ background: "var(--color-ink-900)", minHeight: "320px" }}>
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 768px) 500px, 100vw"
            className="object-contain"
          />
        </div>
        <div className="md:flex-1 flex flex-col justify-center" style={{ padding: "2.5rem 2rem" }}>
          {project.category && <span className="overline">{project.category}</span>}
          <h3
            className="serif"
            style={{ marginTop: "0.75rem", fontSize: "1.875rem", fontWeight: 500, letterSpacing: "-0.015em", color: "var(--color-text-primary)" }}
          >
            {project.title}
          </h3>
          {project.description && (
            <p style={{ marginTop: "1rem", color: "var(--color-text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
              {project.description}
            </p>
          )}
          {project.tags?.length ? (
            <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--color-line-soft)" }}>
              <SpecRow items={project.tags} />
            </div>
          ) : null}
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary no-underline inline-flex items-center gap-2"
            style={{
              marginTop: "2rem",
              alignSelf: "flex-start",
              padding: "0.75rem 1.75rem",
              fontWeight: 600,
              fontSize: "0.875rem",
              borderRadius: "9999px",
            }}
          >
            Benzer Bir Üretim
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>

      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Kapat"
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid var(--color-line)",
          color: "var(--color-text-primary)",
          fontSize: "1.25rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ✕
      </button>
    </motion.div>
  );
}

export default function Works() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const open = (project: ProjectItem) => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setSelected(project);
  };
  const close = () => {
    setSelected(null);
    lastFocusedRef.current?.focus();
  };

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
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
        id="work"
        className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            overline={worksContent.overline}
            title={worksContent.title}
            accent={worksContent.accent}
            lead={worksContent.lead}
            className="mb-12 md:mb-16"
          />

          {hasProjects ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: "1.25rem" }}>
              {orderedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={() => open(project)} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      <AnimatePresence>
        {selected && <Lightbox project={selected} onClose={close} />}
      </AnimatePresence>
    </>
  );
}
