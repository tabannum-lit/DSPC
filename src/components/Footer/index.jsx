import React from "react";
import logo from "../../Images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="ds-footer">
      <div className="ds-footer-grid">
        {/* Brand + Social */}
        <div className="footer-col ds-footer-brand">
          <div className="brand-row">
            <img src={logo} alt="Dot Shoulder Pad Company Logo" />
            <span className="footer-company">Dot Shoulder Pad Company</span>
          </div>
          <div className="ds-tag">Premium Shoulder Pads Since 2012</div>
          <div className="footer-desc">
            Your trusted partner for high-quality, innovative garment accessories. Supplying excellence worldwide.
          </div>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col quick-links">
          <div className="footer-title">Quick Links</div>
          <ul className="footer-link-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col footer-contact">
          <div className="footer-title">Contact</div>
          <div className="contact-row"><FaMapMarkerAlt className="contact-icon" /><span>207/3 Mirhazirbag, Dhaka - 1204, Bangladesh</span></div>
          <div className="contact-row"><FaPhoneAlt className="contact-icon" /><span>+880 1712236938</span></div>
          <div className="contact-row"><FaEnvelope className="contact-icon" /><span>zamirahmed@dotshoulderpad.com</span></div>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-news">
          <div className="footer-title">Subscribe for updates on new products</div>
          <div className="footer-subtitle">Get our latest product updates and offers</div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="newsletter-input" placeholder="Your email" aria-label="Your email" />
            <button className="newsletter-btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="ds-legal">
        <div className="footer-copyright">
          © 2025 Dot Shoulder Pad Company. All rights reserved.
        </div>
        <div className="legal-links">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
