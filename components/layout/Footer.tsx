import Link from "next/link";
import { sections } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-parchment">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left column: Branding */}
          <div>
            <Link
              href="/"
              className="font-playfair text-3xl font-bold text-cream hover:text-saffron transition-colors duration-200"
            >
              Awadhi
            </Link>
            <p className="mt-4 font-cormorant text-xl italic text-parchment/80 leading-relaxed">
              38 million voices. Zero recognition.
            </p>
          </div>

          {/* Center column: Quick links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-cream mb-4">
              Explore
            </h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={section.path}
                  className="text-sm text-parchment/70 hover:text-saffron transition-colors duration-200"
                >
                  {section.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right column: About */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-cream mb-4">
              About This Project
            </h3>
            <p className="text-sm text-parchment/70 leading-relaxed">
              This website tells the story of one of the world&apos;s largest
              undercounted languages.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-parchment/20">
          <p className="text-xs text-parchment/50 text-center leading-relaxed">
            Content sourced from independent research reports. All data
            citations available in each section.
          </p>
        </div>
      </div>
    </footer>
  );
}
