import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE_URL, absoluteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const OG_IMAGE = {
  url: absoluteUrl("/brand/og-image.png"),
  width: 1200,
  height: 630,
  alt: "ByteIQ Tecnologia — AI Engineering & Software Development",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ByteIQ — AI Engineering & Software Development",
    template: "%s | ByteIQ",
  },
  description:
    "A ByteIQ projeta e constrói sistemas de software inteligentes, agentes autônomos, soluções de automação e produtos digitais de alta confiabilidade.",
  keywords: [
    "ByteIQ",
    "AI Engineering",
    "Software Development",
    "AI Agents",
    "Automação Inteligente",
    "Sistemas Distribuídos",
    "Desenvolvimento de Software",
    "Engenharia de Software",
    "Multi-Agent Systems",
    "LLM Integration",
    "RAG",
  ],
  authors: [{ name: "ByteIQ Tecnologia" }],
  creator: "ByteIQ",
  publisher: "ByteIQ Tecnologia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "ByteIQ — AI Engineering & Software Development",
    description:
      "Engenharia de Inteligência Artificial, desenvolvimento de software e sistemas digitais robustos.",
    url: absoluteUrl("/"),
    siteName: "ByteIQ",
    locale: "pt_BR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteIQ — AI Engineering & Software Development",
    description:
      "Projetamos e construímos software inteligente, automação e sistemas digitais.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-bg text-primary flex flex-col">
        {/* Scroll reveals are progressive enhancement: content is visible by
            default; JS only ever adds the "in view" state. This is the
            explicit fallback for the rare case JS never runs at all. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;transition:none!important}`}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
