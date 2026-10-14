import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return new ImageResponse(
    ogImageElement(
      "Team-wide AI fluency, rolled out like a real program.",
      "Enterprise Program"
    ),
    { ...size }
  );
}
