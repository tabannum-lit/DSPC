import React from "react";
import "./Hero.css";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Excellence in Shoulder Pads</h1>
        <p className="hero-subtitle">
          Premium Quality • Crafted with Precision • Trusted Since 2012
        </p>
        <button
          onClick={() => scrollToSection("products")}
          className="cta-button"
        >
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
