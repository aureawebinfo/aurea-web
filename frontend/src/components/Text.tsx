import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "outline" | "filled";
  size?: "lg" | "md" | "sm";
  textAlign?: "center" | "left" | "right";
  bold?: boolean;
}

export default function Text({
  children,
  className,
  variant = "light",
  size = "md",
  textAlign = "right",
  bold = false,
}: TextProps) {
  const baseStyles = "leading-relaxed";

  const sizeStyles = {
    lg: "text-lg md:text-xl",
    md: "text-base md:text-lg",
    sm: "text-sm md:text-base",
  };

  const textAlignStyles = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  }

  const weight = bold ? "font-semibold" : "font-normal";

  const variantStyles = {
    light: "text-color-text",
    dark: "dark:text-color-text",
    outline: "text-transparent dark:text-transparent [-webkit-text-stroke:0.8px_var(--color-gold)]",
    filled:
      "text-color-text [-webkit-text-stroke:0.4px_var(--color-gold)] px-1 inline-block",
  };

  return (
    <p
      className={twMerge(
        clsx(baseStyles, sizeStyles[size], textAlignStyles[textAlign], weight, variantStyles[variant], className)
      )}
    >
      {children}
    </p>
  );
}
