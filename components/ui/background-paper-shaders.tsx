"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "framer-motion";

/**
 * Animated WebGL mesh-gradient background for the hero, recolored to the Raine Socials
 * palette (deep wine → oxblood → berry). Adapted from the paper-design shaders demo.
 *
 * - Mounts client-side only (guards against SSR/WebGL + hydration mismatch); until then
 *   the parent's solid oxblood background shows as a graceful fallback.
 * - Freezes (speed 0) when the visitor prefers reduced motion.
 */
export function HeroShaderBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <MeshGradient
      className={className}
      // Brand palette — kept dark so the off-white hero text stays legible.
      colors={["#2A0709", "#6E1012", "#A83250", "#4A0B0D"]}
      speed={reduce ? 0 : 0.6}
      distortion={0.8}
      swirl={0.6}
      grainOverlay={0.12}
    />
  );
}

export default HeroShaderBackground;
