import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GreenParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-500 rounded-full blur-[1px]"
          initial={{
            opacity: 0,
            y: Math.random() * 100 + "%",
            x: Math.random() * 100 + "%",
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [null, Math.random() * -100],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-emerald-900/5 to-[#050505]"></div>
    </div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Nuestro Equipo", href: "#equipo" },
    { name: "Opiniones", href: "#opiniones" },
  ];

  const scrollToSection = (e: any, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/95 backdrop-blur-md shadow-lg shadow-black/50 py-1"
            : "bg-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-14 md:h-16">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="relative z-50 flex items-center gap-3 group"
            >
              <motion.img
                src="/svg_logo2_aurea.png"
                alt="Áurea Web"
                className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                whileHover={{
                  scale: 1.05,
                  filter: "drop-shadow(0 0 12px rgba(212,175,55,0.6))",
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="flex flex-col leading-none">
                <span className="font-heading text-sm md:text-base font-medium tracking-[0.14em] text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                  ÁUREA WEB
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative group text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#d4af37] group-hover:w-full group-hover:left-0 transition-all duration-300 shadow-[0_0_8px_#d4af37]"></span>
                </a>
              ))}

              <motion.a
                href="#contacto"
                onClick={(e) => scrollToSection(e, "#contacto")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-gradient-to-r from-[#d4af37] to-[#bfa145] text-black rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all flex items-center gap-2"
              >
                Cotizar Ahora
              </motion.a>
            </div>

            <button
              className="md:hidden text-white relative z-50 p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="relative w-8 h-8 flex items-center justify-center"
              >
                <motion.div
                  variants={{
                    open: { rotate: 180, opacity: 0 },
                    closed: { rotate: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Menu size={28} className="text-[#d4af37]" />
                </motion.div>

                <motion.div
                  variants={{
                    open: { rotate: 0, opacity: 1 },
                    closed: { rotate: -180, opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <X size={28} className="text-white" />
                </motion.div>
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#050505] z-[60] md:hidden flex flex-col items-center justify-center h-[100dvh]"
          >
            <GreenParticles />

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white p-2 z-20"
            >
              <X size={32} />
            </button>

            <div className="relative z-10 flex flex-col items-center space-y-8 p-6 w-full max-w-sm text-center">
              <img
                src="/svg_logo2_aurea.png"
                alt="Logo"
                className="h-14 w-auto mb-2 opacity-80"
              />

              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="text-3xl font-heading font-light text-white hover:text-[#d4af37] hover:scale-110 transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contacto"
                onClick={(e) => scrollToSection(e, "#contacto")}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt 2 px-10 py-4 bg-gradient-to-r from-[#d4af37] to-[#bfa145] text-black rounded-full font-bold text-xl shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all"
              >
                Iniciar Proyecto
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
