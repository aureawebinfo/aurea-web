import DynamicIcon from "@/components/DynamicIcon";
import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";
import GoldenRatioSlider from "@/components/GoldenRatioSlider";

// Datos de proyectos organizados
const portfolioProjects = {
  proyectosDestacados: [
    {
      id: 1,
      image: "/img/works/pagina-energias-polo-a-tierra.png",
      title: "Energias Renovables Polo a Tierra",
      subtitle: "energiaspoloatierra.com",
      description: "Desarrollo completo de sitio web para empresa de energías renovables, con diseño responsivo, rapida, optimizado para el SEO. Aumento del 40% en consultas de clientes.",
      link: "https://energiaspoloatierra.com"
    },
    {
      id: 2,
      image: "/img/works/pagina-proyecto-global-gaia.png",
      title: "Proyecto Global Gaia",
      subtitle: "proyectoglobalgaia.com",
      description: "Sitio web informativo de una organizacion de ayuda social, con diseño responsive, optimizado para SEO. Incremento del 25% en participación comunitaria.",
      link: "https://proyectoglobalgaia.com"
    },
    {
      id: 3,
      image: "/img/works/plantilla-dentista.png",
      title: "Plantilla Web para Dentista",
      subtitle: "https://aureawebinfo.github.io/plantilla-dentista/",
      description: "Plantilla web profesional para dentistas, con diseño moderno y funcional. Incluye secciones para servicios, equipo, testimonios y contacto. optimizada para SEO.",
      link: "https://aureawebinfo.github.io/plantilla-dentista/"
    },
    {
      id: 4,
      image: "/img/works/ejemplo_2.jpg",
      title: "Aplicación Educativa Interactiva",
      subtitle: "www.aurea-web.com",
      description: "Plataforma de aprendizaje con cursos interactivos, seguimiento de progreso y comunidad de estudiantes. Más de 10,000 usuarios activos mensuales.",
      link: "https://aurea-web.com"
    },
    {
      id: 5,
      image: "/img/works/ejemplo_3.jpg",
      title: "Portafolio Digital para Artista",
      subtitle: "www.aurea-web.com",
      description: "Sitio web galería con animaciones fluidas y diseño minimalista que resalta el trabajo artístico. Optimizado para máxima velocidad y experiencia visual.",
      link: "https://aurea-web.com"
    }
  ]
};

export default function Portfolio() {
    return (
        <Section id="portfolio">
            <SectionHeader 
                title="Nuestros Proyectos Destacados" 
                subtitle="Descubre el talento y la innovación detrás de cada pagina web que hemos creado para nuestros clientes"
                icon={<DynamicIcon icon="Presentation" size="lg" />} 
            />
            <SectionContent className="md:grid-cols-1 lg:grid-cols-1">
                <GoldenRatioSlider slides={portfolioProjects.proyectosDestacados} />
            </SectionContent>
        </Section>
    )
}