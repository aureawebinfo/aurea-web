/* eslint-disable @typescript-eslint/no-explicit-any */
import Title from "./Title";
import Text from "./Text";
import DynamicIcon from "./DynamicIcon";
import Card from "./Card";

interface CardIconProps {
  icon: string;
  title: string;
  text: string;
  size?: "sm" | "md" | "lg";
  background?: "none" | "primary" | "secondary" | "tertiary";
}

export default function CardIcon({ icon, title, text, size, background }: CardIconProps) {
  return (
    <Card size={size} background={background}>
      <DynamicIcon icon={icon as any} size="xxl" className="mt-2 mb-4" />
      <Title size="sm" className="mt-4 mb-3 text-center">{title}</Title>
      <Text size="sm" textAlign="center" className="leading-relaxed">{text}</Text>
    </Card>
  );
}
