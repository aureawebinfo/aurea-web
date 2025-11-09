import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";
import CardIcon from "../components/CardIcon";
import DynamicIcon from "@/components/DynamicIcon";
import Button from "@/components/Button";

export default function Services() {
    return (
        <Section variant="fourth" id="service">
          <SectionHeader 
            title="Nuestros Servicios" 
            subtitle="Soluciones digitales profesionales para tu negocio"
            icon={<DynamicIcon icon="HandPlatter" size="lg" />}  
          />
          <SectionContent>
                <CardIcon
                  icon="Code"
                  title="Desarrollo Web"
                  text="Creamos sitios web modernos, responsive y optimizados para SEO con las últimas tecnologías del mercado."
                  size="mdV"
                  background="glass"
                />
                <CardIcon
                  icon="Settings"
                  title="Mantenimiento Web"
                  text="Mantenimiento y actualización constante de tu sitio web para garantizar máximo rendimiento y seguridad."
                  size="mdV"
                  background="glass"
                />
                <CardIcon
                  icon="Smartphone"
                  title="Desarrollo Mobile"
                  text="Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android con interfaces intuitivas."
                  size="mdV"
                  background="glass"
                />
          </SectionContent>
<div className="flex flex-col items-center justify-center gap-2 mt-8">
<a href="#contact" aria-label="Ir a contacto">
              <Button
className="p-4"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Contratar nuestros servicios
              </Button>
            </a>
</div>
        </Section>
  );
}