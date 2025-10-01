import { useState, useEffect } from "react";
import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";
import Text from "@/components/Text";
import { motion, AnimatePresence } from "framer-motion";

// Datos de las opiniones (fácilmente modificables/expandibles)
const opiniones = [
  {
    id: 1,
    nombre: "Alirio Martinez",
    subtitulo: "Energias Renovables Polo a Tierra",
    enlace: "energiaspoloatierra.com",
    imagen: "/img/clients/foto_alirio.png",
    opinion: "Son excelentes en lo que hacen y muy profesionales. Mi sitio web quedó increíble."
  },
  {
    id: 2,
    nombre: "Darius",
    subtitulo: "Proyecto Global Gaia",
    enlace: "proyectoglobalgaia.com",
    imagen: "https://placehold.co/120x120/blue/white?text=D",
    opinion: "El equipo de Aurea Web superó mis expectativas. La atención al detalle y la creatividad son impresionantes."
  },
];

export default function Opinions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // 0: next, 1: prev
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cambio automático de opiniones
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(0);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % opiniones.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, opiniones.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection(0);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % opiniones.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + opiniones.length) % opiniones.length);
  };

  const goToIndex = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 0 : 1);
    setCurrentIndex(index);
  };

  // Variantes de animación para entrada y salida
  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <Section variant="primary" id="opinions" className="py-8 md:py-12">
      <SectionHeader 
        title="Opiniones de clientes" 
        subtitle="Lo que dicen las personas con las que hemos trabajado" 
      />
      <SectionContent className="!grid-cols-1">
        <div 
          className="relative w-full max-w-4xl mx-auto h-64 md:h-72 overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence custom={direction} mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.5 
              }}
              className="absolute inset-0 flex justify-center items-center px-4"
            >
              {/* Tarjeta de opinión responsive */}
              <motion.div 
                className={`relative rounded-2xl shadow-xl p-4 md:p-6 flex ${
                  isMobile ? "flex-col items-center text-center" : "flex-row items-start"
                } gap-4 md:gap-6 backdrop-blur-sm border border-gold/30 bg-primary/70 dark:bg-primary/50 w-full max-w-md md:max-w-2xl`}
                style={{ 
                  minHeight: isMobile ? '220px' : '185px',
                }}
                whileHover={{ 
                  scale: isMobile ? 1.0 : 1.02,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Imagen circular */}
                <motion.div 
                  className={`relative z-10 ${
                    isMobile ? "mb-4" : ""
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ 
                    scale: isMobile ? 1.0 : 1.05,
                  }}
                >
                  <div className={`${
                    isMobile 
                      ? "w-20 h-20 -mt-8" 
                      : "w-24 h-24 -mt-12 ml-2"
                    } rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg`}>
                    <img 
                      src={opiniones[currentIndex].imagen} 
                      alt={opiniones[currentIndex].nombre}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Contenido de la tarjeta - MEJORADO PARA MÓVIL */}
                <div className={`flex-1 ${isMobile ? "text-center" : ""}`}>
                  <h3 className={`font-bold mb-1 ${
                    isMobile ? "text-lg" : "text-xl"
                  }`}>
                    {opiniones[currentIndex].nombre}
                  </h3>
                  <a 
                    href={`https://${opiniones[currentIndex].enlace}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline mb-2 inline-block text-sm"
                  >
                    {opiniones[currentIndex].subtitulo}
                  </a>
                  <div className="mt-2">
                    <Text 
                      variant="light" 
                      size="sm"
                      textAlign={isMobile ? "center" : "left"}
                      className="italic leading-relaxed"
                    >
                      "{opiniones[currentIndex].opinion}"
                    </Text>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación - MEJORADOS PARA MÓVIL */}
          <button 
            onClick={goToPrev}
            className={`absolute ${
              isMobile ? "left-1" : "left-2"
            } top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 ${
              isMobile ? "p-2" : "p-3"
            } rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors z-20 text-gray-800 dark:text-white font-bold backdrop-blur-sm`}
            aria-label="Opinión anterior"
          >
            <svg className={`${isMobile ? "w-4 h-4" : "w-6 h-6"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className={`absolute ${
              isMobile ? "right-1" : "right-2"
            } top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 ${
              isMobile ? "p-2" : "p-3"
            } rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors z-20 text-gray-800 dark:text-white font-bold backdrop-blur-sm`}
            aria-label="Siguiente opinión"
          >
            <svg className={`${isMobile ? "w-4 h-4" : "w-6 h-6"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores - MEJORADOS PARA MÓVIL */}
          <div className={`absolute ${
            isMobile ? "bottom-2" : "bottom-4"
          } left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20`}>
            {opiniones.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`${
                  isMobile ? "w-3 h-3" : "w-4 h-4"
                } rounded-full transition-all duration-300 backdrop-blur-sm ${
                  index === currentIndex 
                    ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(0,0,0,0.3)]' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                }`}
                aria-label={`Ir a opinión ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}