import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { metrics } from "@/content";

// Cards enter from alternating sides for rhythm.
const directions = ["left", "up", "right"] as const;

export default function Metrics() {
  return (
    <section id="metrics" className="bg-oxblood py-24 text-offwhite md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="script-label text-offwhite/90">{metrics.label}</span>
            <RevealText
              as="h2"
              text={metrics.heading}
              delay={0.1}
              className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl"
            />
            <p className="mt-5 text-sm leading-relaxed text-offwhite/70 sm:text-base">
              {metrics.note}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {metrics.items.map((m, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              direction={directions[i % directions.length]}
              blur
              y={28}
              className="rounded-2xl border border-offwhite/15 bg-offwhite/5 p-8 text-center"
            >
              <p className="font-display text-4xl font-semibold leading-none sm:text-5xl">
                {m.value}
              </p>
              <p className="mt-3 text-base font-medium">{m.label}</p>
              <p className="mt-1 text-xs uppercase tracking-label text-offwhite/60">
                {m.source}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
