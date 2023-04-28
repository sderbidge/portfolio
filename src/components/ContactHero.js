import React from "react";
import "./ContactHero.css";

function ContactHero({ title, subtitle, imageName, backgroundPosition }) {
    return (
        <div
            className="contact-hero-component-container"
            style={{
                backgroundImage: `url('/assets/${imageName}')`,
                backgroundPosition: backgroundPosition,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                boxShadow: title ? "inset 0 0 0 1000px rgba(0, 0, 0, 0)" : null
            }}>
            <div id="contact-hero-text-container">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default ContactHero;
