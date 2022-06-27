import React from "react";
import about from "../../Assets/Images/CrossSection/about.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          O <span>MNIE</span>?
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          atque tempore eius, autem ex neque quaerat perspiciatis vero deserunt,
          cumque quisquam quia totam aperiam possimus aliquam inventore numquam
          asperiores animi.
        </p>
      </div>
      <div className="about-right">
        <img src={about} alt="about section" />
      </div>
    </div>
  );
};

export default About;
