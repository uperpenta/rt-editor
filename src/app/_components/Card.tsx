"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <div
        className={`
          bg-[var(--surface)]
          border border-[var(--border)]
          rounded-[var(--radius-lg)]
          p-6
          shadow-sm
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    </motion.div>
  );
}

// TODO: Add variant prop for different card styles (elevated, outlined, flat)
// TODO: Add hover prop to disable hover effect when needed
// TODO: Add clickable prop that adds cursor-pointer and active state
// TODO: Add padding size variants (compact, comfortable, spacious)
