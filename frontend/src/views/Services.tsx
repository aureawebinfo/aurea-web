// import Section from "@/components/Section";
// import SectionContent from "@/components/SectionContent";
// import SectionHeader from "@/components/SectionHeader";

import CardText from "../components/CardText";
import CardIcon from "../components/CardIcon";
import CardImage from "../components/CardImage";
import CardVideo from "../components/CardVideo";

export default function Services() {
    return (
        <div className="min-h-screen w-full p-10 bg-color-primary dark:bg-color-primary">
      <h1 className="text-3xl font-bold text-center mb-10 text-color-text">Demo de Cards</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        
        {/* 1. Card de solo texto */}
        <CardText
          title="Solo Texto"
          text="Esta es una carta con título y texto. Perfecta para información simple."
          background="secondary"
          size="md"
        />

        {/* 2. Card con icono grande */}
        <CardIcon
          icon="Star"
          title="Con Icono"
          text="Carta con icono, título y texto. Ideal para destacar servicios."
          background="primary"
          size="md"
        />

        {/* 3. Card con imagen + título + texto */}
        <CardImage
          image="https://picsum.photos/400/200"
          title="Imagen Completa"
          text="La imagen ocupa la parte superior, con título y texto abajo."
          background="tertiary"
          size="md"
        />

        {/* 4. Card con imagen + título (sin texto) */}
        <CardImage
          image="https://picsum.photos/400/200"
          title="Imagen + Título"
          background="secondary"
          size="md"
        />

        {/* 5. Card con imagen + texto (sin título) */}
        <CardImage
          image="https://picsum.photos/400/200"
          text="Solo texto acompañando a la imagen superior."
          background="primary"
          size="md"
        />

        {/* 6. Card con imagen centrada sin bordes */}
        <CardImage
          image="https://picsum.photos/200"
          title="Imagen Libre"
          text="Imagen circular sin bordes ni esquinas."
          detached
          background="none"
          size="md"
        />

        {/* 7. Card con imagen libre + solo título */}
        <CardImage
          image="https://picsum.photos/200"
          title="Imagen + Título"
          detached
          background="secondary"
          size="md"
        />

        {/* 8. Card con imagen libre + solo texto */}
        <CardImage
          image="https://picsum.photos/200"
          text="Imagen libre + texto sin título."
          detached
          background="tertiary"
          size="md"
        />

        {/* 9. Card con video + título + texto */}
        <CardVideo
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          title="Video Informativo"
          text="Carta con video en la parte superior, título y descripción."
          background="primary"
          size="md"
        />

        {/* 10. Card con video + solo título */}
        <CardVideo
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          title="Video + Título"
          background="secondary"
          size="md"
        />

        {/* 11. Card con video + solo texto */}
        <CardVideo
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          text="Video + solo texto debajo."
          background="tertiary"
          size="md"
        />

      </div>
    </div>
  );
}