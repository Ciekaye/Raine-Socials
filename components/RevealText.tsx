"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ElementType } from "react";

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
 *
 * A single observer on the heading (with an `amount` threshold, not a negative
 * root-margin) drives every word. Because unrevealed words sit at y:110% behind
 * an `overflow-hidden` mask, a missed trigger would hide the whole heading — so
 * a ref + safety timeout guarantees it is never left invisible on mobile.
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

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
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

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  const show = inView || fallback;

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-flex overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={show ? { y: 0 } : undefined}
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
