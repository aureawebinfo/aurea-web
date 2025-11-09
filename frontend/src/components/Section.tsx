import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion } from "motion/react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "fourth";
  id?: string;
}

export default function Section({
  children,
  className,
  variant = "primary",
  id,
}: SectionProps) {
  const baseStyles = "w-full my-6 px-6 py-12 md:py-20";
  const variantStyles = {
    primary:
      "bg-primary/90 dark:bg-primary/80 backdrop-blur-sm text-color-text",
    secondary:
      "bg-secondary/90 dark:bg-secondary/80 backdrop-blur-sm text-color-text",
    tertiary:
      "bg-tertiary/90 dark:bg-tertiary/80 backdrop-blur-sm text-color-text",
fourth:
      "bg-fourth dark:bg-fourth backdrop-blur-sm text-color-text",
  };

  return (
    <motion.section
      id={id}
      className={twMerge(
        clsx(
          baseStyles,
          "relative max-w-7xl mx-auto rounded-2xl border-border border shadow-sm",
          "transition-colors duration-500",
          variantStyles[variant],
          className
        )
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
