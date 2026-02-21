import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "outline" | "filled";
  size?: "lg" | "md" | "sm";
  textAlign?: "center" | "left" | "right";
  bold?: boolean;
}

export default function Title({
  children,
  className,
  variant = "light",
  size = "lg",
  textAlign = "center",
  bold = true,
}: TitleProps) {
  const baseStyles = "tracking-tight text-center";

  const sizeStyles = {
    lg: "text-4xl md:text-5xl",
    md: "text-2xl md:text-3xl",
    sm: "text-xl md:text-2xl",
  };

  const textAlignStyles = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  }

  const weight = bold ? "font-bold" : "font-medium";

  const variantStyles = {
    light: "text-color-text",
    dark: "dark:text-color-text",
    outline: "text-transparent dark:text-transparent [-webkit-text-stroke:1px_var(--color-gold)]",
    filled:
      "text-color-text [-webkit-text-stroke:0.5px_var(--color-gold)] px-2 py-1 inline-block",
  };

  return (
    <h1
      className={twMerge(
        clsx(baseStyles, sizeStyles[size], textAlignStyles[textAlign], weight, variantStyles[variant], className)
      )}
    >
      {children}
    </h1>
  );
}
