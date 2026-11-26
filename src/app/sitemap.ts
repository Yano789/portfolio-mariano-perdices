import type { MetadataRoute } from "next";
import { site } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}`, lastModified: new Date() })),
  ];
}
