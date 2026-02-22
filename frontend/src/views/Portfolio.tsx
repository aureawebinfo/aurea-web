import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus, Minus } from 'lucide-react';

// --- DATOS ---
const projects = [
  {
    id: 7,
    title: "Plantilla E-Commerce",
    category: "E-Commerce",
    image: "/img/works/work_7.png",
    description: "Plantilla de comercio electrónico construida con Next.js, rutas dinámicas y Context API para alto rendimiento.",
    link: "https://template-aurea-shop.vercel.app/"
  },
  {
    id: 4,
    title: "Plantilla Restaurante",
    category: "Gastronomía",
    image: "/img/works/work_4.png",
    description: "Web atractiva con menús digitales y sistema de reservas. Optimizada para experiencia móvil y SEO local.",
    link: "https://plantilla-restaurante.aurea-web.com"
  },
  {
    id: 6,
    title: "Catálogo Digital",
    category: "E-Commerce",
    image: "/img/works/work_6.png",
    description: "Catálogo interactivo de productos con categorización avanzada y galería de imágenes optimizada.",
    link: "https://plantilla-catalogo.aurea-web.com"
  },
  {
    id: 1,
    title: "Energias Renovables Polo a Tierra",
    category: "Sitio Corporativo",
    image: "/img/works/work_1.png",
    description: "Desarrollo completo de sitio web para empresa de energías renovables. Diseño responsivo, rápido y optimizado para SEO.",
    link: "https://energiaspoloatierra.com"
  },
  {
    id: 2,
    title: "Proyecto Global Gaia",
    category: "Organización Social",
    image: "/img/works/work_2.png",
    description: "Sitio web informativo para organización de ayuda social. Diseño responsive optimizado. Incremento del 25% en participación.",
    link: "https://proyectoglobalgaia.com"
  },
  {
    id: 3,
    title: "Plantilla Dental Pro",
    category: "Plantilla Premium",
    image: "/img/works/work_3.png",
    description: "Solución web profesional para dentistas. Incluye gestión de servicios, equipo y testimonios con un diseño clínico moderno.",
    link: "https://plantilla-dentista.aurea-web.com"
  },
  {
    id: 5,
    title: "Veterinaria Landing",
    category: "Landing Page",
    image: "/img/works/work_5.png",
    description: "Página de aterrizaje de alta conversión para clínicas veterinarias. Diseño enfocado en agendamiento de citas.",
    link: "https://plantilla-landing-pages-veterinaria.aurea-web.com"
  }
];

// --- ANIMACIÓN: COMETAS ---
const ShootingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let comets: any[] = [];

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    class Comet {
      x: number; y: number; length: number; speed: number; opacity: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height - canvas!.height;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      update() {
        this.y += this.speed;
        this.x += this.speed * 0.5;
        if (this.y > canvas!.height + this.length || this.x > canvas!.width + this.length) {
          this.y = -this.length;
          this.x = Math.random() * canvas!.width - (canvas!.width * 0.2);
        }
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x - (this.length * 0.5), this.y - this.length);
        gradient.addColorStop(0, `rgba(212, 175, 55, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - (this.length * 0.5), this.y - this.length);
        ctx.stroke();
      }
    }

    const init = () => {
      resizeCanvas();
      comets = [];
      const count = window.innerWidth < 768 ? 15 : 30;
      for (let i = 0; i < count; i++) comets.push(new Comet());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      comets.forEach(c => { c.update(); c.draw(); });
      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none h-full w-full">
      <canvas ref={canvasRef} className="w-full h-full opacity-70" />
    </div>
  );
};

// --- TARJETA DE PROYECTO ---
const ProjectCard = ({ project, index }: { project: any, index: number }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group relative overflow-hidden rounded-2xl bg-[#031c1a] border border-[#d4af37]/10 hover:border-[#d4af37]/60 shadow-lg transition-all duration-300 flex flex-col h-full"
  >
    <div className="aspect-video overflow-hidden border-b border-[#d4af37]/10 relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
         <span className="px-4 py-2 border border-[#d4af37] text-[#d4af37] text-sm uppercase tracking-widest font-bold bg-black/80 backdrop-blur-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
           Visitar Sitio
         </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <span className="text-[#d4af37] text-[10px] font-sans uppercase tracking-widest font-bold mb-2 opacity-80">
        {project.category}
      </span>
      
      <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-400 text-sm font-sans leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="flex items-center gap-2 text-[#d4af37]/80 text-xs font-bold uppercase tracking-wider mt-auto group-hover:text-[#d4af37] transition-colors">
        <span>Ver Detalles</span>
        <ExternalLink size={12} />
      </div>
    </div>
  </motion.a>
);

// --- COMPONENTE PRINCIPAL ---
export const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;
  
  const initialProjects = projects.slice(0, INITIAL_COUNT);
  const hiddenProjects = projects.slice(INITIAL_COUNT);

  return (
    <section id="portafolio" className="relative py-24 md:py-32 overflow-hidden bg-[#011514]">
      
      
      <ShootingStars />
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Nuestros Proyectos <span className="text-[#d4af37]">y Plantillas</span>
          </h2>
          <div className="h-[2px] w-24 bg-[#d4af37] mx-auto mb-6 opacity-70"></div>
          <p className="text-[#F0F0F0] text-base md:text-lg font-sans font-light max-w-2xl mx-auto opacity-80">
            Ingeniería web de alto rendimiento y diseño estratégico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-8">
            {initialProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}

            <AnimatePresence>
                {showAll && hiddenProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, height: 0, scale: 0.9 }}
                        animate={{ opacity: 1, height: 'auto', scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden h-full"
                    >
                        <ProjectCard project={project} index={index + INITIAL_COUNT} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="flex justify-center pt-4 relative z-30">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-2 rounded-full border border-[#d4af37]/30 text-[#d4af37] text-xs font-bold uppercase tracking-widest hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-300"
            >
              <span className="relative top-[1px]">{showAll ? 'Ver Menos' : 'Ver Más'}</span>
              {showAll ? <Minus size={14} /> : <Plus size={14} />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};