import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// TUS TESTIMONIOS REALES
const testimonials = [
  {
    id: 1,
    name: "Alirio Martinez",
    company: "Energias Renovables Polo a Tierra",
    text: "Son excelentes en lo que hacen y muy profesionales. Mi sitio web quedó increíble, superando todas mis expectativas iniciales.",
    image: "/img/clients/foto_alirio.png",
    rating: 5
  },
  {
    id: 2,
    name: "Darius",
    company: "Proyecto Global Gaia",
    text: "El equipo de Aurea Web superó mis expectativas. La atención al detalle y la creatividad para plasmar nuestra misión social son impresionantes.",
    image: "https://placehold.co/120x120/10B981/white?text=D", // Placeholder elegante si no hay foto
    rating: 5
  },
  {
    id: 3,
    name: "Roger Pereira",
    company: "Tienda Online Seguridad",
    text: "Lograron captar la esencia de mi marca personal perfectamente. La web es rápida, el diseño es minimalista y mis ventas han mejorado.",
    image: "https://placehold.co/120x120/D4AF37/white?text=R",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="opiniones" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Lo que dicen nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-[#F0F0F0] text-base md:text-lg font-sans font-light max-w-2xl mx-auto">
            Historias de éxito de quienes confiaron su visión digital en nosotros
          </p>
        </motion.div>

        {/* Grid de Testimonios */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 relative flex flex-col h-full hover:bg-white/5 transition-colors duration-300"
            >
              {/* Comillas Decorativas */}
              <Quote className="text-[#d4af37] opacity-10 absolute top-6 right-6 rotate-180" size={60} />
              
              {/* Estrellas */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#d4af37] fill-[#d4af37]" />
                ))}
              </div>
              
              {/* Texto de la Opinión */}
              <p className="text-[#F0F0F0] text-base font-sans font-light leading-relaxed mb-8 relative z-10 flex-grow italic">
                "{testimonial.text}"
              </p>
              
              {/* Info del Cliente */}
              <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/50">
                   <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                   />
                </div>
                
                <div>
                    <h4 className="font-heading text-lg font-bold text-white leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#d4af37] text-xs font-sans uppercase tracking-wider mt-1">
                      {testimonial.company}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};