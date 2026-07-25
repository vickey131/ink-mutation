"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/styles", label: "Specialties" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change in render phase (conforms to React specs)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setIsOpen(false);
    setPrevPathname(pathname);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif-header text-xl md:text-2xl font-bold text-foreground leading-none tracking-widest">
            INK MUTATION
          </span>
          {/* <span className="text-[10px] tracking-[0.25em] text-gold-primary uppercase font-medium mt-1">
            BY SUPRITH
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider font-medium uppercase transition-smooth hover:text-gold-primary ${isActive ? "text-gold-primary" : "text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/#contact"
            className="flex items-center gap-1.5 bg-neutral-dark text-background text-xs tracking-wider uppercase font-semibold px-5 py-2.5 rounded-none transition-smooth hover:bg-gold-primary hover:text-background"
          >
            <span>Book Consultation</span>
            <ArrowUpRight size={14} />
          </Link>
        </nav>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-gold-primary focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden w-full bg-background border-b border-border-color py-6 px-6 transition-smooth">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wider font-medium uppercase py-1 ${isActive ? "text-gold-primary" : "text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className="flex items-center justify-between w-full bg-neutral-dark text-background text-xs tracking-wider uppercase font-semibold px-5 py-3 rounded-none mt-2"
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={14} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
