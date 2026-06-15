"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#leetcode", label: "LeetCode" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 md:top-5">
      <div className="navbar-container">
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass-panel shadow-lg shadow-black/30 border-white/10"
              : "glass-panel border-white/[0.08]"
          }`}
        >
          <nav className="flex items-center justify-around  px-4 py-4 ">
            <a
              href="#profile"
              className="shrink-0 text-lg font-bold tracking-tight text-[#F3F4F6] transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="gradient-text">SV</span>
              {/* <span className="text-[#F5C06A]">.</span> */}
            </a>

            <ul className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium text-[#9CA3AF] transition-colors duration-300 hover:text-[#F5C06A]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <MagneticButton href="/assests/resume.pdf" download variant="ghost" size="md"  className="bg-transparent border-none shadow-none text-[#F5C06A] hover:text-[#FFD699]">
                Resume
              </MagneticButton>
            </div>

            <button
              className="text-[#F3F4F6] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-white/[0.08] lg:hidden"
              >
                <ul className="flex flex-col gap-1 px-4 py-3 sm:px-5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full rounded-lg px-2 py-2.5 text-left text-sm font-medium text-[#9CA3AF] transition-colors hover:bg-white/[0.04] hover:text-[#F5C06A]"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                  <li className="pt-2 pb-1">
                    <MagneticButton href="/assests/resume.pdf" download variant="primary" size="sm">
                      Download Resume
                    </MagneticButton>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
    </div>
  );
}
