import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";
import Text from "@/components/Text";
import { motion } from "framer-motion";

// Datos de las opiniones
const opiniones = [
  {
    id: 1,
    nombre: "Alirio Martinez",
    subtitulo: "Energias Renovables Polo a Tierra",
    enlace: "energiaspoloatierra.com",
    imagen: "/img/clients/foto_alirio.png",
    opinion: "Son excelentes en lo que hacen y muy profesionales. Mi sitio web quedó increíble."
  },
  {
    id: 2,
    nombre: "Darius",
    subtitulo: "Proyecto Global Gaia",
    enlace: "proyectoglobalgaia.com",
    imagen: "https://placehold.co/120x120/blue/white?text=D",
    opinion: "El equipo de Aurea Web superó mis expectativas. La atención al detalle y la creatividad son impresionantes."
  },
  {
    id: 3,
    nombre: "Roger Pereira", // Datos ficticios agregados
    subtitulo: "Tienda online para ingenieros de redes y seguridad",
    enlace: "#",
    imagen: "https://exiventas.co",
    opinion: "Lograron captar la esencia de mi marca personal perfectamente. La web es rápida y el diseño es minimalista."
  }
];

export default function Opinions() {
  return (
    <Section variant="fourth" id="opinions" className="py-8 md:py-12">
      <SectionHeader 
        title="Opiniones de clientes" 
        subtitle="Lo que dicen las personas con las que hemos trabajado" 
      />
      
      {/* Forzamos que el contenido sea bloque para manejar nuestro propio grid interno */}
      <SectionContent className="!block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-2">
          {opiniones.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, // Pequeño retraso escalonado para efecto visual
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
              className="relative rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 backdrop-blur-sm border border-gold/30 bg-primary/70 dark:bg-primary/50 w-full"
            >
              {/* Imagen circular */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg mx-auto md:mx-0">
                  <img 
                    src={item.imagen} 
                    alt={item.nombre}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="flex-1">
                <h3 className="font-bold mb-1 text-lg md:text-xl">
                  {item.nombre}
                </h3>
                <a 
                  href={item.enlace !== "#" ? `https://${item.enlace}` : "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline mb-3 inline-block text-sm"
                >
                  {item.subtitulo}
                </a>
                <div>
                  <Text 
                    variant="light" 
                    size="sm"
                    textAlign="center"
                    className="italic opacity-90"
                  >
                    "{item.opinion}"
                  </Text>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver Más - OCULTO (hidden) por ahora */}
        <div className="mt-12 text-center hidden">
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
            Ver más opiniones
          </button>
        </div>

      </SectionContent>
    </Section>
  );
}