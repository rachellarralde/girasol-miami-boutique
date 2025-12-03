import Image from 'next/image';
import type { Language } from "../page";

type Props = {
  language: Language;
};

const copy = {
  en: {
    contact: "Contact",
    social: "Social",
    hours: "Hours",
    monSat: "Mon - Sat: 11:00 AM - 7:00 PM",
    sun: "",
    tagline: "Elegance in every detail",
  },
  es: {
    contact: "Contacto",
    social: "Redes",
    hours: "Horarios",
    monSat: "Lunes a sábado de 11:00 am a 7:00 pm",
    sun: "",
    tagline: "Elegancia en cada detalle",
  },
};

export default function Footer({ language }: Props) {
  return (
    <footer className="bg-[#111] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-10">
          <div className="shrink-0 rounded-lg border border-black/60 bg-black/10 px-2 py-2">
            <Image
              src="/main-logo.png"
              alt="Gira-Sol Miami Boutique logo"
              width={120}
              height={120}
              className="h-auto w-24 md:w-28 rounded-md"
            />
          </div>
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-serif mb-6 text-left md:text-left">Girasol Miami Boutique</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-light tracking-wide text-gray-400">
              <div>
                <h3 className="text-white uppercase mb-4 tracking-widest">{copy[language].contact}</h3>
                <p className="mb-2">2333 Brickell Ave, Miami, FL 33129</p>
                <p className="mb-2">contact@girasolmiami.com</p>
                <p>(786) 285-8435</p>
              </div>
              
              <div>
                <h3 className="text-white uppercase mb-4 tracking-widest">{copy[language].social}</h3>
                <div className="flex flex-col space-y-2">
                  <a href="https://wa.me/17862858435" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">WhatsApp</a>
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="hover:text-white transition-colors">TikTok</a>
                  <a href="#" className="hover:text-white transition-colors">Facebook</a>
                </div>
              </div>

              <div>
                <h3 className="text-white uppercase mb-4 tracking-widest">{copy[language].hours}</h3>
                <p className="mb-2">{copy[language].monSat}</p>
                {copy[language].sun && <p>{copy[language].sun}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-gray-600 uppercase tracking-widest flex flex-col sm:flex-row gap-3 sm:gap-0 items-start sm:items-center justify-between">
          <span>&copy; {new Date().getFullYear()} Girasol Miami Boutique. All rights reserved.</span>
          <span className="text-gray-500">{copy[language].tagline}</span>
        </div>
      </div>
    </footer>
  );
}
