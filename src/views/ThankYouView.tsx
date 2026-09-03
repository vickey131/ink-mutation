"use client";

import React from "react";
import Link from "next/link";
import { Check, Phone, MessageSquare, ArrowRight, ArrowUpRight, ChevronDown, Clock, MapPin } from "lucide-react";

export default function ThankYouView() {
  return (
    <div className="bg-background min-h-[calc(100vh-80px)]">
      {/* 1. Top Sub-header / Status Bar */}
      <div className="border-b border-border-color bg-neutral-light/50 py-2.5 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs text-foreground/60">
            <Link href="/" className="hover:text-gold-primary transition-smooth">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Thank You</span>
          </nav>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-neutral-dark text-background text-xs tracking-wider uppercase font-semibold px-4 py-2 transition-smooth hover:bg-gold-primary hover:text-background"
          >
            <span>Back to Main Site</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* 2. Hero Confirmation Section */}
      <section className="min-h-[calc(100vh-130px)] flex flex-col justify-between items-center py-6 md:py-10 px-6">
        <div className="hidden md:block" />

        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-7 my-auto">
          {/* Booking Request Received phrase positioned just above the tick mark */}
          <div className="flex items-center justify-center">
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-gold-accent">
              Booking Request Received
            </span>
          </div>

          {/* Elegant Circular Checkmark Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold-primary/40 bg-gold-primary/5 text-gold-accent shadow-sm">
            <Check size={34} strokeWidth={2.5} className="text-gold-primary" />
          </div>

          {/* Heading and Divider */}
          <div className="space-y-3">
            <h1 className="font-serif-header text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-wide">
              THANK YOU
            </h1>
            <div className="w-16 h-0.5 bg-gold-primary mx-auto" />
          </div>

          {/* Core Message */}
          <p className="text-sm sm:text-base text-foreground/75 leading-relaxed max-w-xl mx-auto font-normal">
            Your tattoo inquiry is in. It means a lot that you&apos;re trusting{" "}
            <strong className="font-semibold text-foreground">Ink Mutation</strong> with your next piece — the artist will be in touch very soon.
          </p>

          {/* Primary Quick Contact Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:+917019000191"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold px-8 py-4 transition-smooth hover:bg-gold-primary hover:text-background"
            >
              <Phone size={15} />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/917019000191?text=Hi%20Suprith,%20I%20just%20submitted%20a%20booking%20enquiry%20on%20the%20website!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-border-color bg-background text-foreground text-xs uppercase tracking-widest font-bold px-8 py-4 transition-smooth hover:border-gold-primary hover:text-gold-primary hover:bg-neutral-light/50"
            >
              <MessageSquare size={15} className="text-[#25D366]" />
              <span>WhatsApp Artist</span>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-10 sm:pt-14 pb-4 flex flex-col items-center justify-center">
          <a
            href="#while-you-wait"
            className="inline-flex flex-col items-center gap-2 text-foreground/45 hover:text-gold-primary transition-smooth group cursor-pointer"
            aria-label="Scroll down to explore while you wait section"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-foreground/50 group-hover:text-gold-primary transition-smooth">
              Scroll to explore
            </span>
            <div className="w-8 h-8 rounded-full border border-border-color flex items-center justify-center group-hover:border-gold-primary bg-neutral-light/50 transition-smooth animate-bounce">
              <ChevronDown size={15} className="text-foreground/60 group-hover:text-gold-primary transition-smooth" />
            </div>
          </a>
        </div>
      </section>

      {/* 3. "While You Wait" Feature Exploration Cards */}
      <section
        id="while-you-wait"
        className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center pt-10 md:pt-14 pb-16 md:pb-20 bg-neutral-light/30 border-t border-border-color px-6 scroll-mt-20"
      >
        <div className="max-w-6xl w-full mx-auto space-y-8 md:space-y-10">
          <div className="text-center space-y-2.5">
            <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-gold-accent">
              Explore Our Work
            </span>
            <h2 className="font-serif-header text-2xl sm:text-3xl font-bold text-foreground tracking-wider">
              While You Wait
            </h2>
            <div className="w-12 h-0.5 bg-gold-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Portfolio */}
            <Link
              href="/portfolio"
              className="group relative bg-background border border-border-color p-8 flex flex-col justify-between transition-smooth hover:border-gold-primary hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-none bg-neutral-light border border-border-color flex items-center justify-center text-foreground group-hover:bg-gold-primary group-hover:text-background transition-smooth">
                  <ArrowRight size={18} className="transform group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="font-serif-header text-base font-bold text-foreground tracking-wider group-hover:text-gold-primary transition-smooth">
                  View The Portfolio
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  Browse healed work across fine-line, minimal statements, and classic tattoo arts crafted by Suprith.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-color flex items-center justify-between text-xs uppercase tracking-widest font-bold text-foreground/80 group-hover:text-gold-primary">
                <span>Browse Gallery</span>
                <ArrowUpRight size={14} />
              </div>
            </Link>

            {/* Card 2: Instagram */}
            <a
              href="https://www.instagram.com/ink_mutation_tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background border border-border-color p-8 flex flex-col justify-between transition-smooth hover:border-gold-primary hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-none bg-neutral-light border border-border-color flex items-center justify-center text-foreground group-hover:bg-gold-primary group-hover:text-background transition-smooth">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <h3 className="font-serif-header text-base font-bold text-foreground tracking-wider group-hover:text-gold-primary transition-smooth">
                  Follow on Instagram
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  <span className="text-gold-accent font-medium">@ink_mutation_tattoo</span> — fresh pieces, healed updates, and exclusive flash drops.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-color flex items-center justify-between text-xs uppercase tracking-widest font-bold text-foreground/80 group-hover:text-gold-primary">
                <span>Open Instagram</span>
                <ArrowUpRight size={14} />
              </div>
            </a>

            {/* Card 3: YouTube */}
            <a
              href="https://www.youtube.com/@Inkmutation"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background border border-border-color p-8 flex flex-col justify-between transition-smooth hover:border-gold-primary hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-none bg-neutral-light border border-border-color flex items-center justify-center text-foreground group-hover:bg-gold-primary group-hover:text-background transition-smooth">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </div>
                <h3 className="font-serif-header text-base font-bold text-foreground tracking-wider group-hover:text-gold-primary transition-smooth">
                  Watch on YouTube
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  Deep-dive into live sessions, studio time-lapses, design breakdown, and artist stories.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-color flex items-center justify-between text-xs uppercase tracking-widest font-bold text-foreground/80 group-hover:text-gold-primary">
                <span>Watch Videos</span>
                <ArrowUpRight size={14} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
