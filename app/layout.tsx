import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Awadhi: The Story of 38 Million Speakers",
    template: "%s | Awadhi",
  },
  description:
    "The story of Awadhi: a language spoken by 38 million people, with one of the richest literary traditions on Earth.",
  openGraph: {
    title: "Awadhi: The Story of 38 Million Speakers",
    description:
      "Explore the history, literature, culture, and living heritage of one of North India's oldest literary languages.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="antialiased">
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
