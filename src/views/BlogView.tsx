"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { blogPosts, getAllCategories, BlogPost } from "@/data/blogPosts";

export default function BlogView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...getAllCategories()];

  const filteredPosts: BlogPost[] =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block">
            Ink &amp; Insights
          </span>
          <h1 className="font-serif-header text-4xl font-bold text-foreground">
            Tattoo Blogs &amp; Guides
          </h1>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Essential aftercare protocols, anatomy placement advice, and technical reflections on needle craft directly from the artist.
          </p>
        </div>

        {/* Filter Toggles */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs uppercase tracking-widest font-semibold px-6 py-3 border transition-smooth cursor-pointer ${isActive
                  ? "bg-neutral-dark text-background border-neutral-dark"
                  : "bg-background text-foreground border-border-color hover:border-gold-primary hover:text-gold-primary"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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
                  <h2 className="font-serif-header text-base md:text-lg font-bold text-foreground leading-snug transition-smooth group-hover:text-gold-primary">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

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

        {/* Studio Philosophy & Consultation Banner */}
        <div className="bg-neutral-light border border-border-color p-8 md:p-12 text-center space-y-6 mt-16">
          <div className="w-12 h-12 rounded-none bg-background border border-gold-primary/30 flex items-center justify-center mx-auto text-gold-primary">
            <BookOpen size={24} />
          </div>
          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="font-serif-header text-2xl font-bold text-foreground">
              Have a Custom Tattoo Concept in Mind?
            </h3>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Bring your ideas to Ink Mutation Studio in S.G. Palya, Bengaluru. We specialize in delicate fine lines, minimal symbols, and discreet placements.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold px-8 py-4 transition-smooth hover:bg-gold-primary hover:text-background"
            >
              <span>Book Studio Consultation</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-border-color bg-background text-foreground text-xs uppercase tracking-widest font-bold px-8 py-4 transition-smooth hover:border-gold-primary hover:text-gold-primary"
            >
              <span>View Portfolio Works</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
