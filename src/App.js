import React, { useState, Fragment } from "react";
import Acuity from "./components/Acuity";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import { englishData, spanishData } from "./assets/data";

function App() {
  const [language, setLanguage] = useState("es");

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  let { hero, testimonials, service } =
    language === "en" ? englishData : spanishData;
  return (
    <Fragment>
      <Header handleLanguage={handleLanguage} currentLanguage={language} />
      <main>
        <Hero
          title={hero.title}
          heading={hero.heading}
          subheading={hero.subheading}
          cta={hero.cta}
        />
        <Testimonials
          heading={testimonials.heading}
          data={testimonials.reviews}
        />
        <Services
          heading={service.heading}
          services={service.services}
          packages={service.packages}
          language={language}
        />
        <Acuity />
      </main>
    </Fragment>
  );
}

export default App;
