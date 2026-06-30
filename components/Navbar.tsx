"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import InstagramIcon from "./InstagramIcon";
import { brand, nav, contactInfo } from "@/src/data/site-content";

function Wordmark() {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} — ana sayfa`}
      className="flex items-center gap-2.5 no-underline"
    >
      <span
        className="flex items-center justify-center shrink-0"
        style={{
          width: "2.25rem",
          height: "2.25rem",
          background: "var(--color-surface-elevated)",
          border: "1px solid var(--color-line)",
          borderRadius: "8px",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 1V15M2 4.5L14 11.5M14 4.5L2 11.5" stroke="var(--color-text-primary)" strokeWidth="1" strokeOpacity="0.45" />
        </svg>
      </span>
      <span
        className="serif"
        style={{ fontSize: "1.0625rem", fontWeight: 500, color: "var(--color-text-primary)", letterSpacing: "0.01em" }}
      >
        {brand.nameLead}{" "}
        <span style={{ fontStyle: "italic", color: "var(--color-text-secondary)" }}>{brand.nameAccent}</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock body scroll, close on Escape, move
  // focus into the menu, and trap Tab between the toggle and the menu links.
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";

    const getFocusable = () => {
      const list: HTMLElement[] = [];
      if (toggleRef.current) list.push(toggleRef.current);
      menuRef.current
        ?.querySelectorAll<HTMLElement>("a[href]")
        .forEach((el) => list.push(el));
      return list;
    };

    // Move focus to the first menu link once the overlay has mounted.
    const raf = requestAnimationFrame(() => getFocusable()[1]?.focus());

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const f = getFocusable();
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
          background: scrolled ? "rgba(10,10,11,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-line-soft)" : "1px solid transparent",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: "1280px",
            padding: scrolled ? "0.9rem 1.5rem" : "1.4rem 1.5rem",
            transition: "padding 0.4s ease",
          }}
        >
          <Wordmark />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="muted-link no-underline"
                style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.02em" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a
              href={contactInfo.instagramBrand.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contactInfo.instagramBrand.label}
              className="muted-link no-underline"
              style={{ display: "flex" }}
            >
              <InstagramIcon size={18} />
            </a>
            <Link
              href="/#contact"
              className="btn-ghost no-underline"
              style={{
                padding: "0.55rem 1.35rem",
                border: "1px solid var(--color-line)",
                color: "var(--color-text-primary)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                borderRadius: "9999px",
                transition: "border-color 0.2s ease, background 0.2s ease, color 0.2s ease",
              }}
            >
              İletişime Geç
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={toggleRef}
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-text-primary)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(4.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-text-primary)",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-text-primary)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(-4.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menüsü"
            initial={reduce ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "rgba(5,5,6,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.25rem",
            }}
          >
            {nav.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : i * 0.07 + 0.1 }}
                onClick={() => setMenuOpen(false)}
                className="serif no-underline"
                style={{ color: "var(--color-text-primary)", fontSize: "2.25rem", fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/#contact"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduce ? 0 : 0.5 }}
              onClick={() => setMenuOpen(false)}
              className="no-underline"
              style={{
                marginTop: "0.75rem",
                padding: "0.8rem 2rem",
                border: "1px solid var(--color-line)",
                color: "var(--color-text-primary)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                borderRadius: "9999px",
              }}
            >
              İletişime Geç
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
