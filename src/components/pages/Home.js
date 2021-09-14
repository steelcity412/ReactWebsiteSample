import "../../App.js";
import HeroSection from "../HeroSection";
import React from "react";
import BreweryCards from "../BreweryCards";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <BreweryCards />
      <Footer />
    </>
  );
}

export default Home;
