import {
  TrendingUp,
  BarChart3,
  CalendarCheck,
  Check,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { services, valueProps } from "@/content";

// Map the icon names stored in content.ts to real components.
const icons: Record<string, LucideIcon> = {
  TrendingUp,
  BarChart3,
  CalendarCheck,
};

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <SectionLabel script={services.label} heading={services.heading} />

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Left — stacked value cards */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {valueProps.map((vp, i) => {
              const Icon = icons[vp.icon] ?? TrendingUp;
              return (
                <Reveal
                  key={vp.title}
                  delay={i * 0.08}
                  direction="left"
                  blur
                  y={24}
                  className="group relative overflow-hidden rounded-2xl border border-oxblood/10 bg-offwhite p-6 shadow-sm transition duration-500 ease-out hover:-translate-y-1 hover:border-berry/40 hover:shadow-xl hover:shadow-oxblood/5 sm:p-7"
                >
                  {/* Hairline accent that lights up on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-berry/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                  />
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-oxblood/[0.07] text-oxblood ring-1 ring-inset ring-oxblood/10 transition duration-500 group-hover:bg-oxblood group-hover:text-offwhite group-hover:ring-oxblood">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <span className="font-display text-sm tracking-[0.2em] text-oxblood/25">
                        0{i + 1}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-medium text-oxblood">
                        {vp.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body/80">
                        {vp.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right — everything included panel */}
          <Reveal
            direction="right"
            className="lg:col-span-7"
          >
            <div className="h-full rounded-3xl border border-oxblood/10 bg-offwhite/50 px-6 py-10 shadow-sm sm:px-10 sm:py-12">
              <div className="flex flex-col items-center text-center">
                <span className="script-label text-2xl text-berry sm:text-3xl">
                  What&rsquo;s included
                </span>
                <span className="mt-4 h-px w-12 bg-oxblood/25" aria-hidden />
              </div>

              <ul className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {services.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-4 border-b border-oxblood/10 py-4 transition-colors duration-300 hover:border-berry/40"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-berry/10 text-berry transition-colors duration-300 group-hover:bg-berry group-hover:text-offwhite">
                      <Check size={13} strokeWidth={2.75} />
                    </span>
                    <span className="text-[15px] font-medium text-body transition-colors duration-300 group-hover:text-oxblood sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
