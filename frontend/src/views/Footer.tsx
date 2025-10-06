import DynamicIcon from '@/components/DynamicIcon';
import Text from '../components/Text';

export default function Footer() {
  // Define el tipo para los iconos válidos
  type ValidIcon = "Github" | "Twitter" | "Instagram" | "Linkedin";

  // Mapeo seguro de iconos
  const socialIconsMap: Record<string, ValidIcon> = {
    "Github": "Github",
    "Twitter": "Twitter", 
    "Instagram": "Instagram",
    "LinkedIn": "Linkedin"
  };

  // URLs para cada red social
  const socialUrls = {
    "Github": "https://github.com/aureawebinfo",
    "Twitter": "https://x.com/Aurea_Web", 
    "Instagram": "https://www.instagram.com/aurea.web/",
    "LinkedIn": "https://www.linkedin.com/in/%C3%A1urea-web-s-a-s-403861384/"
  };
  return (
    <footer className="pt-12 pb-8 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[var(--color-gold)] text-2xl font-bold mb-4">
              Áurea Web
            </h3>
            <Text variant="light" textAlign="left" className="mb-6">
              Enfocados en la eficiencia y estética de las páginas web que
              diseñamos con un enfoque moderno y creativo a gusto de nuestros
              clientes.
            </Text>
            <div className="flex space-x-4">
              {Object.keys(socialUrls).map((social) => {
                const socialKey = social as keyof typeof socialUrls;
                const iconName = socialIconsMap[socialKey];
                
                return (
                  <a
                    key={social}
                    href={socialUrls[socialKey]}
                    className="text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors duration-300"
                    aria-label={social}
                    target='_blank'
                  >
                    {iconName && <DynamicIcon icon={iconName} size='md' />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--color-gold)] text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {["Inicio","Servicios", "Portafolio", "Nuestro Equipo", "Opiniones", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={["hero", "service", "portfolio", "team", "opinions", "contact"].map((item) => (`#${item.toLowerCase()}`))[item === "Inicio" ? 0 : item === "Servicios" ? 1 : item === "Portafolio" ? 2 : item === "Nuestro Equipo" ? 3 : item === "Opiniones" ? 4 : 5]}
                    className="text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--color-gold)] text-lg font-semibold mb-4">
              Contacto
            </h4>
            <address className="not-italic">
              <Text variant="light" textAlign="left" className="flex items-center mt-2">
                <DynamicIcon icon='Mail' size='sm' />  aureawebinfo@gmail.com
              </Text>
              <Text variant="light" textAlign="left">
                <a href="https://wa.me/573002477019" className='flex items-center' target="_blank">
                  <DynamicIcon icon='PhoneCall' size='sm' />  +57 300 247 7019
                </a>
              </Text>
            </address>
          </div>
        </div>

        <div className="border-t border-[var(--color-gold)] mt-12 mb-8"></div>

        <div className="text-center">
          <Text variant="light" className="text-[var(--color-gold)]" textAlign="center">
            &copy; {new Date().getFullYear()} Áurea Web. Todos los derechos
            reservados.
          </Text>
        </div>
      </div>
    </footer>
  );
}