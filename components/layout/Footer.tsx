import Link from "next/link";
import { sections } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-parchment">
      {/* Voice CTA banner */}
      <div className="border-b border-parchment/10 bg-charcoal-light">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
          <div>
            <p className="font-playfair text-xl font-semibold text-cream">
              Help our parents and village elders use AI in their own language
            </p>
            <p className="mt-1 text-sm text-parchment/60">
              We are building AI that understands Awadhi so that 38 million people can use technology in their mother tongue. Record a few sentences. Just your voice and 2 minutes.
            </p>
          </div>
          <Link
            href="/contribute-voice#recorder"
            className="flex shrink-0 items-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-saffron-dark"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            Start Recording
          </Link>
        </div>
      </div>

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
              38 million voices. One extraordinary heritage.
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
              <Link
                href="/contribute-voice#recorder"
                className="text-sm text-parchment/70 hover:text-saffron transition-colors duration-200"
              >
                Contribute Voice
              </Link>
              <Link
                href="/open-source"
                className="text-sm text-parchment/70 hover:text-saffron transition-colors duration-200"
              >
                Open Source
              </Link>
              <Link
                href="/about"
                className="text-sm text-parchment/70 hover:text-saffron transition-colors duration-200"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Right column: About */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-cream mb-4">
              About This Project
            </h3>
            <p className="text-sm text-parchment/70 leading-relaxed">
              This website tells the story of Awadhi: its history,
              literature, culture, and living heritage.
            </p>
            <p className="mt-4 text-sm text-parchment/70 leading-relaxed">
              Built by{" "}
              <a
                href="https://lucknowai.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron hover:text-saffron-light transition-colors duration-200 underline underline-offset-2"
              >
                Lucknow AI Labs
              </a>
              {" "}&{" "}
              <span className="text-parchment/90">Uttar Pradesh AI Labs</span>
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
