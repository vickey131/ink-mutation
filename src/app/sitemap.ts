import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this to your actual production domain when deployed
  const baseUrl = "https://www.inkmutation.com";

  const staticRoutes = [
    "",
    "/portfolio",
    "/styles",
    "/styles/line-art",
    "/styles/minimal",
    "/styles/classic",
    "/blog",
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/blog" ? 0.9 : 0.8,
  }));
}
