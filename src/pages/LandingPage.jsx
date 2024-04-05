import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import Feature from "../components/FeatureSection/Feature";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Feature />
    </div>
  );
};

export default LandingPage;
