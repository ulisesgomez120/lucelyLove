import React, { useState, Fragment } from "react";
import EnglishContainer from "./components/english/EnglishContainer";
import SpanishContainer from "./components/spanish/SpanishContainer";
import Acuity from "./components/Acuity";
import Header from "./components/header/Header";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <Fragment>
      <Header handleLanguage={handleLanguage} currentLanguage={language} />
      <main>
        {language === "en" ? <EnglishContainer /> : <SpanishContainer />}
        <Acuity />
      </main>
    </Fragment>
  );
}

export default App;
