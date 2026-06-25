"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const featured = [
  {
    src: "/images/mario-figure.jpeg",
    alt: "Mario & Luma 3D figure",
    title: "Mario & Luma",
    category: "Fan Art Print",
    description:
      "Hand-painted and post-processed. A detailed recreation of the iconic duo — complete with golden star base and a swirling cosmic trail.",
    tags: ["Game-Inspired", "Hand-Painted", "Collectible"],
    size: "large",
  },
  {
    src: "/images/gengar-figure.jpeg",
    alt: "Gengar Pokémon 3D figure",
    title: "Gengar",
    category: "Pokémon Collectible",
    description:
      "Smooth purple finish with multi-material white teeth and vivid crimson eyes. A standout showpiece for any display shelf.",
    tags: ["Pokémon", "Stylized Figure"],
    size: "small",
  },
  {
    src: "/images/hooded-figure.jpeg",
    alt: "Mysterious hooded figure",
    title: "The Silent One",
    category: "Original Design",
    description:
      "A hauntingly elegant original design — matte hoodie, metallic visor, skull detail. Precision down to every wrinkle.",
    tags: ["Original", "Dark Style"],
    size: "small",
  },
  {
    src: "/images/couple-figure.jpeg",
    alt: "Couple portrait miniature",
    title: "Portrait Miniature",
    category: "Personalized Gift",
    description:
      "A custom couple miniature recreated with stunning realism. Poses, expressions, and clothing all tailored to your exact reference — a truly one-of-a-kind keepsake.",
    tags: ["Personalized", "Portrait", "Gift"],
    size: "wide",
  },
];

function WorkCard({
  item,
  delay = 0,
}: {
  item: (typeof featured)[0];
  delay?: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#0f0f1a",
        border: "1px solid",
        borderColor: hovered ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.06)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.12)"
          : "0 8px 30px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: item.size === "large" ? "440px" : item.size === "wide" ? "340px" : "300px",
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          style={{
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(7,7,14,0.95) 0%, rgba(7,7,14,0.3) 50%, transparent 100%)",
            transition: "opacity 0.4s ease",
          }}
        />
        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: "1.25rem",
            left: "1.25rem",
            background: "rgba(7,7,14,0.8)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "9999px",
            padding: "0.35rem 0.875rem",
          }}
        >
          <span
            style={{
              color: "#a78bfa",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem 1.75rem 1.75rem" }}>
        <h3
          style={{
            color: "#f8fafc",
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: "0.625rem",
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            color: "#64748b",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
          }}
        >
          {item.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.2)",
                color: "#a78bfa",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedWorks() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px 0px" });

  const [mario, gengar, hooded, couple] = featured;

  return (
    <section
      id="works"
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
          top: "20%",
          right: "-15%",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, rgba(79,70,229,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
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
              Featured Works
            </span>
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
              maxWidth: "540px",
              lineHeight: 1.1,
            }}
          >
            Handcrafted{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Collectibles
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: "#64748b",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginTop: "1rem",
            }}
          >
            A selection of recent pieces — each uniquely designed, printed, and
            finished to collectible standard.
          </motion.p>
        </div>

        {/* Top row: Mario (large) + Gengar + Hooded */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
          className="grid-cols-1 lg:!grid-cols-[1.6fr_1fr_1fr]"
        >
          <WorkCard item={mario} delay={0} />
          <WorkCard item={gengar} delay={0.1} />
          <WorkCard item={hooded} delay={0.2} />
        </div>

        {/* Bottom row: Couple wide */}
        <WorkCard item={couple} delay={0.15} />
      </div>
    </section>
  );
}
