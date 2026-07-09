import Image from "@/components/SmartImage";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { tools } from "@/content";

export default function Tools() {
  // Duplicate the list so the track can translate by -50% and loop seamlessly.
  const row = [...tools.items, ...tools.items];

  return (
    <section id="tools" className="border-b border-body/10 bg-offwhite py-16 md:py-20">
      <div className="container-x">
        <SectionLabel script={tools.label} heading={tools.heading} />
      </div>

      {/* Full-bleed, edge-faded track of monochrome logos scrolling infinitely.
          The track is twice the content, animated from 0 to -50% for a seamless
          loop; hovering pauses it. */}
      <div
        className="group relative mt-10 overflow-hidden md:mt-12"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-x-16 pr-16 group-hover:[animation-play-state:paused] sm:gap-x-20 md:gap-x-24 md:pr-24">
          {row.map((tool, i) => (
            <li key={`${tool.name}-${i}`} className="shrink-0">
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                width={72}
                height={72}
                title={tool.name}
                className="h-14 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-16"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
