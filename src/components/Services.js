import React from "react";
import styled from "styled-components";
import ChatIcon from "../assets/icons/message-square.svg";
import PhoneIcon from "../assets/icons/phone-call.svg";
import VideoIcon from "../assets/icons/video.svg";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
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
const Name = styled.p`
  font-size: 19px;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;
const Icon = styled.img`
  display: block;
  margin: 0 auto 11px;
  background: #f3e2e2;
  padding: 15px;
  border-radius: 50%;
`;
const Amount = styled.p`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 11px;
`;
const FbBanner = styled(Card)`
  border: 4px solid #7b9996;
  margin: 0 auto;
  width: 65%;
  @media (max-width: 736px) {
    width: 100%;
  }
`;
const Heading = styled.h2`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  font-size: 29px;
  margin-bottom: 30px;
  text-transform: capitalize;
`;
const Section = styled.section`
  padding: 30px 15px;
  @media (min-width: 736px) {
    padding: 30px 55px;
  }
`;
const Services = ({ heading, data, hosted, banner }) => {
  const iconUrls = {
    Chat: ChatIcon,
    "Chat De Texto": ChatIcon,
    Phone: PhoneIcon,
    Teléfono: PhoneIcon,
    Video: VideoIcon,
  };
  const ServicesJsx = data.map(({ name, description, amount, duration }, i) => {
    return (
      <Card key={`${i}${name}`}>
        <Name>{name}</Name>
        <Icon src={iconUrls[name]} alt="name" />
        <Amount>{amount}</Amount>
        <p>
          {duration} {description}
        </p>
        <p>{hosted}</p>
      </Card>
    );
  });
  return (
    <Section>
      <Heading>{heading}</Heading>
      <Container>{ServicesJsx}</Container>
      <FbBanner>{banner}</FbBanner>
    </Section>
  );
};

export default Services;
