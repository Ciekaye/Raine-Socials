"use client";

import { useState } from "react";
import Image from "@/components/SmartImage";
import { Check, Quote } from "lucide-react";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import SectionLabel from "./SectionLabel";
import Lightbox from "./Lightbox";
import { projects, type Project } from "@/content";

function ProjectCard({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gallery = project.gallery.map((src, i) => ({
    src,
    alt: `${project.client} — final feed ${i + 1}`,
  }));

  return (
    <Reveal
      as="article"
      blur
      y={28}
      className="overflow-hidden rounded-3xl border border-oxblood/10 bg-offwhite shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Details */}
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-oxblood/10">
              <Image
                src={project.logo}
                alt={`${project.client} logo`}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium text-oxblood">
                {project.client}
              </h3>
              <p className="text-xs uppercase tracking-label text-berry">
                {project.platform}
              </p>
            </div>
          </div>

          <dl className="mt-7 space-y-4">
            <div>
              <dt className="eyebrow text-body/60">The brand</dt>
              <dd className="mt-1 text-body">{project.brand}</dd>
            </div>
            <div>
              <dt className="eyebrow text-body/60">The challenge</dt>
              <dd className="mt-1 text-body">{project.challenge}</dd>
            </div>
            <div>
              <dt className="eyebrow text-body/60">What I did</dt>
              <dd className="mt-2">
                <ul className="space-y-2">
                  {project.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2.5 text-body">
                      <Check
                        size={17}
                        className="mt-1 shrink-0 text-berry"
                        strokeWidth={2.25}
                      />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          {/* Results — big numbers */}
          <div className="mt-8">
            <p className="eyebrow text-body/60">Results</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.results.map((result) => (
                <span
                  key={result}
                  className="rounded-xl bg-oxblood px-4 py-3 font-display text-lg font-medium leading-tight text-offwhite sm:text-xl"
                >
                  {result}
                </span>
              ))}
            </div>
          </div>

          {project.quote && (
            <blockquote className="mt-8 border-l-2 border-berry pl-4">
              <Quote size={18} className="text-berry" />
              <p className="mt-2 font-display text-lg italic text-oxblood">
                {project.quote.text}
              </p>
              <footer className="mt-2 text-sm text-body/70">
                — {project.quote.attribution}
              </footer>
            </blockquote>
          )}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-2 bg-cream p-4 sm:gap-3 sm:p-6 lg:grid-rows-2">
          {gallery.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`View ${img.alt}`}
              className={`relative overflow-hidden rounded-xl shadow-sm ring-1 ring-oxblood/5 transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxblood ${
                i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
              }`}
            >
              {i === 0 ? (
                // Large hero image drifts for depth; scale hides the drift edge.
                <Parallax amount={28} className="absolute inset-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="scale-110 object-cover"
                  />
                </Parallax>
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <SectionLabel script={projects.label} heading={projects.heading} />
        <div className="mt-14 space-y-10">
          {projects.items.map((project) => (
            <ProjectCard key={project.client} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
