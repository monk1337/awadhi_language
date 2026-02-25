import {
  Playfair_Display,
  Inter,
  Noto_Sans_Devanagari,
  Cormorant_Garamond,
  JetBrains_Mono,
} from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-devanagari",
  weight: ["400", "500", "600", "700"],
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

/**
 * Combined className string for applying all font CSS variables to the root element.
 * Usage: <body className={fontVariables}>
 */
export const fontVariables = [
  playfairDisplay.variable,
  inter.variable,
  notoSansDevanagari.variable,
  cormorantGaramond.variable,
  jetbrainsMono.variable,
].join(" ");
