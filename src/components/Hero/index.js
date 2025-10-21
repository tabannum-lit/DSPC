import React, { useEffect, useState } from 'react';
import './styles.css';

export default function Hero({ scrollToSection }) {
  // Array of 5 slideshow images (replace these URLs with your chosen images)
  const images = [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2070&q=80", // Factory 1
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2070&q=80", // Factory 2
    "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=2070&q=80", // Factory 3
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=2070&q=80", // Production
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=2070&q=80"  // Workers
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFade(true), 4200);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 800);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, [images.length]);

  return (
    <section
      id="home"
      className="ds-hero hero-slideshow"
      style={{
        backgroundImage: `linear-gradient(rgba(44,62,80,0.7),rgba(52,73,94,0.7)), url(${images[index]})`
      }}
    >
      <div className={"ds-hero-inner fade-slide" + (fade ? " fade-out" : " fade-in") }>
        <h1 className="ds-hero-title">Excellence in Shoulder Pads</h1>
        <p className="ds-hero-sub">Premium Quality • Crafted with Precision • Trusted Since 2012</p>
        <button className="ds-hero-cta" onClick={() => scrollToSection('products')}>Explore Products</button>
      </div>
    </section>
  );
}
