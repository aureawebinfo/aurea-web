import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import DynamicIcon from "@/components/DynamicIcon";
import Button from "@/components/Button";

interface TeamMember {
  image: string;
  name: string;
  position: string;
  description: string;
  links: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
}

// Componente para lazy loading de imágenes
const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}> = React.memo(({ src, alt, className, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    // Crear un objeto Image para precargar
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };

    return () => {
      img.onload = null;
    };
  }, [src, onLoad]);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-primary/50 animate-pulse" />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading="lazy"
          decoding="async"
        />
      )}
    </>
  );
});

LazyImage.displayName = 'LazyImage';

const NuestroEquipo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([0]));

  const teamMembers: TeamMember[] = useMemo(() => [
    {
      image: "/img/team/andres.jpeg",
      name: "Andres Roa",
      position: "Desarrollador Web",
      description: "Experto en seguridad informática y desarrollo web. Apasionado por crear aplicaciones seguras y eficientes.",
      links: {
        github: "https://github.com/Andiuagsfb",
        linkedin: "#",
        portfolio: "#"
      }
    },
    {
      image: "/img/team/edizon.jpeg",
      name: "Edizon Meza",
      position: "Desarrollador Web",
      description: "Desarrollador web full-stack con pasión por crear soluciones digitales impactantes. Profesional en SEO y posicionamiento web.",
      links: {
        github: "https://github.com/edimez14",
        linkedin: "https://www.linkedin.com/in/edizon-meza-leal-abb0361b9/",
        portfolio: "https://edizon-leal.vercel.app/"
      }
    },
    {
      image: "/img/team/john.jpeg",
      name: "John Lievano",
      position: "Desarrollador Web",
      description: "Especialista diseñando y desarrollando sitios web atractivos y funcionales. Especialista en frontend.",
      links: {
        github: "https://github.com/johnlievano",
        linkedin: "#",
        portfolio: "#"
      }
    },
    {
      image: "/img/team/samuel.jpg",
      name: "Samuel Loaiza",
      position: "Desarrollador Web",
      description: "Desarrollador backend con experiencia en bases de datos y servidores. Apasionado por la optimización y el rendimiento web.",
      links: {
        github: "https://github.com/zoyeras",
        linkedin: "https://www.linkedin.com/in/samueldavidloaiza/",
        portfolio: "https://portafolio-xi-three-59.vercel.app/"
      }
    },
  ], []);

  // Precargar la siguiente imagen
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % teamMembers.length;
    const prevIndex = currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1;
    
    // Precargar imagen siguiente y anterior
    if (!preloadedImages.has(nextIndex)) {
      const img = new Image();
      img.src = teamMembers[nextIndex].image;
      img.onload = () => {
        setPreloadedImages(prev => new Set(prev).add(nextIndex));
      };
    }
    
    if (!preloadedImages.has(prevIndex)) {
      const img = new Image();
      img.src = teamMembers[prevIndex].image;
      img.onload = () => {
        setPreloadedImages(prev => new Set(prev).add(prevIndex));
      };
    }
  }, [currentIndex, teamMembers, preloadedImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(0);
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const goToNext = useCallback(() => {
    setDirection(0);
    setCurrentIndex(
      currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1
    );
  }, [currentIndex, teamMembers.length]);

  const goToPrevious = useCallback(() => {
    setDirection(1);
    setCurrentIndex(
      currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1
    );
  }, [currentIndex, teamMembers.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 0 : 1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const currentMember = teamMembers[currentIndex];

  return (
    <Section id="team" variant="fourth" className="py-8 md:py-20">
      <SectionHeader 
        title="Nuestro Equipo" 
        subtitle="Profesionales apasionados por crear experiencias web perfectas"
        icon={<DynamicIcon icon="Users" size="lg" />}
      />
      
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-primary/70 dark:bg-primary/50 backdrop-blur-sm border border-gold/30 shadow-lg">
        {/* Contenedor del slider */}
        <div className="relative h-[500px] md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ 
                x: direction === 0 ? 1000 : -1000, 
                opacity: 0, 
                scale: 0.9 
              }}
              animate={{ 
                x: 0, 
                opacity: 1, 
                scale: 1 
              }}
              exit={{ 
                x: direction === 0 ? -1000 : 1000, 
                opacity: 0, 
                scale: 0.9 
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
            >
              {/* Imagen */}
              <div className="w-full md:w-[52%] h-1/2 md:h-full flex items-center justify-center p-2 md:p-4">
                <motion.div 
                  className="relative w-42 h-42 md:w-full md:h-full overflow-hidden rounded-full md:rounded-full shadow-2xl border-4 border-gold/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent z-10" />
                  <LazyImage
                    src={currentMember.image}
                    alt={currentMember.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-6 md:h-12 bg-gradient-to-t from-black/70 to-transparent" />
                </motion.div>
              </div>
              
              {/* Contenido */}
              <div className="w-full md:w-[38.2%] h-1/2 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:p-6">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-gold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentMember.name}
                </motion.h3>
                
                <motion.p 
                  className="text-base md:text-lg text-color-text/80 mb-3 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentMember.position}
                </motion.p>
                
                <motion.p 
                  className="text-sm md:text-base text-color-text/90 leading-relaxed mb-4 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentMember.description}
                </motion.p>

                {/* Botones de redes */}
                <motion.div 
                  className="flex justify-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a 
                    href={currentMember.links.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="icon" className="w-10 h-10">
                      <DynamicIcon icon="Github" size="sm" />
                    </Button>
                  </a>
                  <a 
                    href={currentMember.links.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="icon" className="w-10 h-10">
                      <DynamicIcon icon="Linkedin" size="sm" />
                    </Button>
                  </a>
                  <a 
                    href={currentMember.links.portfolio}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="icon" className="w-10 h-10">
                      <DynamicIcon icon="BriefcaseBusiness" size="sm" />
                    </Button>
                  </a>
                </motion.div>
                
                {/* Indicador de progreso */}
                <motion.div 
                  className="mt-4 md:mt-6 items-center space-x-2 hidden md:flex"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="h-1 w-6 bg-gold rounded-full"></div>
                  <div className="h-1 w-3 bg-gold/40 rounded-full"></div>
                  <div className="h-1 w-3 bg-gold/40 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Botones de navegación */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary/80 dark:bg-primary/60 backdrop-blur-sm border border-gold/30 text-gold shadow-lg hover:bg-gold hover:text-primary transition-all duration-300"
          aria-label="Miembro anterior"
        >
          <DynamicIcon icon="ChevronLeft" size="sm" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary/80 dark:bg-primary/60 backdrop-blur-sm border border-gold/30 text-gold shadow-lg hover:bg-gold hover:text-primary transition-all duration-300"
          aria-label="Siguiente miembro"
        >
          <DynamicIcon icon="ChevronRight" size="sm" />
        </button>
        
        {/* Indicadores */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-10">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-gold scale-110" 
                  : "bg-gold/40 hover:bg-gold/60"
              }`}
              aria-label={`Ir al miembro ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default React.memo(NuestroEquipo);