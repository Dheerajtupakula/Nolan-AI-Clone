import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer({ location }) {
  if (
    location.pathname == "/dashboard" ||
    location.pathname === "/profile" ||
    location.pathname.includes("/editor")
  ) {
    return null;
  }
  return (
    <section className="footer">
      <footer>
        <NavLink to="/" className="footer-logo">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Flogo-header.png&w=96&q=75"
            alt="logo"
          />
        </NavLink>
        <div className="references">
          <div className="licence">© NolanAI,Inc. 2024</div>
          <div className="refer">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Team of Service</a>
            <a href="/referral-program">Referral program</a>
            <a href="/releases">Releases</a>
            <a href="#">Help</a>
          </div>
        </div>

        <div className="social-media">
          <a href="https://www.instagram.com/nolanaiapp">
            <i className="fa-brands fa-instagram  fa-xl"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCSernMEBRoBJvRJfdc1n2CQ">
            <i className="fa-brands fa-youtube fa-xl"></i>
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fnolanaiapp">
            <i className="fa-brands fa-x-twitter fa-xl"></i>
          </a>
          <a href="https://www.threads.net/@nolanaiapp">
            <i className="fa-brands fa-threads fa-xl"></i>
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
