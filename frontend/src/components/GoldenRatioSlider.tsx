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
  const [direction, setDirection] = useState(0); // 0: right, 1: left

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
    }, 4000);

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
      {/* Contenedor principal */}
      <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-2xl">
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
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Tarjeta */}
            <div className={`
              ${isMobile 
                ? "w-full h-[250px] max-w-md mx-auto" 
                : "w-full max-w-2xl h-[280px]"
              } bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden flex transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]
            `}>
              {/* Imagen */}
              <div className="w-2/5 md:w-2/5 h-full relative group">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>

              {/* Contenido */}
              <div className="w-3/5 md:w-3/5 h-full p-6 flex flex-col">
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-bold mb-3 leading-tight text-gray-800 dark:text-white">
                    {slides[currentSlide].title}
                  </h3>

                  <a
                    href={slides[currentSlide].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold block mb-3 transition-colors duration-200"
                  >
                    {slides[currentSlide].subtitle}
                  </a>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                    {slides[currentSlide].description}
                  </p>
                </div>
                
                {/* Botones de acción */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <button 
                    onClick={prevSlide}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Anterior
                  </button>
                  
                  <button 
                    onClick={nextSlide}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    Siguiente
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de puntos */}
      <div className="flex justify-center mt-8 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-600 dark:bg-blue-400"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`} />
            {index === currentSlide && (
              <motion.div 
                className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Miniaturas para desktop */}
      {!isMobile && (
        <div className="flex justify-center mt-6 space-x-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                index === currentSlide
                  ? "border-blue-500 dark:border-blue-400 scale-110"
                  : "border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:scale-105"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-16 h-12 object-cover"
              />
              <div className={`absolute inset-0 ${
                index === currentSlide ? "bg-blue-500/20" : "bg-black/0 hover:bg-black/10"
              } transition-colors duration-300`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}