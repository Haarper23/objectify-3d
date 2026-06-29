"use client";

/** Scrolls to the top of the page; honors prefers-reduced-motion. */
export default function BackToTop({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const onClick = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button type="button" onClick={onClick} className={className} style={style} aria-label="Back to top">
      Back to top
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
