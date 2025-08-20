import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion, type HTMLMotionProps } from "motion/react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children?: ReactNode;
  className?: string;
  loading?: boolean;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "icon"
    | "icon-outline"
    | "icon-ghost"
    | "text-icon"
    | "text-icon-outline"
    | "text-icon-ghost";
}

export default function Button({
  children,
  className,
  loading = false,
  variant = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center rounded-lg font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles: Record<string, string> = {
    default:
      "bg-gold text-color-text dark:text-color-text px-4 py-2 shadow-sm",
    outline:
      "border border-gold text-gold bg-transparent px-4 py-2",
    ghost:
      "bg-transparent text-color-text dark:text-color-text px-4 py-2",
    icon:
      "p-2 rounded-full bg-color-primary/60 dark:bg-color-primary/40 text-gold",
    "icon-outline":
      "p-2 rounded-full border border-gold text-gold bg-transparent",
    "icon-ghost":
      "p-2 rounded-full bg-transparent text-gold",
    "text-icon":
      "flex items-center gap-2 bg-gold text-color-text dark:text-color-text px-4 py-2 shadow-sm",
    "text-icon-outline":
      "flex items-center gap-2 border border-gold text-gold bg-transparent px-4 py-2",
    "text-icon-ghost":
      "flex items-center gap-2 bg-transparent text-color-text dark:text-color-text px-4 py-2",
  };

  return (
    <motion.button
      className={twMerge(clsx(baseStyles, variantStyles[variant], className))}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        </span>
      )}
      <span className={clsx(loading && "opacity-0")}>{children}</span>
    </motion.button>
  );
}
