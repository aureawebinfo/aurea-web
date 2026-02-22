import { motion } from "framer-motion";

export const GrowthScene = () => {
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