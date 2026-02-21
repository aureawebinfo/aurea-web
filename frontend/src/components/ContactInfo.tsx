// ContactInfo.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { lazy, Suspense, memo, useCallback } from 'react';
import type { IconName } from "./DynamicIcon";

// Lazy loading
const DynamicIcon = lazy(() => import('./DynamicIcon'));

// Constantes
const SOCIAL_MEDIA: {
  icon: IconName;
  name: string;
  url: string;
  color: string;
  customIcon?: boolean;
}[] = [
  { 
    icon: 'Github', 
    name: 'aureawebinfo', 
    url: 'https://github.com/aureawebinfo',
    color: 'hover:text-gray-700 dark:hover:text-gray-300'
  },
  { 
    icon: 'Twitter', 
    name: 'Aurea_web', 
    url: 'https://x.com/Aurea_Web',
    color: 'hover:text-blue-400 dark:hover:text-blue-300'
  },
  { 
    icon: 'Instagram', 
    name: 'aurea.web', 
    url: 'https://www.instagram.com/aurea.web/',
    color: 'hover:text-pink-600 dark:hover:text-pink-400'
  },
  { 
    icon: 'Linkedin', 
    name: 'Aurea web', 
    url: 'https://www.linkedin.com/in/%C3%A1urea-web-s-a-s-403861384/',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  { 
    icon: 'Facebook', 
    name: 'Facebook', 
    url: '#',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
];

const tiktok = { 
    icon: 'Tiktok', 
    name: '@aurea_web', 
    url: 'https://www.tiktok.com/@aurea_web',
    color: 'hover:text-black dark:hover:text-white',
    customIcon: true
  };

// Icono optimizado
const TiktokIcon = memo(({ className = "w-6 h-6" } : { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`text-gold dark:text-gold ${className}`}
    fill="currentColor"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105zm4.773 1.526z"/>
  </svg>
));

export default function ContactInfo() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false // Permite re-animar al hacer scroll
  });

  const socialMedia = [...SOCIAL_MEDIA, tiktok];

  const openWhatsApp = useCallback(() => {
    window.open('https://wa.me/573002477019', '_blank');
  }, []);

  const openEmail = useCallback(() => {
    window.open('mailto:aureawebinfo@gmail.com', '_blank');
  }, []);

  return (
    <motion.div
      ref={ref}
      // Animación única del contenedor
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md mx-auto bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-amber-200 dark:border-amber-600"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex flex-col items-center mb-2">
          <Suspense fallback={<div className="w-8 h-8" />}>
            <DynamicIcon icon="UserRoundPen" size="md" />
          </Suspense>
          <h3 className="text-xl text-center font-bold text-amber-700 dark:text-amber-300 mb-2">
            Contáctanos
          </h3>
        </div>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
        <p className="text-sm">
          Estamos aquí para ayudarte. ¡Contáctanos por cualquier medio!
        </p>
      </div>

      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-lg transition-transform hover:scale-105 duration-500">
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <img 
              src="/img/logo_aurea_name.png"
              alt="Áurea Web Logo"
              className="w-full h-full rounded-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Botones de contacto principal */}
      <div className="space-y-4 mb-6">
        <button
          onClick={openWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 shadow-md"
        >
          <span className="text-xl">
            <Suspense fallback={<div className="w-6 h-6" />}>
              <DynamicIcon icon="MessageCircleMore" size="md" />
            </Suspense>
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold">WhatsApp</p>
            <p className="text-xs">+57 300 247 7019</p>
          </div>
        </button>

        <button
          onClick={openEmail}
          className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 shadow-md"
        >
          <span className="text-xl">
            <Suspense fallback={<div className="w-6 h-6" />}>
              <DynamicIcon icon="Mail" size="md" />
            </Suspense>
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold">Email</p>
            <p className="text-xs">aureawebinfo@gmail.com</p>
          </div>
        </button>
      </div>

      {/* Redes sociales */}
      <div className="mb-4">
        <h4 className="text-center font-semibold mb-4">
          Síguenos en redes sociales
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 active:scale-95 ${social.color}`}
            >
              {social.customIcon ? (
                <TiktokIcon className="w-6 h-6" />
              ) : (
                <Suspense fallback={<div className="w-6 h-6" />}>
                  <DynamicIcon 
                    icon={social.icon as IconName} 
                    size="md"
                    className="text-current"
                  />
                </Suspense>
              )}
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm">
          ¡Conectemos y creemos algo increíble juntos!
        </p>
      </div>
    </motion.div>
  );
}