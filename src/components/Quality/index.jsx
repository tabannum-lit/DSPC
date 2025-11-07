import React from "react";
import "./Quality.css";
import { FaLeaf } from "react-icons/fa";
import intertekLogo from "../../logos/intertek_logo.png";
import gtilLogo from "../../logos/GTIL_logo.jfif";
import sustainableLogo from "../../logos/gear.jfif";

const Quality = () => {
  return (
    <section id="quality" className="quality">
      <div className="quality-container">
        <div className="quality-header">
          <h2 className="quality-title">Quality & Compliance</h2>
          <p className="quality-subtitle">
            Uncompromising Standards in Manufacturing Excellence
          </p>
        </div>

        <div className="quality-features">
          <div className="quality-feature">
            <div className="feature-icon">
              <img src={gtilLogo} alt="GTIL Logo" className="certification-logo" />
            </div>
            <h3 className="feature-title">GTIL Certified</h3>
            <p className="feature-description">
              GTIL-verified manufacturing system ensuring globally compliant production processes, consistent quality control, and reliable supply standards across all operations.
            </p>
          </div>
          <div className="quality-feature">
            <div className="feature-icon">
              <img src={intertekLogo} alt="Intertek Logo" className="certification-logo" />
            </div>
            <h3 className="feature-title">Intertek TQP Certified</h3>
            <p className="feature-description">
              Certified under Intertek's Trim Supplier Qualification Program (TQP), confirming excellence in management environment, risk control, process discipline, product testing, and ongoing monitoring to meet international quality and reliability benchmarks.
            </p>
          </div>
          <div className="quality-feature">
            <div className="feature-icon">
              <img src={sustainableLogo} alt="Sustainable Logo" className="certification-logo" />
            </div>
            <h3 className="feature-title">Responsible Manufacturing</h3>
            <p className="feature-description">
            We prioritize smart material utilization, energy-efficient production, and waste-reduction practices to support a cleaner, more sustainable supply chain.
            </p>
          </div>
        </div>

        <div className="quality-promise">
          <div className="promise-content">
            <div className="promise-text">
              <h3 className="promise-title">Our Quality Promise</h3>
              <p className="promise-description">
                At Dot Shoulder Pad Company, quality is the foundation of every product we make. Every shoulder pad undergoes total quality inspection, rigorously certified by Intertek under the Trim Supplier Qualification Program (TQP), ensuring compliance with international standards of reliability, durability, and precision.
              </p>
              <p className="promise-description">
                From carefully selected raw materials to precision production and final packaging, each step is monitored to guarantee flawless products. Our zero-defect tolerance and continuous quality monitoring ensure every shoulder pad meets our exacting standards.
              </p>
            </div>
            <div className="promise-stats">
              <div className="promise-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality Inspected</div>
              </div>
              <div className="promise-stat">
                <div className="stat-number">Intertek TQP</div>
                <div className="stat-label">Certified – Facility & Production</div>
              </div>
              <div className="promise-stat">
                <div className="stat-number">0</div>
                <div className="stat-label">Defect Tolerance</div>
              </div>
              <div className="promise-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Quality Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
