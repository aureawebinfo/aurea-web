import { motion } from "motion/react";
import Title from "@/components/Title";
import Text from "@/components/Text";
import Button from "@/components/Button";
import DynamicIcon from "@/components/DynamicIcon";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className={[
        "relative w-full mb-2",
        "mx-[calc(50%-50vw)]",
        "bg-transparent",
        "rounded-b-3xl",
        "border-b-2 border-[var(--color-gold)]",
        "after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-2 after:h-6",
        "after:content-[''] after:rounded-b-3xl after:shadow-[0_24px_48px_rgba(0,0,0,0.18)] dark:after:shadow-[0_24px_48px_rgba(255,255,255,0.10)]",
        "[--phi:1.618] pt-[calc(5rem*var(--phi))] pb-[5rem] md:pt-[calc(6rem*var(--phi))] md:pb-[6rem]",
        "transition-colors duration-500",
      ].join(" ")}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="flex flex-col items-start gap-6 md:gap-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          animate={{ y: [0, -2, 0] }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            y: {
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        >
          {/* Título grande, sin fondo, adaptado al tema. Palabras clave en dorado. */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <Title
              size="lg"
              variant="light"
              bold
              className="text-left leading-[1.1]"
            >
              Diseños al <span className="text-gold">Detalle</span>, Webs{" "}
              <span className="text-gold">profesionales</span>
            </Title>
          </motion.div>

          {/* Subtítulo siguiendo las reglas del título (mismo sistema de variantes/tamaños) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <Text
              size="lg"
              variant="light"
              className="max-w-3xl text-left text-balance"
            >
              Elegancia <span className="text-gold">matemática</span>, ejecución{" "}
              <span className="text-gold">profesional</span> y resultados
              medibles. Páginas Completas, premiums y armónicas con sus{" "}
              <span className="text-gold">propositos</span>.
            </Text>
          </motion.div>

          {/* CTA único: ir a galería de proyectos */}
          <motion.div
            className="pt-[calc(1.25rem*var(--phi))]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          >
            <a href="#portfolio" aria-label="Ir a la galería de proyectos">
              <Button
 variant="text-icon-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
<DynamicIcon icon="ArrowRight" size="md" />
                Trabajos
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
