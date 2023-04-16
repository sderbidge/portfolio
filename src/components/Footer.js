/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

import "./Footer.css";
import { useState } from "react";
export default function Footer({ addExp, addExpNotif }) {
  const [linkedinExp, setLinkedInExp] = useState(1)
  const [twitterExp, setTwitterExp] = useState(1)
  const [facebookExp, setFacebookExp] = useState(1)
  const [githubExp, setGithubExp] = useState(3)
  return (
    <div className="footer-container">
      <div className="footer-right">
        <div className="buttons">
          <a href="https://www.linkedin.com/in/stephen-derbidge/" target="_blank" onClick={() => {
            if (linkedinExp !== 0) {
              addExpNotif(linkedinExp)
              addExp(linkedinExp)
              setLinkedInExp(0)
            }
          }}>
            <button className="social-button"><FaLinkedin /><span>LinkedIn</span></button>
          </a>
          <a href="https://twitter.com/DerbidgeStephen/" target="_blank" onClick={() => {
            if (twitterExp !== 0) {
              addExpNotif(twitterExp)
              addExp(twitterExp)
              setTwitterExp(0)
            }
          }}>
            <button className="social-button"><FaTwitter /><span>Twitter</span></button>
          </a>
        </div>
        <div className="buttons">
          <a href="https://www.facebook.com/profile.php?id=100004955105212" target="_blank" onClick={() => {
            if (facebookExp !== 0) {
              addExpNotif(facebookExp)
              addExp(facebookExp)
              setFacebookExp(0)
            }
          }}>
            <button className="social-button"><FaFacebook /><span>Facebook</span></button>
          </a>
          <a href="https://www.github.com/sderbidge" target="_blank" onClick={() => {
            if (githubExp !== 0) {
              addExpNotif(githubExp)
              addExp(githubExp)
              setGithubExp(0)
            }
          }}>
            <button className="social-button"><FaGithub /><span>Github</span></button>
          </a>
        </div>
      </div>
    </div>
  );
}
