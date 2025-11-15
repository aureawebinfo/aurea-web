// ContactInfo.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DynamicIcon from './DynamicIcon';

export default function ContactInfo() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const socialMedia = [
    { 
      icon: 'Github' as keyof typeof DynamicIcon, 
      name: 'aureawebinfo', 
      url: 'https://github.com/aureawebinfo',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    { 
      icon: 'Twitter' as keyof typeof DynamicIcon, 
      name: 'Aurea_web', 
      url: 'https://x.com/Aurea_Web',
      color: 'hover:text-blue-400 dark:hover:text-blue-300'
    },
    { 
      icon: 'Instagram' as keyof typeof DynamicIcon, 
      name: 'aurea.web', 
      url: 'https://www.instagram.com/aurea.web/',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    },
    { 
      icon: 'Linkedin' as keyof typeof DynamicIcon, 
      name: 'Aurea web', 
      url: 'https://www.linkedin.com/in/%C3%A1urea-web-s-a-s-403861384/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    { 
      icon: 'Facebook' as keyof typeof DynamicIcon, 
      name: 'Facebook', 
      url: '#',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    { 
      icon: 'Tiktok' as keyof typeof DynamicIcon, 
      name: '@aurea_web', 
      url: 'https://www.tiktok.com/@aurea_web',
      color: 'hover:text-black dark:hover:text-white',
      customIcon: true
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/573002477019', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:aureawebinfo@gmail.com', '_blank');
  };

  // Componente SVG personalizado para TikTok
  const TiktokIcon = ({ className = "w-6 h-6" }) => (
    <svg 
      viewBox="0 0 24 24" 
      className={`text-gold dark:text-gold ${className}`}
      fill="currentColor"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105zm4.773 1.526z"/>
    </svg>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-md mx-auto bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-amber-200 dark:border-amber-600"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-center mb-6"
      >
        <div className="flex flex-col items-center mb-2">
          <DynamicIcon icon="UserRoundPen" size="md" />
          <h3 className="text-xl text-center font-bold text-amber-700 dark:text-amber-300 mb-2">
            Contáctanos
          </h3>
        </div>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
        <p className="text-sm">
          Estamos aquí para ayudarte. ¡Contáctanos por cualquier medio!
        </p>
      </motion.div>

      {/* Logo de la empresa */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mb-6 flex justify-center"
      >
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-lg">
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <img 
              src="/img/logo_aurea_name.png"
              alt="Áurea Web Logo"
              className="w-full h-full rounded-full object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Información de contacto */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="space-y-4 mb-6"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={openWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-3"
        >
          <span className="text-xl"><DynamicIcon icon="MessageCircleMore" size="md" /></span>
          <div className="text-left">
            <p className="text-sm font-semibold">WhatsApp</p>
            <p className="text-xs">+57 300 247 7019</p>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={openEmail}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-3"
        >
          <span className="text-xl"><DynamicIcon icon="Mail" size="md" /></span>
          <div className="text-left">
            <p className="text-sm font-semibold">Email</p>
            <p className="text-xs">aureawebinfo@gmail.com</p>
          </div>
        </motion.button>
      </motion.div>

      {/* Redes sociales */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mb-4"
      >
        <h4 className="text-center font-semibold mb-4">
          Síguenos en redes sociales
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {socialMedia.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.5 + (index * 0.1),
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 ${social.color}`}
            >
              {social.customIcon ? (
                <TiktokIcon className="w-6 h-6" />
              ) : (
                <DynamicIcon 
                  icon={social.icon} 
                  size="md"
                  className="text-current"
                />
              )}
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        className="mt-4 text-center"
      >
        <p className="text-sm">
          ¡Conectemos y creemos algo increíble juntos!
        </p>
      </motion.div>
    </motion.div>
  );
}