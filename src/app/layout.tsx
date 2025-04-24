import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/context";
import Script from 'next/script';

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
  title: "AQXION™ | Private Acquisition Architecture",
  description: "AQXION is a strategic acquisition initiative transforming succession into scalable, perpetual holdings. Built on action-first discipline.",
  metadataBase: new URL("https://www.aqxion.com"),
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
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AQXION",
              "url": "https://aqxion.com",
              "logo": "https://aqxion.com/logo.svg",
              "description": "Holding privado que adquiere, acelera y consolida empresas familiares sin sucesión en LATAM.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lima",
                "addressRegion": "Lima",
                "addressCountry": "PE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@aqxion.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${garamond.variable} ${inter.variable} antialiased font-sans bg-primary text-text`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
