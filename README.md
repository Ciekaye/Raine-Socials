# Raine Socials — Portfolio Website

A fast, mobile-first, single-page portfolio for **Jonna Loraine ("Raine")**, Social Media Manager.
Built with Next.js (App Router) + TypeScript, Tailwind CSS, and Framer Motion.

All copy, metrics, links, and image paths live in one file — **`content.ts`** — so you can update
the site without touching layout code.

---

## Run it locally

> **Node version:** use **Node 22** (this machine's default Node 26 breaks Next 14).
> Prefix commands with the node@22 path, e.g.
> `export PATH="/opt/homebrew/opt/node@22/bin:$PATH"`.

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # lint
```

---

## Edit the content

Open **`content.ts`**. Everything you'd want to change is there, grouped by section:

- `site` — name, SEO title/description, custom domain URL, OG image
- `nav` / `hero` / `about` / `services` / `valueProps` / `tools`
- `feeds` — gallery images grouped by category (Beauty / Fashion / Food / Cafe)
- `projects` — case studies (brand → challenge → what I did → results)
- `testimonials` — client quotes
- `metrics` — your own account-growth proof
- `contact` / `footer`

Anything wrapped in `[[ double brackets ]]` is a **placeholder** waiting for real content — search
the file for `[[` to find every one.

### What to fill in before launch

1. **Real photos** — replace the placeholder SVGs in `public/images/` (see below).
2. **Project metrics** — the results fields use placeholders like `[[+X% reach]]`. Drop in the real
   numbers; CM Sportswear currently has **no** metrics and needs them.
3. **Testimonials** — request a quote from MC Coffee n' Tea and add it to `testimonials.items`.
4. **Booking link** — set `contact.primaryCta.href` to your Calendly / calendar booking URL.
5. **Facebook URL** — set the real page URL in `contact.socials`.
6. **Custom domain** — set `site.url` to your real domain.

---

## Add real photos

Placeholders live in `public/images/` as `.svg` files. To swap in a real image:

1. Add your photo to `public/images/` (e.g. `hero-portrait.jpg`).
2. Update the matching path in `content.ts` (e.g. change `/images/hero-portrait.svg` →
   `/images/hero-portrait.jpg`).

Image slots:

| Slot | File(s) | Recommended |
| --- | --- | --- |
| Hero portrait | `hero-portrait` | professional headshot, 4:5, ~640×800+ |
| About portrait | `about-portrait` | professional photo, 4:5 |
| Feed samples | `feed-{beauty,fashion,food,cafe}-1..3` | square, ~600×600+ |
| Project logos | `logo-mccoffee`, `logo-cmsportswear` | square, transparent ok |
| Project galleries | `project-mccoffee-1..3`, `project-cmsportswear-1..3` | square |
| Social preview | `og-cover` | 1200×630 |

Add or remove feed/gallery items freely by editing the arrays in `content.ts` — the layout adapts.

---

## Deploy to Vercel (with a custom domain)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), **New Project → import the repo**. No config needed —
   Vercel detects Next.js automatically. Click **Deploy**.
3. **Custom domain:** Project → **Settings → Domains → Add**, enter your domain, and follow the DNS
   instructions (add the A / CNAME record at your registrar). SSL is automatic.
4. After the domain is live, set `site.url` in `content.ts` to that domain and redeploy so the SEO /
   Open Graph tags use the real URL.

> If Vercel's build uses a newer Node than this project expects, set the Node version in Project →
> Settings → **Node.js Version** to **22.x**.

---

## Project structure

```
app/
  layout.tsx      # fonts (Playfair Display, Inter, Pinyon Script) + SEO/OG metadata
  page.tsx        # assembles the sections in order
  globals.css     # Tailwind + base styles, reduced-motion handling
components/        # one file per section + shared Reveal / SectionLabel / Lightbox
content.ts        # ← all editable copy, metrics, links, image paths
public/images/     # placeholder SVGs (replace with real photos)
tailwind.config.ts # brand colors + fonts
```

## Brand system

- **Colors:** oxblood `#6E1012`, cream `#ECE3D6`, off-white `#FAF7F2`, ink `#0E0E0E`, berry `#A83250`
- **Fonts:** Playfair Display (headlines), Pinyon Script (script labels), Inter (body)
- Accessibility: semantic HTML, alt text on all images, keyboard-navigable lightbox,
  `prefers-reduced-motion` respected.
