import type { Metadata } from "next";
import { site } from "./site";

/**
 * Builds consistent per-page metadata: canonical URL, Open Graph, and
 * Twitter card fields. The page's own `opengraph-image.tsx` (same route
 * segment) is picked up automatically by Next.js for the image.
 */
export function pageMetadata(
  path: string,
  title: string,
  description: string
): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
