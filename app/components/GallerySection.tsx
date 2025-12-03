"use client";

import Image from 'next/image';
import type { Language } from "../page";

type Props = {
  language: Language;
};

const products = [
  {
    id: 1,
    src: '/woman1.png',
    alt: 'Red knit top with metallic pants',
    name: { en: 'Red Holiday Look', es: 'Look Rojo Festivo' },
  },
  {
    id: 2,
    src: '/woman2.png',
    alt: 'Leopard sweater with dark trousers',
    name: { en: 'Leopard Chic', es: 'Chic Leopardo' },
  },
  {
    id: 3,
    src: '/woman3.png',
    alt: 'Graphic sweater with brown pants',
    name: { en: 'Artisanal Knit', es: 'Suéter Artesanal' },
  },
  {
    id: 4,
    src: '/woman4.png',
    alt: 'Green sweater with brown pants',
    name: { en: 'Emerald Stroll', es: 'Paseo Esmeralda' },
  },
];

const copy = {
  en: { heading: "Curated Collection", cta: "View Details" },
  es: { heading: "Colección Curada", cta: "Ver Detalles" },
};

export default function GallerySection({ language }: Props) {
  return (
    <section className="py-14 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-10 uppercase tracking-widest text-gray-900">
          {copy[language].heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative w-full"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
