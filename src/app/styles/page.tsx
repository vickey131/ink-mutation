import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info, Check } from "lucide-react";

interface StyleCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  characteristics: string[];
  tips: string;
}

const styleCategories: StyleCategory[] = [
  {
    slug: "line-art",
    title: "Line Art Tattoos",
    tagline: "Precision geometry, continuous outlines, and clean architectural strokes.",
    description:
      "Line art focuses entirely on the power of the outline. By stripping away heavy shading and color fills, the design relies purely on thickness control, geometry, and perfect continuity to stand out.",
    image: "/images/line_art_1.png",
    characteristics: [
      "Varying needle sizes for single-pass clean lines",
      "Symmetrical patterns, floral outlines, and geometric structures",
      "No color shading, relying on negative skin space for contrast",
      "High design precision requiring unmatched needle control",
    ],
    tips: "Perfect for outer forearms, shoulders, and calf muscles where lines flow naturally with muscle movements.",
  },
  {
    slug: "minimal",
    title: "Minimal Tattoos",
    tagline: "Microscopic icons, celestial alignments, and subtle custom calligraphy.",
    description:
      "Minimalist tattoos emphasize simplicity and size. Often tiny and dainty, they pack a meaningful story into a microscopic space. They require extreme precision as there is no room for error.",
    image: "/images/minimal_1.png",
    characteristics: [
      "Micro-lettering and delicate cursive script",
      "Microscopic celestial symbols (moons, stars, constellations)",
      "Elegant shapes like single-dots, tiny hearts, or waves",
      "Very fast healing process due to minimal skin trauma",
    ],
    tips: "Best suited for wrists, ankles, collarbones, and fingers where small details can be appreciated up close.",
  },
  {
    slug: "hidden",
    title: "Hidden Tattoos",
    tagline: "Discreet personal secrets, tucked away placements, and tiny secret designs.",
    description:
      "Hidden tattoos are meant only for you and those you choose to show. Placed in discreet, easily covered regions of the body, they remain your secret. Suprith works with you to choose the perfect hidden placement.",
    image: "/images/hidden_1.png",
    characteristics: [
      "Behind-the-ear tiny stardust or star signs",
      "Inner-finger stems, symbols, or word-scripts",
      "Ribcage outlines hidden under clothing drape",
      "Tucked-away placements that remain completely hidden in normal posture",
    ],
    tips: "Ideal for professionals or anyone wanting a deeply personal, intimate piece of body art.",
  },
];

export default function StylesPage() {
  return (
    <section className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block">
            Signature Aesthetics
          </span>
          <h1 className="font-serif-header text-4xl font-bold text-foreground">
            Tattoo Styles & Specialties
          </h1>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Suprith specializes in high-precision, elegant design branches. Discover which aesthetic suits your next custom design.
          </p>
        </div>

        {/* Styles Listing */}
        <div className="space-y-24">
          {styleCategories.map((style, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={style.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 relative aspect-square border border-border-color p-3 bg-neutral-light ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full h-full border border-border-color overflow-hidden bg-background">
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      className="object-cover transition-smooth hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                  </div>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-gold-primary uppercase tracking-wider">
                      Specialty {idx + 1}
                    </span>
                    <h2 className="font-serif-header text-2xl md:text-3xl font-bold text-foreground">
                      {style.title}
                    </h2>
                    <p className="text-sm italic font-medium text-foreground/80">
                      {style.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {style.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-foreground">
                      Style Characteristics:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {style.characteristics.map((char, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs text-foreground/70">
                          <Check size={14} className="text-gold-primary shrink-0 mt-0.5" />
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start gap-2 p-4 bg-neutral-light border-l-2 border-gold-primary text-xs text-foreground/85 leading-relaxed">
                    <Info size={16} className="text-gold-primary shrink-0 mt-0.5" />
                    <span><strong>Placement Tip:</strong> {style.tips}</span>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Link
                      href={`/styles/${style.slug}`}
                      className="inline-flex items-center gap-2 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold px-6 py-3.5 transition-smooth hover:bg-gold-primary hover:text-background"
                    >
                      <span>Explore {style.title}</span>
                      <ArrowRight size={12} />
                    </Link>
                    <Link
                      href={`/portfolio?category=${style.slug}`}
                      className="inline-flex items-center gap-2 border border-border-color text-foreground text-xs uppercase tracking-widest font-bold px-6 py-3.5 transition-smooth hover:border-gold-primary hover:text-gold-primary"
                    >
                      <span>View Gallery</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
