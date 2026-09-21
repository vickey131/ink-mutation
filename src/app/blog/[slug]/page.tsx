import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogPostView from "@/views/BlogPostView";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | Ink Mutation Tattoo Studio",
    };
  }

  return {
    title: `${post.title} | Ink Mutation Blogs`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Ink Mutation Tattoo Studio`,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
