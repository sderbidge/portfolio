import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth < 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <div className="logo"><span>SD</span></div>
            <div className="logo-desc">Derbidge Portfolio</div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FaBars
              className="fa-times"
              style={{ display: click ? "none" : "block" }}
            />
            <FaTimes
              style={{ display: click ? "block" : "none", color: "#fff" }}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/experience"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                RESUME
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"><Link to="/experience" style={{ color: "#fff", textDecoration: "none" }}>RESUME</Link></Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
