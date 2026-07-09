import Image from "@/components/SmartImage";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { about } from "@/content";

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-24 md:py-32">
      <div className="container-x grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
        {/* Portrait collage */}
        <Reveal className="order-1 md:order-none">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-4 -translate-y-4 -rotate-3 rounded-2xl border border-oxblood/30"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              {/* Slight scale so the parallax drift never exposes an edge. */}
              <Parallax amount={30} className="absolute inset-0">
                <Image
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="scale-110 object-cover"
                />
              </Parallax>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal direction="right" y={28}>
            <span className="script-label text-berry">{about.label}</span>
            <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-oxblood sm:text-4xl md:text-[2.75rem]">
              {about.heading}
            </h2>
            <span className="mt-5 block h-px w-16 bg-oxblood/30" aria-hidden />
          </Reveal>

          <div className="mt-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className={
                    i === about.paragraphs.length - 1
                      ? "font-display text-lg italic text-oxblood"
                      : "text-base leading-relaxed text-body sm:text-lg"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
