import React, { useState, useEffect } from "react";

interface TeamMember {
  image: string;
  name: string;
  position: string;
  description: string;
}

const NuestroEquipo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers: TeamMember[] = [
    {
      image: "/ruta/a/imagen1.jpg",
      name: "Andres Roa",
      position: "Desarrollador Web",
      description:
        "Experto en estrategias de negocio con más de 10 años de experiencia.",
    },
    {
      image: "/ruta/a/imagen2.jpg",
      name: "Edizon Meza",
      position: "Desarrollador Web",
      description:
        "Apasionada por la tecnología y innovación en desarrollo web.",
    },
    {
      image: "/ruta/a/imagen2.jpg",
      name: "John Lievano",
      position: "Desarrollador Web",
      description:
        "Apasionada por la tecnología y innovación en desarrollo web.",
    },
    {
      image: "/ruta/a/imagen3.jpg",
      name: "Samuel Loaiza",
      position: "Desarrollador Web",
      description:
        "Creando experiencias de usuario excepcionales e interfaces intuitivas.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-color-text">
          Nuestro Equipo
        </h2>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col items-center p-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 rounded-full object-cover mb border-4 border-amber-300"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-lg text-gray-600 mb-2">{member.position}</p>
            <p className="text-center max-w-md">{member.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 hover:bg-amber-300 rounded-full shadow-md"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 hover:bg-amber-300 rounded-full shadow-md"
      >
        ›
      </button>

      <div className="flex justify-center mt-4">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-amber-300" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NuestroEquipo;
