import Navigation from "@/components/Navigation";
import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";

const categories = [
  {
    id: "rodinne",
    title: "Rodinné fotografie",
    image: "/previews/family.jpg",
    description: "Přirozené momenty plné lásky a radosti",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    id: "firemni",
    title: "Firemní fotografie",
    image: "/previews/company.jpg",
    description: "Profesionální snímky pro váš byznys",
    emoji: "💼",
  },
  {
    id: "reportaze",
    title: "Reportáže",
    image: "/previews/reportage.jpg",
    description: "Zachycení atmosféry vašich akcí",
    emoji: "📸",
  },
  {
    id: "tematicke",
    title: "Tematické focení",
    image: "/previews/themed.jpg",
    description: "Kreativní koncepty a umělecké fotografie",
    emoji: "🎨",
  },
  {
    id: "zvirata",
    title: "Zvířata",
    image: "/previews/animals.jpg",
    description: "Portréty vašich čtyřnohých přátel",
    emoji: "🐾",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Categories Section */}
      <Categories key="home-categories" categories={categories} />

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}
