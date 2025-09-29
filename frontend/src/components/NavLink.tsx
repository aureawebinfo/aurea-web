interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ 
  href, 
  children, 
  className = "", 
  onClick 
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={`relative px-3 py-1.5 font-medium transition-colors
                 hover:text-amber-600 dark:hover:text-amber-300
                 group ${className}`}
      onClick={onClick}
    >
      {children}
      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-amber-500 transition-all duration-300 group-hover:w-4/5" />
    </a>
  );
}