import React from "react";
import { FaLock, FaUnlock } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './ExperienceHeroSection.css'

const ExperienceHeroSection = ({ title, subtitle, imageName, levelLock, userLevel, backgroundPosition, path }) => {
  return (
    <div
      className="experience-hero-container"
      style={{
        backgroundImage: `url('/assets/${imageName}')`,
        backgroundPosition: backgroundPosition,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: title ? "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)" : null
      }}
    >
      {userLevel < levelLock && (
        <div className="overlay-container">
          <div className="overlay-content">
            <p>Level {levelLock} </p><FaLock size={52} color="white" />
          </div>
        </div>
      )}
      {userLevel >= levelLock && <Link to={path}>
        <div className="overlay-container">
          <div className="overlay-content">
            <p>Level {levelLock} </p> <FaUnlock color="white" />
          </div>
        </div>
      </Link>}

      <Link to={path}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Link>
    </div>
  );
}

export default ExperienceHeroSection;
