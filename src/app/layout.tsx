import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQXION™ | Adquisición Estratégica de Empresas Familiares",
  description: "Holding privado que adquiere, acelera y consolida empresas familiares sin sucesión en LATAM.",
  metadataBase: new URL("https://aqxion.com"),
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${garamond.variable} ${inter.variable} antialiased font-sans bg-primary text-text`}
      >
        {children}
      </body>
    </html>
  );
}
