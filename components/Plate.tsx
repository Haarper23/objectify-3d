"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * A product photo presented as a fine-art plate: native aspect ratio (no
 * cropping), a thin caption scrim that surfaces on hover, and an optional
 * caption/category below. Quiet scale on hover — no tilt, no spotlight.
 */
export default function Plate({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  category,
  title,
  interactive = false,
  onClick,
  label,
  rounded = true,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  category?: string;
  title?: string;
  interactive?: boolean;
  onClick?: () => void;
  label?: string;
  rounded?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const hoverHandlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };

  const frame = (
    <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: rounded ? "var(--radius-card)" : 0,
          border: "1px solid var(--color-line-soft)",
          background: "var(--color-ink-600)",
          boxShadow: hovered ? "var(--shadow-plate)" : "0 4px 20px rgba(0,0,0,0.3)",
          transition: "box-shadow 0.4s ease, border-color 0.4s ease",
          borderColor: hovered ? "rgba(124,58,237,0.3)" : "var(--color-line-soft)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />

        {/* Caption scrim — only meaningful on hover, kept subtle so the photo reads */}
        {(category || title) && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "1.25rem 1.5rem",
              background:
                "linear-gradient(to top, rgba(5,5,9,0.85) 0%, transparent 45%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
            }}
          >
            {category && <span className="overline">{category}</span>}
            {title && (
              <span
                className="serif"
                style={{
                  marginTop: "0.35rem",
                  fontSize: "1.125rem",
                  color: "var(--color-bone)",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </span>
            )}
          </div>
        )}

        {interactive && (
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "50%",
              background: "rgba(5,5,9,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--color-line)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </span>
        )}
      </div>
  );

  // Interactive gallery cards are real <button>s — native keyboard activation
  // (Enter/Space), focus, and semantics, with default button chrome reset.
  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        {...hoverHandlers}
        style={{
          display: "block",
          width: "100%",
          margin: 0,
          padding: 0,
          border: "none",
          background: "transparent",
          font: "inherit",
          color: "inherit",
          textAlign: "left",
          cursor: "pointer",
          outlineOffset: "3px",
        }}
      >
        {frame}
      </button>
    );
  }

  return (
    <figure {...hoverHandlers} style={{ margin: 0 }}>
      {frame}
    </figure>
  );
}
