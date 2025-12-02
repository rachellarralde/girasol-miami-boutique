"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Language } from "../page";

type Props = {
  language: Language;
  onToggleLanguage: () => void;
};

const copy = {
  en: {
    title: "Girasol Miami Boutique",
    subtitle: "Elegance in every detail",
    toggleLabel: "ES",
  },
  es: {
    title: "Girasol Miami Boutique", // Name stays consistent across languages
    subtitle: "Elegancia en cada detalle",
    toggleLabel: "EN",
  },
};

export default function HeroSection({ language, onToggleLanguage }: Props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:h-screen w-full overflow-hidden flex items-center justify-center px-4">
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

      <button
        aria-label="Toggle language"
        onClick={onToggleLanguage}
        className="absolute right-4 sm:right-6 top-4 sm:top-6 z-30 flex items-center gap-3 rounded-full border border-white/50 bg-black/40 px-3 sm:px-4 py-2 text-white backdrop-blur hover:bg-black/60 transition"
      >
        <span className="flex flex-col gap-1">
          <span className="block h-[2px] w-6 bg-white"></span>
          <span className="block h-[2px] w-6 bg-white"></span>
          <span className="block h-[2px] w-6 bg-white"></span>
        </span>
        <span className="text-sm font-semibold tracking-wide">
          {copy[language].toggleLabel}
        </span>
      </button>

      <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-30 drop-shadow-lg rounded-lg border border-black/60 bg-black/20 px-2 py-2">
        <Image
          src="/main-logo.png"
          alt="Gira-Sol Miami Boutique logo"
          width={140}
          height={140}
          priority
          className="h-auto w-24 sm:w-32 md:w-36 rounded-md"
        />
      </div>
      
      <div className="relative z-20 text-center text-white px-4 fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-4 tracking-wider">
          {copy[language].title}
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase">
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
