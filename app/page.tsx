"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

export type Language = "en" | "es";

export default function Home() {
  const [language, setLanguage] = useState<Language>("es"); // default to Spanish audience

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <main className="min-h-screen">
      <HeroSection language={language} onToggleLanguage={toggleLanguage} />
      <GallerySection language={language} />
      <Footer language={language} />
    </main>
  );
}
