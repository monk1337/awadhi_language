import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Awadhi — 38 Million Voices, Zero Recognition",
    template: "%s | Awadhi",
  },
  description:
    "The story of Awadhi: a language spoken by 38 million people, with one of the richest literary traditions on Earth, yet denied official recognition by the country where it was born.",
  openGraph: {
    title: "Awadhi — 38 Million Voices, Zero Recognition",
    description:
      "A language spoken by more people than Danish, Norwegian, Finnish, Estonian, Icelandic, Welsh, and Basque combined — with zero government recognition.",
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
      </body>
    </html>
  );
}
