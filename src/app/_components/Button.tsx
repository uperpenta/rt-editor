"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--primary)] text-white hover:opacity-90 border border-transparent",
  secondary:
    "bg-[var(--secondary)] text-white hover:opacity-90 border border-transparent",
  ghost:
    "bg-transparent text-[var(--foreground)] hover:bg-[var(--border)] border border-[var(--border)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm rounded-[var(--radius-sm)]",
  md: "px-4 py-2 text-base rounded-[var(--radius-md)]",
  lg: "px-6 py-4 text-lg rounded-[var(--radius-md)]",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="inline-block"
    >
      <button
        className={`
          font-medium transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
}

// TODO: Add loading state with spinner animation
// TODO: Add icon support (left/right slots)
// TODO: Add fullWidth prop for 100% width
// TODO: Add as prop for polymorphic component (render as Link, etc.)
