import React, { useEffect, useState } from 'react';
import './styles.css';
import photoCollage2 from '../../animation picture/photo-collage2.png.png';
import photoCollage from '../../animation picture/photo-collage.png.png';
import factory1 from '../../animation picture/factory1.jpeg';
import picture22 from '../../animation picture/Picture22.jpg';
import picture11 from '../../animation picture/Picture11.jpg';

export default function Hero({ scrollToSection }) {
  // Array of 5 slideshow images using local images
  const images = [
    photoCollage2,
    photoCollage,
    factory1,
    picture22,
    picture11
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
    >
      <div className="ds-hero-image-wrapper">
        <img 
          src={images[index]} 
          alt="Hero slideshow"
          className={`ds-hero-image ${fade ? 'fade-out' : 'fade-in'}`}
        />
        <div className="ds-hero-overlay"></div>
      </div>
      <div className={"ds-hero-inner fade-slide" + (fade ? " fade-out" : " fade-in") }>
        <h1 className="ds-hero-title">Excellence in Shoulder Pads</h1>
        <p className="ds-hero-sub">Premium Quality • Crafted with Precision • Trusted Since 2012</p>
        <button className="ds-hero-cta" onClick={() => scrollToSection('products')}>Explore Products</button>
      </div>
    </section>
  );
}
