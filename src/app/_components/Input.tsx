"use client";

import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[var(--foreground)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`
            w-full
            px-3 py-2
            bg-[var(--surface)]
            border border-[var(--border)]
            rounded-[var(--radius-md)]
            text-[var(--foreground)]
            placeholder:text-[var(--muted)]
            transition-all duration-200
            focus:outline-none
            focus:ring-2
            focus:ring-[var(--primary)]
            focus:ring-opacity-50
            focus:border-[var(--primary)]
            disabled:opacity-50
            disabled:cursor-not-allowed
            ${className}
          `}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

// TODO: Add icon support (left/right slots with proper spacing)
// TODO: Add error state with red border and error message display
// TODO: Add size variants (sm, md, lg)
// TODO: Add textarea variant or separate Textarea component
