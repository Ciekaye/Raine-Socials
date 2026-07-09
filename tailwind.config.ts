import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content.ts",
  ],
  theme: {
    extend: {
      colors: {
        oxblood: "#6E1012", // primary maroon — dark bands, headings, accents
        cream: "#ECE3D6", // primary light background
        offwhite: "#FAF7F2", // secondary light background / text on dark
        ink: "#0E0E0E", // near-black contrast sections
        berry: "#A83250", // decorative accent, used sparingly
        body: "#2B2B2B", // body text on light
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      maxWidth: {
        container: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        marquee: "marquee 70s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
