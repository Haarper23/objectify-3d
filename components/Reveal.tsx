"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Centralized scroll-reveal wrapper. One coherent motion language for the whole
 * site: a quiet upward fade, played once. Honors prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  style,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
