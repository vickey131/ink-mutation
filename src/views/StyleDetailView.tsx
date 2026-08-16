import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";

export interface StyleDetail {
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

export default function StyleDetailView({ data }: { data: StyleDetail }) {

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
        "streetAddress": "30, 1st Main, 4th Cross Road, Venkateshwara Layout, S.G. Palya  ",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560029",
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
