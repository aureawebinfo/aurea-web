/* eslint-disable @typescript-eslint/no-explicit-any */
import Title from "./Title";
import Text from "./Text";
import DynamicIcon from "./DynamicIcon";
import Card from "./Card";
import { motion } from "motion/react";

interface CardIconProps {
  icon: string;
  title: string;
  text: string;
  size?: "sm" | "md" | "lg";
  background?: "none" | "primary" | "secondary" | "tertiary" | "glass";
}

export default function CardIcon({ icon, title, text, size, background }: CardIconProps) {
  return (
    <Card size={size} background={background}>
      <motion.div
        whileHover={{ 
          scale: 1.2,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
        className="mt-2 mb-4"
      >
        <DynamicIcon icon={icon as any} size="xxl" />
      </motion.div>
      <Title size="sm" className="mt-4 mb-3 text-center">{title}</Title>
      <Text size="sm" textAlign="center" className="leading-relaxed">{text}</Text>
    </Card>
  );
}