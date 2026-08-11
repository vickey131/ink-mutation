import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { Metadata } from "next";

interface StyleDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  characteristics: string[];
  placementAdvice: string;
  healingInstructions: string;
  images: {
    src: string;
    title: string;
    placement: string;
  }[];
}

const stylesData: Record<string, StyleDetail> = {
  "line-art": {
    slug: "line-art",
    title: "Line Art Tattoos",
    tagline: "The essence of shape, defined by pure outline precision.",
    description:
      "Line Art represents the apex of structural precision in tattoo design. By using high-grade, single-pass needles, Suprith drafts crisp outlines, geometrical shapes, and floral designs that flow organically with the muscles.",
    extendedDescription:
      "Unlike traditional tattoos that rely on heavy color saturation, shading, or bold borders to command attention, Line Art relies on the sheer precision of the line. The thickness of the line remains highly consistent or varies intentionally to add depth. Suprith works with sterile single-use configurations to map custom botanical prints, clean mandalas, abstract face lines, and geometrical grids. Every design is crafted individually to ensure it respects the curves and movements of the client's skin placement.",
    characteristics: [
      "Extremely clean, geometric, or continuous line weights.",
      "High contrast using the client's natural skin tone as the primary backdrop.",
      "Elegant botanical, architectural, or abstract linework.",
      "Low skin irritation, resulting in prompt healing times.",
    ],
    placementAdvice:
      "Line art thrives on flat or gently curving body areas. Recommended placements include the inner forearm, back of the shoulder, outer calf, or down the spine, allowing the continuous lines to conform beautifully to body motion.",
    healingInstructions:
      "Because line art tattoos inflict minimal trauma to the skin, healing is relatively fast. Keep the area clean, wash with mild soap twice daily, apply a thin layer of recommended ointment, and avoid scratching or soaking in water for 10–14 days.",
    images: [
      { src: "/images/Line_art_Wanderlust.jpg", title: "Wanderlust", placement: "Inner Forearm" },
      { src: "/images/Norse_Compass_Forearm.jpg", title: "Norse Compass", placement: "Inner Forearm" },
      { src: "/images/Line_art_Name_Tattoo.jpg", title: "The Boundless Love", placement: "Inner Forearm, Neck" },
    ],
  },
  "minimal": {
    slug: "minimal",
    title: "Minimalist Tattoos",
    tagline: "Microscopic designs making subtle, timeless statements.",
    description:
      "Minimalist tattoos pack deep personal symbolism into tiny, microscopic configurations. From stars and moons to elegant handwriting script, Suprith crafts small tattoos that make a large, quiet statement.",
    extendedDescription:
      "The beauty of a minimalist tattoo lies in its subtlety. Often measuring less than an inch, these micro-tattoos require a highly steady hand, as even a minor deviation is visible on such a small scale. Suprith excels in handling ultra-fine lining needles to render cursive lettering, solar symbols, and abstract icons. These designs are ideal for clients seeking their first tattoo, or professionals who require artwork that can be easily concealed.",
    characteristics: [
      "Dainty, miniature sizes typically under 3cm.",
      "Sleek micro-lettering and delicate font calligraphy.",
      "Micro-shading or simple outlines of stars, hearts, and waves.",
      "Superb long-term clarity due to specialized fine ink needles.",
    ],
    placementAdvice:
      "Minimal tattoos are best placed in delicate spots where they can be appreciated up close. Top recommendations include the inner wrist, side of the finger, collarbone, or outer ankle.",
    healingInstructions:
      "Minimal tattoos heal exceptionally quickly. Apply healing balm sparingly for the first week. Ensure the tattoo is protected from tight clothing rubbing against it, and avoid direct exposure to sunlight during the initial 2 weeks.",
    images: [
      { src: "/images/Minimal_floral_shoulder.jpg", title: "Elegant Bloom", placement: "Shoulder" },
      { src: "/images/Minimal_Wild_Free.jpg", title: "Wild & Free", placement: "Shoulder, Hip" },
      { src: "/images/Minimal_Zen_Mode.jpg", title: "The Universe Within", placement: "Arm" },
      { src: "/images/Minimal_Balance_Arm.jpg", title: "Balanced Mind", placement: "Outer Wrist, Inner fore-arm, Leg" },
      { src: "/images/Minimal_Rose_Forearm.jpg", title: "Timeless Rose", placement: "Forearm" },
      { src: "/images/Minimal_Balance.jpg", title: "The Centered Mind", placement: "Forearm" },
      { src: "/images/Minimal_Stars.jpg", title: "Astral Path", placement: "Dorsal Hand" },
      { src: "/images/Minimal_Semicolon.jpg", title: "The Flow and Pause", placement: "Arm" },
      { src: "/images/Classic_Divine_Cosmic.jpg", title: "The Divine Cosmic Vision", placement: "Fore-arm" },
      { src: "/images/Minimal_Scattered_Growth.jpg", title: "The Divine Cosmic Vision", placement: "Fore-arm" },
      { src: "/images/Minimal_Panda.jpg", title: "The Gentle Pause", placement: "Arm and Hip" },
      { src: "/images/Minimal_Balance_Back.jpg", title: "Laurels of Equanimity", placement: "Upper back, Chest" },
    ],
  },
  "classic": {
    slug: "classic",
    title: "Classic Tattoos",
    tagline: "Your personal stories, kept as beautiful body secrets.",
    description:
      "Classic tattoos are strategically placed in naturally concealed regions of the body. Designed to be seen only when you choose, they remain an intimate secret between you and your skin.",
    extendedDescription:
      "A Classic tattoo is a personal expression meant solely for the wearer. Placed in discreet zones like behind the ear, inside the finger, or along the ribcage. Suprith collaborates with you to identify custom placements that align with your natural anatomy, selecting fine outlines or symbols that tucked away beautifully.",
    characteristics: [
      "Fine line scripts, miniature symbols, or coordinates.",
      "Intimate design scale adapted for secret placements.",
      "Completely workplace-safe and easily concealed.",
    ],
    placementAdvice:
      "Recommended placements include the side of the ribcage, behind the ear line, under the hairline, the inner lip, or along the inner side of fingers.",
    healingInstructions:
      "Healing times depend heavily on placement. Behind-the-ear tattoos heal fast, while inner-finger tattoos require extra care because of constant hand washing. Clean gently and keep moisturized, taking care to avoid harsh chemicals or friction.",
    images: [
      { src: "/images/Classic_thigh.jpg", title: "Mythical Guardian", placement: "Back or Thigh" },
      { src: "/images/Classic_Tirisulam.jpg", title: "Eternal Protection", placement: "Inner Index Finger" },
      { src: "/images/Classic_Thai_Mask_Forearm.jpg", title: "Fierce Oni", placement: "Inner Fore arm" },
      { src: "/images/Classic_Hour_Glass.jpg", title: "Time & Transformation", placement: "Inner Fore arm, Leg" },
      { src: "/images/Classic_Phoenix_Forearm.jpg", title: "The Fire & Venom", placement: "Inner Fore arm" },
      { src: "/images/Classic_Tiger_Arm.jpg.jpg", title: "The Fierceand Serene", placement: "Arm" },
    ],
  },
};

