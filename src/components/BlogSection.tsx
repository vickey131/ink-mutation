import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { getFeaturedBlogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  const featuredPosts = getFeaturedBlogPosts(3);

  return (
    <section className="pt-24 pb-12 bg-neutral-light border-t border-border-color relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block mb-3">
              Studio Blogs &amp; Tattoo Insights
            </span>
            <h2 className="font-serif-header text-3xl md:text-4xl font-bold text-foreground">
              Wisdom Etched In Ink
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed mt-2 max-w-xl">
              Curated guides, aftercare mastery, and reflections on the craft of fine lines by the artist.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold px-6 py-3.5 transition-smooth hover:bg-gold-primary hover:text-background shrink-0"
          >
            <span>Explore All Articles</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-background border border-border-color p-3 group hover:border-gold-primary transition-smooth flex flex-col h-full text-left shadow-xs hover:shadow-md"
            >
              {/* Cover Image Container */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative w-full aspect-[16/10] overflow-hidden border border-border-color bg-neutral-light block"
              >
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  className="object-cover transition-smooth group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-neutral-dark/90 backdrop-blur-xs text-background text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 border border-white/10">
                  {post.category}
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between grow space-y-5">
                <div className="space-y-3">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-4 text-[11px] text-foreground/60 tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-gold-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-gold-primary" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-header text-base md:text-lg font-bold text-foreground leading-snug transition-smooth group-hover:text-gold-primary">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-foreground/70 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Action & Author */}
                <div className="pt-4 border-t border-border-color/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gold-primary/50">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] text-foreground/80 font-medium">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest font-bold text-gold-primary hover:text-gold-accent transition-smooth group-hover:translate-x-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
