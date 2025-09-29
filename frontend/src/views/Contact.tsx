// Contact.tsx
import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import DynamicIcon from "@/components/DynamicIcon";


export default function Contact() {
    return (
        <Section variant="secondary" id="contact">
            <SectionHeader 
                title="Contáctanos" 
                subtitle="Estamos aquí para hacer realidad tu proyecto web."
                icon={<DynamicIcon icon="Mail" size="lg" />}
            />
            <SectionContent className="!grid-cols-1 lg:!grid-cols-2 gap-8 lg:gap-12">
                <ContactForm />
                <ContactInfo />
            </SectionContent>
        </Section>
    )
}