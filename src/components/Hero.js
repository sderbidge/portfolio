import React from "react";
import "./Hero.css";

function Hero({ title, subtitle, imageName, height, backgroundPosition }) {
    return (
        <div
            className="hero-container"
            style={{
                height: height,
                backgroundImage: `url('/assets/${imageName}')`,
                backgroundPosition: backgroundPosition,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                boxShadow: title ? "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)" : null
            }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}

export default Hero;
