import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  background?: "none" | "primary" | "secondary" | "tertiary";
  as?: "div" | "button" | "a";
  href?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  size = "md",
  background = "none",
  as = "div",
  href,
  onClick,
}: CardProps) {
  const Comp = as === "a" ? "a" : as === "button" ? "button" : "div";

  // proporción áurea vertical (alto > ancho)
  const sizeStyles = {
    sm: "w-[155px] h-[250px]",
    md: "w-[247px] h-[400px]",
    lg: "w-[402px] h-[650px]",
  };

  const bgStyles = {
    none: "bg-transparent",
    primary: "bg-color-primary",
    secondary: "bg-color-secondary",
    tertiary: "bg-color-tertiary",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[1.618rem] border border-color-gold shadow-md"
    >
      <Comp
        href={href}
        onClick={onClick}
        className={twMerge(
          clsx(
            "flex flex-col justify-start items-center p-4 transition-all relative",
            sizeStyles[size],
            bgStyles[background],
            className
          )
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
