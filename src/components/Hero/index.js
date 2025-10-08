import React from 'react';
import './styles.css';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="ds-hero">
      <div className="ds-hero-inner">
        <h1 className="ds-hero-title">Excellence in Shoulder Pads</h1>
        <p className="ds-hero-sub">Premium Quality • Crafted with Precision • Trusted Since 2012</p>
        <button className="ds-hero-cta" onClick={() => scrollToSection('products')}>Explore Products</button>
      </div>
    </section>
  );
}
