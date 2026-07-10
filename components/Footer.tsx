import {
  Instagram,
  Facebook,
  Music2,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { nav, site, footer, contact } from "@/content";

// TikTok has no dedicated lucide glyph; Music2 stands in for it.
const socialIcons: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  TikTok: Music2,
};

export default function Footer() {
  const year = new Date().getFullYear();

  // The Contact link now points at the footer itself, so drop it here.
  const exploreLinks = nav.links.filter((link) => link.href !== "#contact");

  return (
    <footer id="contact" className="bg-ink text-offwhite">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr]">
          {/* Brand + email */}
          <div>
            <a href="#top" className="font-script text-4xl text-offwhite">
              {site.name}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-offwhite/60">
              {footer.tagline}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="group mt-6 inline-flex items-center gap-2 text-sm text-offwhite/80 transition hover:text-offwhite"
            >
              <Mail
                size={16}
                className="text-offwhite/60 transition group-hover:text-berry"
              />
              {contact.email}
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="eyebrow text-offwhite/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-offwhite/70 transition hover:text-offwhite"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="eyebrow text-offwhite/50">Connect</h3>
            <ul className="mt-5 space-y-3">
              {contact.socials.map((s) => {
                const Icon = socialIcons[s.platform] ?? Mail;
                return (
                  <li key={s.platform}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-offwhite/70 transition hover:text-offwhite"
                    >
                      <Icon
                        size={18}
                        className="text-offwhite/50 transition group-hover:text-berry"
                      />
                      {s.handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-offwhite/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-offwhite/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-offwhite/50">
            Site by{" "}
            <a
              href={footer.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-offwhite/70 underline-offset-2 transition hover:text-offwhite hover:underline"
            >
              {footer.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
