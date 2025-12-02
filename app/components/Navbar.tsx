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

const socialLinks = [
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
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
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
          <span className="hidden sm:inline-block text-lg md:text-xl font-semibold text-gray-900 tracking-wide">
            Girasol Miami Boutique
          </span>
        </div>

        {/* Social + Language */}
        <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}
