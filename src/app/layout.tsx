import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Google Fonts
const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Ink Mutation Tattoo Studio Koramangala",
    template: "%s | Ink Mutation Tattoo Studio",
  },
  description:
    "Premium tattoo portfolio of artist at Ink Mutation Tattoo Studio in Koramangala, Bengaluru. Specializing in elegant fine-line art, microscopic minimal tattoos, and creative hidden tattoos.",
  keywords: [
    "Ink Mutation Tattoo Studio",
    "Koramangala Tattoo Studio",
    "Tattoos in Bangalore",
    "Line Art Tattoos Bangalore",
    "Minimal Tattoos Koramangala",
    "Hidden Tattoos Bangalore",
    "Best tattoo studio Bangalore",
  ],
  authors: [{ name: "Suprith" }],
  openGraph: {
    title: "Ink Mutation Tattoo Studio Koramangala",
    description:
      "Premium fine-line art, minimal, and Classic tattoos in Bengaluru. Explore our gallery and studio.",
    url: "https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7",
    siteName: "Ink Mutation Tattoo Studio",
    images: [
      {
        url: "/images/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Ink Mutation Tattoo Studio Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink Mutation Tattoo Studio Koramangala",
    description:
      "Premium tattoo art in Bengaluru. Custom Line Art, Minimal, and Hidden tattoos.",
    images: ["/images/hero_bg.png"],
  },
  metadataBase: new URL("https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured schema script
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": "Ink Mutation Tattoo Studio",
    "image": "https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7", // Fallback to maps URL link
    "@id": "https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7",
    "url": "https://maps.app.goo.gl/3oG4DmSFPRNEfD4B7",
    "telephone": "+919791577511",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5th Cross Rd, KHB Colony, Koramangala 5th Block",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560095",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.934827,
      "longitude": 77.622538,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "20:00",
      },
    ],
    "sameAs": [
      "https://instagram.com",
      "https://facebook.com",
    ],
  };

  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakartaSans.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-gold-primary/20 selection:text-gold-accent">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
