import type { MetadataRoute } from "next";
import { siteConfig } from "./config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/impressum", "/datenschutz"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() }));
}
