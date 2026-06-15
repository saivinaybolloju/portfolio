"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GradientBorderCard({
  children,
  className = "",
  noPadding = false,
}) {
  return (
    <motion.div
      className={cn(
        "gradient-border-card glass-panel transition-transform duration-300",
        className
      )}
      style={!noPadding ? { padding: "24px" } : undefined}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}