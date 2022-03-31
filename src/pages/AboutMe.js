import React from "react";
import PageWrapper from "../components/PageWrapper";
import Photo from "../images/Photo";
const AboutMe = () => {
  return (
    <PageWrapper
      title="About Me"
      id="about-me"
      content={
        <div className="AboutMe">
          <div className="AboutMeText">
            <p className="Title Blue">Hi there!</p>
            <p className="Text">
              My name is Ângela and I’m a frontend developer from Portugal with
              the dream to move to Switzerland. Hi studied Economics in High
              School and Economics and Computer Science in Colleague (ISCTE in
              Lisbon). I’ve worked in many fields, as a cashier, singer, dancer,
              all of this before my twenty’s.
            </p>
            <p className="Text">
              Nowadays, I just finished an UI/UX Design course while working as
              a frontend developer at Polarising and as a social media manager
              for a small company.
            </p>
            <p className="Text">
              I’m currently looking for a job in Switzerland, so if you are for
              there go ahead and click on the hire me button, to have the
              wonderful opportunity to have me work for you!
            </p>
          </div>
          <Photo />
        </div>
      }
    />
  );
};
export default AboutMe;
