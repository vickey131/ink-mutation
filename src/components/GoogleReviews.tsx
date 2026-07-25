import React from "react";
import Image from "next/image";
import { Star, MessageSquare } from "lucide-react";

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  tattooImage?: string;
  tattooAlt?: string;
  styleName?: string;
}

const reviewsData: Review[] = [
  {
    id: "rev-1",
    author: "Rohan Kamath",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    rating: 5,
    date: "1 week ago",
    text: "Suprith is an absolute genius with line art. I got a geometric compass design on my forearm and the lines are incredibly clean and razor-sharp. The studio environment is peaceful, hygienic, and very professional. Highly recommended!",
    tattooImage: "/images/line_art_1.png",
    tattooAlt: "Fine line geometric tattoo by Suprith",
    styleName: "Line Art",
  },
  {
    id: "rev-2",
    author: "Neha Reddy",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    rating: 5,
    date: "3 weeks ago",
    text: "Absolutely love my microscopic crescent moon tattoo! Suprith's attention to detail is remarkable. I wanted something very tiny and subtle, and he executed it flawlessly. It healed perfectly too. Best minimal tattoo artist in Bangalore!",
    tattooImage: "/images/minimal_1.png",
    tattooAlt: "Micro crescent moon tattoo by Suprith",
    styleName: "Minimal",
  },
  {
    id: "rev-3",
    author: "Varun Nair",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    rating: 5,
    date: "1 month ago",
    text: "Got a custom botanical single-line flower on my shoulder. Suprith is incredibly patient, helped me refine the size, and the studio hygiene is top-notch. It looks so elegant and light. Couldn't have asked for a better experience.",
    tattooImage: "/images/line_art_2.png",
    tattooAlt: "Single-line botanical shoulder tattoo by Suprith",
    styleName: "Line Art",
  },
  {
    id: "rev-4",
    author: "Anjali Rao",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    rating: 5,
    date: "2 months ago",
    text: "If you want a discreet or hidden tattoo, Suprith is the go-to artist. I got a tiny script lettering behind my ear, and it is completely hidden unless I pull my hair back. The script is delicate, legible, and exactly what I envisioned.",
    tattooImage: "/images/minimal_2.png",
    tattooAlt: "Behind ear script tattoo by Suprith",
    styleName: "Hidden / Script",
  },
];

export default function GoogleReviews() {
  const averageRating = 4.9;
  const totalReviews = 186;

  return (
    <section id="reviews" className="py-24 bg-neutral-light border-y border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header & Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block mb-3">
              Client Testimonials
            </span>
            <h2 className="font-serif-header text-3xl md:text-4xl font-bold text-foreground">
              Google Reviews
            </h2>
          </div>
          
          {/* Trust Banner */}
          <div className="flex items-center gap-6 bg-background border border-border-color p-5 self-start md:self-auto">
            <div className="text-center">
              <span className="text-3xl font-serif-header font-bold text-foreground leading-none">
                {averageRating}
              </span>
              <span className="text-xs text-foreground/50 block mt-1">out of 5</span>
            </div>
            <div className="h-10 w-px bg-border-color"></div>
            <div>
              <div className="flex text-gold-primary gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <a
                href="https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-foreground/80 hover:text-gold-primary transition-smooth block mt-1"
              >
                {totalReviews} verified reviews
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-background border border-border-color p-6 md:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Reviewer Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover border border-border-color"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{review.author}</h4>
                      <span className="text-[10px] text-foreground/45">{review.date}</span>
                    </div>
                  </div>
                  <div className="flex text-gold-primary gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Review Body */}
                <p className="text-sm text-foreground/75 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Review Image Attachment */}
              {review.tattooImage && (
                <div className="pt-4 border-t border-border-color flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 border border-border-color overflow-hidden bg-neutral-light shrink-0">
                      <Image
                        src={review.tattooImage}
                        alt={review.tattooAlt || "Client tattoo image"}
                        fill
                        className="object-cover transition-smooth hover:scale-105"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gold-primary font-bold block">
                        Tattoo Style
                      </span>
                      <span className="text-xs text-foreground/80 font-medium">
                        {review.styleName}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-foreground/40 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <MessageSquare size={10} />
                    Verified Work
                  </span>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* CTA to Google page */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-foreground pb-1 text-foreground hover:text-gold-primary hover:border-gold-primary transition-smooth"
          >
            <span>Write a Review on Google</span>
            <Star size={12} />
          </a>
        </div>

      </div>
    </section>
  );
}
