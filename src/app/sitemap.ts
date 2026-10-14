import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/consultations", priority: 0.9, changeFrequency: "monthly" },
    { path: "/workshops", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-hack-sprints", priority: 0.9, changeFrequency: "monthly" },
    { path: "/enterprise-program", priority: 0.9, changeFrequency: "monthly" },
    { path: "/speaking-media", priority: 0.7, changeFrequency: "monthly" },
    { path: "/community", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/book-a-call", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
