import React, { useState, Fragment } from "react";
import Acuity from "./components/Acuity";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

import { englishData, spanishData } from "./assets/data";
function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  let languageData = language === "en" ? englishData : spanishData;
  return (
    <Fragment>
      <Header handleLanguage={handleLanguage} currentLanguage={language} />
      <main>
        <Hero
          title={languageData.hero.title}
          heading={languageData.hero.heading}
          subheading={languageData.hero.subheading}
          cta={languageData.hero.cta}
        />
        <Testimonials
          heading={languageData.testimonials.heading}
          data={languageData.testimonials.reviews}
        />
        <Services
          heading={languageData.service.heading}
          data={languageData.service.services}
          hosted={languageData.service.hosted}
          language={language}
        />
        <Acuity />
      </main>
    </Fragment>
  );
}

export default App;

// return (
//   <main>
//     <Hero
//       title="Lucely Love Coach"
//       heading="Love Yourself First"
//       subheading="Life advice that puts you first"
//       cta="Schedule Now"
//     />
//     <Testimonials heading="What People Are Saying" data={englishReviews} />
//     <Services
//       heading="Schedule Some Time With Me"
//       data={englishServices}
//       hosted="Hosted Through Zoom"
//       banner={fbBanner}
//     />
//   </main>
// );
