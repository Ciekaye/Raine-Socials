"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

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

  const from = offset(direction, y);

  return (
    <MotionTag
      className={className}
      initial={
        reduce
          ? false
          : { opacity: 0, ...from, filter: blur ? "blur(8px)" : "blur(0px)" }
      }
      whileInView={
        reduce ? undefined : { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
