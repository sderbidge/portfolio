/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-right">
        <div className="buttons">
          <a href="https://www.linkedin.com/in/stephen-derbidge/" target="_blank">
            <button className="social-button"><FaLinkedin /><span>LinkedIn</span></button>
          </a>
          <a href="https://twitter.com/DerbidgeStephen/" target="_blank">
            <button className="social-button"><FaTwitter /><span>Twitter</span></button>
          </a>
        </div>
        <div className="buttons">
          <a href="https://www.facebook.com/profile.php?id=100004955105212" target="_blank">
            <button className="social-button"><FaFacebook /><span>Facebook</span></button>
          </a>
          <a href="https://www.github.com/sderbidge" target="_blank">
            <button className="social-button"><FaGithub /><span>Github</span></button>
          </a>
        </div>
      </div>
    </div>
  );
}
