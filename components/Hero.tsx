"use client";

import Image from "@/components/SmartImage";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { hero } from "@/content";
import { HeroShaderBackground } from "@/components/ui/background-paper-shaders";

export default function Hero() {
  const reduce = useReducedMotion();

  // The hero is position:sticky, so its own bounding box freezes once pinned —
  // tracking it with useScroll({ target }) would never advance. Instead drive
  // the effect off the raw page scroll over the hero's own height: 0 = at top,
  // `height` = fully scrolled past (i.e. About has covered it).
  const heroRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(1);
  useEffect(() => {
    const measure = () =>
      setHeight(heroRef.current?.offsetHeight || window.innerHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollY } = useScroll();
  // As About scrolls over it, the whole hero shrinks and dims (recedes), while
  // its copy/portrait drift up slightly for depth.
  const range = reduce ? [0, 1] : [0, height];
  const y = useTransform(scrollY, range, reduce ? [0, 0] : [0, -100]);
  const scale = useTransform(scrollY, range, reduce ? [1, 1] : [1, 0.86]);
  const dim = useTransform(scrollY, range, reduce ? [0, 0] : [0, 0.6]);

  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="sticky top-0 z-0 overflow-hidden bg-oxblood text-offwhite"
    >
      {/* Everything inside scales down as one unit (bg + copy) so the hero
          visibly recedes behind the incoming About panel. */}
      <motion.div style={{ scale, transformOrigin: "center" }}>
        {/* Animated shader background + contrast overlays (decorative).
            Sized larger than the section (-inset-[10%] = 120%) so that when the
            wrapper scales down to 0.86 during the recede, the background still
            fully covers the section and never exposes a seam at the edges. */}
        <div aria-hidden className="pointer-events-none absolute -inset-[10%] z-0">
          <HeroShaderBackground className="absolute inset-0 h-full w-full" />
          {/* Centered vertical veil — darkest through the middle band where the
              headline sits, so the off-white text stays legible over the shader
              now that the layout is centered rather than left-weighted. */}
          <div className="absolute inset-0 bg-gradient-to-b from-oxblood/45 via-oxblood/65 to-oxblood/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/20" />
        </div>

        <motion.div
          style={{ y }}
          className="container-x relative z-10 flex min-h-[92vh] flex-col items-center justify-center gap-10 pb-16 pt-28 text-center md:min-h-screen md:pt-24"
        >
        {/* Centered copy stack */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          className="flex max-w-3xl flex-col items-center"
        >
          <motion.p
            variants={item}
            transition={{ duration: 0.6 }}
            // Light rose (berry lightened) so the eyebrow reads on the dark
            // oxblood hero; plain text-berry is too low-contrast here.
            className="eyebrow text-[#E7A9B4]"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            transition={{ duration: 0.6 }}
            className="mt-5 text-balance font-display text-3xl font-medium leading-[1.08] sm:text-5xl sm:leading-[1.05] lg:text-6xl"
          >
            Distinctive brands deserve{" "}
            <br className="hidden sm:block" />a distinctive presence.
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.6 }}
            className="mt-6 font-display text-xl italic text-offwhite/90 sm:text-2xl"
          >
            {hero.subhead}
          </motion.p>

          <motion.p
            variants={item}
            transition={{ duration: 0.6 }}
            className="mt-4 max-w-md text-sm leading-relaxed text-offwhite/75 sm:text-base lg:max-w-none lg:whitespace-nowrap lg:text-lg"
          >
            {hero.line}
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          >
            <a
              href={hero.primaryCta.href}
              className="btn-primary bg-offwhite text-oxblood hover:bg-cream hover:text-oxblood"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-offwhite/90 hover:text-offwhite"
            >
              {hero.secondaryCta.label}
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Three-image collage, centered below the headline — larger straight
            card in the middle flanked by two smaller tilted "polaroid" cards. */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full max-w-2xl items-center justify-center"
        >
          {/* Left */}
          <div className="relative z-10 -mr-6 w-[30%] -rotate-6 translate-y-6 rounded-lg border border-offwhite/15 bg-cream p-1.5 shadow-2xl sm:-mr-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src="/images/feed-fashion-1.svg"
                alt="Fashion campaign content"
                fill
                sizes="(max-width: 768px) 26vw, 12vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Center */}
          <div className="relative z-20 w-[38%] rounded-lg border border-offwhite/15 bg-cream p-2 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                fill
                priority
                sizes="(max-width: 768px) 34vw, 16vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div className="relative z-10 -ml-6 w-[30%] rotate-6 translate-y-6 rounded-lg border border-offwhite/15 bg-cream p-1.5 shadow-2xl sm:-ml-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src="/images/feed-beauty-1.svg"
                alt="Beauty brand content"
                fill
                sizes="(max-width: 768px) 26vw, 12vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
        </motion.div>
      </motion.div>

      {/* Dims the whole hero as About covers it, reinforcing the recede. */}
      <motion.div
        aria-hidden
        style={{ opacity: dim }}
        className="pointer-events-none absolute inset-0 z-20 bg-ink"
      />
    </section>
  );
}
