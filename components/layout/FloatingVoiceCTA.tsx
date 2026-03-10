"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingVoiceCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const isContributePage = pathname === "/contribute-voice";
  const isAdminPage = pathname === "/admin";

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isContributePage || isAdminPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="/contribute-voice#recorder"
            className="group flex items-center gap-3 rounded-2xl bg-saffron px-5 py-3 shadow-lg transition-all hover:bg-saffron-dark hover:shadow-xl"
          >
            <svg
              className="h-5 w-5 text-cream"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            <span className="hidden sm:flex sm:flex-col">
              <span className="text-sm font-semibold text-cream">
                Record Your Voice
              </span>
              <span className="text-[11px] text-cream/70">
                Help build Awadhi speech AI
              </span>
            </span>
            <span className="relative flex h-2 w-2">
              <span className="signal-dot absolute inline-flex h-full w-full rounded-full" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cream" />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
