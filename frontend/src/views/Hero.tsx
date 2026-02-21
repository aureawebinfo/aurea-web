import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { SpaceScene, GrowthScene, TechScene } from "../components/HeroScenes";

export default function Hero() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const cycleDuration = 5000;
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 3);
    }, cycleDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] lg:min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-20 overflow-hidden font-sans bg-[#050505]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(10,63,56,0.55)_0%,transparent_90%)] pointer-events-none z-0"></div>

      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-white tracking-normal">
            Diseños al <br />
            <span className="text-[#D4AF37] font-serif italic">
              Detalle,
            </span>{" "}
            <br />
            Webs <span className="text-[#D4AF37]">profesionales</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl leading-relaxed font-normal">
            Elegancia{" "}
            <span className="text-[#D4AF37] font-medium">matemática</span>,
            ejecución profesional y resultados medibles.
          </p>

          <p className="text-sm md:text-base text-gray-400 mb-8 max-w-2xl font-normal leading-relaxed">
            Páginas Completas, premiums y armónicas con sus{" "}
            <span className="text-[#D4AF37] font-medium">propósitos</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portafolio"
              className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase tracking-[0.2em] font-medium text-xs md:text-sm flex items-center gap-3 group"
            >
              TRABAJOS
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </motion.div>

        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <AnimatePresence mode="wait">
            {currentScene === 0 && (
              <motion.div key="space" className="absolute inset-0">
                <SpaceScene />
              </motion.div>
            )}
            {currentScene === 1 && (
              <motion.div key="growth" className="absolute inset-0">
                <GrowthScene />
              </motion.div>
            )}
            {currentScene === 2 && (
              <motion.div key="tech" className="absolute inset-0">
                <TechScene />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}