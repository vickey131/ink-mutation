import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, MapPin, Clock, CheckCircle } from "lucide-react";
import GoogleReviews from "@/components/GoogleReviews";
import ContactForm from "@/components/ui/ContactForm";

export default function HomePage() {
  const specialties = [
    {
      slug: "line-art",
      title: "Line Art Tattoos",
      description: "Mathematical precision, geometric curves, and fluid continuous lines that flow with the body.",
      image: "/images/Norse_Compass_Forearm.jpg",
    },
    {
      slug: "minimal",
      title: "Minimalist Tattoos",
      description: "Subtle, microscopic statements of celestial symbols, script lettering, and abstract icons.",
      image: "/images/Minimal_floral_shoulder.jpg",
    },
    {
      slug: "classic",
      title: "Classic Tattoos",
      description: "Discreet placements (behind the ear, thigh, or ribcage) that are personal secrets.",
      image: "/images/Classic_thigh.jpg",
    },
  ];

  const previewWorks = [
    { src: "/images/Minimal_Balance_Arm.jpg", title: "Balanced Mind", category: "Minimal" },
    { src: "/images/Classic_Hour_Glass.jpg", title: "Time & Transformation", category: "Classic" },
    { src: "/images/Classic_thigh.jpg", title: "Mythical Guardian", category: "Classic" },
    { src: "/images/Minimal_Rose_Forearm.jpg", title: "Timeless Rose", category: "Minimal" },
  ];

  return (
    <div className="space-y-0">

      {/* 1. Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-neutral-light overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">

          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 border border-gold-primary/30 px-3.5 py-1.5 bg-background">
              <Sparkles size={14} className="text-gold-primary" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/80">
                Premium Custom Tattooing
              </span>
            </div>

            <h1 className="font-serif-header text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Wearable Art, <br />
              <span className="text-gold-primary">Intentional <br /> & Timeless</span>
            </h1>

            <p className="text-base text-foreground/75 leading-relaxed max-w-xl">
              Welcome to Ink Mutation, the private studio of tattoo artist <strong className="font-semibold text-foreground">Suprith</strong>.
              We focus on the elegance of fine lines, tiny custom icons, and discreet placements.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold px-8 py-4 transition-smooth hover:bg-gold-primary hover:text-background"
              >
                <span>View Portfolio</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-border-color bg-background text-foreground text-xs uppercase tracking-widest font-bold px-8 py-4 transition-smooth hover:border-gold-primary hover:text-gold-primary"
              >
                <span>Contact Studio</span>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] lg:aspect-square max-w-md mx-auto border border-border-color bg-background p-3">
            <div className="relative w-full h-full overflow-hidden border border-border-color">
              <Image
                src="/images/hero_bg.png"
                alt="Minimalist fine line art tattoo by Suprith"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Artist Introduction (Bio) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* Portrait */}
          <div className="md:col-span-5 relative aspect-[4/5] max-w-sm w-full mx-auto border border-border-color p-3">
            <div className="relative w-full h-full overflow-hidden border border-border-color bg-neutral-light">
              <Image
                src="/images/Artist_Profile.jpg"
                alt="Tattoo Artist Suprith"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block">
              Meet the Artist
            </span>
            <h2 className="font-serif-header text-3xl md:text-4xl font-bold text-foreground">
              Suprith
            </h2>
            <div className="h-1 w-16 bg-gold-primary"></div>

            <p className="text-sm text-foreground/75 leading-relaxed">
              With years of experience in high-precision skin art, Suprith has built a reputation for executing tattoos that require the utmost control. He treats skin as a canvas for delicate, subtle, and permanent design.
            </p>
            <p className="text-sm text-foreground/75 leading-relaxed">
              His work at <strong className="font-semibold text-foreground">Ink Mutation Studio</strong> rejects cluttered designs in favor of plenty of white space, thin black ink work, and microscopic details that blend harmoniously with your natural anatomy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-gold-primary shrink-0" />
                <span className="text-xs uppercase tracking-wider font-semibold text-foreground/80">100% Single-use Sterilized Kits</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-gold-primary shrink-0" />
                <span className="text-xs uppercase tracking-wider font-semibold text-foreground/80">Premium Vegan Inks</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-gold-primary shrink-0" />
                <span className="text-xs uppercase tracking-wider font-semibold text-foreground/80">Custom Sketch Consultations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-gold-primary shrink-0" />
                <span className="text-xs uppercase tracking-wider font-semibold text-foreground/80">Authorized Medical Hygiene standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Specialties Highlight */}
      <section className="py-24 bg-neutral-light border-t border-border-color">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4 max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block">
              What We Excel In
            </span>
            <h2 className="font-serif-header text-3xl md:text-4xl font-bold text-foreground">
              Style Specialties
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Suprith specializes in three signature branches of contemporary tattoo work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((spec) => (
              <div
                key={spec.slug}
                className="bg-background border border-border-color p-3 group hover:border-gold-primary transition-smooth flex flex-col h-full text-left"
              >
                <div className="relative w-full aspect-square overflow-hidden border border-border-color bg-neutral-light">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif-header text-base font-bold text-foreground transition-smooth group-hover:text-gold-primary">
                      {spec.title}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                  <Link
                    href={`/styles/${spec.slug}`}
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-gold-primary hover:text-gold-accent transition-smooth mt-4 self-start"
                  >
                    <span>Learn Style</span>
                    <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Works Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block mb-3">
                Latest Portfolio Pieces
              </span>
              <h2 className="font-serif-header text-3xl md:text-4xl font-bold text-foreground">
                Featured Artworks
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold px-6 py-3.5 transition-smooth hover:bg-gold-primary hover:text-background"
            >
              <span>Explore Gallery</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewWorks.map((work, idx) => (
              <div
                key={idx}
                className="relative aspect-square border border-border-color p-2 bg-background group overflow-hidden"
              >
                <div className="relative w-full h-full overflow-hidden border border-border-color bg-neutral-light">
                  <Image
                    src={work.src}
                    alt={work.title}
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-center items-center text-center p-4">
                    <span className="text-[10px] uppercase tracking-widest text-gold-primary font-bold mb-1">
                      {work.category}
                    </span>
                    <h4 className="font-serif-header text-sm font-bold text-foreground">
                      {work.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Google Reviews Section (Imported Component) */}
      <GoogleReviews />

      {/* 6. Studio Overview (Location & Hours) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Info Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block mb-3">
                Visit Ink Mutation
              </span>
              <h2 className="font-serif-header text-3xl font-bold text-foreground">
                Studio Space
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-gold-primary shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground mb-1">Address</h4>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    5th Cross Rd, KHB Colony, Koramangala 5th Block, <br />
                    Bengaluru, Karnataka 560095
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-gold-primary shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground mb-1">Studio Hours</h4>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    Tuesday – Sunday: 11:00 AM – 8:00 PM <br />
                    <span className="text-red-500 font-semibold text-xs uppercase tracking-wider mt-1 block">Mondays: Closed</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="text-gold-primary shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground mb-1">Safety Protocols</h4>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    Private workspace sterilized before every session. Advanced medical-grade disinfection routines. Only hospital-grade needles used.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground text-foreground text-xs uppercase tracking-widest font-bold px-6 py-3.5 transition-smooth hover:bg-foreground hover:text-background"
              >
                <span>Navigate via Google Maps</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 w-full h-[350px] sm:h-[450px] border border-border-color bg-background p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2906161479836!2d77.62034937571343!3d12.934900715970899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1792309a7f8d%3A0xfbd438307282148d!2sInk%20Mutation%20Tattoo%20Studio!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location of Ink Mutation Tattoo Studio"
              className="border border-border-color"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-24 bg-neutral-light border-t border-border-color">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Pitch */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block">
              Start Your Design
            </span>
            <h2 className="font-serif-header text-3xl md:text-4xl font-bold text-foreground">
              Inquire Now
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Have an idea for a delicate line art composition, microscopic icon, or a discreet secret tattoo? Fill out our form, or message Suprith directly on WhatsApp.
            </p>

            <div className="space-y-4 pt-4 border-t border-border-color text-xs text-foreground/60">
              <p>✓ Consultation is always free</p>
              <p>✓ Custom sketches tailored for your body placement</p>
              <p>✓ All inquiries reviewed within 24–48 hours</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
