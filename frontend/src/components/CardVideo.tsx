import Title from "./Title";
import Text from "./Text";
import Card from "./Card";

interface CardVideoProps {
  videoUrl: string;
  title?: string;
  text?: string;
  size?: "smV" | "mdV" | "lgV" | "smH" | "mdH" | "lgH";
  background?: "none" | "primary" | "secondary" | "tertiary" | "glass";
}

export default function CardVideo({ videoUrl, title, text, size, background }: CardVideoProps) {
  return (
    <Card size={size} background={background}>
      <div className="-m-4 mb-4 w-[calc(100%+2rem)] h-1/2">
        <video
          src={videoUrl}
          controls
          className="w-full h-full object-cover rounded-t-[1.618rem]"
        />
      </div>
      {title && <Title size="sm" className="mt-4 mb-3 text-center">{title}</Title>}
      {text && <Text size="sm" textAlign="center" className="leading-relaxed">{text}</Text>}
    </Card>
  );
}

