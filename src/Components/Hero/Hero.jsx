import React from "react";
import bgVideo from "../../Assets/Videos/hero-bg.mp4";
const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
