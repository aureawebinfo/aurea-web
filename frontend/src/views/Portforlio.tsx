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
            />
            <SectionContent className="md:grid-cols-1 lg:grid-cols-1">
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