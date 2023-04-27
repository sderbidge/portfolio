/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

import "./Footer.css";
import { useState } from "react";
export default function Footer({ addExp, addExpNotif }) {
  const [linkedinExp, setLinkedInExp] = useState(parseInt(localStorage.getItem("linkedin-exp")))
  const [twitterExp, setTwitterExp] = useState(parseInt(localStorage.getItem("twitter-exp")))
  const [facebookExp, setFacebookExp] = useState(parseInt(localStorage.getItem("facebook-exp")))
  const [githubExp, setGithubExp] = useState(parseInt(localStorage.getItem("github-exp")))

  console.log("linkedinExp", linkedinExp)
  console.log("twitterExp", twitterExp)
  console.log("facebookExp", facebookExp)
  console.log("githubExp", githubExp)

  function handleLinkedinExp() {
    if (linkedinExp !== 0) {
      addExpNotif(linkedinExp)
      addExp(linkedinExp)
      setLinkedInExp(0)
      localStorage.setItem("linkedin-exp", 0)
    }
  }

  function handleTwitterExp() {
    if (twitterExp !== 0) {
      addExpNotif(twitterExp)
      addExp(twitterExp)
      setTwitterExp(0)
      localStorage.setItem("twitter-exp", 0)
    }
  }

  function handleFacebookExp() {
    if (facebookExp !== 0) {
      addExpNotif(facebookExp)
      addExp(facebookExp)
      setFacebookExp(0)
      localStorage.setItem("facebook-exp", 0)
    }
  }

  function handleGithubExp() {
    if (githubExp !== 0) {
      addExpNotif(githubExp)
      addExp(githubExp)
      setGithubExp(0)
      localStorage.setItem("github-exp", 0)
    }
  }

  return (
    <div className="footer-container">
      <div className="footer-right">
        <div className="buttons">
          <a href="https://www.linkedin.com/in/stephen-derbidge/" target="_blank" onMouseOver={() => handleLinkedinExp()}
            onClick={() => handleLinkedinExp()}>
            <button className="social-button"><FaLinkedin /><span>LinkedIn</span></button>
          </a>
          <a href="https://twitter.com/DerbidgeStephen/" target="_blank" onMouseOver={() => handleTwitterExp()}
            onClick={() => handleTwitterExp()}>
            <button className="social-button"><FaTwitter /><span>Twitter</span></button>
          </a>
        </div>
        <div className="buttons">
          <a href="https://www.facebook.com/profile.php?id=100004955105212" target="_blank" onMouseOver={() => handleFacebookExp()}
            onClick={() => handleFacebookExp()}>
            <button className="social-button"><FaFacebook /><span>Facebook</span></button>
          </a>
          <a href="https://www.github.com/sderbidge" target="_blank" onMouseOver={() => handleGithubExp()}
            onClick={() => handleGithubExp()}>
            <button className="social-button"><FaGithub /><span>Github</span></button>
          </a>
        </div>
      </div>
    </div>
  );
}
