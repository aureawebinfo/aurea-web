import React, { useState, useEffect } from "react";
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

const NuestroEquipo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const teamMembers: TeamMember[] = [
    {
      image: "/ruta/a/imagen1.jpg",
      name: "Andres Roa",
      position: "Desarrollador Web",
      description:
        "Experto en estrategias de negocio con más de 1 año de experiencia.",
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
      description:
        "Apasionada por la tecnología y innovación en desarrollo web.",
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
      description:
        "Especialista en soluciones innovadoras y eficientes para web.",
      links: {
        github: "https://github.com/johnlievano",
        linkedin: "#",
        portfolio: "#"
      }
    },
    {
      image: "/ruta/a/imagen4.jpg",
      name: "Samuel Loaiza",
      position: "Desarrollador Web",
      description:
        "Creando experiencias de usuario excepcionales e interfaces intuitivas.",
      links: {
        github: "https://github.com/zoyeras",
        linkedin: "https://www.linkedin.com/in/samueldavidloaiza/",
        portfolio: "https://portafolio-xi-three-59.vercel.app/"
      }
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(0);
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const goToNext = () => {
    setDirection(0);
    setCurrentIndex(
      currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToPrevious = () => {
    setDirection(1);
    setCurrentIndex(
      currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 0 : 1);
    setCurrentIndex(index);
  };

  return (
    <Section id="equipo" variant="secondary" className="py-12 md:py-20">
      <SectionHeader 
        title="Nuestro Equipo" 
        subtitle="Profesionales apasionados por crear experiencias web perfectas"
        icon={<DynamicIcon icon="Users" size="lg" />}
      />
      
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-primary/70 dark:bg-primary/50 backdrop-blur-sm border border-gold/30 shadow-lg">
        {/* Contenedor del slider */}
        <div className="relative h-[420px] md:h-[500px]">
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
              {/* Imagen con proporción áurea (61.8%) */}
              <div className="w-full  md:w-[52%] h-[48%] md:h-full flex items-center justify-center p-2 md:p-4">
                <motion.div 
                  className="relative w-full h-full overflow-hidden rounded-full shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent z-10" />
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/70 to-transparent" />
                </motion.div>
              </div>
              
              {/* Contenido con proporción áurea (38.2%) */}
              <div className="w-full md:w-[38.2%] h-[60%] md:h-full flex flex-col justify-center p-3 md:p-6">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-gold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {teamMembers[currentIndex].name}
                </motion.h3>
                
                <motion.p 
                  className="text-base md:text-lg text-color-text/80 mb-3 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {teamMembers[currentIndex].position}
                </motion.p>
                
                <motion.p 
                  className="text-sm md:text-base text-color-text/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {teamMembers[currentIndex].description}
                </motion.p>

                <div className="flex">
                  <motion.a 
                    className="text-sm md:text-base text-color-text/90 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    href={teamMembers[currentIndex].links.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="icon">
                      <DynamicIcon icon="Github" size="sm" />
                    </Button>
                  </motion.a>
                  <motion.a 
                    className="text-sm md:text-base text-color-text/90 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    href={teamMembers[currentIndex].links.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="icon">
                      <DynamicIcon icon="Linkedin" size="sm" />
                    </Button>
                  </motion.a>
                  <motion.a 
                    className="text-sm md:text-base text-color-text/90 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    href={teamMembers[currentIndex].links.portfolio}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="icon">
                      <DynamicIcon icon="BriefcaseBusiness" size="sm" />
                    </Button>
                  </motion.a>
                </div>
                
                <motion.div 
                  className="mt-4 flex items-center space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
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
          className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary/80 dark:bg-primary/60 backdrop-blur-sm border border-gold/30 text-gold shadow-lg hover:bg-gold hover:text-primary transition-all duration-300"
          aria-label="Miembro anterior"
        >
          <DynamicIcon icon="ChevronLeft" size="sm" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary/80 dark:bg-primary/60 backdrop-blur-sm border border-gold/30 text-gold shadow-lg hover:bg-gold hover:text-primary transition-all duration-300"
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

export default NuestroEquipo;