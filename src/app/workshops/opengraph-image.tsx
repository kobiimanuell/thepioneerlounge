import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return new ImageResponse(
    ogImageElement(
      "Fluency, built by doing, not by watching a slide deck.",
      "Workshops"
    ),
    { ...size }
  );
}
