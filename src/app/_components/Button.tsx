import { type ReactNode } from "react";

type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  size?: Size;
  bg?: string;
  text?: string;
  hover?: string;
  rounded?: string;
  href?: string;
  formAction?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-6 py-2",
  md: "px-8 py-3",
  lg: "px-8 py-4",
};

export function Button({
  children,
  size = "md",
  bg = "bg-gray-900",
  text = "text-white",
  hover = "hover:bg-gray-800",
  rounded = "rounded-full",
  href,
  formAction,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = [
    "transition-colors",
    sizeClasses[size],
    bg,
    text,
    hover,
    rounded,
    disabled && "opacity-50 cursor-not-allowed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={`inline-block ${classes}`}>
        {children}
      </a>
    );
  }

  if (formAction) {
    return (
      <form>
        <button className={classes} formAction={formAction} disabled={disabled}>
          {children}
        </button>
      </form>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
