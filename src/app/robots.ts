import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Update this to your actual production domain when deployed
  const baseUrl = "https://inkmutation.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
