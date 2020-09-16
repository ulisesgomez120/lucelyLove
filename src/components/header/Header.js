import React from "react";
import styled from "styled-components";
import LanguageInput from "./LanguageInput";
import SocialLinks from "./SocialLinks";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8%;
  padding: 10px 15px;
  @media (min-width: 736px) {
    padding: 10px 55px;
  }
`;
const Header = ({ language, handleLanguage }) => {
  return (
    <StyledHeader>
      <LanguageInput language={language} handleLanguage={handleLanguage} />
      <SocialLinks />
    </StyledHeader>
  );
};

export default Header;
