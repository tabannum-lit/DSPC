import React from "react";
import "./Industries.css";

const Industries = () => {
  const industries = [
    {
      name: "Sports & Recreation",
      icon: "⚽",
      description: "Professional and amateur sports equipment",
    },
    {
      name: "Automotive",
      icon: "🚗",
      description: "Vehicle safety and protective components",
    },
    {
      name: "Construction",
      icon: "🏗️",
      description: "Safety gear and protective equipment",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description: "Medical devices and protective equipment",
    },
    {
      name: "Military & Defense",
      icon: "🛡️",
      description: "Specialized protective gear and equipment",
    },
    {
      name: "Electronics",
      icon: "📱",
      description: "Protective cases and padding solutions",
    },
  ];

  return (
    <section id="industries" className="industries">
      <div className="industries-container">
        <div className="industries-header">
          <h2 className="industries-title">Industries We Serve</h2>
          <p className="industries-subtitle">
            Trusted by leading companies across diverse sectors
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
