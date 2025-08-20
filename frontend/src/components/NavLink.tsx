import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ 
  to, 
  children, 
  className = "", 
  onClick 
}: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => 
        `relative px-3 py-1.5 font-medium transition-colors
         ${isActive 
            ? "text-amber-600 dark:text-amber-300" 
            : "hover:text-amber-600 dark:hover:text-amber-300"}
         ${className}`
      }
      onClick={onClick}
    >
      {children}
      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-amber-500 transition-all duration-300 group-hover:w-4/5" />
    </RouterNavLink>
  );
}