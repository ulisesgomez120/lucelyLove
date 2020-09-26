import React, { useState, Fragment } from "react";
// import EnglishContainer from "./components/english/EnglishContainer";
// import SpanishContainer from "./components/spanish/SpanishContainer";
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
        {/* {language === "en" ? <EnglishContainer /> : <SpanishContainer />} */}
        <Hero
          title="Lucely Love Coach"
          heading="Love Yourself First"
          subheading="Life advice that puts you first"
          cta="Schedule Now"
        />
        <Testimonials
          heading="What People Are Saying"
          data={languageData.reviews}
        />
        <Services
          heading="Schedule Some Time With Me"
          data={languageData.services}
          hosted="Hosted Through Zoom"
          banner={languageData.fbBanner}
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
