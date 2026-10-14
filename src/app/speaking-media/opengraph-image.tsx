import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return new ImageResponse(
    ogImageElement(
      "Talks on AI adoption, built for people who have to act on them.",
      "Speaking & Media"
    ),
    { ...size }
  );
}