// Generate Static Params for SSG
export function generateStaticParams() {
  return [
    { slug: "line-art" },
    { slug: "minimal" },
    { slug: "classic" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = stylesData[resolvedParams.slug];

  if (!data) {
    return {
      title: "Style Not Found",
    };
  }

  return {
    title: `${data.title} | Suprith Tattoo Artist Bangalore`,
    description: `Explore Suprith's expertise in custom ${data.title} at Ink Mutation Tattoo Studio, Koramangala. Read characteristics, placement tips, and view portfolio images.`,
    openGraph: {
      title: `${data.title} by Suprith | Ink Mutation`,
      description: `Premium ${data.title} portfolio and details at Ink Mutation Tattoo Studio in Bengaluru.`,
      images: [data.images[0]?.src || "/images/hero_bg.png"],
    },
  };
}

export default async function StyleDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = stylesData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  // Inject Custom Service Schema JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${data.title} by Suprith`,
    "serviceType": "Tattoo Services",
    "provider": {
      "@type": "TattooParlor",
      "name": "Ink Mutation Tattoo Studio",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5th Cross Rd, KHB Colony, Koramangala 5th Block",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560095",
        "addressCountry": "IN",
      },
    },
    "description": data.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <article className="py-24 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          {/* Back Button */}
          <Link
            href="/styles"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-foreground/60 hover:text-gold-primary transition-smooth"
          >
            <ArrowLeft size={14} />
            <span>All Specialties</span>
          </Link>

          {/* Heading */}
          <div className="space-y-4 border-b border-border-color pb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-bold">
              Specialty Guide
            </span>
            <h1 className="font-serif-header text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg text-foreground/80 italic font-medium">
              {data.tagline}
            </p>
          </div>

          {/* Main Description */}
          <div className="space-y-6 text-sm text-foreground/75 leading-relaxed">
            <p className="font-medium text-foreground text-base leading-relaxed">
              {data.description}
            </p>
            <p>
              {data.extendedDescription}
            </p>
          </div>

          {/* Characteristics & Healing Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">

            {/* Characteristics */}
            <div className="bg-neutral-light border border-border-color p-6 space-y-4">
              <h3 className="font-serif-header text-xs font-bold tracking-widest text-foreground uppercase flex items-center gap-2">
                <Sparkles size={14} className="text-gold-primary" />
                <span>Characteristics</span>
              </h3>
              <ul className="space-y-3">
                {data.characteristics.map((char, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/70 leading-relaxed">
                    <span className="text-gold-primary font-bold">•</span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Placement & Healing */}
            <div className="bg-neutral-light border border-border-color p-6 space-y-4">
              <h3 className="font-serif-header text-xs font-bold tracking-widest text-foreground uppercase flex items-center gap-2">
                <ShieldCheck size={14} className="text-gold-primary" />
                <span>Placement & Healing</span>
              </h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                <strong>Placement:</strong> {data.placementAdvice}
              </p>
              <p className="text-xs text-foreground/70 leading-relaxed">
                <strong>Aftercare:</strong> {data.healingInstructions}
              </p>
            </div>

          </div>

          {/* Sub Gallery */}
          <div className="space-y-6 pt-6">
            <h3 className="font-serif-header text-sm font-bold text-foreground tracking-widest uppercase">
              Representative Artwork
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.images.map((img, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border-color p-3 group hover:border-gold-primary transition-smooth flex flex-col"
                >
                  <div className="relative w-full aspect-square overflow-hidden border border-border-color bg-neutral-light">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover transition-smooth group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </div>
                  <div className="p-3 text-left">
                    <h4 className="text-xs font-bold text-foreground">{img.title}</h4>
                    <span className="text-[10px] text-foreground/50 mt-1 block">Placement: {img.placement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-8 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-foreground mb-1">Interested in this style?</h4>
              <p className="text-xs text-foreground/50">Discuss your custom design with Suprith today.</p>
            </div>

            <div className="flex gap-4 w-full sm:w-auto">
              <Link
                href="/#contact"
                className="flex-1 sm:flex-initial inline-flex justify-center items-center gap-2 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold px-6 py-3.5 transition-smooth hover:bg-gold-primary hover:text-background text-center"
              >
                <span>Consultation</span>
              </Link>
              <Link
                href={`/portfolio?category=${data.slug}`}
                className="flex-1 sm:flex-initial inline-flex justify-center items-center gap-2 border border-border-color text-foreground text-xs uppercase tracking-widest font-bold px-6 py-3.5 transition-smooth hover:border-gold-primary hover:text-gold-primary text-center"
              >
                <span>All {data.title}</span>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
