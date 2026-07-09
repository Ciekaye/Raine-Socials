import { nav, site, footer } from "@/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-offwhite">
      <div className="container-x flex flex-col items-center gap-6 border-t border-offwhite/10 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <a href="#top" className="font-script text-3xl text-offwhite">
            {site.name}
          </a>
          <p className="mt-1 text-xs uppercase tracking-label text-offwhite/50">
            {footer.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-offwhite/70 transition hover:text-offwhite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-center md:text-right">
          <p className="text-xs text-offwhite/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-offwhite/50">
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
