"use client";

import Image from 'next/image';
import { useState } from 'react';
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

const socialLinks = [
  {
    href: "https://wa.me/17862858435",
    label: "WhatsApp",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-4.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/",
    label: "TikTok",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M15.5 3a5 5 0 0 0 4.5 3.1v3.05a8.1 8.1 0 0 1-4.5-1.4v6.25a5.9 5.9 0 1 1-5-5.82V11a2.85 2.85 0 1 0 2 2.71V3h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M13 10h2.5l.5-3H13V5.5c0-.9.3-1.5 1.6-1.5H16V1.1C15.3 1 14.1 1 13 1c-2.6 0-4 1.6-4 4.3V7H7v3h2v9h4z" />
      </svg>
    ),
  },
  {
    href: "mailto:contact@girasolmiami.com",
    label: "Email",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.2l9 5.3 9-5.3V7H3zm0 2.6V17h18v-7.4l-8.4 5a2 2 0 0 1-2 0z" />
      </svg>
    ),
  },
];

export default function Navbar({ language, onToggleLanguage }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + Name */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/main-logo1.jpg"
            alt="Gira-Sol Miami Boutique logo"
            width={140}
            height={100}
            priority
            className="h-auto w-24 sm:w-32 md:w-36"
          />
          <span className="inline-block text-base sm:text-lg md:text-xl font-semibold text-gray-900 tracking-wide">
            Girasol Miami Boutique
          </span>
        </div>

        {/* Desktop Social + Language */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 text-gray-900">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="hover:text-amber-700 transition"
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <button
            onClick={onToggleLanguage}
            className="text-gray-900 font-semibold text-sm hover:text-amber-700 transition"
          >
            {copy[language].toggleLabel}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-900"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-5 bg-current"></span>
            <span className="block h-[2px] w-5 bg-current"></span>
            <span className="block h-[2px] w-5 bg-current"></span>
          </span>
        </button>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute right-4 top-full mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-lg p-4 space-y-4">
          <div className="flex items-center justify-between text-gray-900">
            <span className="text-sm font-semibold">Idioma</span>
            <button
              onClick={() => {
                onToggleLanguage();
                setMenuOpen(false);
              }}
              className="text-gray-900 font-semibold text-sm hover:text-amber-700 transition"
            >
              {copy[language].toggleLabel}
            </button>
          </div>
          <div className="flex items-center justify-between text-gray-900">
            <span className="text-sm font-semibold">Redes</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="hover:text-amber-700 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
