import React from 'react';
import logo from '../../Images/logo.png';
import './styles.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ds-footer">
      <div className="ds-footer-grid">
        <div>
          <div className="ds-footer-brand">
            <img src={logo} alt="logo" />
            <h3>Dot Shoulder Pad Company</h3>
          </div>
          <p className="ds-tag">Premium Shoulder Pads Since 2012</p>
          <p>Your trusted partner in manufacturing excellence. Delivering quality products and exceptional service worldwide.</p>
        </div>

        <div>
          <h4>Contact Information</h4>
          <p>207/3 Mirhazirbag, Dhaka - 1204, Bangladesh</p>
          <p>+880 1712236938</p>
          <p>zamirahmed@dotshoulderpad.com</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="quick-links">
            {['Home','About Us','Products','Services','Contact Us'].map(l => <a key={l} href="#">{l}</a>)}
          </div>
        </div>

        <div>
          <h4>Connect With Us</h4>
          <div className="socials">💼 📷 📘</div>
          <div className="newsletter">
            <h5>Subscribe for updates on new products</h5>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-legal">
        <div className="legal-links">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p>© {year} Dot Shoulder Pad Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
