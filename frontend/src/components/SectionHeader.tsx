import { twMerge } from "tailwind-merge";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  className,
  icon,
}: SectionHeaderProps) {
  return (
    <div
      className={twMerge(
        "mb-8 text-center",
        "flex flex-col items-center justify-center gap-2",
        className
      )}
    >
      {icon && <div className="text-gold">{icon}</div>}
      <h2 className="text-3xl md:text-4xl font-bold text-color-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-color-text/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
