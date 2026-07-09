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

        {/* Value props */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {valueProps.map((vp, i) => {
            const Icon = icons[vp.icon] ?? TrendingUp;
            return (
              <Reveal
                key={vp.title}
                delay={i * 0.08}
                direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
                blur
                y={28}
                className="rounded-2xl border border-oxblood/10 bg-offwhite p-7 text-center shadow-sm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-oxblood/10 text-oxblood">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-oxblood">
                  {vp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{vp.body}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Service list */}
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
            {services.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-oxblood/10 py-3.5 text-body"
              >
                <Check size={18} className="shrink-0 text-berry" strokeWidth={2.25} />
                <span className="text-[15px] font-medium sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
