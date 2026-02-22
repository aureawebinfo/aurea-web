import { motion } from "framer-motion";
import { Github, Linkedin, Briefcase } from "lucide-react";

// --- 1. COMPONENTES DE ANIMACIÓN TEMÁTICA (MINI-ESCENAS) ---

// Animación de Seguridad (Escudo y Radar)
const SecurityAnim = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
    <motion.div
      className="absolute w-full h-full border border-emerald-500/20 rounded-full"
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-40">
      <path
        d="M50 10 L90 30 V55 C90 75 50 95 50 95 C50 95 10 75 10 55 V30 L50 10 Z"
        fill="none"
        stroke="#10b981"
        strokeWidth="1"
      />
      <motion.path
        d="M10 50 H90"
        stroke="#10b981"
        strokeWidth="2"
        strokeOpacity="0.5"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
    <div className="absolute top-10 right-10 text-[10px] text-emerald-400 font-mono">
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        LOCKED
      </motion.div>
    </div>
  </div>
);

// Animación de Fuegos Artificiales (Impacto/Full Stack)
const FireworksAnim = () => {
  // Partículas pre-calculadas para rendimiento
  const particles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {particles.map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-2 bg-[#d4af37] rounded-full origin-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            rotate: angle,
            y: [0, -40], // Se expanden hacia afuera
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "center center" }} // Asegurar que rotan desde el centro
        />
      ))}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full blur-[2px]"
        animate={{ scale: [0, 2, 0], opacity: [0, 0.8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  );
};

// Animación de Diseño (Figuras Geométricas)
const DesignAnim = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {/* Grilla base de UI */}
      <svg width="100%" height="100%" className="absolute opacity-10">
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#818cf8" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Nodos de conexión (Animación original restaurada) */}
      {[
        { x: -40, y: -30, delay: 0 },
        { x: 40, y: -20, delay: 0.5 },
        { x: -20, y: 40, delay: 1 },
        { x: 30, y: 30, delay: 1.5 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400 rounded-sm shadow-[0_0_5px_rgba(129,140,248,0.4)]"
          style={{ x: pos.x, y: pos.y }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: pos.delay }}
        />
      ))}

      {/* Líneas de trazado (Rutas/Wireframes animadas) */}
      <svg width="120" height="120" viewBox="0 0 120 120" className="absolute opacity-40">
        <motion.path
          d="M 20 30 L 80 40 L 40 100 L 90 90"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      
      {/* Resplandor central suave para cohesión */}
      <div className="absolute w-24 h-24 bg-indigo-500/10 blur-[40px] rounded-full" />
    </div>
  );
};

// Animación Matemática (Backend/Lógica)
const MathAnim = () => {
  const symbols = ["+", "-", "÷", "×", "1", "0", "{ }"];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden font-mono text-xs">
      {symbols.map((sym, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-300/40 font-bold"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {sym}
        </motion.div>
      ))}
    </div>
  );
};

// --- 2. DATOS DEL EQUIPO ---

