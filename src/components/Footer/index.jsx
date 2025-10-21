import React from "react";
import logo from "../../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src={logo}
                alt="Dot Shoulder Pad Company Logo"
                className="footer-logo-img"
              />
              <h3 className="footer-company-name">Dot Shoulder Pad Company</h3>
            </div>
            <p className="footer-tagline">Premium Shoulder Pads Since 2012</p>
            <p className="footer-description">
              Your trusted partner in manufacturing excellence. Delivering
              quality products and exceptional service worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Information</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">
                  207/3 Mirhazirbag, Dhaka - 1204, Bangladesh
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">+880 1712236938</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-text">
                  zamirahmed@dotshoulderpad.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              {["Home", "About Us", "Products", "Services", "Contact Us"].map(
                (link) => (
                  <a key={link} href="#" className="footer-link">
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="footer-section">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="footer-social">
              <a href="#" className="social-link" title="LinkedIn">
                💼
              </a>
              <a href="#" className="social-link" title="Instagram">
                📷
              </a>
              <a href="#" className="social-link" title="Facebook">
                📘
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="newsletter">
              <h5 className="newsletter-title">
                Subscribe for updates on new products
              </h5>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#" className="legal-link">
              Terms & Conditions
            </a>
            <a href="#" className="legal-link">
              Privacy Policy
            </a>
          </div>
          <p className="footer-copyright">
            © 2025 Dot Shoulder Pad Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
