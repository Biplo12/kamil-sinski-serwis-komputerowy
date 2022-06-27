import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import WhyMe from "../Components/WhyMe/WhyMe";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyMe />
      <About />
      <Services />
    </>
  );
};

export default Home;
