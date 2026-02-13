import Contact from "@/views/Contact";
import Hero from "@/views/Hero";
import Opinions from "@/views/Opinions";
import Portfolio from "@/views/Portforlio";
import Services from "@/views/Services";
import Equipo from "@/views/NuestroEquipo";
// import { useState } from 'react';

export default function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Equipo />
      <Opinions />
      <Contact />
    </>
  );
}
