import React from "react";
import styled from "styled-components";

const Card = styled.article`
  border: 4px solid #f3e2e2;
  border-radius: 6px;
  padding: 33px 24px;
  text-align: center;
  margin: 0 25px 25px 0;
  @media (max-width: 460px) {
    margin: 25px 0;
  }
`;
const Fb = styled(Card)`
  border: 4px solid #7b9996;
  margin: 0 auto;
  width: 65%;
  @media (max-width: 736px) {
    width: 100%;
  }
`;
const FbBanner = ({ language }) => {
  const linkText = {
    en: (
      <p>
        Join my private Facebook Group! Send an email to{" "}
        <a href="mailto:TaniaLucely143@gmail.com">TaniaLucely143@gmail.com</a>{" "}
        with your name, age, and Facebook profile. (Facebook group is only in
        Spanish)
      </p>
    ),
    es: (
      <p>
        Si quieres ser parte del grupo SOY EL PREMIO en Facebook, envia un
        correo electrónico a{" "}
        <a href="mailto:TaniaLucely143@gmail.com">TaniaLucely143@gmail.com</a>{" "}
        con tu nombre, edad, y tu perfil de Facebook.
      </p>
    ),
  };
  return <Fb>{linkText[language]}</Fb>;
};

export default FbBanner;
