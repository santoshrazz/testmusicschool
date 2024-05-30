import { HoverEffect } from "../ui/card-hover-effect";

export function Webinars_Card() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={danceWebinars} />
    </div>
  );
}
export const danceWebinars = [
  {
    title: "Salsa Basics",
    description:
      "An introductory class to Salsa dancing. Learn the basic steps and rhythm to get you started on the dance floor.",
    link: "https://example.com/salsa-basics",
  },
  {
    title: "Advanced Hip-Hop",
    description:
      "For experienced dancers looking to improve their skills. This webinar covers advanced hip-hop techniques and choreography.",
    link: "https://example.com/advanced-hip-hop",
  },
  {
    title: "Beginner Ballet",
    description:
      "A perfect class for those new to ballet. Learn the fundamental positions, movements, and techniques of classical ballet.",
    link: "https://example.com/beginner-ballet",
  },
  {
    title: "Contemporary Dance",
    description:
      "Explore contemporary dance styles and techniques. This class focuses on fluid movements, expression, and creativity.",
    link: "https://example.com/contemporary-dance",
  },
  {
    title: "Latin Fusion",
    description:
      "A dynamic class that combines various Latin dance styles, including Salsa, Bachata, and Merengue. Perfect for dancers of all levels.",
    link: "https://example.com/latin-fusion",
  },
  {
    title: "Jazz Dance",
    description:
      "Learn the energetic and expressive style of Jazz dance. This class covers jazz techniques, combinations, and routines.",
    link: "https://example.com/jazz-dance",
  },
];
