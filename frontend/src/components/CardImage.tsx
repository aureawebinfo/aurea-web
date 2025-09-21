import clsx from "clsx";
import Title from "./Title";
import Text from "./Text";
import Card from "./Card";

interface CardImageProps {
  image: string;
  title?: string;
  text?: string;
  detached?: boolean;
  size?: "smV" | "mdV" | "lgV" | "smH" | "mdH" | "lgH";
  background?: "none" | "primary" | "secondary" | "tertiary" | "glass";
}

export default function CardImage({ image, title, text, detached = false, size, background }: CardImageProps) {
  return (
    <Card size={size} background={background}>
      <div
        className={clsx(
          detached
            ? "rounded-full w-36 h-36 mb-4"
            : "-m-4 mb-4 w-[calc(100%+2rem)] h-1/2"
        )}
      >
        <img
          src={image}
          alt={title || "image"}
          className={clsx(
            "object-cover w-full h-full",
            detached ? "rounded-full" : "rounded-t-[1.618rem]"
          )}
        />
      </div>
      {title && <Title size="sm" className="mt-4 mb-3 text-center">{title}</Title>}
      {text && <Text size="sm" textAlign="center" className="leading-relaxed">{text}</Text>}
    </Card>
  );
}
