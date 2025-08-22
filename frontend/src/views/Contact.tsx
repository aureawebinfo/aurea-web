import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
    return (
        <Section variant="secondary">
            <SectionHeader title="Secion de contacto" subtitle="esta es la seccion de contacto con sus formularios" />
            <SectionContent>
                <p>formularios de contacto</p>
            </SectionContent>
        </Section>
    )
}