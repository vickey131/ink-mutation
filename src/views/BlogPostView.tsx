import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  Lightbulb,
  MessageCircle,
  Phone,
} from "lucide-react";
import { BlogPost, blogPosts } from "@/data/blogPosts";

interface BlogPostViewProps {
  post: BlogPost;
}

export default function BlogPostView({ post }: BlogPostViewProps) {
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  return (
    <article className="bg-background min-h-screen">
      {/* Top Header / Breadcrumbs */}
      <div className="bg-neutral-light border-b border-border-color py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between text-xs">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-gold-primary transition-smooth uppercase tracking-widest font-semibold"
          >
            <ArrowLeft size={14} />
            <span>Back to Blogs</span>
          </Link>

          <span className="text-[11px] uppercase tracking-wider text-gold-primary font-bold hidden sm:inline-block">
            {post.category}
          </span>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-14 md:py-20 max-w-4xl mx-auto px-6 space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-foreground/60 tracking-wider">
            <span className="bg-neutral-dark text-background text-[10px] uppercase tracking-widest font-bold px-3 py-1">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-gold-primary" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-gold-primary" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif-header text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            {post.subtitle}
          </p>
        </div>

        {/* Author Bio Bar */}
        <div className="pt-6 border-t border-border-color flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-primary/60 shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground font-serif-header tracking-wider">
                {post.author.name}
              </div>
              <div className="text-xs text-foreground/60">
                {post.author.role}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/917019000191?text=${encodeURIComponent(
                `Hi Suprith, I just read your article "${post.title}" and would like to ask a question.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 border border-border-color bg-neutral-light hover:border-gold-primary text-foreground text-xs uppercase tracking-wider font-semibold px-3 py-2 transition-smooth"
            >
              <MessageCircle size={14} className="text-gold-primary" />
              <span>Ask Artist</span>
            </a>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto px-6 mb-12 md:mb-16">
        <div className="relative w-full aspect-[16/9] border border-border-color p-2 bg-neutral-light">
          <div className="relative w-full h-full overflow-hidden border border-border-color">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>
        </div>
        <p className="text-[11px] text-foreground/50 text-right mt-2 italic">
          Artwork photographed at Ink Mutation Tattoo Studio, Bengaluru.
        </p>
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-6 space-y-12 pb-20">
        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="bg-neutral-light border-l-4 border-gold-primary border-t border-r border-b border-border-color p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-header text-sm font-bold uppercase tracking-widest text-foreground">
                Key Studio Takeaways
              </span>
            </div>
            <ul className="space-y-3">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <CheckCircle2 size={16} className="text-gold-primary shrink-0 mt-1" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-10">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif-header text-xl md:text-2xl font-bold text-foreground tracking-wide">
                {section.heading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.proTip && (
                <div className="bg-gold-primary/10 border border-gold-primary/30 p-5 mt-4 flex items-start gap-3.5">
                  <Lightbulb size={20} className="text-gold-primary shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    <strong className="font-semibold text-foreground block mb-0.5">
                      Artist&apos;s Pro Tip:
                    </strong>
                    {section.proTip}
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-border-color flex flex-wrap items-center gap-2">
          <span className="text-xs text-foreground/50 uppercase tracking-widest font-semibold mr-2">
            Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] bg-neutral-light border border-border-color text-foreground/75 px-3 py-1 uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Consultation Call to Action */}
        <div className="bg-neutral-dark text-background p-8 md:p-10 space-y-6 text-center mt-12 border border-gold-primary/30">
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-primary font-semibold block">
              Private Studio Session
            </span>
            <h3 className="font-serif-header text-2xl md:text-3xl font-bold text-background">
              Bring Your Story To Ink Mutation
            </h3>
            <p className="text-xs md:text-sm text-background/75 leading-relaxed">
              Every appointment is treated with complete sterile single-use care and personalized anatomical design. Schedule your consultation at our S.G. Palya studio in Bengaluru.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gold-primary text-neutral-dark text-xs uppercase tracking-widest font-bold px-7 py-3.5 transition-smooth hover:bg-white hover:text-neutral-dark"
            >
              <span>Book Consultation</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+917019000191"
              className="inline-flex items-center gap-2 border border-white/20 text-background text-xs uppercase tracking-widest font-bold px-7 py-3.5 transition-smooth hover:border-gold-primary hover:text-gold-primary"
            >
              <Phone size={14} />
              <span>+91 70190 00191</span>
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="pt-16 border-t border-border-color space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-header text-lg font-bold text-foreground">
                More From The Studio Blogs
              </h3>
              <Link
                href="/blog"
                className="text-xs uppercase tracking-widest text-gold-primary hover:text-gold-accent font-semibold transition-smooth inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-neutral-light border border-border-color p-4 block hover:border-gold-primary transition-smooth"
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden border border-border-color mb-3">
                    <Image
                      src={related.coverImage}
                      alt={related.coverImageAlt}
                      fill
                      className="object-cover transition-smooth group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-primary font-bold block mb-1">
                    {related.category}
                  </span>
                  <h4 className="font-serif-header text-sm font-bold text-foreground group-hover:text-gold-primary transition-smooth line-clamp-2">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
