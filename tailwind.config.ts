import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "var(--color-gold)",
        black: "var(--color-black)",
        white: "var(--color-white)",
        beige: "var(--color-beige)",
        "text-muted": "var(--color-text-muted)",
      },
      fontFamily: {
        serif: ['var(--font-heading)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
