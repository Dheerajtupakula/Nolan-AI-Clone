import React from "react";
import "./aboutus.css";
import { NavLink } from "react-router-dom";

function Aboutus() {
  return (
    <section className="aboutus">
      <div className="aboutus-bgc-title">
        <div className="aboutus-bgc">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-for-studios.webp&w=1200&q=75"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="aboutus-titles">
          <h6 className="aboutus-currentpage">
            NOLAN// <span> ABOUT</span>
          </h6>
          <h1 className="aboutus-title">About Us</h1>
        </div>
      </div>
      <div className="aboutus-content">
        <h3>Our mission</h3>
        <p>
          Welcome to NolanAI, the AI-driven All in one tool for film industry
          professionals at any level. Our mission is to guide and empower you in
          crafting captivating screenplays while preserving your unique voice.
        </p>
        <h3>What is NolanAI?</h3>
        <p>
          NolanAi is the ultimate AI-driven All in one tool that can help
          screenwriters of all levels. It's designed to guide and assist you in
          bringing your stories to the screenplay industry format, without
          stealing your creativity.
        </p>
        <p>
          If you're new to the industry, NolanAI can be your co-pilot, helping
          you through the emotional and exhausting process of screenwriting.{" "}
        </p>
        <p>
          With its powerful algorithms and intuitive interface, it can offer
          suggestions and guidance on character development, plot points, and
          dialogue, helping you turn your ideas into polished screenplays.
        </p>
        <p>
          For experienced scriptwriters, NolanAI can bring new ideas and
          inspiration to your writing. It can suggest fresh angles, plot twists,
          and character arcs, helping you take your craft to the next level. And
          throughout the writing process, you're always in control.{" "}
        </p>
        <p>
          <b>NolanAi is here to help, not to take over.</b>
        </p>
        <h3>For Novice Screenwriters:</h3>
        <p>
          If you're new to the industry, NolanAI is your trusted co-pilot on the
          exhilarating screenwriting journey. We understand the emotional and
          exhaustive nature of the process, which is why NolanAI is here to
          provide valuable suggestions and guidance. Our powerful algorithms and
          intuitive interface help you master character development, plot
          points, and dialogue while getting a grip on screenplay formatting.
        </p>
        <h3>For Seasoned Scriptwriters:</h3>
        <p>
          Even experienced scriptwriters need a creative spark. NolanAI acts as
          your catalyst, offering fresh ideas and innovative perspectives to
          elevate your writing. Discover new angles, plot twists, and character
          arcs that enhance your storytelling. NolanAI complements your
          expertise by working alongside you, amplifying your skills. Check out
          our advanced plans for professionals like you here:{" "}
          <NavLink to="/pricing">
            <b>
              <code>Check premium plan</code>
            </b>
          </NavLink>
        </p>
        <h3>Control and Creativity:</h3>
        <p>
          We believe in empowering screenwriters, not taking over. With NolanAi,
          you're always in control. Our AI-powered features seamlessly integrate
          into your workflow, providing intelligent suggestions and streamlining
          your creative process. Our user-friendly interface allows you to
          effortlessly shape and refine your scripts, bringing your stories to
          life efficiently and effectively.
        </p>
        <p>
          <b>
            Experience the transformative impact of NolanAI and unleash your
            potential today.
          </b>
        </p>
        <p>
          <b>Drop us an email: </b>
          <a href="mailto:hello@nolanai.app">hello@nolanai.app</a>
        </p>
        <p>
          <b>For support: </b>
          <a href="mailto:support@nolanai.app">
            <b>support@nolanai.app</b>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Aboutus;
