"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DarkPageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function DarkPageWrapper({
  children,
  className,
}: DarkPageWrapperProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "min-h-screen bg-dark-bg text-dark-text",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.main>
  );
}
