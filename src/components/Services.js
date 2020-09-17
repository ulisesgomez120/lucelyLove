import React from "react";
import styled from "styled-components";
import ChatIcon from "../assets/icons/message-square.svg";
import PhoneIcon from "../assets/icons/phone-call.svg";
import VideoIcon from "../assets/icons/video.svg";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Card = styled.article`
  border: 4px solid #f3e2e2;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  margin: 0 25px;
`;
const Name = styled.p`
  font-size: 19px;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;
const Icon = styled.img`
  margin-bottom: 16px;
`;
const Amount = styled.div``;
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

`;
const Services = ({ heading, data, hosted }) => {
  const iconUrls = {
    Chat: ChatIcon,
    Phone: PhoneIcon,
    Video: VideoIcon,
  };
  const ServicesJsx = data.map(({ name, description, amount, duration }, i) => {
    return (
      <Card>
        <Name>{name}</Name>
        <Icon src={iconUrls[name]} />
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
    </Section>
  );
};

export default Services;
