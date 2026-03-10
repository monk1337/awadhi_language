"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
        "bg-cream/80 backdrop-blur-md border-b border-parchment/60",
        isScrolled && "shadow-sm shadow-parchment/40"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-playfair text-2xl font-bold text-charcoal tracking-tight hover:text-saffron transition-colors duration-200"
          >
            Awadhi
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {sections.map((section) => {
              const isActive = pathname === section.path;
              return (
                <Link
                  key={section.id}
                  href={section.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                    isActive
                      ? "text-saffron bg-saffron/10"
                      : "text-charcoal-light hover:text-saffron hover:bg-saffron/5"
                  )}
                >
                  {section.title}
                </Link>
              );
            })}
            <div className="mx-1 h-5 w-px bg-parchment" />
            <Link
              href="/contribute-voice"
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200",
                pathname === "/contribute-voice"
                  ? "text-cream bg-saffron"
                  : "text-saffron-dark bg-saffron/10 hover:bg-saffron/20 nav-glow"
              )}
            >
              <span className="relative flex h-2 w-2">
                <span className="signal-dot absolute inline-flex h-full w-full rounded-full" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron" />
              </span>
              Contribute Voice
            </Link>
            {[
              { href: "/open-source", label: "Open Source" },
              { href: "/about", label: "About" },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                    isActive
                      ? "text-saffron bg-saffron/10"
                      : "text-charcoal-light hover:text-saffron hover:bg-saffron/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-charcoal hover:text-saffron hover:bg-saffron/5 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all duration-300",
                  isMobileMenuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all duration-300",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-md border-b border-parchment/60"
          >
            <div className="px-4 pb-6 pt-2 space-y-1">
              {sections.map((section, index) => {
                const isActive = pathname === section.path;
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={section.path}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200",
                        isActive
                          ? "text-saffron bg-saffron/10"
                          : "text-charcoal hover:text-saffron hover:bg-saffron/5"
                      )}
                    >
                      <span className="block">{section.title}</span>
                      <span className="block text-sm font-normal text-slate-light mt-0.5">
                        {section.subtitle}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <div className="my-2 mx-4 h-px bg-parchment/60" />
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: sections.length * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="/contribute-voice"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200",
                    pathname === "/contribute-voice"
                      ? "text-cream bg-saffron"
                      : "text-saffron-dark bg-saffron/10 nav-glow"
                  )}
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="signal-dot absolute inline-flex h-full w-full rounded-full" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron" />
                  </span>
                  <span>
                    <span className="block">Contribute Voice</span>
                    <span className="block text-sm font-normal text-saffron-dark/70 mt-0.5">
                      Help build Awadhi speech AI
                    </span>
                  </span>
                </Link>
              </motion.div>
              {[
                { href: "/open-source", label: "Open Source", subtitle: "Contribute to this project" },
                { href: "/about", label: "About Lucknow AI", subtitle: "The community behind this" },
              ].map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: (sections.length + 1 + index) * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200",
                        isActive
                          ? "text-saffron bg-saffron/10"
                          : "text-charcoal hover:text-saffron hover:bg-saffron/5"
                      )}
                    >
                      <span className="block">{link.label}</span>
                      <span className="block text-sm font-normal text-slate-light mt-0.5">
                        {link.subtitle}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
