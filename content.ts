/**
 * content.ts — single source of truth for Raine Socials.
 *
 * Edit copy, metrics, links, and image paths here. No layout code lives in this file,
 * so you can safely change wording and numbers without touching components.
 *
 * Placeholders read like [[ ... ]] — replace them with the real thing.
 * Image paths point at placeholder SVGs in /public/images; drop a real photo in with the
 * same name (any extension) and update the path here.
 */

export const site = {
  name: "Raine Socials",
  personName: "Jonna Loraine",
  nickname: "Raine",
  role: "Social Media Manager",
  title:
    "Raine Socials — Social Media Manager | Sophisticated Social, Measurable Results",
  description:
    "Jonna Loraine (Raine) is a social media manager helping distinctive brands show up online with a presence that looks as good as it performs. Sophisticated social, measurable results.",
  url: "https://rainesocials.com", // update to the real custom domain before launch
  ogImage: "/images/og-cover.svg",
};

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Work With Me", href: "#book" },
};

export const hero = {
  eyebrow: "Social Media Manager",
  headline: "Distinctive brands deserve a distinctive presence.",
  subhead: "Sophisticated social. Measurable results.",
  line: "I help brands show up online with a presence that looks as good as it performs.",
  primaryCta: { label: "Work With Me", href: "#contact" },
  secondaryCta: { label: "See my work", href: "#work" },
  portrait: {
    src: "/images/hero-portrait.svg", // [[hero-portrait.jpg — professional headshot, maroon or blazer look]]
    alt: "Jonna Loraine, social media manager and founder of Raine Socials",
  },
};

export const about = {
  label: "About",
  heading: "Where creativity meets conversion",
  paragraphs: [
    "Hi, I'm Jonna Loraine — Raine for short. I help brands show up online with a presence that looks as good as it performs.",
    "From content planning and graphic design to captions, scheduling, and community engagement, I handle the day-to-day of your social media so you can focus on running your business.",
    "My approach pairs a strong aesthetic eye with consistency and genuine care for results — every post is planned with intention, and every brand I work with gets a presence built to grow.",
    "Let's create something distinctive together.",
  ],
  portrait: {
    src: "/images/about-portrait.svg", // [[about-portrait.jpg]]
    alt: "Portrait of Jonna Loraine (Raine)",
  },
};

export const valueProps = [
  {
    icon: "TrendingUp",
    title: "Boost Online Presence",
    body: "Grow visibility and consistency across Facebook, Instagram, and TikTok.",
  },
  {
    icon: "BarChart3",
    title: "Track & Report Performance",
    body: "Measure engagement, reach, and growth with clear monthly insights.",
  },
  {
    icon: "CalendarCheck",
    title: "Strategic Content Plans",
    body: "Weekly content calendars that keep posting consistent and on-brand.",
  },
];

export const services = {
  label: "Services",
  heading: "Everything your social presence needs",
  items: [
    "Profile Optimization",
    "Social Media Strategy",
    "Content Creation",
    "Graphic Design",
    "Scheduling & Posting",
    "Account Management",
    "Analytics & Reporting",
    "Caption Writing",
    "Audience & Community Engagement",
    "Full Social Media Management",
  ],
};

export const cta = {
  label: "Ready when you are",
  heading: "Let's make your brand impossible to scroll past.",
  subhead:
    "Book a free discovery call and I'll map out a social presence that looks the part and grows the numbers.",
  // Reuses the booking link defined on `contact.primaryCta.href`.
  button: "Book Now",
};

export type Tool = { name: string; logo: string };

export const tools: { label: string; heading: string; items: Tool[] } = {
  label: "Tools",
  heading: "The stack behind the work",
  items: [
    { name: "Notion", logo: "/images/tools/notion.svg" },
    { name: "Google Sheets", logo: "/images/tools/google-sheets.svg" },
    { name: "Canva", logo: "/images/tools/canva.svg" },
    { name: "DaVinci Resolve", logo: "/images/tools/davinci-resolve.svg" },
    { name: "CapCut", logo: "/images/tools/capcut.svg" },
    { name: "Google Calendar", logo: "/images/tools/google-calendar.svg" },
    { name: "Google Forms", logo: "/images/tools/google-forms.svg" },
    { name: "Google Drive", logo: "/images/tools/google-drive.svg" },
    { name: "Meta Business Suite", logo: "/images/tools/meta.svg" },
    { name: "ChatGPT", logo: "/images/tools/chatgpt.svg" },
    { name: "Loom", logo: "/images/tools/loom.svg" },
    { name: "Calendly", logo: "/images/tools/calendly.svg" },
  ],
};

export type FeedCategory = "Beauty" | "Fashion" | "Food" | "Cafe";

