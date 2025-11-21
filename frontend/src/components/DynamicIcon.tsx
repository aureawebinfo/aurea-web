import * as Icons from "lucide-react";
import { twMerge } from "tailwind-merge";
import type { LucideProps } from "lucide-react";
import type { ElementType } from "react";

export type IconName = keyof typeof Icons;

interface DynamicIconProps {
  icon: IconName;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
}

export default function DynamicIcon({ icon, className, size = "md" }: DynamicIconProps) {
  const Icon = Icons[icon] as ElementType<LucideProps>;

  const sizePx = {
    sm: 20,
    md: 24,
    lg: 32,
    xl: 36,
    xxl: 72,
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
