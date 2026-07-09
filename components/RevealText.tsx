"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

type RevealTextProps = {
  /** The heading/text to reveal, one word at a time. */
  text: string;
  className?: string;
  /** Delay before the first word rises, in seconds. */
  delay?: number;
  as?: "h1" | "h2" | "h3" | "span" | "p";
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Masked, word-by-word reveal: each word rises from behind a clip edge,
 * staggered left-to-right. Fires once on scroll into view. Under reduced
 * motion it renders as plain static text.
 */
export default function RevealText({
  text,
  className,
  delay = 0,
  as = "h2",
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const Tag = as as ElementType;
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-flex overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.05,
                ease: EASE,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
