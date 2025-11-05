import React from "react";
import "./Clients.css";
import { FaHandshake, FaUsers, FaIndustry } from "react-icons/fa";
import intertekLogo from "../../logos/intertek_logo.png";
import gtilLogo from "../../logos/GTIL_logo.jfif";

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">Trusted Quality & Reliability</h2>
          <p className="clients-subtitle">
            Building global partnerships through certified quality and proven excellence
          </p>
        </div>

        {/* Trusted Quality & Reliability - 2x2 Grid */}
        <div className="trusted-quality-grid">
          {/* Intertek Certification */}
          <div className="quality-card certification-card">
            <div className="card-badge">
              <img src={intertekLogo} alt="Intertek Logo" className="certification-logo" />
            </div>
            <h3 className="card-title">Intertek Certification</h3>
            <p className="card-subtitle">Trim Supplier Qualification Program (TQP)</p>
            <div className="card-description">
              <p>Our facility has achieved Intertek's TQP Achievement Award, confirming global compliance and quality assurance across:</p>
              <ul className="assessment-areas">
                <li>Management Environment</li>
                <li>Risk Management</li>
                <li>Process Control</li>
                <li>Product Testing</li>
                <li>Monitoring</li>
              </ul>
              <p>This certification ensures that every shoulder pad meets internationally recognized standards of safety, reliability, and operational excellence.</p>
            </div>
          </div>

          {/* GTIL Certification */}
          <div className="quality-card certification-card">
            <div className="card-badge">
              <img src={gtilLogo} alt="GTIL Logo" className="certification-logo" />
            </div>
            <h3 className="card-title">GTIL Certification</h3>
            <p className="card-description">
              GTIL-certified processes guarantee consistent compliance, operational excellence, and quality trusted by leading apparel manufacturers worldwide.
            </p>
          </div>

          {/* Oxford Apparels */}
          <div className="quality-card client-card">
            <div className="card-badge">
              <FaHandshake className="badge-icon" />
              <span className="badge-text">Trusted Client</span>
            </div>
            <h3 className="card-title">Oxford Apparels</h3>
            <p className="card-description">
              We have partnered with Oxford Apparels since 2012, providing reliable supply chains and timely deliveries. Oxford Apparels is a leading international apparel manufacturer with operations across North America and Europe, making our partnership a testament to our global capabilities.
            </p>
          </div>

          {/* Sepal Group */}
          <div className="quality-card client-card">
            <div className="card-badge">
              <FaHandshake className="badge-icon" />
              <span className="badge-text">Trusted Client</span>
            </div>
            <h3 className="card-title">Sepal Group</h3>
            <p className="card-description">
              Sepal Group, one of the largest fashion brands in Asia with a presence in over 20 countries, relies on us for consistent quality and dependable production. Our collaboration demonstrates our credibility in serving top-tier global clients.
            </p>
          </div>
        </div>

        {/* Social Responsibility / Community Impact Section */}
        <div className="social-responsibility-section">
          <div className="social-responsibility-header">
            <div className="social-responsibility-icon">
              <FaUsers />
            </div>
            <h2 className="social-responsibility-title">Empowering Communities</h2>
            <p className="social-responsibility-subtitle">
              Creating opportunities and supporting social upliftment through our in-house program
            </p>
          </div>

          <div className="social-responsibility-content">
            <div className="social-responsibility-text">
              <p>
                We provide meaningful employment opportunities to underprivileged women and homemakers, giving them training, stable work, and income. Through this program, we contribute to social and economic upliftment while maintaining high global manufacturing standards.
              </p>
            </div>

            <div className="social-responsibility-photos">
              <div className="photo-item">
                <div className="photo-placeholder">
                  <FaIndustry className="photo-icon" />
                  <span className="photo-placeholder-text">Photo</span>
                </div>
                <p className="photo-caption">Empowering women through skill development and meaningful work</p>
              </div>

              <div className="photo-item">
                <div className="photo-placeholder">
                  <FaIndustry className="photo-icon" />
                  <span className="photo-placeholder-text">Photo</span>
                </div>
                <p className="photo-caption">Quality checks and precision in every production step</p>
              </div>

              <div className="photo-item">
                <div className="photo-placeholder">
                  <FaIndustry className="photo-icon" />
                  <span className="photo-placeholder-text">Photo</span>
                </div>
                <p className="photo-caption">Building careers and confidence through training programs</p>
              </div>

              <div className="photo-item">
                <div className="photo-placeholder">
                  <FaIndustry className="photo-icon" />
                  <span className="photo-placeholder-text">Photo</span>
                </div>
                <p className="photo-caption">Creating economic independence and social upliftment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
