import React from "react";
import styled from "styled-components";
import heroImg from "../assets/images/t-lucely-min.png";
const HeroContainer = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
`;
const FlexChild = styled.div`
  flex: 1 0 50%;
  height: 100%;
  &.textContainer {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &.heroImg {
    background-image: url(${heroImg});
    background-position: center;
    background-size: cover;
  }
  @media (max-width: 879px) {
    flex: 1 0 100%;
    &.textContainer {
      padding-top: 49%;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;
const ContainerForMobileOverlay = styled.div`
  @media (max-width: 879px) {
    width: 100%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
const Title = styled.span`
  letter-spacing: 2px;
  display: block;
  margin-bottom: 8px;
  // text-align: right;
  font-family: "Tangerine", cursive;
  font-size: 24px;
`;
const H1 = styled.h1`
  font-size: 2em;
  letter-spacing: 1px;
  font-family: "Cormorant Garamond", serif;
`;
const Subheading = styled.p`
  font-family: "Cormorant Garamond", serif;
`;
const Cta = styled.a``;
const Hero = ({ heading, subheading, title }) => {
  return (
    <HeroContainer>
      <FlexChild className="textContainer">
        <ContainerForMobileOverlay>
          <Title>{title}</Title>
          <H1>{heading}</H1>
          <Subheading>{subheading}</Subheading>
        </ContainerForMobileOverlay>
        <Cta href="#scheduler">schedule now</Cta>
      </FlexChild>
      <FlexChild className="heroImg" />
    </HeroContainer>
  );
};

export default Hero;
