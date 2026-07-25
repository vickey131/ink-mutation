import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this to your actual production domain when deployed
  const baseUrl = "https://inkmutation.com";

  const routes = [
    "",
    "/portfolio",
    "/styles",
    "/styles/line-art",
    "/styles/minimal",
    "/styles/hidden",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
