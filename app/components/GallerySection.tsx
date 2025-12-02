"use client";

import Image from 'next/image';
import type { Language } from "../page";

type Props = {
  language: Language;
};

const products = [
  {
    id: 1,
    src: '/assets/product-1.png',
    alt: 'Floral Silk Dress',
    name: { en: 'Floral Silk Dress', es: 'Vestido de Seda Floral' },
  },
  {
    id: 2,
    src: '/assets/product-2.png',
    alt: 'Beige Trench Coat',
    name: { en: 'Beige Trench Coat', es: 'Gabardina Beige' },
  },
  {
    id: 3,
    src: '/assets/product-3.png',
    alt: 'Leather Handbag',
    name: { en: 'Leather Handbag', es: 'Bolso de Cuero' },
  },
  {
    id: 4,
    src: '/assets/product-4.png',
    alt: 'Gold Frame Sunglasses',
    name: { en: 'Gold Frame Sunglasses', es: 'Gafas con Marco Dorado' },
  },
];

const copy = {
  en: { heading: "Curated Collection", cta: "View Details" },
  es: { heading: "Colección Curada", cta: "Ver Detalles" },
};

export default function GallerySection({ language }: Props) {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-16 uppercase tracking-widest text-gray-900">
          {copy[language].heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-sm">
                <h3 className="text-xl font-serif text-gray-900">{product.name[language]}</h3>
                <p className="text-sm text-gray-600 mt-1 uppercase tracking-wider">{copy[language].cta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
