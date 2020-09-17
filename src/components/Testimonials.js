import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f3e2e2;
  padding: 30px 15px;
@media (min-width: 736px) {
    padding: 30px 55px;

`;
const ReviewContainer = styled.details`
  width: 100%;
  margin-bottom: 24px;
  & > summary {
    cursor: pointer;
    font-family: "Cormorant Garamond", serif;
    outline: none;
    color: #7b9996;
    font-size: 22px;
  }
`;
const Review = styled.p`
  line-height: 23px;
  text-indent: 15px;
  font-size: 17px;
  margin: 19px 0;
`;
const Reviewer = styled.p`
  font-weight: bold;
  font-size: 31px;
  font-family: "Tangerine", cursive;
  margin-left: 15px;
`;
const Heading = styled.h2`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  font-size: 29px;
  margin-bottom: 30px;
  text-transform: capitalize;
`;
const Testimonials = ({ data, heading }) => {
  const reviewsJsx = data.map(({ excerpt, review, name }, i) => {
    return (
      <ReviewContainer open key={i}>
        <summary>{excerpt}</summary>
        <Review>{review}</Review>
        <Reviewer>- {name}</Reviewer>
      </ReviewContainer>
    );
  });

  return (
    <Section>
      <Heading>{heading}</Heading>
      {reviewsJsx}
    </Section>
  );
};

export default Testimonials;
