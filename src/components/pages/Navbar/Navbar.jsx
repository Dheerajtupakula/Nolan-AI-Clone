import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar({ toggleServicesPopup }) {
  const [showLinks, setShowLinks] = useState(false);
  const [onShow, setOnShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 30) {
        setOnShow(true);
      } else {
        setOnShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
   
  });
  const toggleLinks = (event) => {
    const clickedElement = event.target;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (
      clickedElement.tagName.toLowerCase() === "img" ||
      clickedElement.textContent === "Login"
    ) {
      return false;
    }
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={`Navbar ${onShow && "show-nav"} ${showLinks && "show-nav"}`}
    >
      <div className="logo">
        <div className="toggle-btn" onClick={toggleLinks}>
          <i className={`fas ${showLinks ? "fa-times" : "fa-bars"}`}></i>
        </div>
        <NavLink to="/">
          <img
            onClick={toggleLinks}
            src="data:image/webp;base64,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"
            alt="Logo"
          />
        </NavLink>
      </div>
      <div className="nav-items">
        <div className={`links ${showLinks ? "show" : ""}`}>
          <ul>
            <li>
              <NavLink onClick={toggleLinks} to="/aboutus">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleLinks} to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleLinks} to="/forstudios">
                For Studios
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleLinks} to="/features">
                Features
              </NavLink>
            </li>
            <li>
              <button onClick={toggleServicesPopup}>Create Script</button>
            </li>
            <li>
              <NavLink onClick={toggleLinks} to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="login-btn">
          <NavLink to="/login" onClick={toggleLinks}>
            <button>Login</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


