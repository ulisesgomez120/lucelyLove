import React from "react";

const LanguageInput = ({ language, handleLanguage }) => {
  return (
    <select value={language} onChange={handleLanguage}>
      <option value="en">English</option>
      <option value="es">Espa&ntilde;ol</option>
    </select>
  );
};

export default LanguageInput;
