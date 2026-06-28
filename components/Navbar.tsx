"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InstagramIcon from "./InstagramIcon";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
];

function Wordmark() {
  return (
    <a href="#" className="flex items-center gap-2.5 no-underline">
      <span
        className="flex items-center justify-center shrink-0"
        style={{
          width: "2.25rem",
          height: "2.25rem",
          background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
          borderRadius: "8px",
          boxShadow: "0 0 16px rgba(124,58,237,0.35)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 1V15M2 4.5L14 11.5M14 4.5L2 11.5" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      </span>
      <span
        className="serif"
        style={{ fontSize: "1.0625rem", fontWeight: 500, color: "var(--color-bone)", letterSpacing: "0.01em" }}
      >
        Objectify <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>3D</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock body scroll and close on Escape.
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }
      };
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onKeyDown);
      };
    }
    document.body.style.overflow = "";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
          background: scrolled ? "rgba(7,7,14,0.85)" : "transparent",
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="no-underline"
                style={{
                  color: "var(--color-mist)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-bone)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-mist)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://www.instagram.com/objectify3d/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Objectify 3D on Instagram"
              className="no-underline"
              style={{ color: "var(--color-mist)", transition: "color 0.2s ease", display: "flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-violet-200)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-mist)")}
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#contact"
              className="no-underline"
              style={{
                padding: "0.55rem 1.35rem",
                border: "1px solid var(--color-line)",
                color: "var(--color-bone)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                borderRadius: "9999px",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)";
                e.currentTarget.style.background = "rgba(124,58,237,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-line)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Start a Commission
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={toggleRef}
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-bone)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(4.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-bone)",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-bone)",
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "rgba(5,5,9,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.25rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={() => setMenuOpen(false)}
                className="serif no-underline"
                style={{
                  color: "var(--color-bone)",
                  fontSize: "2.25rem",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMenuOpen(false)}
              className="no-underline"
              style={{
                marginTop: "0.75rem",
                padding: "0.8rem 2rem",
                border: "1px solid var(--color-line)",
                color: "var(--color-bone)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                borderRadius: "9999px",
              }}
            >
              Start a Commission
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
