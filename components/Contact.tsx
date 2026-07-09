import {
  Instagram,
  Facebook,
  Music2,
  Mail,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { contact } from "@/content";

// TikTok has no dedicated lucide glyph; Music2 stands in for it.
const socialIcons: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  TikTok: Music2,
};

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-offwhite md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="script-label text-berry">{contact.label}</span>
            <RevealText
              as="h2"
              text={contact.heading}
              delay={0.1}
              className="mt-2 font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
            />
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-offwhite/75 sm:text-lg">
              {contact.subhead}
            </p>
          </Reveal>

          {/* Single primary action */}
          <Reveal delay={0.1} className="mt-9">
            <a
              href={contact.primaryCta.href}
              className="btn-primary bg-offwhite text-oxblood hover:bg-cream hover:text-oxblood"
            >
              {contact.primaryCta.label}
              <ArrowRight size={18} />
            </a>
          </Reveal>

          {/* Email */}
          <Reveal delay={0.15} className="mt-8">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-offwhite/80 transition hover:text-offwhite"
            >
              <Mail size={16} />
              {contact.email}
            </a>
          </Reveal>

          {/* Socials */}
          <Reveal delay={0.2} className="mt-10">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {contact.socials.map((s) => {
                const Icon = socialIcons[s.platform] ?? Mail;
                return (
                  <li key={s.platform}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-offwhite/75 transition hover:text-offwhite"
                    >
                      <Icon
                        size={18}
                        className="text-offwhite/60 transition group-hover:text-berry"
                      />
                      {s.handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
