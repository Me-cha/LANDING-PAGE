import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import Feature from "../components/FeatureSection/Feature";
import Testimony from "../components/TestimonySection/Testimonies";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Feature />
      <Testimony />
      <ExploreSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
