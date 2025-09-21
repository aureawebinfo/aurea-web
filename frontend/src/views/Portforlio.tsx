import CardImage from "@/components/CardImage";
import DynamicIcon from "@/components/DynamicIcon";
import Section from "@/components/Section";
import SectionContent from "@/components/SectionContent";
import SectionHeader from "@/components/SectionHeader";
import VideoPlayer from '@/components/VideoPlayer';

export default function Portfolio() {
    return (
        <Section>
            <SectionHeader 
                title="Nuestros Proyectos Destacados" 
                subtitle="Descubre el talento y la innovación detrás de cada pagina web que hemos creado para nuestros clientes"
                icon={<DynamicIcon icon="Presentation" size="lg" />} 
            />
            <SectionContent className="md:grid-cols-1 lg:grid-cols-1">
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    <CardImage
                    image="/img/works/ejemplo_1.jpg"
                    title="Proyecto 1"
                    text="Landing Page"
                    size="smH"
                    />
                    <CardImage
                    image="/img/works/ejemplo_2.jpg"
                    title="Proyecto 2"
                    text="E-commerce"
                    size="smH"
                    />
                    <CardImage
                    image="/img/works/ejemplo_3.jpg"
                    title="Proyecto 3"
                    text="Portfolio"
                    size="smH"
                    />
                </div>
                <div className="w-full max-w-4xl mx-auto">
                    <VideoPlayer
                        src="/video_aurea_web.mp4"
                        variant="horizontal"
                        loop={true}
                        muted={false}
                        className="max-w-full"
                    />
                </div>
            </SectionContent>
        </Section>
    )
}