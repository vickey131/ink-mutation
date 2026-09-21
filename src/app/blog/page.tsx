import { Metadata } from "next";
import BlogView from "@/views/BlogView";

export const metadata: Metadata = {
  title: "Tattoo Blogs & Guides | Ink Mutation Tattoo Studio Bangalore",
  description:
    "Expert tattoo guides, aftercare protocols, fine-line needle precision techniques, and first-time tattoo advice from artist Suprith at Ink Mutation, S.G. Palya, Bengaluru.",
  openGraph: {
    title: "Tattoo Blogs & Guides | Ink Mutation Tattoo Studio",
    description:
      "Educational articles, aftercare routines, and tattoo design insights by Suprith.",
    images: ["/images/hero_bg.png"],
  },
};

export default function BlogPage() {
  return <BlogView />;
}
