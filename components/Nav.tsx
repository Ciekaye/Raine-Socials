"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className={`font-script text-3xl leading-none transition-colors sm:text-4xl ${
            solid ? "text-oxblood" : "text-offwhite drop-shadow"
          }`}
        >
          {site.name}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-berry ${
                solid ? "text-body" : "text-offwhite drop-shadow"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className={`btn-primary !py-2.5 !px-5 transition-colors duration-300 ${
              solid
                ? "shadow-sm"
                : "ring-1 ring-offwhite/70 hover:ring-offwhite"
            }`}
          >
            {nav.cta.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`md:hidden ${solid ? "text-oxblood" : "text-offwhite drop-shadow"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-oxblood/10 bg-cream md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-body hover:bg-oxblood/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
