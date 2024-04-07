import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import Feature from "../components/FeatureSection/Feature";
import Testimony from "../components/TestimonySection/Testimonies";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  const [headerColor, setHeaderColor] = useState("#4478ff");
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderColor(entry.target.getAttribute("data-color"));
          }
        });
      },
      {
        rootMargin: "-65px 0px -80% 0px",
        threshold: 0.01,
      }
    );

    const sections = document.querySelectorAll("[data-color]");
    sections.forEach((section) => observer.current.observe(section));

    return () => {
      if (observer.current) {
        sections.forEach((section) => observer.current.unobserve(section));
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Header color={headerColor} />
      <Hero />
      <Feature />
      <Testimony />
      <ExploreSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
