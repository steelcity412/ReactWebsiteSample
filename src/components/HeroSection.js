import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import heroimage from "../images/pittsburgh-unsplash.jpg";
//src\images
function HeroSection() {
  return (
    <div className="hero-container">
      <video src={heroimage} />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default HeroSection;
