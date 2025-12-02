"use client";

import { useEffect, useState } from 'react';
import type { Language } from "../page";

type Props = {
  language: Language;
};

const copy = {
  en: {
    title: "",
    subtitle: "Elegance in every detail",
  },
  es: {
    title: "",
    subtitle: "Elegancia en cada detalle",
  },
};

export default function HeroSection({ language }: Props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:h-screen w-full overflow-hidden flex items-center justify-center px-4 pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/hero-bg-new.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offset * 0.5}px)`, // Parallax effect
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for text readability */}
      
      <div className="relative z-20 text-center text-white px-4 fade-in-up">
        <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest uppercase">
          {copy[language].subtitle}
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
