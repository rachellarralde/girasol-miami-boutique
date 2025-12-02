"use client";

import Image from 'next/image';
import type { Language } from "../page";

type Props = {
  language: Language;
  onToggleLanguage: () => void;
};

const copy = {
  en: {
    toggleLabel: "ES",
    inicio: "Home",
    productos: "Products",
    contacto: "Contact",
  },
  es: {
    toggleLabel: "EN",
    inicio: "Inicio",
    productos: "Productos",
    contacto: "Contacto",
  },
};

export default function Navbar({ language, onToggleLanguage }: Props) {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/main-logo.png"
            alt="Gira-Sol Miami Boutique logo"
            width={120}
            height={120}
            priority
            className="h-auto w-24 sm:w-28 md:w-32"
          />
        </div>

        {/* Navigation Links - centered */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-gray-900 font-medium hover:text-amber-700 transition">
            {copy[language].inicio}
          </a>
          <a href="#productos" className="text-gray-900 font-medium hover:text-amber-700 transition">
            {copy[language].productos}
          </a>
          <a href="#contacto" className="text-gray-900 font-medium hover:text-amber-700 transition">
            {copy[language].contacto}
          </a>
        </div>

        {/* Language Toggle */}
        <button
          onClick={onToggleLanguage}
          className="text-gray-900 font-semibold text-sm hover:text-amber-700 transition"
        >
          {copy[language].toggleLabel}
        </button>
      </div>
    </nav>
  );
}
