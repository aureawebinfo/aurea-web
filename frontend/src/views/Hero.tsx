import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

// ==============================================
// COMPONENTES INTERNOS (SpaceStation, Astronaut, SpaceScene, GrowthScene, TechScene)
// DEJA ESTOS COMPONENTES EXACTAMENTE IGUAL QUE EN TU CÓDIGO ANTERIOR
// (Solo copiaré el HERO principal que es donde está el cambio visual)
// ==============================================

// ... (Mantén aquí SpaceStation, Astronaut, SpaceScene, GrowthScene, TechScene tal cual los tienes) ...
// Si necesitas que los repita dímelo, pero para ahorrar espacio voy directo al cambio.

// ==============================================
// 1. ESCENA ESPACIAL (SpaceScene) - RESPONSIVE
// ==============================================
const SpaceStation = () => {
  return (
    <motion.div
      className="relative z-20 w-[240px] h-[240px] md:w-[380px] md:h-[380px]"
      animate={{ y: [-20, 20, -20], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        width="100%" height="100%" viewBox="0 0 200 200" fill="none"
        className="drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
      >
        <motion.circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.6" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="100" cy="100" r="70" stroke="#D4AF37" strokeWidth="1" opacity="0.4" animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <path d="M100 20 L100 180" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
        <path d="M20 100 L180 100" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
        <circle cx="100" cy="100" r="25" fill="#0a3f38" stroke="#D4AF37" strokeWidth="1.5" />
        <motion.circle cx="100" cy="100" r="8" fill="#D4AF37" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} />
        <rect x="30" y="95" width="30" height="10" stroke="#D4AF37" fill="rgba(212,175,55,0.1)" />
        <rect x="140" y="95" width="30" height="10" stroke="#D4AF37" fill="rgba(212,175,55,0.1)" />
      </svg>
    </motion.div>
  );
};

const Astronaut = ({ delay = 0, duration = 10, scale = 1, pathX = [], pathY = [], opacity = 0.8 }: any) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-8 h-8 md:w-12 md:h-12 pointer-events-none z-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ x: pathX, y: pathY, opacity: [0, opacity, opacity, opacity, 0], scale: [0, scale, scale, scale, 0], rotate: [0, 45, 180, 270, 360] }}
      transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "easeInOut", times: [0, 0.1, 0.5, 0.9, 1] }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]">
        <motion.path d="M8 18 L12 24 L16 18" stroke="#D4AF37" strokeWidth="2" fill="transparent" strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0], pathLength: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
        <rect x="8" y="6" width="8" height="10" rx="2" fill="#050505" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="12" cy="5" r="3.5" fill="#D4AF37" />
        <rect x="6" y="7" width="2" height="8" rx="1" fill="#D4AF37" />
        <rect x="16" y="7" width="2" height="8" rx="1" fill="#D4AF37" />
        <path d="M8 8 L4 10" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 8 L20 10" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 16 L7 20" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 16 L17 20" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

const SpaceScene = () => {
  const squadPaths = useMemo(() => [
    { x: [0, 200, 100, -100, 0], y: [0, -100, -200, -50, 0], d: 15, del: 0 },
    { x: [0, -150, -200, -50, 0], y: [0, 100, -50, -150, 0], d: 18, del: 2 },
    { x: [0, 100, 250, 150, 0], y: [0, 150, 50, 200, 0], d: 20, del: 5 },
    { x: [0, -200, 100, -100, 0], y: [0, 50, 200, 100, 0], d: 22, del: 8 },
  ], []);

  return (
    <motion.div className="relative w-full h-full flex items-center justify-center overflow-visible" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} transition={{ duration: 0.8 }}>
      <motion.div className="absolute top-0 left-0 md:left-10 text-[#D4AF37] font-heading text-xs md:text-xl tracking-[0.2em] font-bold z-30" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        IMPACTO DIGITAL
      </motion.div>
      <SpaceStation />
      <Astronaut scale={1.2} duration={14} pathX={[0, 300, 100, -200, -350, 0]} pathY={[0, -150, -250, -100, 100, 0]} />
      {squadPaths.map((p, i) => <Astronaut key={i} scale={0.6 + i * 0.1} duration={p.d} delay={p.del} pathX={p.x} pathY={p.y} opacity={0.6} />)}
      {[...Array(5)].map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 bg-[#D4AF37] rounded-full" initial={{ opacity: 0, x: 0, y: 0 }} animate={{ opacity: [0, 0.5, 0], x: Math.random() * 400 - 200, y: Math.random() * 400 - 200 }} transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 2 }} />
      ))}
    </motion.div>
  );
};

