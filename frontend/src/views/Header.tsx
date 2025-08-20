import { useState } from "react";
import Logo from "../components/Logo";
import NavLink from "../components/NavLink";
import ThemeToggle from "../components/ThemeToggle";
import Button from "../components/Button";
import MobileMenu from "../components/MobileMenu";
import DynamicIcon from "../components/DynamicIcon";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Portafolio", href: "/portafolio" },
    { name: "contacto", href: "/contacto" },
  ];

  return (
    <>
      <div className="sticky top-4 z-50 mx-4">
        <div className="rounded-full border-border bg-background/80 backdrop-blur-md border shadow-lg">
          <div className="container mx-auto px-6">
            <div className="flex h-16 items-center justify-between">
              <Logo />
              
              <nav className="hidden md:flex items-center space-x-1">
                {navigation.map((item) => (
                  <NavLink key={item.name} to={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              <div className="hidden md:flex items-center gap-3">
                <ThemeToggle />
                <Button>Contacto</Button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden rounded-full p-2 text-amber-700 dark:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-950/30"
                aria-label="Open menu"
              >
                <DynamicIcon icon="Menu" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}