export default function ClientsMarquee() {
  const clients = [
    // Reemplaza con tus rutas reales o nombres si no tienes logos aun
    { name: "Energías Polo", img: "/img/clients/logo1.png" }, // Ajusta rutas
    { name: "Global Gaia", img: "/img/clients/logo2.png" },
    { name: "Dental Pro", img: "/img/clients/logo3.png" },
    // Repite para llenar el espacio
    { name: "Energías Polo", img: "/img/clients/logo1.png" },
    { name: "Global Gaia", img: "/img/clients/logo2.png" },
    { name: "Dental Pro", img: "/img/clients/logo3.png" },
  ];

  return (
    <div className="w-full py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden relative">
      {/* Sombras laterales para suavizar la entrada/salida */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center justify-center min-w-[200px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {/* Si no tienes imagen aun, usa texto estilizado */}
             {/* <img src={client.img} alt={client.name} className="h-8 md:h-10 object-contain" /> */}
             <span className="text-xl font-bold text-gray-500">{client.name}</span>
          </div>
        ))}
        {/* Duplicamos para el efecto infinito */}
         {clients.map((client, index) => (
          <div key={`dup-${index}`} className="flex items-center justify-center min-w-[200px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <span className="text-xl font-bold text-gray-500">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}