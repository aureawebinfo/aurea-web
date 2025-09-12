import Text from '../components/Text';

export default function Footer() {
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
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors duration-300"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--color-gold)] text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Productos", "Nosotros"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
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
              <Text variant="light" textAlign="left">123 Calle Principal</Text>
              <Text variant="light" textAlign="left">Ciudad, CP 00000</Text>
              <Text variant="light" textAlign="left" className="mt-2">email@ejemplo.com</Text>
              <Text variant="light" textAlign="left">+1 (234) 567-8900</Text>
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