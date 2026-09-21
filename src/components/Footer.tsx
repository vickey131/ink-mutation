import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-light border-t border-border-color pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About column */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="flex flex-col">
            <span className="font-serif-header text-xl md:text-2xl font-bold text-foreground leading-none tracking-widest">
              INK MUTATION
            </span>
          </Link>
          <p className="text-sm text-foreground/70 leading-relaxed max-w-sm">
            High-precision line art, custom micro-minimalist, and elegant Classic tattoos designed to elevate your personal story into beautiful body art.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ink_mutation_tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-gold-primary transition-smooth"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="mailto:inkmutation@gmail.com"
              className="text-foreground/60 hover:text-gold-primary transition-smooth"
              aria-label="Email"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@Inkmutation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-gold-primary transition-smooth"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a
              href="https://pin.it/1XQiYxOEx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-gold-primary transition-smooth"
              aria-label="Pinterest"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 0-3.3 19.4c-.1-.9-.2-2.2 0-3.2l1.2-5.1c-.3-.6-.4-1.4-.4-2.2 0-2 1.2-3.6 2.7-3.6 1.3 0 1.9 1 1.9 2.2 0 1.3-.8 3.2-1.2 5-.4 1.6.8 2.9 2.4 2.9 2.9 0 5.1-3.1 5.1-7.5 0-3.9-2.8-6.7-6.9-6.7-4.6 0-7.3 3.5-7.3 7 0 1.4.5 2.9 1.2 3.7.1.1.1.3 0 .5l-.5 1.9c-.1.3-.3.4-.6.2-2-1-3.3-3.9-3.3-6.3 0-5.1 3.7-9.8 10.7-9.8 5.6 0 10 4 10 9.4 0 5.6-3.5 10.1-8.4 10.1-1.6 0-3.2-.8-3.7-1.8l-1 3.9c-.4 1.4-1.2 3.1-1.9 4.1A10 10 0 1 0 12 2z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-serif-header text-xs font-bold tracking-widest text-foreground uppercase mb-6">
            Quick Navigation
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-sm text-foreground/70 hover:text-gold-primary transition-smooth">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-sm text-foreground/70 hover:text-gold-primary transition-smooth">
                Portfolio Gallery
              </Link>
            </li>
            <li>
              <Link href="/styles" className="text-sm text-foreground/70 hover:text-gold-primary transition-smooth">
                Specialties Overview
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-foreground/70 hover:text-gold-primary transition-smooth">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-sm text-foreground/70 hover:text-gold-primary transition-smooth">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Studio Details */}
        <div className="space-y-6">
          <h4 className="font-serif-header text-xs font-bold tracking-widest text-foreground uppercase">
            Studio Information
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-primary shrink-0 mt-0.5" />
              <a
                href="https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-gold-primary transition-smooth leading-relaxed"
              >
                30, 1st Main, 4th Cross Road, Venkateshwara Layout, S.G. Palya, Bengaluru, Karnataka 560029
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold-primary shrink-0" />
              <a
                href="tel:+917019000191"
                className="text-sm text-foreground/70 hover:text-gold-primary transition-smooth"
              >
                +91 70190 00191
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold-primary shrink-0" />
              <a
                href="mailto:inkmutation@gmail.com"
                className="text-sm text-foreground/70 hover:text-gold-primary transition-smooth"
              >
                inkmutation@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-gold-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/70 leading-normal whitespace-nowrap">
                Monday – Friday: 10:00 AM – 8:00 PM <br />
                Saturday – Sunday: 10:00 AM – 10:00 PM <br />
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-border-color mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-row gap-4">
          <p className="text-xs text-foreground/50">
            &copy; {currentYear} Ink Mutation Tattoo Studio. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50">
            V · 2026
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end">
          <Link href="/terms-conditions" className="text-xs text-foreground/50 hover:text-gold-primary transition-smooth">
            Terms &amp; Conditions
          </Link>
          <Link href="/privacy-policy" className="text-xs text-foreground/50 hover:text-gold-primary transition-smooth">
            Privacy Policy
          </Link>
          <Link href="/sitemap.xml" className="text-xs text-foreground/50 hover:text-gold-primary transition-smooth">
            Sitemap
          </Link>
          <a
            href="https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground/50 hover:text-gold-primary transition-smooth"
          >
            Google Business Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
