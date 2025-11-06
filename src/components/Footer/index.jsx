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
    <footer className="footer">
      <div className="footer-upper">
        {/* Brand + Social */}
        <div className="footer-col footer-brand">
          <div className="brand-row">
            <img src={logo} alt="Dot Shoulder Pad Company Logo" className="footer-logo-img" />
            <span className="footer-company">Dot Shoulder Pad Company</span>
          </div>
          <div className="footer-tagline">Premium Shoulder Pads Since 2012</div>
          <div className="footer-desc">
            Your trusted partner for high-quality, innovative garment accessories. Supplying excellence worldwide.
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="footer-col footer-links">
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
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" className="newsletter-input" placeholder="Your email" aria-label="Your email" />
            <button className="newsletter-btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2025 Dot Shoulder Pad Company. All rights reserved.
        </div>
        <div className="footer-legal">
          <a href="#" className="legal-link">Terms &amp; Conditions</a>
          <a href="#" className="legal-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
