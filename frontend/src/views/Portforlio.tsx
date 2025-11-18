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
      subtitle: "https://plantilla-dentista.aurea-web.com",
      description: "Plantilla web profesional para dentistas, con diseño moderno y funcional. Incluye secciones para servicios, equipo, testimonios y contacto. optimizada para SEO.",
      link: "https://plantilla-dentista.aurea-web.com"
    },
    {
      id: 4,
      image: "/img/works/plantilla-dentista.png",
      title: "Plantilla Web para Restaurantes",
      subtitle: "https://plantilla-restaurante.aurea-web.com",
      description: "Plantilla web para restaurantes, con diseño atractivo y funcional. Incluye menús, reservas en línea, galería de imágenes y contacto. Optimizada para SEO y experiencia móvil.",
      link: "https://plantilla-restaurante.aurea-web.com"
    },
    {
      id: 5,
      image: "/img/works/plantilla-dentista.png",
      title: "Plantilla landing page de veterinaria",
      subtitle: "https://plantilla-landing-pages-veterinaria.aurea-web.com",
      description: "Plantilla web profesional para clínicas veterinarias, con diseño moderno y funcional. Incluye secciones para servicios, equipo, testimonios y contacto. optimizada para SEO.",
      link: "https://plantilla-landing-pages-veterinaria.aurea-web.com"
    },
   {
      id: 6,
      image: "/img/works/plantilla-dentista.png",
      title: "Plantilla Web de un Catalogo de ¨Poductos",
      subtitle: "https://plantilla-catalogo.aurea-web.com",
      description: "Plantilla web para catalogo de productos, con diseño atractivo y funcional. Incluye secciones para productos, categorias, galería de imágenes y contacto. Optimizada para SEO y experiencia móvil.",
      link: "https://plantilla-catalogo.aurea-web.com"
    },
  ]
};

export default function Portfolio() {
    return (
        <Section variant="fourth" id="portfolio">
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