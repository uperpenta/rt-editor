import type { Transition, Variants } from "framer-motion";

/**
 * Warm Paper Animation Utilities
 * Reusable spring configs and variants for consistent motion design
 */

// Spring Configurations
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

// Common Animation Variants
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: springGentle,
  },
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springGentle,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springSnappy,
  },
};

export const staggerChildren: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// TODO: Add slideDown variant for dropdowns/menus
// TODO: Add slideInFromLeft/Right for drawer/modal animations
// TODO: Add pulse variant for notification badges
// TODO: Add shake variant for error states
