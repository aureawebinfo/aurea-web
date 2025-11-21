import { useState, useEffect, useCallback, useMemo, useRef } from "react";
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

// Componente para lazy loading de imágenes
const LazyImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (imageRef) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.01 }
      );
      observer.observe(imageRef);
    }

    // Precargar imagen inmediatamente si no hay IntersectionObserver
    if (!window.IntersectionObserver) {
      setImageSrc(src);
    } else {
      // Precargar la imagen de todos modos
      const img = new Image();
      img.src = src;
    }

    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc || src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

export default function GoldenRatioSlider({ slides }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(0);
  const [mobileHeight, setMobileHeight] = useState<number>(500); // Altura fija inicial
  const containerRef = useRef<HTMLDivElement>(null);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([0]));

  // Precargar imágenes adyacentes
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    
    [nextIndex, prevIndex].forEach(index => {
      if (!preloadedImages.has(index)) {
        const img = new Image();
        img.src = slides[index].image;
        img.onload = () => {
          setPreloadedImages(prev => new Set(prev).add(index));
        };
      }
    });
  }, [currentSlide, slides, preloadedImages]);

  // Calcular altura máxima para móvil
  useEffect(() => {
    if (isMobile && containerRef.current) {
      // Calcular la altura máxima necesaria basada en el contenido más largo
      let maxHeight = 0;
      
      slides.forEach(slide => {
        // Estimación de altura basada en longitud del contenido
        const titleLines = Math.ceil(slide.title.length / 30);
        const descLines = Math.ceil(slide.description.length / 50);
        const estimatedHeight = 48 * 4 + // altura de imagen (h-48 = 12rem = 192px)
                               16 * 2 + // padding (p-4 = 1rem = 16px * 2)
                               titleLines * 28 + // título
                               40 + // subtítulo
                               descLines * 20 + // descripción
                               60 + // botones
                               40; // márgenes adicionales
        
        maxHeight = Math.max(maxHeight, estimatedHeight);
      });
      
      // Establecer altura fija para evitar saltos
      setMobileHeight(Math.min(maxHeight, 600)); // Máximo 600px
    }
  }, [isMobile, slides]);

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

  const slideVariants = useMemo(() => ({
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
  }), []);

  const nextSlide = useCallback(() => {
    setDirection(0);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 0 : 1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-4">
      {/* Botones de navegación flotantes - SOLO DESKTOP */}
      {!isMobile && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-primary/80 backdrop-blur-sm border border-gold/30 rounded-full p-3 text-gold hover:bg-gold hover:text-primary transition-all duration-300 shadow-lg"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-primary/80 backdrop-blur-sm border border-gold/30 rounded-full p-3 text-gold hover:bg-gold hover:text-primary transition-all duration-300 shadow-lg"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Contenedor principal - altura fija en móvil */}
      <div 
        ref={containerRef}
        className={`relative ${isMobile ? "" : "h-[350px]"} w-full ${isMobile ? "" : "overflow-hidden"} rounded-2xl`}
        style={isMobile ? { height: `${mobileHeight}px`, minHeight: `${mobileHeight}px` } : {}}
      >
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
            className={isMobile ? "w-full absolute inset-0 flex items-start" : "absolute inset-0 flex items-center justify-center"}
          >
            {isMobile ? (
              /* VERSIÓN MÓVIL - Con altura contenida */
              <div className="w-full h-full flex flex-col">
                <div className="w-full bg-primary/95 backdrop-blur-xl rounded-xl border border-gold/30 shadow-lg overflow-hidden transition-all duration-300 flex flex-col h-full">
                  {/* Imagen en móvil */}
                  <div className="w-full h-48 relative group overflow-hidden flex-shrink-0">
                    <LazyImage
                      src={currentSlideData.image}
                      alt={currentSlideData.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-primary/80 text-text px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-gold/20">
                      {currentSlide + 1} / {slides.length}
                    </div>
                  </div>

                  {/* Contenido en móvil - con scroll si es necesario */}
                  <div className="p-4 flex-1 overflow-y-auto">
                    <h3 className="text-lg font-bold mb-3 leading-tight text-text">
                      {currentSlideData.title}
                    </h3>

                    <a
                      href={currentSlideData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary hover:text-gold hover:underline font-semibold block mb-3 transition-colors duration-200 text-base"
                    >
                      {currentSlideData.subtitle}
                    </a>

                    <p className="text-sm text-text leading-relaxed mb-4">
                      {currentSlideData.description}
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
              </div>
            ) : (
              /* VERSIÓN DESKTOP - Diseño horizontal original */
              <div className="w-full max-w-2xl h-[300px] bg-primary/95 backdrop-blur-xl rounded-xl border border-gold/30 shadow-lg overflow-hidden flex transition-all duration-300 hover:shadow-gold/20 hover:scale-[1.01]">
                {/* Imagen */}
                <div className="w-2/5 h-full relative group overflow-hidden">
                  <LazyImage
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
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
                      {currentSlideData.title}
                    </h3>

                    <a
                      href={currentSlideData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary hover:text-gold hover:underline text-sm font-semibold block mb-3 transition-colors duration-200"
                    >
                      {currentSlideData.subtitle}
                    </a>

                    <p className="text-sm text-text leading-relaxed line-clamp-4">
                      {currentSlideData.description}
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
              <LazyImage
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