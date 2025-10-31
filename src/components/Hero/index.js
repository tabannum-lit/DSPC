import React, { useEffect, useState } from 'react';
import './styles.css';
import Factory4 from '../../Images/Raw/Factory-4.jpeg';
import Factory8 from '../../Images/Raw/Factory-8.jpeg';
import Factory14 from '../../Images/Raw/Factory-14.jpeg';
import Factory13 from '../../Images/Raw/Factory-13.jpeg';
import Factory10 from '../../Images/Raw/Factory-10.jpeg';

export default function Hero({ scrollToSection }) {
  // Array of 5 slideshow images using local images
  const images = [
    Factory4,
    Factory8,
    Factory14,
    Factory13,
    Factory10
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
