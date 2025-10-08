import React from "react";
import "./Clients.css";

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">Trusted Quality & Reliability</h2>
          <p className="clients-subtitle">
            Building lasting partnerships through consistent quality and
            reliable service
          </p>
        </div>

        <div className="clients-features">
          <div className="client-feature">
            <div className="feature-icon">🏆</div>
            <h3 className="feature-title">Quality Excellence</h3>
            <p className="feature-description">
              ISO certified manufacturing processes ensure every shoulder pad
              meets the highest standards of quality and durability.
            </p>
          </div>

          <div className="client-feature">
            <div className="feature-icon">🤝</div>
            <h3 className="feature-title">Trusted Partnerships</h3>
            <p className="feature-description">
              Serving clients worldwide with reliable supply chains and
              consistent delivery performance since 2012.
            </p>
          </div>

          <div className="client-feature">
            <div className="feature-icon">🌍</div>
            <h3 className="feature-title">Global Reach</h3>
            <p className="feature-description">
              From local businesses to international corporations, we deliver
              excellence across diverse industries and markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
