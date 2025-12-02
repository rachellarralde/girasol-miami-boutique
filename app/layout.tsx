import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Girasol Miami Boutique",
  description: "High fashion minimalist luxury boutique in Miami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
