"use client";

import { useMemo, useState } from "react";
import Image from "@/components/SmartImage";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Lightbox from "./Lightbox";
import { feeds, type FeedCategory } from "@/content";

type Filter = "All" | FeedCategory;

export default function Feeds() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? feeds.items
        : feeds.items.filter((item) => item.category === filter),
    [filter]
  );

  const filters: Filter[] = ["All", ...feeds.categories];

  return (
    <section id="work" className="bg-offwhite py-24 md:py-32">
      <div className="container-x">
        <SectionLabel script={feeds.label} heading={feeds.heading} />

        {/* Filter tabs */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition ${
                filter === f
                  ? "bg-oxblood text-offwhite"
                  : "border border-oxblood/20 text-body hover:border-oxblood/50"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {visible.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 4) * 0.05}
              blur
              y={16}
              className="group"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View ${item.alt}`}
                className="relative block aspect-square w-full overflow-hidden rounded-xl shadow-sm ring-1 ring-oxblood/5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxblood"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-oxblood/0 transition group-hover:bg-oxblood/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={visible.map((v) => ({ src: v.src, alt: v.alt }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
