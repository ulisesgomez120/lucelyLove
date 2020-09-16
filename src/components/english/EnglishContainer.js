import React from "react";
import styled from "styled-components";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import { englishReviews } from "../../assets/data";

const EnglishContainer = () => {
  return (
    <main>
      <Hero
        title="Lucely Love Coach"
        heading="Love Yourself First"
        subheading="Life advice that puts you first"
      />
      <Testimonials heading="Testimonials" data={englishReviews} />
    </main>
  );
};

export default EnglishContainer;
