"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FooterSection() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="section-container flex items-center justify-between gap-4">
        <p className="text-xs text-[#9CA3AF] sm:text-sm">
          &copy; 2026 Sai Vinay Bolloju. All rights reserved.
        </p>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="hover-accent flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#9CA3AF]"
            >
              <ArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}
