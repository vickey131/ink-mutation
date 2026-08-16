import { notFound } from "next/navigation";
import { Metadata } from "next";
import StyleDetailView, { StyleDetail } from "@/views/StyleDetailView";

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
    description: `Explore Suprith's expertise in custom ${data.title} at Ink Mutation Tattoo Studio, S.G. Palya. Read characteristics, placement tips, and view portfolio images.`,
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

  return <StyleDetailView data={data} />;
}
