import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "E-Bike Verleih Schwäbisch Hall", template: "%s | E-Bike Verleih Schwäbisch Hall" },
  description: "E-Bikes in Schwäbisch Hall mieten. Verfügbarkeit und passende Größe direkt per WhatsApp oder Telefon anfragen.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: siteConfig.name,
    title: "E-Bike Verleih Schwäbisch Hall",
    description: "E-Bikes mieten – unkompliziert per WhatsApp oder Telefon anfragen.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
