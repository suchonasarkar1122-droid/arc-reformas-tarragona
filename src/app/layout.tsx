import type { Metadata } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StructuredData from "@/components/StructuredData";

const body = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Manrope({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcreformastarragona.es"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Reformas en Tarragona · Cocinas, Baños, Pisos y Locales | ARC",
    template: "%s | ARC Reformas Tarragona",
  },
  description:
    "Empresa de reformas integrales en Tarragona. Trabajamos en edificios del centro histórico, pisos del Eixample y bloques modernos. Presupuesto sin compromiso. Llámanos al 877 278 165.",
  authors: [{ name: "ARC Reformas Tarragona" }],
  creator: "ARC Reformas Tarragona",
  publisher: "ARC Reformas Tarragona",
  category: "Reformas y construcción",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://arcreformastarragona.es",
    siteName: "ARC Reformas Tarragona",
    title: "Reformas en Tarragona · Cocinas, Baños, Pisos y Locales | ARC",
    description:
      "Empresa de reformas integrales en Tarragona. Cocinas, baños, pisos y locales con presupuesto sin compromiso. Tarragona, Reus, Vila-seca, Salou y todo el Tarragonès.",
    images: [
      {
        url: "/images/hero-reforma-tarragona-clasica.webp",
        width: 1200,
        height: 630,
        alt: "ARC Reformas Tarragona — reformas integrales en la capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformas en Tarragona · ARC Reformas",
    description:
      "Reformas integrales, cocinas y baños en Tarragona y el Tarragonès. Presupuesto sin compromiso.",
    images: ["/images/hero-reforma-tarragona-clasica.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // verification: añadir cuando tengas los códigos de Google Search Console y Bing Webmaster
  // verification: {
  //   google: "TU_CODIGO_GSC",
  //   other: { "msvalidate.01": "TU_CODIGO_BING" },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/images/hero-reforma-tarragona-clasica.webp" as="image" type="image/webp" />
      </head>
      <body
        className={`${body.variable} ${display.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
