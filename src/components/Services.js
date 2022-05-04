import React from "react";
import styled from "styled-components";
import FbBanner from "./FbBanner";
import ChatIcon from "../assets/icons/message-square.svg";
import PhoneIcon from "../assets/icons/phone-call.svg";
import VideoIcon from "../assets/icons/video.svg";
import MeetingIcon from "../assets/icons/meeting.svg";
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
const PackageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.article`
  border: 4px solid rgba(199, 5, 39, 0.8);
  border-radius: 6px;
  padding: 33px 24px;
  text-align: center;
  margin: 0 25px 25px 0;
  max-width: 220px;
  &.package-card {
    max-width: 315px;
  }
  @media (max-width: 460px) {
    margin: 25px 0;
  }
`;
const Name = styled.p`
  font-size: 19px;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;
const Icon = styled.img`
  display: block;
  margin: 0 auto 11px;
  background: rgba(199, 5, 39, 0.8);
  padding: 15px;
  border-radius: 50%;
`;
const Price = styled.p`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 11px;
`;

const Heading = styled.h2`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  font-size: 29px;
  margin-bottom: 30px;
  text-transform: capitalize;
  &.package-heading {
    margin-top: 22px;
  }
`;
const P = styled.p`
  margin-bottom: 3px;
`;
const Section = styled.section`
  padding: 30px 15px;
  @media (min-width: 736px) {
    padding: 30px 55px;
  }
`;
const Services = ({ heading, services, packages, language }) => {
  const iconUrls = {
    Chat: ChatIcon,
    "Chat De Texto": ChatIcon,
    Phone: PhoneIcon,
    Teléfono: PhoneIcon,
    Video: VideoIcon,
    "In Person": MeetingIcon,
    "En Persona": MeetingIcon,
  };
  const servicesJsx = services.map(
    ({ name, description, price, duration, hosted }, i) => {
      return (
        <Card key={`${i}${name}`}>
          <Name>{name}</Name>
          <Icon src={iconUrls[name]} alt='name' />
          <Price>{price}</Price>
          <P>
            {duration} {description}
          </P>
          <P>{hosted}</P>
        </Card>
      );
    }
  );
  const bundlesJsx = packages.map(
    ({ name, price, description, hosted, savings }, i) => {
      return (
        <Card key={`${i}${name}`} className='package-card'>
          <Name>{name}</Name>
          {/* <Icon src={iconUrls[name]} alt='name' /> */}
          <Price>{price}</Price>
          <P>{description}</P>
          <h3 style={{ marginBottom: "3px", fontSize: "16px" }}>
            {language === "en" ? "Savings: " : "Ahorra "}
            {savings}
          </h3>
          <P>{hosted}</P>
        </Card>
      );
    }
  );
  return (
    <Section>
      <Heading>{heading}</Heading>
      <Container>{servicesJsx}</Container>
      <Heading className='package-heading'>
        {language === "en" ? "New Bundles!" : "Paquetes Nuevos!"}
      </Heading>
      <PackageContainer>{bundlesJsx}</PackageContainer>
      <FbBanner language={language} />
    </Section>
  );
};

export default Services;
