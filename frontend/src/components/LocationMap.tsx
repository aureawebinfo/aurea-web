// LocationMap.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LocationMap() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const openGoogleMaps = () => {
    const address = "Calle 17 #30-55 Ciudad Verde, Soacha, Cundinamarca, Colombia";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  // Coordenadas de Ciudad Verde, Soacha (aproximadas)
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.785707283849!2d-74.211828685237!3d4.637511996628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c3a3d5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sCiudad%20Verde%2C%20Soacha%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1690000000000!5m2!1ses!2sco`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200 dark:border-amber-600"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-center mb-4"
      >
        <h3 className="text-xl font-bold text-amber-700 dark:text-amber-300 mb-2">
          📍 Nuestra Ubicación
        </h3>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
      </motion.div>

      {/* Mapa de Google Maps */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mb-4 rounded-lg overflow-hidden shadow-md"
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Áurea Web en Ciudad Verde, Soacha"
          className="w-full h-48"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="space-y-3 mb-4"
      >
        <div className="flex items-start space-x-3">
          <span className="text-amber-600 dark:text-amber-400 mt-1">🏢</span>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Dirección:</p>
            <p className="text-gray-600 dark:text-gray-300">
              Calle 17 #30-55<br />
              Ciudad Verde, Soacha<br />
              Cundinamarca, Colombia
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <span className="text-amber-600 dark:text-amber-400 mt-1">📍</span>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Zona:</p>
            <p className="text-gray-600 dark:text-gray-300">
              Sector residencial Ciudad Verde<br />
              A 20 min de Bogotá
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="mt-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={openGoogleMaps}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <span>🗺️</span>
          <span>Abrir en Google Maps</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="mt-4 text-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ¡Te esperamos en nuestras instalaciones!
        </p>
      </motion.div>
    </motion.div>
  );
}