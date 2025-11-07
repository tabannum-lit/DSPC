import React from "react";
import "./MissionVisionValues.css";

const MissionVisionValues = () => {
  const coreValues = [
    {
      title: "Quality & Precision",
      desc: "Strict quality control and consistent product performance.",
    },
    {
      title: "Customer Commitment",
      desc: "Responsive support, timely delivery, and dependable service.",
    },
    {
      title: "Sustainable Growth",
      desc: "Responsible sourcing and efficient resource management.",
    },
    {
      title: "Innovation & Improvement",
      desc: "Continuous development in product design and manufacturing.",
    },
    {
      title: "Global Service",
      desc: "Reliable supply solutions for international garment industries.",
    },
    {
      title: "Integrity & Transparency",
      desc: "Ethical operations and trusted long-term partnerships.",
    },
  ];

  return (
    <section id="mission" className="mission-vision-values">
      <div className="mission-container">
        <div className="mission-header">
          <h2 className="mission-title">Mission, Vision & Values</h2>
          <p className="mission-subtitle">The Principles That Guide Our Work</p>
        </div>

        <div className="mission-content">
          <div className="mission-vision-cards">
            <div className="mission-card">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
              To deliver premium shoulder pad solutions that exceed expectations, combining 
              cutting-edge manufacturing technology with uncompromising quality standards 
              to serve our global clientele.
              </p>
            </div>

            <div className="mission-card">
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To be recognized as a trusted global leader in shoulder pad
                manufacturing, known for innovation, operational excellence, and
                long-term partnerships with garment manufacturers worldwide.
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
