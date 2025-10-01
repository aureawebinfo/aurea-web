import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

interface SliderProps {
  slides: Slide[];
}

export default function GoldenRatioSlider({ slides }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const positionStyles = (index: number) => {
    if (isMobile) {
      // Versión móvil - Carrusel plano simple
      const offset = (index - currentSlide) * 100;
      return {
        transform: `translateX(${offset}%) scale(0.95)`,
        opacity: Math.abs(offset) < 50 ? 1 : 0.3,
        zIndex: index === currentSlide ? 30 : 20 - Math.abs(index - currentSlide),
        filter: index === currentSlide ? 'brightness(1)' : 'brightness(0.8)',
      };
    }

    // Versión desktop - Efecto 3D
    const totalSlides = slides.length;
    const diff = (index - currentSlide + totalSlides) % totalSlides;
    const angle = (360 / totalSlides) * diff;

    return {
      transform: `rotateY(${angle}deg) translateZ(280px)`,
      opacity: diff === 0 ? 1 : 0.7,
      zIndex: diff === 0 ? 40 : 30 - Math.abs(diff),
      filter: diff === 0 ? 'brightness(1)' : 'brightness(0.8)',
    };
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 px-4 overflow-hidden">
      {/* Contenedor principal */}
      <div
        className={`relative mx-auto ${
          isMobile 
            ? "h-[200px] w-full max-w-lg overflow-visible" 
            : "h-[350px] w-full perspective-1000"
        }`}
      >
        {slides.map((slide, index) => {
          const style = positionStyles(index);

          return (
            <motion.div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center transform-gpu cursor-pointer ${
                isMobile ? "px-2" : ""
              }`}
              animate={style}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut",
                opacity: { duration: 0.4 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={!isMobile ? { scale: 1.08 } : { scale: 1.02 }}
              onClick={() => setCurrentSlide(index)}
            >
              {/* Tarjeta */}
              <div className={`
                ${isMobile 
                  ? "w-full h-[160px] max-w-md mx-auto" 
                  : "w-[300px] h-[200px]"
                } bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-xl border border-gold/30 dark:border-gold/30 shadow-lg overflow-hidden flex transition-all duration-300
              `}>
                {/* Imagen */}
                <div className="w-2/5 md:w-3/5 h-full relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="w-3/5 md:w-2/5 h-full p-1 flex flex-col">
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-bold mb-2 leading-tight text-gray-700 dark:text-gray-300">
                      {slide.title}
                    </h3>

                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 dark:text-amber-400 hover:underline text-wrap text-[8px] font-medium block mb-2 transition-colors duration-200 overflow-hidden break-words"
                    >
                      {slide.subtitle}
                    </a>

                    <p className="text-[9px] text-wrap leading-tight text-gray-700 dark:text-gray-300 break-words overflow-hidden">
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* Indicador de slide activo móvil */}
                  {isMobile && (
                    <div className="flex justify-center mt-2 pt-2 border-t border-gray-200/30 dark:border-gray-600/30">
                      <div className={`w-2 h-2 rounded-full ${
                        index === currentSlide 
                          ? "bg-amber-500" 
                          : "bg-gray-400"
                      }`} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-amber-500 dark:bg-amber-400 w-6 h-2"
                : "bg-gray-300/70 dark:bg-gray-600/70 hover:bg-amber-400/50 w-2 h-2"
            }`}
          >
            {index === currentSlide && (
              <motion.div 
                className="absolute inset-0 bg-amber-500 dark:bg-amber-400 rounded-full"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 