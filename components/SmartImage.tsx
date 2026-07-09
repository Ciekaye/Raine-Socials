import NextImage, { type ImageProps } from "next/image";

/**
 * Drop-in replacement for next/image.
 *
 * SVGs (our placeholder art) are served `unoptimized` — they're vector, so the raster
 * optimizer adds nothing and actually rejects them. Real photos (.jpg/.png/.webp) pass
 * straight through to next/image and get optimized normally. So once Raine swaps a
 * placeholder .svg for a real .jpg in content.ts, optimization just turns on — no code change.
 */
export default function SmartImage(props: ImageProps) {
  const src = typeof props.src === "string" ? props.src : "";
  const isSvg = src.toLowerCase().endsWith(".svg");
  return <NextImage {...props} unoptimized={props.unoptimized ?? isSvg} />;
}
