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
  slug: "line-art" | "minimal" | "classic";
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "item-1",
    src: "/images/Minimal_Zen_Mode.jpg",
    title: "The Universe Within",
    category: "Minimal",
    slug: "minimal",
    description: "The fine-line black and grey tattoo captures the wise baboon Rafiki from The Lion King, meditating under the night sky.",
  },
  {
    id: "item-2",
    src: "/images/Minimal_floral_shoulder.jpg",
    title: "Elegant Bloom",
    category: "Minimal",
    slug: "minimal",
    description: "A graceful fine-line floral tattoo with flowing strokes, designed to capture simplicity and timeless elegance.",
  },
  {
    id: "item-3",
    src: "/images/Norse_Compass_Forearm.jpg",
    title: "Norse Compass",
    category: "Line Art",
    slug: "line-art",
    description: "A custom fine-line forearm tattoo featuring the Vegvísir, Tree of Life, runes, and a stag, symbolizing guidance, strength, and resilience.",
  },
  {
    id: "item-4",
    src: "/images/Minimal_Wild_Free.jpg",
    title: "Wild & Free",
    category: "Minimal",
    slug: "minimal",
    description: "A delicate minimal bird tattoo flowing naturally across the lower back, creating a simple and graceful symbol of freedom.",
  },
  {
    id: "item-5",
    src: "/images/Classic_thigh.jpg",
    title: "Mythical Guardian",
    category: "Classic",
    slug: "classic",
    description: "A detailed thigh tattoo inspired by Thai mythology, featuring elegant linework and symbolic cultural elements.",
  },
  {
    id: "item-6",
    src: "/images/Classic_Thai_Mask_Forearm.jpg",
    title: "Fierce Oni",
    category: "Classic",
    slug: "classic",
    description: "An intricately designed Oni mask tattoo with expressive features and bold linework, creating a striking inner forearm piece.",
  },
  {
    id: "item-7",
    src: "/images/Line_art_Wanderlust.jpg",
    title: "Wanderlust",
    category: "Line Art",
    slug: "line-art",
    description: "A fine-line forearm tattoo combining a compass, mountain peaks, and ocean waves in a clean geometric composition — symbolizing direction, adventure, and the journey ahead.",
  },
  {
    id: "item-8",
    src: "/images/Classic_Tirisulam.jpg",
    title: "Eternal Protection",
    category: "Classic",
    slug: "classic",
    description: "A striking Trishul tattoo paired with a Sanskrit mantra, representing devotion, strength, and spiritual protection.",
  },
  {
    id: "item-9",
    src: "/images/Minimal_Balance_Arm.jpg",
    title: "Balanced Mind",
    category: "Minimal",
    slug: "minimal",
    description: "A balanced and peaceful tattoo design that represents balance and harmony.",
  },
  {
    id: "item-10",
    src: "/images/Minimal_Rose_Forearm.jpg",
    title: "Timeless Rose",
    category: "Minimal",
    slug: "minimal",
    description: "A beautifully shaded black and grey rose, capturing elegance, love, and timeless beauty with intricate detailing.",
  },
  {
    id: "item-11",
    src: "/images/Classic_Hour_Glass.jpg",
    title: "Time & Transformation",
    category: "Classic",
    slug: "classic",
    description: "A detailed hourglass symbolizing the passage of time, change, and the fleeting nature of life.",
  },
  {
    id: "item-12",
    src: "/images/Classic_Phoenix_Forearm.jpg",
    title: "The Fire & Venom",
    category: "Classic",
    slug: "classic",
    description: "Fusing the eternal rebirth of the phoenix with the fierce protection of the scorpion,  represents survival, inner power, and ultimate transformation.",
  },
  {
    id: "item-13",
    src: "/images/Minimal_Balance.jpg",
    title: "The Centered Mind",
    category: "Minimal",
    slug: "minimal",
    description: "A minimalist fine-line tattoo featuring a geometric axis and the word \"BALANCE\" symbolizing a centered mind, inner alignment, and finding your true orientation amidst life’s chaos.",
  },
  {
    id: "item-14",
    src: "/images/Minimal_Stars.jpg",
    title: "Astral Path",
    category: "Minimal",
    slug: "minimal",
    description: "Elegant, minimalist fine-line stars and dots forming a delicate constellation, symbolizing destiny and cosmic guidance.",
  },
  {
    id: "item-15",
    src: "/images/Classic_Tiger_Arm.jpg",
    title: "The Fierce and Serene",
    category: "Classic",
    slug: "classic",
    description: "The balance of raw primal power and spiritual growth, showing fierce strength grounded by inner peace.",
  },
  {
    id: "item-16",
    src: "/images/Minimal_Semicolon.jpg",
    title: "The Flow and Pause",
    category: "Minimal",
    slug: "minimal",
    description: "A deconstructed yin-yang paired with a subtle semicolon motif, symbolizing harmony, mental health resilience, and continuing your story.",
  },
  {
    id: "item-17",
    src: "/images/Classic_Divine_Cosmic.jpg",
    title: "The Divine Cosmic Vision",
    category: "Classic",
    slug: "classic",
    description: "A sacred fusion of Shiva's elements, symbolizing the piercing of worldly illusions to unlock ultimate truth and higher consciousness.",
  },
  {
    id: "item-18",
    src: "/images/Minimal_Scattered_Growth.jpg",
    title: "The Scattered Growth",
    category: "Minimal",
    slug: "minimal",
    description: "A collection of delicate leaves and vines rising from the base, symbolizing organic growth, change, and the beauty of impermanence.",
  },
  {
    id: "item-19",
    src: "/images/Minimal_Panda.jpg",
    title: "The Gentle Pause",
    category: "Minimal",
    slug: "minimal",
    description: "A minimalist sleeping panda that celebrates the courage to rest, slow down, and find contentment exactly where you are.",
  },
  {
    id: "item-20",
    src: "/images/Minimal_Balance_Back.jpg",
    title: "Laurels of Equanimity",
    category: "Minimal",
    slug: "minimal",
    description: "A minimalist laurel wreath framing the word \"BALANCE\", symbolizing the ultimate triumph of mastering your mind, emotions, and inner peace over life’s external chaos.",
  },
  {
    id: "item-21",
    src: "/images/Line_art_Name_Tattoo.jpg",
    title: "The Boundless Love",
    category: "Line Art",
    slug: "line-art",
    description: "A continuous-line portrait of a child linked to an infinity heart and the name Agastya, symbolizing a parent's eternal, unbreakable love and lifelong commitment to their child.",
  },
];

const categories = [
  { slug: "all", label: "All Works" },
  { slug: "line-art", label: "Line Art" },
  { slug: "minimal", label: "Minimal" },
  { slug: "classic", label: "Classic" },
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
                className={`text-xs uppercase tracking-widest font-semibold px-6 py-3 border transition-smooth cursor-pointer ${isActive
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
