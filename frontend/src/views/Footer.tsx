export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Sección principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="dark:text-amber-300 text-2xl font-bold mb-4">
              Áurea Web
            </h3>
            <p className="text-white mb-6">
              Enfocados en la eficiencia y estetica de las paginas web que
              diseñamos con un enfoque moderno y creativo a gusto de nuestros
              clientes.
            </p>
            <div className="flex space-x-4">
              {/* Iconos de redes sociales */}
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white hover:dark:text-amber-300 transition-colors"
                    aria-label={social}
                  >
                    {social}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="dark:text-amber-300 text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Productos", "Nosotros"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:dark:text-amber-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h4 className="dark:text-amber-300 text-lg font-semibold mb-4">
              Contacto
            </h4>
            <address className="text-white not-italic">
              <p>123 Calle Principal</p>
              <p>Ciudad, CP 00000</p>
              <p className="mt-2">email@ejemplo.com</p>
              <p>+1 (234) 567-8900</p>
            </address>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t dark:text-amber-300 mt-12 mb-8"></div>

        {/* Copyright */}
        <div className="text-center dark:text-amber-300">
          <p>
            &copy; {new Date().getFullYear()} Áurea Web. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
