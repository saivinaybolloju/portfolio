"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  download,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current || disabled || loading) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.12;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  // ✅ CONSISTENT SIZING (FIXED)
  const sizes = {
    xs: "px-3 py-1.5 text-xs",
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  // ✅ CLEAN VARIANTS (NO CONFLICTING PADDING HERE)
  const variants = {
    primary:
      "bg-[#F5C06A] text-black hover:bg-[#f7cd85] shadow-[0_0_20px_rgba(245,192,106,0.25)]",
    secondary:
      "bg-transparent border border-white/15 text-[#F3F4F6] hover:border-[#F5C06A]/50 hover:text-[#F5C06A]",
    ghost:
      "bg-transparent text-[#F3F4F6] hover:text-[#F5C06A]",
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none transition-all duration-300 select-none whitespace-nowrap cursor-pointer";

  const content = (
    <motion.span
      ref={ref}
      className={cn(
        baseStyles,
        sizes[size],
        variants[variant],
        (disabled || loading) && "opacity-60 cursor-not-allowed",
        className
      )}
      style={{ x: position.x, y: position.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: disabled || loading ? 1 : 1.03 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Loading...
        </>
      ) : (
        children
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} download={download} onClick={onClick} className="inline-flex">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="inline-flex border-0 bg-transparent p-0"
    >
      {content}
    </button>
  );
}