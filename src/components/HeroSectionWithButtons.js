import React from "react";
import { Button } from "./Button";
import "./HeroSectionWithButtons.css";

function HeroSectionWithButtons() {
  return (
    <div className="hero-container">
      <h1>STEPHEN DERBIDGE</h1>
      <p>Take time to get started,</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/experience"
        >
          SEE EXPERIENCE
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionWithButtons;
