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
    nombre: "Rosetta",
    subtitulo: "Tirkenbull",
    enlace: "#",
    imagen: "https://placehold.co/120x120/pink/white?text=R",
    opinion: "¡Servicio mágico! Me hicieron sentir como una princesa con su atención y cuidado en cada detalle."
  },
  {
    id: 2,
    nombre: "Sadness",
    subtitulo: "Inside Out",
    enlace: "#",
    imagen: "https://placehold.co/120x120/blue/white?text=S",
    opinion: "Al principio estaba triste, pero su servicio alegró mi día. Todo se resolvió perfectamente."
  },
  {
    id: 3,
    nombre: "Disgust",
    subtitulo: "Inside Out",
    enlace: "#",
    imagen: "https://placehold.co/120x120/green/white?text=D",
    opinion: "Normalmente soy exigente, pero su trabajo impecable no me dio nada de qué quejarme."
  },
  {
    id: 4,
    nombre: "Judy",
    subtitulo: "Air",
    enlace: "#",
    imagen: "https://placehold.co/120x120/purple/white?text=J",
    opinion: "¡Increíble! Superaron todas mis expectativas. Definitivamente recomendaré sus servicios."
  }
];

export default function Opinions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // 0: next, 1: prev

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
    <Section variant="primary">
      <SectionHeader 
        title="Opiniones de clientes" 
        subtitle="Lo que dicen las personas con las que hemos trabajado" 
      />
      <SectionContent className="!grid-cols-1">
        <div 
          className="relative w-full max-w-4xl mx-auto h-72 overflow-hidden"
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
              className="absolute inset-0 flex justify-center items-center"
            >
              {/* Tarjeta de opinión con glassmorphism */}
              <motion.div 
                className="relative rounded-2xl shadow-xl p-6 flex items-start gap-6 backdrop-blur-sm border border-gold/30 bg-primary/70 dark:bg-primary/50"
                style={{ 
                  width: '600px', // Dos proporciones áureas de ancho
                  height: '185px', // Una proporción áurea de alto (600 / 3.236 ≈ 185px)
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Imagen circular semi-exterior */}
                <motion.div 
                  className="relative z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                  }}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg ml-2 -mt-12">
                    <img 
                      src={opiniones[currentIndex].imagen} 
                      alt={opiniones[currentIndex].nombre}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Contenido de la tarjeta */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-1">
                    {opiniones[currentIndex].nombre}
                  </h3>
                  <a 
                    href={opiniones[currentIndex].enlace} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-2 inline-block"
                  >
                    {opiniones[currentIndex].subtitulo}
                  </a>
                  <div className="mt-2">
                    <Text 
                      variant="light" 
                      size="sm" 
                      textAlign="left"
                      className="italic"
                    >
                      "{opiniones[currentIndex].opinion}"
                    </Text>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación */}
          <button 
            onClick={goToPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors z-20 text-gray-800 dark:text-white font-bold backdrop-blur-sm"
            aria-label="Opinión anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors z-20 text-gray-800 dark:text-white font-bold backdrop-blur-sm"
            aria-label="Siguiente opinión"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {opiniones.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
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