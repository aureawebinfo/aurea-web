import Title from "./Title";
import Text from "./Text";
import Card from "./Card";

interface CardTextProps {
  title: string;
  text: string;
  size?: "sm" | "md" | "lg";
  background?: "none" | "primary" | "secondary" | "tertiary" | "glass";
}

export default function CardText({ title, text, size, background }: CardTextProps) {
  return (
    <Card size={size} background={background}>
      <Title size="md" className="mt-10 mb-4 text-center">{title}</Title>
      <Text size="sm" textAlign="center" className="mt-2 leading-relaxed">{text}</Text>
    </Card>
  );
}
