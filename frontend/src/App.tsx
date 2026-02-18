import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

// 1. IMPORTACIONES DE UI (Desde 'components')
// Asegúrate de que StarField esté en components y sea .tsx
import { StarField } from './components/StarField'; 

// 2. IMPORTACIONES DE VISTAS (Desde 'views')
// Conectamos el archivo físico (ej: Header) con el componente lógico (ej: Navbar)

import { Navbar } from './views/Header';       // El archivo es Header.tsx, el componente es Navbar
import Hero from './views/Hero';               // Hero suele ser export default (ver nota abajo*)
import { Services } from './views/Services';   
import { Portfolio } from './views/Portfolio'; // Nota: Tu archivo tiene un typo "Portforlio"
import { Team } from './views/Team';  // El archivo es NuestroEquipo.tsx, el componente es Team
import { Testimonials } from './views/Opinions'; // El archivo es Opinions.tsx, el componente es Testimonials
import { Contact } from './views/Contact';     
import { Footer } from './views/Footer';       

function App() {
  return (
    <BrowserRouter>
      {/* Fondo negro base y configuración de texto */}
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#d4af37] selection:text-black overflow-hidden font-sans">
        
        {/* Fondo de Estrellas Fijo */}
        <StarField />
        
        {/* Contenido Principal */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Services />
          <Portfolio />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
        </div>

        {/* Notificaciones */}
        <Toaster position="top-right" theme="dark" richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;