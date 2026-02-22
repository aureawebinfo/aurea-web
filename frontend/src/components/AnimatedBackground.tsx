export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#020402] overflow-hidden pointer-events-none">
      
      {/* 1. EL GRAN FOCO ESMERALDA (Arriba Izquierda) */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-emerald-900/40 rounded-full blur-[120px] opacity-60 mix-blend-screen animate-pulse-slow"></div>
      
      {/* 2. EL FOCO DORADO (Abajo Derecha - Contraste) */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gold-600/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>

      {/* 3. Grid Tecnológico (Para dar textura) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B9810a_1px,transparent_1px),linear-gradient(to_bottom,#10B9810a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 4. Ruido sutil para calidad visual */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
}