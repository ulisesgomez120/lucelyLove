import React from "react";
import styled from "styled-components";

const ReviewContainer = styled.article`
  width: 100%;
  color: black;
`;
const Testimonials = ({ data, heading }) => {
  // testimonal obj into jsx, div with excerpt for heading, then full review and name at bottom
  // https://www.google.com/url?sa=i&url=https%3A%2F%2Fsumo.com%2Fstories%2Ftestimonial-examples&psig=AOvVaw1_T550kf9Xh6EwuK5javLd&ust=1600113319065000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKikh_P05usCFQAAAAAdAAAAABAD

  const reviewsJsx = data.map(({ excerpt, review, name }) => {
    return (
      <ReviewContainer>
        <h3>{excerpt}</h3>
        <p>{review}</p>
        <h4>{name}</h4>
      </ReviewContainer>
    );
  });

  return (
    <section>
      <h2>{heading}</h2>
      {reviewsJsx}
    </section>
  );
};

export default Testimonials;
