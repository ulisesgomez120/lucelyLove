import React from "react";
import styled from "styled-components";
import heroImg from "../assets/images/hero.jpg";
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
    @media (min-width: 2043px) {
      background-size: contain;
      background-repeat: no-repeat;
    }
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
  font-family: "Tangerine", cursive;
  font-size: 29px;
  @media (min-width: 666px) {
    font-size: 32px;
  }
`;
const H1 = styled.h1`
  font-size: 2.1em;
  letter-spacing: 1px;
  font-family: "Cormorant Garamond", serif;
  @media (min-width: 666px) {
    font-size: 3.1em;
  }
`;
const Subheading = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 18px;
  @media (min-width: 616px) {
    font-size: 22px;
  }
`;
const Cta = styled.a`
  text-decoration: none;
  display: block;
  color: white;
  background-color: rgba(199, 5, 39, 0.8);
  width: fit-content;
  padding: 6px 13px 9px;
  border-radius: 6px;
  text-transform: capitalize;
  margin: 36px auto;
  @media (min-width: 616px) {
    font-size: 20px;
  }
`;
const Hero = ({ heading, subheading, title, cta }) => {
  return (
    <HeroContainer>
      <FlexChild className='textContainer'>
        <ContainerForMobileOverlay>
          <Title>{title}</Title>
          <H1>{heading}</H1>
          <Subheading>{subheading}</Subheading>
          <Cta href='#scheduler'>{cta}</Cta>
        </ContainerForMobileOverlay>
      </FlexChild>
      <FlexChild className='heroImg' />
    </HeroContainer>
  );
};

export default Hero;
