import React from "react";
import "./MissionVisionValues.css";

const MissionVisionValues = () => {
  const coreValues = [
    {
      title: "Quality Excellence",
      desc: "Uncompromising standards in every product",
    },
    {
      title: "Client Trust",
      desc: "Building lasting partnerships through reliability",
    },
    {
      title: "Sustainability",
      desc: "Responsible manufacturing for future generations",
    },
    {
      title: "Innovation",
      desc: "Continuous improvement and technological advancement",
    },
    {
      title: "Global Reach",
      desc: "Serving clients worldwide with local expertise",
    },
    {
      title: "Integrity",
      desc: "Transparent operations and ethical business practices",
    },
  ];

  return (
    <section id="mission" className="mission-vision-values">
      <div className="mission-container">
        <div className="mission-header">
          <h2 className="mission-title">Mission, Vision & Values</h2>
          <p className="mission-subtitle">The Foundation of Our Success</p>
        </div>

        <div className="mission-content">
          <div className="mission-vision-cards">
            <div className="mission-card">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To deliver premium shoulder pad solutions that exceed
                expectations, combining cutting-edge manufacturing technology
                with uncompromising quality standards to serve our global
                clientele.
              </p>
            </div>

            <div className="mission-card">
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To be the world's leading shoulder pad manufacturer, recognized
                for innovation, reliability, and sustainable practices that set
                industry standards for excellence.
              </p>
            </div>
          </div>

          <div className="values-card">
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-title">{value.title}</div>
                  <div className="value-description">{value.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