// ==============================================
// 2. ESCENA DE RESULTADOS REALES (GrowthScene)
// ==============================================
const GrowthScene = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50, filter: "blur(10px)" }} transition={{ duration: 0.8 }}>
      <div className="relative w-full max-w-[400px] aspect-[4/3]">
        <motion.div className="absolute -top-8 md:-top-10 left-0 text-[#D4AF37] font-heading text-sm md:text-xl tracking-widest" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          RESULTADOS REALES
        </motion.div>
        <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
          <line x1="40" y1="260" x2="380" y2="260" stroke="#D4AF37" strokeOpacity="0.3" strokeWidth="2" />
          <line x1="40" y1="260" x2="40" y2="20" stroke="#D4AF37" strokeOpacity="0.3" strokeWidth="2" />
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.rect key={i} x={40 + i * 60} y={260} width="30" height="0" fill="rgba(10, 63, 56, 0.5)" stroke="#0a3f38" initial={{ height: 0, y: 260 }} animate={{ height: i * 40, y: 260 - i * 40 }} transition={{ duration: 1, delay: i * 0.2, type: "spring" }} />
          ))}
          <motion.path d="M55 240 L115 200 L175 180 L235 120 L295 80 L355 40" fill="none" stroke="#D4AF37" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1, ease: "easeInOut" }} />
          <motion.path d="M345 50 L355 40 L345 30" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} />
          {[240, 200, 180, 120, 80, 40].map((y, i) => (
            <motion.circle key={i} cx={55 + i * 60} cy={y} r="4" fill="#050505" stroke="#D4AF37" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + i * 0.3 }} />
          ))}
        </svg>
      </div>
    </motion.div>
  );
};

// ==============================================
// 3. ESCENA TECNOLÓGICA (TechScene)
// ==============================================
const TechScene = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} transition={{ duration: 0.8 }}>
      <div className="relative w-full max-w-[400px] aspect-[4/3]">
        <motion.div className="absolute -top-8 md:-top-10 left-0 text-[#D4AF37] font-heading text-sm md:text-xl tracking-widest" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          RENDIMIENTO SUPERIOR
        </motion.div>
        <motion.div className="absolute inset-0 border-2 border-[#D4AF37] rounded-lg bg-[#050505]/80 backdrop-blur-sm overflow-hidden" initial={{ height: 0, opacity: 0 }} animate={{ height: "100%", opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="h-8 border-b border-[#D4AF37]/30 flex items-center gap-2 px-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="p-6 space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} className="h-2 bg-[#D4AF37]/40 rounded-full" style={{ width: `${Math.random() * 50 + 30}%` }} initial={{ width: 0, opacity: 0 }} animate={{ width: `${Math.random() * 50 + 30}%`, opacity: 1 }} transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }} />
            ))}
            <motion.div className="mt-6 grid grid-cols-2 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              <motion.div className="h-20 bg-[#0a3f38]/40 border border-[#D4AF37]/30 rounded" animate={{ scale: [0.9, 1] }} transition={{ duration: 0.5, delay: 2.2 }} />
              <motion.div className="h-20 bg-[#0a3f38]/40 border border-[#D4AF37]/30 rounded" animate={{ scale: [0.9, 1] }} transition={{ duration: 0.5, delay: 2.4 }} />
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#D4AF37]/20 border border-[#D4AF37] rounded-b-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
        <div className="absolute inset-0 bg-[#D4AF37] blur-[100px] opacity-10 -z-10" />
      </div>
    </motion.div>
  );
};

// ==============================================
// COMPONENTE HERO PRINCIPAL (El Orquestador) - VERSIÓN 80% ZOOM
// ==============================================
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
      {/* Gradiente de fondo con fusión perfecta */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(10,63,56,0.55)_0%,transparent_90%)] pointer-events-none z-0"></div>

      {/* Container ajustado a max-w-7xl para dar amplitud */}
      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: TEXTO AJUSTADO (EFECTO 80% ZOOM) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          {/* CAMBIO CLAVE: Bajamos de text-7xl a text-6xl para simular zoom out */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-white tracking-normal">
            Diseños al <br />
            <span className="text-[#D4AF37] font-serif italic">
              Detalle,
            </span>{" "}
            <br />
            Webs <span className="text-[#D4AF37]">profesionales</span>
          </h1>

          {/* CAMBIO CLAVE: Bajamos a text-lg en lugar de text-xl */}
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

        {/* COLUMNA DERECHA: ESCENARIO CAMBIANTE */}
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
      
      {/* Fusión inferior con la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}