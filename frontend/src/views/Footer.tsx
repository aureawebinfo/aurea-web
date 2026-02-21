import { GameModal } from "../components/GameModal";

import {
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Icono personalizado de TikTok (SVG)
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Componente de Partículas (Efecto "Infierno/Ascuas")
const EmberParticles = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Generamos 30 partículas estáticas para evitar re-renders innecesarios
    setParticles(Array.from({ length: 30 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-1 h-1 bg-[#d4af37] rounded-full blur-[1px]"
          initial={{
            opacity: 0,
            y: 0,
            x: Math.random() * 100 + "%", // Posición horizontal aleatoria (0-100%)
          }}
          animate={{
            opacity: [0, 0.8, 0], // Aparece y desvanece
            y: -150 - Math.random() * 100, // Sube entre 150px y 250px
            x: (Math.random() - 0.5) * 50 + "%", // Movimiento lateral aleatorio (viento)
          }}
          transition={{
            duration: 3 + Math.random() * 4, // Duración entre 3s y 7s
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 5, // Retraso aleatorio para que no salgan todas a la vez
          }}
          style={{
            left: `${Math.random() * 100}%`, // Distribución inicial
            width: Math.random() > 0.5 ? "2px" : "3px", // Tamaños variados
            height: Math.random() > 0.5 ? "2px" : "3px",
          }}
        />
      ))}
      {/* Gradiente inferior para simular el "núcleo" del calor */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#d4af37]/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export const Footer = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aureawebinfo",
      label: "Github",
    },
    {
      icon: Twitter,
      href: "https://x.com/Aurea_Web",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aurea.web/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/%C3%A1urea-web-s-a-s-403861384/",
      label: "LinkedIn",
    },
    {
      icon: TikTokIcon, // Icono personalizado
      href: "https://www.tiktok.com/@aurea_web?is_from_webapp=1&sender_device=pc",
      label: "TikTok",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Nuestro Equipo", href: "#equipo" },
    { name: "Opiniones", href: "#opiniones" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="relative border-t border-[#2a2a2a] py-12 bg-[#050505] overflow-hidden">
      {/* EasterEgg */}
      <GameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
      {/* FONDO DE PARTÍCULAS (Efecto Infierno Dorado) */}
      <EmberParticles />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* COLUMNA 1: MARCA Y CONTACTO RÁPIDO */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              {/* LOGO CLICKEABLE */}
              <motion.button
                onClick={() => setIsGameOpen(true)}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img
                  src="/svg_logo_aurea.png"
                  alt="Áurea Web"
                  className="h-20 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                />

                {/* TOOLTIP SECRETO */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  ¿JUGAR?
                </span>
              </motion.button>

              {/* TEXTO NORMAL (NO CLICKEABLE) */}
              <span className="text-white font-heading text-2xl font-bold tracking-tight">
                Áurea <span className="text-[#d4af37]">Web</span>
              </span>
            </div>
            <p className="text-[#F0F0F0] text-sm font-sans font-light leading-relaxed mb-6 max-w-sm opacity-80">
              Enfocados en la eficiencia y estética. Diseñamos con un enfoque
              moderno y creativo, basado en la proporción áurea.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:aureawebinfo@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#d4af37] transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#d4af37]/20 transition-colors">
                  <Mail size={16} />
                </div>
                aureawebinfo@gmail.com
              </a>
              <a
                href="https://wa.me/573002477019"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#d4af37] transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#d4af37]/20 transition-colors">
                  <Phone size={16} />
                </div>
                +57 300 247 7019
              </a>
            </div>
          </div>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <div className="md:pl-10">
            <h3 className="text-[#d4af37] font-heading text-lg font-bold mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F0F0F0] text-sm font-sans hover:text-[#d4af37] hover:translate-x-1 transition-all duration-300 inline-block opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: REDES SOCIALES */}
          <div>
            <h3 className="text-[#d4af37] font-heading text-lg font-bold mb-6">
              Síguenos
            </h3>
            <p className="text-gray-400 text-sm mb-6 opacity-80">
              Únete a nuestra comunidad y descubre lo último en diseño web y
              tecnología.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F0F0F0] hover:text-[#050505] hover:bg-[#d4af37] hover:border-[#d4af37] hover:-translate-y-1 transition-all duration-300 bg-[#0a0a0a]/50 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR: COPYRIGHT */}
        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left relative z-10">
          <p className="text-gray-500 text-sm font-sans font-light">
            © {new Date().getFullYear()} Áurea Web. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
