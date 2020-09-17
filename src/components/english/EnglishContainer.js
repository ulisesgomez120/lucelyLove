import React from "react";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import { englishReviews, englishServices } from "../../assets/data";
import Services from "../Services";

const EnglishContainer = () => {
  const fbBanner = (
    <p>
      Join my private Facebook Group! Send an email to{" "}
      <a href="mailto:TaniaLucely143@gmail.com">TaniaLucely143@gmail.com</a>{" "}
      with your name, age, and Facebook profile. (Facebook group is only in
      Spanish)
    </p>
  );
  return (
    <main>
      <Hero
        title="Lucely Love Coach"
        heading="Love Yourself First"
        subheading="Life advice that puts you first"
        cta="Schedule Now"
      />
      <Testimonials heading="What People Are Saying" data={englishReviews} />
      <Services
        heading="Schedule Some Time With Me"
        data={englishServices}
        hosted="Hosted Through Zoom"
        banner={fbBanner}
      />
    </main>
  );
};

export default EnglishContainer;
