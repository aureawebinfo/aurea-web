import Logo from "./Logo";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import DynamicIcon from "./DynamicIcon";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-secondary/85 backdrop-blur md:hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <Logo />
        <button
          onClick={onClose}
          className="rounded-full p-2 transition-colors text-amber-700 dark:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-950/30"
          aria-label="Close menu"
        >
          <DynamicIcon icon="X" size="lg" />
        </button>
      </div>
      
      <nav className="flex flex-col py-4 px-6 space-y-3">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            href={item.href}
            className="py-3 text-lg"
            onClick={onClose}
          >
            {item.name}
          </NavLink>
        ))}
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t">
          <ThemeToggle />
          <Button>Contacto</Button>
        </div>
      </nav>
    </div>
  );
}