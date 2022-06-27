import React from "react";
import bgVideo from "../../Assets/Videos/hero-bg.mp4";
import herologo from "../../Assets/Images/Navbar/logo-big.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay={true} loop={true} controls={false} playsInline muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="hero-logo">
        <img src={herologo} alt="hero logo" />
      </div>
    </div>
  );
};

export default Hero;
