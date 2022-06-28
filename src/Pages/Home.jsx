import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import WhyMe from "../Components/WhyMe/WhyMe";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyMe />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