const teamMembers = [
  {
    name: "Andres Roa",
    role: "Especialista en Ciberseguridad", // Título corregido
    shortTitle: "Guardián de la Seguridad",
    image: "/img/team/andres.jpeg",
    bio: "Experto en blindar aplicaciones y proteger datos. Su enfoque es la seguridad informática robusta y eficiente.",
    gradient: "from-[#022c22] to-[#000000]", // Verde oscuro Matrix
    iconColor: "text-emerald-500",
    Animation: SecurityAnim, // Asignamos la animación
    links: {
      github: "https://github.com/Andiuagsfb",
      linkedin: "#",
      portfolio: "#",
    },
  },
  {
    name: "Edizon Meza",
    role: "Desarrollador Full Stack & SEO", // Título corregido
    shortTitle: "Arquitecto de Impacto Digital",
    image: "/img/team/edizon.jpeg",
    bio: "Profesional en posicionamiento web y soluciones escalables. Crea sitios que no solo funcionan, sino que destacan.",
    gradient: "from-[#3a2d0c] to-[#000000]", // Dorado oscuro
    iconColor: "text-amber-500",
    Animation: FireworksAnim, // Asignamos fuegos artificiales
    links: {
      github: "https://github.com/edimez14",
      linkedin: "https://www.linkedin.com/in/edizon-meza-leal-abb0361b9/",
      portfolio: "https://edizon-leal.vercel.app/",
    },
  },
  {
    name: "John Lievano",
    role: "Frontend Developer", // Título corregido
    shortTitle: "Creador de Experiencias Visuales",
    image: "/img/team/johnesteban.jpeg",
    bio: "Especialista en diseño y desarrollo de interfaces. Transforma código en experiencias visuales atractivas.",
    gradient: "from-[#1e1b4b] to-[#000000]", // Índigo/Morado
    iconColor: "text-indigo-400",
    Animation: DesignAnim, // Asignamos diseño
    links: {
      github: "https://github.com/johnlievano",
      linkedin: "https://www.linkedin.com/in/john-esteban-li%C3%A9vano-m%C3%A9ndez-b99532288/",
      portfolio: "https://portfolio-john-amber.vercel.app/", 
    },
  },
  {
    name: "Samuel Loaiza",
    role: "Backend Developer", // Título corregido
    shortTitle: "Maestro de la Lógica y Datos",
    image: "/img/team/samuel.jpg",
    bio: "Experto en servidores, bases de datos y la lógica pura que impulsa el rendimiento de las aplicaciones.",
    gradient: "from-[#0f172a] to-[#000000]", // Azul pizarra oscuro
    iconColor: "text-blue-500",
    Animation: MathAnim, // Asignamos matemáticas
    links: {
      github: "https://github.com/zoyeras",
      linkedin: "https://www.linkedin.com/in/samueldavidloaiza/",
      portfolio: "https://portafolio-xi-three-59.vercel.app/",
    },
  },
];

export const Team = () => {
  return (
    <section id="equipo" className="relative py-24 overflow-hidden">
      {/* Fondo muy sutil para no cargar el navegador */}
      <div className="absolute inset-0 bg-[#050505]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nuestro <span className="gradient-text">Equipo</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-sans font-light max-w-2xl mx-auto">
            Talentos especializados unidos por la pasión tecnológica
          </p>
        </motion.div>

        {/* Grid Optimizado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b ${member.gradient} border border-white/5 hover:border-[#d4af37]/40 shadow-lg overflow-hidden`}
            >
              {/* COMPONENTE DE ANIMACIÓN TEMÁTICA (FONDO) */}
              <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <member.Animation />
              </div>

              {/* Imagen (A COLOR SIEMPRE) */}
              <div className="relative mb-6 inline-block z-10">
                {/* Borde animado */}
                <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-[#d4af37] transition-colors duration-300 scale-105"></div>

                <div className="w-32 h-32 mx-auto overflow-hidden rounded-full shadow-2xl relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy" // Optimización de carga
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Información */}
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>

                {/* Rol principal */}
                <p
                  className={`text-xs font-sans uppercase tracking-widest font-bold mb-3 opacity-90 ${member.iconColor}`}
                >
                  {member.role}
                </p>

                {/* Bio animada */}
                <div className="h-[90px] overflow-hidden relative">
                  {/* Texto normal */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 flex items-center justify-center">
                    <p className="text-gray-400 text-sm font-sans leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Título "Secreto" en Hover */}
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 flex flex-col items-center justify-center">
                    <span className="text-[#d4af37] mb-2">
                      <Briefcase size={20} />
                    </span>
                    <p className="text-white font-bold text-sm italic">
                      "{member.shortTitle}"
                    </p>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="flex justify-center gap-4 pt-4 border-t border-white/10 mt-2">
                  <SocialLink href={member.links.github} icon={Github} />
                  <SocialLink href={member.links.linkedin} icon={Linkedin} />
                  <SocialLink href={member.links.portfolio} icon={Briefcase} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente pequeño para optimizar código repetitivo de iconos
const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#d4af37] hover:bg-white/5 p-2 rounded-full transition-all duration-200 hover:scale-110"
  >
    <Icon size={18} />
  </a>
);
