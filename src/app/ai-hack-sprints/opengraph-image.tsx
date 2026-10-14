import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return new ImageResponse(
    ogImageElement(
      "One week. One real product. Zero slideware.",
      "AI Hack Sprints"
    ),
    { ...size }
  );
}
