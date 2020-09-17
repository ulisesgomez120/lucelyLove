import React from "react";
import styled from "styled-components";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import { englishReviews, englishServices } from "../../assets/data";
import Services from "../Services";

const EnglishContainer = () => {
  return (
    <main>
      <Hero
        title="Lucely Love Coach"
        heading="Love Yourself First"
        subheading="Life advice that puts you first"
      />
      <Testimonials heading="What People Are Saying" data={englishReviews} />
      <Services
        heading="Schedule Some Time With Me"
        data={englishServices}
        hosted="Hosted Through Zoom"
      />
    </main>
  );
};

export default EnglishContainer;
