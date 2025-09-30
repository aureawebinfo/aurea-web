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
      image: "/images/proyectos/ecommerce-moda.jpg",
      title: "Tienda Online de Moda",
      subtitle: "www.tiendamoda-ejemplo.com",
      description: "Desarrollo completo de tienda online con carrito de compras, pasarela de pagos y panel administrativo. Incremento del 150% en ventas online.",
      link: "https://tiendamoda-ejemplo.com"
    },
    {
      id: 2,
      image: "/images/proyectos/landing-saas.jpg", 
      title: "Plataforma SaaS Empresarial",
      subtitle: "www.saasempresa-ejemplo.com",
      description: "Aplicación web para gestión de proyectos con dashboard interactivo, reportes en tiempo real y integración con herramientas de productividad.",
      link: "https://saasempresa-ejemplo.com"
    },
    {
      id: 3,
      image: "/images/proyectos/portfolio-artista.jpg",
      title: "Portafolio Digital para Artista",
      subtitle: "www.artista-portfolio.com",
      description: "Sitio web galería con animaciones fluidas y diseño minimalista que resalta el trabajo artístico. Optimizado para máxima velocidad y experiencia visual.",
      link: "https://artista-portfolio.com"
    },
    {
      id: 4,
      image: "/images/proyectos/app-educativa.jpg",
      title: "Aplicación Educativa Interactiva",
      subtitle: "www.appeducativa-ejemplo.com",
      description: "Plataforma de aprendizaje con cursos interactivos, seguimiento de progreso y comunidad de estudiantes. Más de 10,000 usuarios activos mensuales.",
      link: "https://appeducativa-ejemplo.com"
    },
    {
      id: 5,
      image: "/images/proyectos/portfolio-artista.jpg",
      title: "Portafolio Digital para Artista",
      subtitle: "www.artista-portfolio.com",
      description: "Sitio web galería con animaciones fluidas y diseño minimalista que resalta el trabajo artístico. Optimizado para máxima velocidad y experiencia visual.",
      link: "https://artista-portfolio.com"
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