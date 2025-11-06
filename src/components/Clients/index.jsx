import React from "react";
import "./Clients.css";
import { FaUsers } from "react-icons/fa";
import intertekLogo from "../../logos/intertek_logo.png";
import gtilLogo from "../../logos/GTIL_logo.jfif";
import oxford from "../../logos/oxford.png";
import Sepal from "../../logos/Sepal.jfif";
import fac1 from "../../logos/fac1.jpeg";
import fac2 from "../../logos/fac2.jpg";
import fac3 from "../../logos/fac3.jpeg";
import fac4 from "../../logos/fac4.jpeg";

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="clients-container">
        {/* ========== Header ========== */}
        <div className="clients-header">
          <h2 className="clients-title">Trusted Quality & Reliability</h2>
          <p className="clients-subtitle">
            Building global partnerships through certified quality and proven excellence
          </p>
        </div>

        {/* ========== CERTIFICATIONS ========== */}
        <div className="subsection">
          <h3 className="subsection-title">Certifications</h3>
          <div className="trusted-quality-grid">
            {/* Intertek Certification */}
            <div className="quality-card certification-card">
              <div className="card-badge">
                <img src={intertekLogo} alt="Intertek Logo" className="certification-logo" />
              </div>
              <h3 className="card-title">Intertek Certified</h3>
              <p className="card-subtitle">Trim Supplier Qualification Program (TQP)</p>
              <div className="card-description">
                <p>
                  Our facility has achieved Trim Qualification Program (TQP) Achievement Award by Intertek,
                  confirming compliance and quality assurance across key areas such as management, risk control,
                  product testing, and monitoring. This ensures every shoulder pad meets international standards
                  of safety, reliability, and excellence.
                </p>
              </div>
            </div>

            {/* GTIL Certification */}
            <div className="quality-card certification-card">
              <div className="card-badge">
                <img src={gtilLogo} alt="GTIL Logo" className="certification-logo" />
              </div>
              <h3 className="card-title">GTIL Certified</h3>
              <p className="card-description">
                GTIL-certified processes guarantee consistent compliance, operational excellence, and quality trusted by leading apparel manufacturers worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* ========== CLIENTS ========== */}
        <div className="subsection">
          <h3 className="subsection-title">Our Clients</h3>
          <div className="trusted-quality-grid">
            {/* Oxford Apparels */}
            <div className="quality-card client-card">
              <div className="card-badge">
                <img src={oxford} alt="Oxford Logo" className="certification-logo" />
                <span className="badge-text">Trusted Client</span>
              </div>
              <h3 className="card-title">Oxford Apparels</h3>
              <p className="card-description">
                We have partnered with Oxford Apparels since 2014, providing reliable supply chains and timely deliveries. Oxford Apparels is a leading international apparel manufacturer with operations across North America and Europe.
              </p>
            </div>

            {/* Sepal Group */}
            <div className="quality-card client-card">
              <div className="card-badge">
                <img src={Sepal} alt="Sepal Logo" className="certification-logo" />
                <span className="badge-text">Trusted Client</span>
              </div>
              <h3 className="card-title">Sepal Group</h3>
              <p className="card-description">
                Sepal Group, one of the largest fashion brands in Asia with a presence in over 20 countries, relies on us for consistent quality and dependable production.
              </p>
            </div>
          </div>
        </div>

        {/* ========== SOCIAL RESPONSIBILITY ========== */}
        <div className="social-responsibility-section">
          <div className="social-responsibility-header">
            <FaUsers className="social-responsibility-icon" />
            <h2 className="social-responsibility-title">Empowering Communities</h2>
            <p className="social-responsibility-subtitle">
            Creating opportunities and supporting social upliftment through our workplace initiatives.
            </p>
          </div>

          <div className="social-responsibility-text">
            <p>
              We provide meaningful employment opportunities to underprivileged women and homemakers,
               giving them training, stable work, and income. Through this program, we contribute to 
               social and economic upliftment while maintaining high manufacturing standards.
            </p>
          </div>

          {/* Local Photos */}
          <div className="trusted-quality-grid small-cards">
            <div className="quality-card small-card">
              <img src={fac1} alt="Empowering women" className="card-image" />
              <h3 className="card-title">Empowering Women</h3>
              <p className="card-description">
                Empowering women through skill development and meaningful work.
              </p>
            </div>
            <div className="quality-card small-card">
              <img src={fac2} alt="Quality checks" className="card-image" />
              <h3 className="card-title">Quality & Precision</h3>
              <p className="card-description">
                Quality checks and precision in every production step.
              </p>
            </div>
            <div className="quality-card small-card">
              <img src={fac3} alt="Career development" className="card-image" />
              <h3 className="card-title">Career Development</h3>
              <p className="card-description">
                Building confidence and long-term skills through structured training programs.
              </p>
            </div>
            <div className="quality-card small-card">
              <img src={fac4} alt="Economic independence" className="card-image" />
              <h3 className="card-title">Economic Upliftment</h3>
              <p className="card-description">
                Creating economic independence and social empowerment for women in our communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
