import { motion } from "framer-motion";
import { useMemo } from "react";

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

export const SpaceScene = () => {
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