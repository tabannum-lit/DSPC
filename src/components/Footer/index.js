import React from 'react';
import logo from '../../Images/logo.png';
import './styles.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ds-footer">
      <div className="ds-footer-grid">
        
        {/* Company Info */}
        <div>
          <div className="ds-footer-brand" style={{ display: 'flex', alignItems: 'left', gap: '1rem' }}>
            <img src={logo} alt="Dot Shoulder Pad Company Logo" />
            <h3 style={{ margin: 0 }}>Dot Shoulder Pad Company</h3>
          </div>
          <p className="ds-tag">Premium Shoulder Pads Since 2012</p>
          <p>Your trusted partner in manufacturing excellence. Delivering quality products and exceptional service worldwide.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4>Contact Information</h4>
          <p><strong>Bangladesh Office:</strong></p>
          <p>207/3 Mirhazirbag, Dhaka - 1204</p>
          <p>Phone: +880 1712236938</p>
          <p>Email: zamirahmed@dotshoulderpad.com</p>
          
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <div className="quick-links">
            {['Home','About Us','Products','Services','Contact Us'].map(link => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <div className="newsletter">
            <h5>Subscribe for Updates</h5>
            <p>Get notified about our latest products and offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Section */}
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

