import { motion } from 'framer-motion';
import { Monitor, Smartphone, Bot, Settings, Palette, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Desarrollo Web',
    description: 'Sitios corporativos y Landing Pages de alto impacto. Código limpio, veloz y preparado para convertir visitantes en clientes.',
    color: 'emerald'
  },
  {
    icon: Smartphone,
    title: 'Apps Web & Móviles',
    description: 'Desarrollo de aplicaciones nativas (iOS/Android) y PWAs complejas. Software escalable diseñado para solucionar problemas reales.',
    color: 'gold'
  },
  {
    icon: Bot,
    title: 'Automatización & IA',
    description: 'Integración de Chatbots inteligentes, automatización de flujos de trabajo y conexión de APIs para reducir costes operativos.',
    color: 'gold'
  },
  {
    icon: Settings,
    title: 'Mantenimiento & Soporte',
    description: 'Tranquilidad total. Nos encargamos de las actualizaciones, copias de seguridad y blindaje de seguridad mes a mes.',
    color: 'emerald'
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'No solo programamos, diseñamos experiencias. Prototipado y diseño de interfaces centradas en la usabilidad y la estética áurea.',
    color: 'gold'
  },
  {
    icon: TrendingUp,
    title: 'Consultoría SEO',
    description: 'Estrategias de posicionamiento orgánico y análisis de datos para asegurar que tu plataforma sea visible y rentable.',
    color: 'emerald'
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nuestros <span className="text-[#d4af37]">Servicios</span>
          </h2>
          <p className="text-[#F0F0F0] text-base md:text-lg font-sans font-light max-w-2xl mx-auto opacity-80">
            Soluciones tecnológicas integrales, desde la concepción hasta el mantenimiento continuo.
          </p>
        </motion.div>

        {/* Grid de Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 border border-white/5 bg-black/40 backdrop-blur-sm hover:border-[#d4af37]/30 transition-all duration-300"
            >
              {/* Contenedor del Icono */}
              <div className={`mb-8 inline-flex p-4 rounded-sm bg-[#0a0a0a] border border-white/5 group-hover:border-${service.color === 'gold' ? '[#d4af37]' : 'emerald-500'}/50 transition-colors duration-300`}>
                <service.icon 
                  size={32} 
                  className={`${service.color === 'gold' ? 'text-[#d4af37]' : 'text-emerald-500'} transition-transform duration-300 group-hover:scale-110`} 
                />
              </div>
              
              {/* Título */}
              <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-gray-400 text-base font-sans font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              {/* Decoración Hover (Línea inferior) */}
              <div className={`absolute bottom-0 left-0 h-[1px] bg-${service.color === 'gold' ? '[#d4af37]' : 'emerald-500'} w-0 group-hover:w-full transition-all duration-500 ease-out`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};