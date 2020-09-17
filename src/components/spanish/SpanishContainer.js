import React from "react";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import { spanishReviews, spanishServices } from "../../assets/data";
import Services from "../Services";

const SpanishContainer = () => {
  const fbBanner = (
    <p>
      Si quieres ser parte del grupo SOY EL PREMIO en Facebook, envia un correo
      electrónico a{" "}
      <a href="mailto:TaniaLucely143@gmail.com">TaniaLucely143@gmail.com</a> con
      tu nombre, edad, y tu perfil de Facebook.
    </p>
  );
  return (
    <main>
      <Hero
        title="Consejera De Amor"
        heading="Amate A Ti Misma Primero"
        subheading="Consejos de vida que te ponen primero"
        cta="Programar ahora"
      />
      <Testimonials
        heading="Lo que la gente esta diciendo"
        data={spanishReviews}
      />
      <Services
        heading="Programa un tiempo conmigo"
        data={spanishServices}
        hosted="Alojado a través de Zoom"
        banner={fbBanner}
      />
    </main>
  );
};

export default SpanishContainer;
