import React from "react";
import "./Quality.css";

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
            <div className="feature-icon">🏆</div>
            <h3 className="feature-title">ISO 9001:2015 Certified</h3>
            <p className="feature-description">
              Internationally recognized quality management system ensuring
              consistent product excellence and customer satisfaction across all
              operations.
            </p>
          </div>

          <div className="quality-feature">
            <div className="feature-icon">🌱</div>
            <h3 className="feature-title">Sustainable Manufacturing</h3>
            <p className="feature-description">
              Committed to environmental responsibility through sustainable
              practices, waste reduction, and eco-friendly manufacturing
              processes.
            </p>
          </div>

          <div className="quality-feature">
            <div className="feature-icon">🔬</div>
            <h3 className="feature-title">Quality Assurance</h3>
            <p className="feature-description">
              Rigorous testing protocols and continuous quality monitoring
              ensure every shoulder pad meets the highest industry standards.
            </p>
          </div>
        </div>

        <div className="quality-promise">
          <div className="promise-content">
            <div className="promise-text">
              <h3 className="promise-title">Our Quality Promise</h3>
              <p className="promise-description">
                At Dot Shoulder Pad Company, quality isn't just a standard—it's
                our foundation. Every product undergoes meticulous inspection
                and testing to ensure it meets our exacting standards.
              </p>
              <p className="promise-description">
                From raw material selection to final packaging, we maintain
                strict quality control measures that guarantee consistent
                excellence in every shoulder pad we produce.
              </p>
            </div>
            <div className="promise-stats">
              <div className="promise-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality Inspected</div>
              </div>
              <div className="promise-stat">
                <div className="stat-number">ISO</div>
                <div className="stat-label">Certified</div>
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
