import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";

export default function Portfolio() {
    return (
        <Section variant="secondary">
            <SectionHeader title="Secion de portafolio" subtitle="esta es la seccion de portafolio con los proyecto que hemos realizado" />
            <SectionContent>
                <p>cartas con los proyectos</p>
            </SectionContent>
        </Section>
    )
}