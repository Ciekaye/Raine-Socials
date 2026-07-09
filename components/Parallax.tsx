"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /**
   * Vertical drift in px across the element's travel through the viewport.
   * Positive = element moves up relative to the page as you scroll down.
   */
  amount?: number;
};

/**
 * Scroll-linked vertical drift for depth. The child (usually an image block)
 * should overflow its container slightly so the drift never exposes an edge —
 * callers add scale/extra height. Disabled under reduced motion.
 */
export default function Parallax({
  children,
  className,
  amount = 50,
}: ParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [amount, -amount],
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, willChange: "transform" }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
