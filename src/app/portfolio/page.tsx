"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Eye, Info } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";

interface PortfolioItem {
  id: string;
  src: string;
  title: string;
  category: string;
  slug: "line-art" | "minimal" | "hidden";
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "item-1",
    src: "/images/line_art_1.png",
    title: "Geometric Compass Forearm",
    category: "Line Art",
    slug: "line-art",
    description: "A mathematical design containing crisp fine lines, intersecting circles, and precision micro-dotwork on the inner forearm.",
  },
  {
    id: "item-2",
    src: "/images/minimal_1.png",
    title: "Celestial Crescent Moon",
    category: "Minimal",
    slug: "minimal",
    description: "A microscopic minimalist crescent moon tattoo paired with tiny stardust dots, featuring soft, precise ink shading.",
  },
  {
    id: "item-3",
    src: "/images/line_art_2.png",
    title: "Botanical Wildflower Outline",
    category: "Line Art",
    slug: "line-art",
    description: "A continuous single-line botanical composition on the back shoulder, evoking elegance and pure organic forms.",
  },
  {
    id: "item-4",
    src: "/images/minimal_2.png",
    title: "Serendipity Cursive Script",
    category: "Minimal",
    slug: "minimal",
    description: "A tiny script calligraphy tattoo on the outer ankle. The fine lines maintain exceptional clarity at a microscopic scale.",
  },
  {
    id: "item-5",
    src: "/images/hidden_1.png",
    title: "Behind-the-Ear Constellation",
    category: "Hidden",
    slug: "hidden",
    description: "A discreet, hidden tattoo behind the ear depicting the client's zodiac constellation. Tiny, elegant, and personal.",
  },
  {
    id: "item-6",
    src: "/images/hidden_2.png",
    title: "Discreet Interior Finger Outline",
    category: "Hidden",
    slug: "hidden",
    description: "An elegant, secret single-line floral stem tucked along the inside of the index finger. Completely hidden in natural posture.",
  },
];

const categories = [
  { slug: "all", label: "All Works" },
  { slug: "line-art", label: "Line Art" },
  { slug: "minimal", label: "Minimal" },
  { slug: "hidden", label: "Hidden" },
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get active category from URL
  const activeCategory = searchParams.get("category") || "all";
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter items
  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.slug === activeCategory);

  const handleFilterChange = (slug: string) => {
    if (slug === "all") {
      router.push("/portfolio", { scroll: false });
    } else {
      router.push(`/portfolio?category=${slug}`, { scroll: false });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block">
            Suprith&apos;s Canvas
          </span>
          <h1 className="font-serif-header text-4xl font-bold text-foreground">
            Portfolio Gallery
          </h1>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Browse through verified tattoo work categories. Use filters to view specific specialties.
          </p>
        </div>

        {/* Filter Toggles */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => handleFilterChange(cat.slug)}
                className={`text-xs uppercase tracking-widest font-semibold px-6 py-3 border transition-smooth cursor-pointer ${
                  isActive
                    ? "bg-neutral-dark text-background border-neutral-dark"
                    : "bg-background text-foreground border-border-color hover:border-gold-primary hover:text-gold-primary"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Column Layout */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border-color">
            <p className="text-sm text-foreground/50">No tattoo art found in this category.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] w-full">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid mb-6 bg-background border border-border-color p-3 group hover:border-gold-primary transition-smooth cursor-pointer flex flex-col"
              >
                <div className="relative w-full overflow-hidden border border-border-color bg-neutral-light aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  />
                  
                  {/* Overlay Reveal */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="text-center space-y-2 p-4">
                      <span className="inline-flex items-center justify-center p-2 rounded-full bg-gold-primary/10 text-gold-accent mb-2">
                        <Eye size={20} />
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-gold-primary font-bold block">
                        {item.category}
                      </span>
                      <h4 className="font-serif-header text-sm font-bold text-foreground max-w-[200px]">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
                
                {/* Details Footer */}
                <div className="p-4 pt-3 flex items-center justify-between border-t border-border-color mt-3">
                  <div className="text-left">
                    <h3 className="text-xs font-bold text-foreground leading-tight">{item.title}</h3>
                    <span className="text-[10px] text-foreground/45 uppercase tracking-wider block mt-1">{item.category}</span>
                  </div>
                  <Info size={14} className="text-foreground/30 group-hover:text-gold-primary transition-smooth shrink-0" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Overlay */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={filteredItems}
          currentIndex={lightboxIndex}
          setCurrentIndex={setLightboxIndex}
        />

      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xs uppercase tracking-widest text-foreground/50 animate-pulse">
          Loading Portfolio...
        </div>
      </div>
    }>
      <PortfolioContent />
    </Suspense>
  );
}
