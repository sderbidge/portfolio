import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>STEPHEN DERBIDGE</h1>
      <p>Take time to get started,</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SEE EXPERIENCE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
