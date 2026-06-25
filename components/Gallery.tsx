"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/images/monster-figure.jpeg",
    alt: "Beholder fantasy figure",
    title: "Beholder",
    category: "Fantasy Figure",
    description: "Multi-gradient filament, complex eyestalks and texture — one of the most technically demanding prints in the collection.",
  },
  {
    src: "/images/mario-figure.jpeg",
    alt: "Mario & Luma figure",
    title: "Mario & Luma",
    category: "Fan Art Print",
    description: "Hand-painted and post-processed with a golden cosmic base and swirling star trail.",
  },
  {
    src: "/images/gengar-figure.jpeg",
    alt: "Gengar figure",
    title: "Gengar",
    category: "Pokémon Collectible",
    description: "Smooth purple finish, multi-material white teeth, vivid red eyes — a collector favourite.",
  },
  {
    src: "/images/hooded-figure.jpeg",
    alt: "Mysterious hooded character",
    title: "The Silent One",
    category: "Original Design",
    description: "Original character with matte hoodie, metallic visor, and skull graphic — dark, moody, precise.",
  },
  {
    src: "/images/couple-figure.jpeg",
    alt: "Couple portrait miniature",
    title: "Portrait Miniature",
    category: "Personalized Gift",
    description: "A fully custom couple figurine — poses, clothing, and likeness all made to order.",
  },
  {
    src: "/images/hagrid-figure.jpeg",
    alt: "Hagrid chibi figure",
    title: "Rubeus Hagrid",
    category: "Chibi Character",
    description: "Chibi-style interpretation of Hogwarts' most beloved groundskeeper, with hand-painted detail.",
  },
  {
    src: "/images/turtle-figure.jpeg",
    alt: "TMNT Raphael mini figure",
    title: "Raphael",
    category: "TMNT Mini",
    description: "Compact egg-form Raphael — the red-masked turtle in adorable chibi format.",
  },
];

function TiltCard({
  image,
  delay,
  onClick,
}: {
  image: (typeof images)[0];
  delay: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-60px 0px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 14);
    setRotateY(x * 14);
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: "800px", cursor: "pointer" }}
      onClick={onClick}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 200, damping: 22, mass: 0.8 }}
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          background: "#0f0f1a",
          border: "1px solid",
          borderColor: hovered ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.06)",
          transformStyle: "preserve-3d",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: hovered
            ? "0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.15)"
            : "0 4px 20px rgba(0,0,0,0.3)",
          position: "relative",
        }}
      >
        {/* Spotlight shimmer */}
        {hovered && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              pointerEvents: "none",
              background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(167,139,250,0.1) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Image */}
        <div style={{ position: "relative", aspectRatio: "3/4" }}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(7,7,14,0.9) 0%, rgba(7,7,14,0.1) 55%, transparent 100%)",
            }}
          />
        </div>

        {/* Text */}
        <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
          <p
            style={{
              color: "#7c3aed",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.3rem",
            }}
          >
            {image.category}
          </p>
          <h3 style={{ color: "#f1f5f9", fontSize: "1rem", fontWeight: 600 }}>
            {image.title}
          </h3>
        </div>

        {/* Hover expand icon */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "2.25rem",
            height: "2.25rem",
            borderRadius: "50%",
            background: "rgba(7,7,14,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Lightbox({
  image,
  onClose,
}: {
  image: (typeof images)[0] | null;
  onClose: () => void;
}) {
  if (!image) return null;
  return (
    <motion.div
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
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "900px",
          width: "100%",
          background: "#0f0f1a",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
        }}
        className="md:flex-row"
      >
        <div style={{ position: "relative", flex: "0 0 auto", minHeight: "300px" }} className="md:w-[55%]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="md:flex-1"
        >
          <span
            style={{
              color: "#a78bfa",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            {image.category}
          </span>
          <h3
            style={{
              color: "#f8fafc",
              fontSize: "1.75rem",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              marginBottom: "1rem",
            }}
          >
            {image.title}
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "0.9375rem", lineHeight: 1.7 }}>
            {image.description}
          </p>
          <div style={{ marginTop: "2rem" }}>
            <a
              href="#contact"
              onClick={onClose}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.75rem",
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "9999px",
                textDecoration: "none",
              }}
            >
              Commission Similar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#f1f5f9",
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
  const [selected, setSelected] = useState<(typeof images)[0] | null>(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px 0px" });

  return (
    <>
      <section
        id="gallery"
        style={{
          background: "#0a0a15",
          padding: "8rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Header */}
          <div ref={titleRef} style={{ marginBottom: "4rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "1px",
                  background: "linear-gradient(to right, transparent, #7c3aed)",
                }}
              />
              <span
                style={{
                  color: "#a78bfa",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Interactive Gallery
              </span>
            </motion.div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
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
                The{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Collection
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={titleInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                style={{ color: "#475569", fontSize: "0.875rem" }}
              >
                Hover to explore · Click to expand
              </motion.p>
            </div>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.25rem",
            }}
            className="grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4"
          >
            {images.map((img, i) => (
              <TiltCard
                key={img.src}
                image={img}
                delay={i * 0.06}
                onClick={() => setSelected(img)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <Lightbox image={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
