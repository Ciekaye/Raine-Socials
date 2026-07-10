"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** How far it slides in from, in px. Default 20. */
  y?: number;
  /** Which axis/side it slides in from. Default "up". */
  direction?: Direction;
  /** Add a brief blur-to-sharp for a more cinematic entrance. */
  blur?: boolean;
  as?: "div" | "section" | "li" | "article";
};

// Map a direction to its initial offset given a travel distance.
function offset(direction: Direction, d: number) {
  switch (direction) {
    case "down":
      return { x: 0, y: -d };
    case "left":
      return { x: d, y: 0 };
    case "right":
      return { x: -d, y: 0 };
    case "up":
    default:
      return { x: 0, y: d };
  }
}

/**
 * Subtle fade + slide-in on scroll into view. Fires once.
 * Fully disabled when the user prefers reduced motion.
 *
 * Uses an `amount` threshold (a fraction of the element visible) rather than a
 * negative root-margin: on short mobile viewports a negative margin shrinks the
 * trigger zone so much that a fast flick-scroll can skip past it, leaving the
 * content stuck invisible. A `ref` + safety timeout guarantees the content is
 * never left permanently hidden even if the observer misses entirely.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  direction = "up",
  blur = false,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  // Safety net: if the observer never fires (e.g. it missed during a fast
  // scroll), reveal anything already within the viewport so text can't vanish.
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => {
      const el = ref.current;
      if (el && el.getBoundingClientRect().top < window.innerHeight) {
        setFallback(true);
      }
    }, 1200);
    return () => clearTimeout(t);
  }, [reduce]);

  const from = offset(direction, y);
  const show = inView || fallback;

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={
        reduce
          ? false
          : { opacity: 0, ...from, filter: blur ? "blur(8px)" : "blur(0px)" }
      }
      animate={
        reduce || !show
          ? undefined
          : { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
      }
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
