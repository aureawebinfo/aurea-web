import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function ModernSlider({ slides }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(0);

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
      setDirection(0);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9
    })
  };

  const nextSlide = () => {
    setDirection(0);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 0 : 1);
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-4">
      {/* Botones de navegación flotantes - SOLO DESKTOP */}
      {!isMobile && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-primary/80 backdrop-blur-sm border border-gold/30 rounded-full p-3 text-gold hover:bg-gold hover:text-primary transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-primary/80 backdrop-blur-sm border border-gold/30 rounded-full p-3 text-gold hover:bg-gold hover:text-primary transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Contenedor principal */}
      <div className={`relative ${isMobile ? "h-auto min-h-[400px]" : "h-[350px]"} w-full ${isMobile ? "" : "overflow-hidden"} rounded-2xl`}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 }
            }}
            className={isMobile ? "w-full" : "absolute inset-0 flex items-center justify-center"}
          >
            {isMobile ? (
              /* VERSIÓN MÓVIL - Diseño vertical completo */
              <div className="w-full bg-primary/95 backdrop-blur-xl rounded-xl border border-gold/30 shadow-lg overflow-hidden transition-all duration-300 mb-4">
                {/* Imagen en móvil */}
                <div className="w-full h-48 relative group overflow-hidden">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-primary/80 text-text px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-gold/20">
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>

                {/* Contenido en móvil */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-3 leading-tight text-text">
                    {slides[currentSlide].title}
                  </h3>

                  <a
                    href={slides[currentSlide].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tertiary hover:text-gold hover:underline font-semibold block mb-3 transition-colors duration-200 text-base"
                  >
                    {slides[currentSlide].subtitle}
                  </a>

                  <p className="text-sm text-text leading-relaxed mb-4">
                    {slides[currentSlide].description}
                  </p>
                  
                  {/* Botones de acción para móvil */}
                  <div className="flex justify-between items-center pt-4 border-t border-gold/20">
                    <button 
                      onClick={prevSlide}
                      className="flex items-center text-text hover:text-tertiary transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gold/10"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Anterior
                    </button>
                    
                    <button 
                      onClick={nextSlide}
                      className="flex items-center text-text hover:text-tertiary transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gold/10"
                    >
                      Siguiente
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* VERSIÓN DESKTOP - Diseño horizontal original */
              <div className="w-full max-w-2xl h-[300px] bg-primary/95 backdrop-blur-xl rounded-xl border border-gold/30 shadow-lg overflow-hidden flex transition-all duration-300 hover:shadow-gold/20 hover:scale-[1.01]">
                {/* Imagen */}
                <div className="w-2/5 h-full relative group overflow-hidden">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-primary/80 text-text px-2 py-1 rounded-full text-xs backdrop-blur-sm border border-gold/20">
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>

                {/* Contenido */}
                <div className="w-3/5 p-6 h-full flex flex-col">
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-3 leading-tight text-text">
                      {slides[currentSlide].title}
                    </h3>

                    <a
                      href={slides[currentSlide].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary hover:text-gold hover:underline text-sm font-semibold block mb-3 transition-colors duration-200"
                    >
                      {slides[currentSlide].subtitle}
                    </a>

                    <p className="text-sm text-text leading-relaxed line-clamp-4">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de puntos */}
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
            aria-label={`Ir a slide ${index + 1}`}
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-tertiary"
                : "bg-gray-400/50 hover:bg-tertiary/50"
            }`} />
            {index === currentSlide && (
              <motion.div 
                className="absolute inset-0 bg-tertiary rounded-full"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Miniaturas para desktop */}
      {!isMobile && (
        <div className="flex justify-center mt-6 space-x-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                index === currentSlide
                  ? "border-tertiary scale-110 shadow-lg shadow-tertiary/20"
                  : "border-transparent hover:border-gold/50 hover:scale-105"
              }`}
              aria-label={`Ver ${slide.title}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-14 h-10 object-cover"
              />
              <div className={`absolute inset-0 ${
                index === currentSlide ? "bg-tertiary/20" : "bg-primary/0 hover:bg-gold/10"
              } transition-colors duration-300`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}