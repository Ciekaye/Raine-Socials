import Reveal from "./Reveal";
import RevealText from "./RevealText";

type SectionLabelProps = {
  script: string;
  heading: string;
  /** Alignment of the header block. */
  align?: "left" | "center";
  /** Color theme for placement on light vs. dark backgrounds. */
  tone?: "dark" | "light";
};

/**
 * The recurring editorial header: a script-font label above a serif heading,
 * separated by a thin rule. Used at the top of most sections.
 */
export default function SectionLabel({
  script,
  heading,
  align = "center",
  tone = "dark",
}: SectionLabelProps) {
  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const scriptColor = tone === "light" ? "text-offwhite/90" : "text-berry";
  const headingColor = tone === "light" ? "text-offwhite" : "text-oxblood";

  return (
    <Reveal className={`flex flex-col ${alignClasses}`}>
      <span className={`script-label ${scriptColor}`}>{script}</span>
      <RevealText
        as="h2"
        text={heading}
        delay={0.1}
        className={`mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl md:text-[2.75rem] ${headingColor}`}
      />
      <span
        className={`mt-5 h-px w-16 ${tone === "light" ? "bg-offwhite/40" : "bg-oxblood/30"}`}
        aria-hidden
      />
    </Reveal>
  );
}
