import { motion } from "framer-motion";

export const TechScene = () => {
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