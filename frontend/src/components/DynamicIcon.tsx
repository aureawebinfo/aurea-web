import * as Icons from "lucide-react";
import { twMerge } from "tailwind-merge";
import type { LucideProps } from "lucide-react";
import type { ElementType } from "react";

interface DynamicIconProps {
  icon: keyof typeof Icons;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function DynamicIcon({
  icon,
  className,
  size = "md",
}: DynamicIconProps) {
  const Icon = Icons[icon] as ElementType<LucideProps>;

  const sizePx = {
    sm: 20,
    md: 24,
    lg: 32,
  }[size] || 24;

  if (!Icon) return null;

  return (
    <Icon
      size={sizePx}
      className={twMerge(
        "text-gold dark:text-gold stroke-[1.5] transition-colors",
        className
      )}
    />
  );
}