import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/speaking-media", destination: "/services", permanent: true },
      { source: "/ship-one-thing", destination: "/workshops", permanent: true },
      { source: "/fractional-ai-lead", destination: "/consultations", permanent: true },
      { source: "/enterprise-program", destination: "/workshops", permanent: true },
    ];
  },
};

export default nextConfig;
