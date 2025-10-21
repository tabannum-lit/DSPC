import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Dot Shoulder Pad Company</h2>
          <p className="about-subtitle">
            From Vision to Global Leader: 12 Years of Manufacturing Excellence
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-section-title">Our Journey</h3>
            <p className="about-description">
              Founded in 2012 with a simple vision: to revolutionize shoulder
              pad manufacturing through precision engineering and unwavering
              quality standards. What began as a small operation has grown into
              a global powerhouse, producing 50,000 premium shoulder pads daily.
            </p>
            <p className="about-description">
              Today, we serve national and international clients across diverse
              industries, from professional sports to industrial safety. Our
              reputation is built on trust, reliability, and the consistent
              delivery of products that exceed expectations.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50K</div>
              <div className="stat-label">Daily Production</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Global</div>
              <div className="stat-label">Reach</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Quality Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
