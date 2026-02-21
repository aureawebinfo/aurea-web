import { twMerge } from "tailwind-merge";

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContent({ children, className }: SectionContentProps) {
  return (
    <div
      className={twMerge(
        "grid gap-6 md:gap-10 lg:gap-14",
        "md:grid-cols-2 lg:grid-cols-3",
        "justify-items-center",
        className
      )}
    >
      {children}
    </div>
  );
}
