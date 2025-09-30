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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const positionStyles = (index: number) => {
    const diff = (index - currentSlide + slides.length) % slides.length;
    const angle = (360 / slides.length) * diff;

    return {
      transform: `rotateY(${angle}deg) translateZ(300px)`,
      opacity: diff === 0 ? 1 : 0.6,
      zIndex: diff === 0 ? 30 : 10,
    };
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      {/* Contenedor con perspectiva */}
      <div
        className="relative h-[280px] w-full"
        style={{ perspective: "800px" }}
      >
        {slides.map((slide, index) => {
          const style = positionStyles(index);

          return (
            <motion.div
              key={slide.id}
              className="absolute inset-0 flex items-center justify-center transform-gpu cursor-pointer"
              animate={style}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentSlide(index)}
            >
              {/* Tarjeta - MÁS PEQUEÑA */}
              <div className="w-[240px] h-[160px] bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-lg border border-white/20 dark:border-gray-700/20 shadow-md overflow-hidden flex">
                {/* Imagen */}
                <div className="w-2/5 h-full relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="w-3/5 h-full p-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold mb-0.5 leading-tight">
                      {slide.title}
                    </h3>

                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 dark:text-amber-400 hover:underline text-[10px] block mb-1"
                    >
                      {slide.subtitle}
                    </a>

                    <p className="text-[8px] leading-tight">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

       {/* Indicadores */}
      <div className="flex justify-center mt-10 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-amber-500 dark:bg-amber-400 w-6"
                : "bg-gray-300/50 dark:bg-gray-600/50 hover:bg-amber-400/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}