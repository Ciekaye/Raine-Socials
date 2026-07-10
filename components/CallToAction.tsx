import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { cta, contact } from "@/content";

/**
 * Mid-page conversion banner: an elegant oxblood band that breaks up the
 * light sections and drives to the booking link (shared with Contact).
 */
export default function CallToAction() {
  return (
    <section id="book" className="bg-cream py-20 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-oxblood px-8 py-16 text-center text-offwhite shadow-xl shadow-oxblood/10 sm:px-12 md:py-20">
            {/* Soft decorative glows for depth */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-berry/25 blur-3xl"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-berry/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="script-label text-offwhite/85">{cta.label}</span>
              <RevealText
                as="h2"
                text={cta.heading}
                delay={0.1}
                className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl"
              />
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-offwhite/75 sm:text-lg">
                {cta.subhead}
              </p>
              <div className="mt-9">
                <a
                  href={contact.primaryCta.href}
                  className="btn-primary group bg-offwhite text-oxblood hover:bg-cream hover:text-oxblood"
                >
                  {cta.button}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
