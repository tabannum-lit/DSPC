import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Ready to discuss your manufacturing needs? Get in touch with our
            team today.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h3 className="form-title">Send us a Message</h3>
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input type="text" required className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input type="email" required className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea required rows="5" className="form-textarea" />
              </div>
              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3 className="info-title">Get in Touch</h3>
              <div className="info-item">
                <strong className="info-label">📍 Address:</strong>
                <p className="info-text">
                  207/3 Mirhazirbag
                  <br />
                  Dhaka - 1204
                  <br />
                  Bangladesh
                </p>
              </div>
              <div className="info-item">
                <strong className="info-label">📞 Phone:</strong>
                <p className="info-text">+880 1712236938 (Bangladesh)</p>
              </div>
              <div className="info-item">
                <strong className="info-label">📧 Email:</strong>
                <p className="info-text">zamirahmed@dotshoulderpad.com</p>
              </div>
              <div className="info-item">
                <strong className="info-label">🕒 Business Hours:</strong>
                <p className="info-text">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Additional Contact Information */}
            <div className="map-section">
              <h3 className="map-title">Our Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902933872703!2d90.4066643154325!3d23.75088228458399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7c2b5c7b7%3A0x5b5b5b5b5b5b5b5b!2s207%2F3%20Mirhazirbag%2C%20Dhaka%201204%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1647856789012!5m2!1sen!2sbd"
                  width="100%"
                  height="300"
                  style={{
                    border: 0,
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dot Shoulder Pad Company Location"
                />
              </div>
              <p className="map-description">
                Visit our manufacturing facility in the heart of Dhaka,
                Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
