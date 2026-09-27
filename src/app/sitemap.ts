import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const lastModified = new Date();

  const routes = [
    "",
    "/solutions",
    "/solutions/ai-agents",
    "/solutions/software-engineering",
    "/solutions/automation",
    "/solutions/quality-engineering",
    "/solutions/technology-consulting",
    "/technologies",
    "/portfolio",
    "/cases",
    "/process",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