export const feeds = {
  label: "Portfolio",
  heading: "Sample feeds & graphics",
  categories: ["Beauty", "Fashion", "Food", "Cafe"] as FeedCategory[],
  // Add or remove items freely; category must match one of the categories above.
  items: [
    { src: "/images/feed-beauty-1.svg", category: "Beauty", alt: "Beauty feed sample 1" },
    { src: "/images/feed-beauty-2.svg", category: "Beauty", alt: "Beauty feed sample 2" },
    { src: "/images/feed-beauty-3.svg", category: "Beauty", alt: "Beauty feed sample 3" },
    { src: "/images/feed-fashion-1.svg", category: "Fashion", alt: "Fashion feed sample 1" },
    { src: "/images/feed-fashion-2.svg", category: "Fashion", alt: "Fashion feed sample 2" },
    { src: "/images/feed-fashion-3.svg", category: "Fashion", alt: "Fashion feed sample 3" },
    { src: "/images/feed-food-1.svg", category: "Food", alt: "Food feed sample 1" },
    { src: "/images/feed-food-2.svg", category: "Food", alt: "Food feed sample 2" },
    { src: "/images/feed-food-3.svg", category: "Food", alt: "Food feed sample 3" },
    { src: "/images/feed-cafe-1.svg", category: "Cafe", alt: "Cafe feed sample 1" },
    { src: "/images/feed-cafe-2.svg", category: "Cafe", alt: "Cafe feed sample 2" },
    { src: "/images/feed-cafe-3.svg", category: "Cafe", alt: "Cafe feed sample 3" },
  ],
};

export type Project = {
  client: string;
  logo: string;
  platform: string;
  brand: string;
  challenge: string;
  actions: string[];
  results: string[]; // keep these punchy — big numbers render large
  gallery: string[];
  quote?: { text: string; attribution: string };
};

export const projects: { label: string; heading: string; items: Project[] } = {
  label: "Case Studies",
  heading: "Selected projects",
  items: [
    {
      client: "MC Coffee n' Tea",
      logo: "/images/logo-mccoffee.svg",
      platform: "Facebook & Instagram",
      brand: "A local cafe in Norzagaray, Bulacan.",
      challenge: "Low online reach and limited walk-in traffic from social.",
      actions: [
        "Consistent posting & community engagement",
        "Posts featuring real customers",
        "Prizes, raffles & promos to drive reach",
        "User-generated content (UGC)",
      ],
      results: [
        "[[+X% Facebook reach]]",
        "[[+X% engagement]]",
        "[[walk-ins / sales attributed to social]]",
      ],
      gallery: [
        "/images/project-mccoffee-1.svg",
        "/images/project-mccoffee-2.svg",
        "/images/project-mccoffee-3.svg",
      ],
      // Ask MC Coffee n' Tea for a short testimonial to drop in here.
      quote: undefined,
    },
    {
      client: "CM Sportswear",
      logo: "/images/logo-cmsportswear.svg",
      platform: "Facebook & Instagram",
      brand: "A US-based custom clothing & jersey brand.",
      challenge: "Needed eye-catching, conversion-focused graphic content.",
      actions: [
        "Consistent posting & community engagement",
        "Posts featuring customer reviews & feedback",
        "Eye-catching graphic design",
      ],
      results: [
        "[[add real metrics — this project currently has none]]",
      ],
      gallery: [
        "/images/project-cmsportswear-1.svg",
        "/images/project-cmsportswear-2.svg",
        "/images/project-cmsportswear-3.svg",
      ],
      quote: undefined,
    },
  ],
};

export type Metric = {
  value: string;
  label: string;
  source: string; // honest attribution — personal / business / affiliate account
};

export const metrics: { label: string; heading: string; note: string; items: Metric[] } = {
  label: "Proof",
  heading: "Growth I've driven firsthand",
  note: "These figures reflect the growth of my own Business, Affiliate, and Personal accounts — supporting proof of the strategies I bring to client work.",
  items: [
    { value: "[[+X%]]", label: "Reach growth", source: "Personal business account" },
    { value: "[[+X]]", label: "New followers", source: "Affiliate account" },
    { value: "[[+X%]]", label: "Engagement rate", source: "Personal account" },
  ],
};

export const contact = {
  label: "Contact",
  heading: "Let's work together.",
  subhead:
    "Ready for a social presence that looks as good as it performs? Book a call and let's talk.",
  primaryCta: {
    label: "Book a Call",
    href: "[[booking or calendar link]]", // e.g. Calendly / Google Calendar booking page
  },
  email: "collabwithraine@gmail.com",
  socials: [
    { platform: "Instagram", handle: "@rainesocialsph_", href: "https://instagram.com/rainesocialsph_" },
    { platform: "Facebook", handle: "Raine Socials", href: "[[Facebook page URL]]" },
    { platform: "TikTok", handle: "rainenarvaja", href: "https://tiktok.com/@rainenarvaja" },
  ],
};

export const footer = {
  tagline: "Sophisticated social. Measurable results.",
  credit: {
    label: "Cyvera Digitals",
    href: "https://www.cyveradigitals.com",
  },
};
