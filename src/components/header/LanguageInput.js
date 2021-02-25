import React from "react";

const LanguageInput = ({ language, handleLanguage }) => {
  return (
    <select value={language} onChange={handleLanguage}>
      <option value='es'>Espa&ntilde;ol</option>
      <option value='en'>English</option>
    </select>
  );
};

export default LanguageInput;
