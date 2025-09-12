import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";
import CardIcon from "../components/CardIcon";

export default function Services() {
    return (
        <Section variant="secondary">
          <SectionHeader 
            title="Nuestros Servicios" 
            subtitle="Soluciones digitales profesionales para tu negocio" 
          />
          <SectionContent>
                <CardIcon
                  icon="Code"
                  title="Desarrollo Web"
                  text="Creamos sitios web modernos, responsive y optimizados para SEO con las últimas tecnologías del mercado."
                  size="md"
                  background="glass"
                />
                <CardIcon
                  icon="Settings"
                  title="Mantenimiento Web"
                  text="Mantenimiento y actualización constante de tu sitio web para garantizar máximo rendimiento y seguridad."
                  size="md"
                  background="glass"
                />
                <CardIcon
                  icon="Smartphone"
                  title="Desarrollo Mobile"
                  text="Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android con interfaces intuitivas."
                  size="md"
                  background="glass"
                />
          </SectionContent>
        </Section>
  );
}