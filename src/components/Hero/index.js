import React, { useEffect, useState } from 'react';
import './styles.css';

export default function Hero({ scrollToSection }) {
  // Import 15 local images
  const images = [
    require('../../animation picture/1.jfif'),
    require('../../animation picture/2.jpeg'),
    require('../../animation picture/3.jpg'),
    require('../../animation picture/4.png'),  // alone
    require('../../animation picture/5.jpg'),
    require('../../animation picture/6.jpg'),
    require('../../animation picture/7.jpg'),
    require('../../animation picture/8.jpeg'),
    require('../../animation picture/9.png'),  // alone
    require('../../animation picture/10.jpeg'),
    require('../../animation picture/11.jpg'),
    require('../../animation picture/12.jpg'),
    require('../../animation picture/13.jpeg'),
    require('../../animation picture/14.jpg'),
    require('../../animation picture/15.jpeg')
  ];

  // Custom grouping: 4 and 9 alone, rest in sets of 3
  const groupedImages = [];
  let tempGroup = [];

  images.forEach((img, idx) => {
    if (idx === 3 || idx === 8) { // index 3 = 4th image, index 8 = 9th image
      if (tempGroup.length) {
        groupedImages.push(tempGroup);
        tempGroup = [];
      }
      groupedImages.push([img]); // push 4th and 9th as single
    } else {
      tempGroup.push(img);
      if (tempGroup.length === 3) {
        groupedImages.push(tempGroup);
        tempGroup = [];
      }
    }
  });

  // push remaining images if any
  if (tempGroup.length) {
    groupedImages.push(tempGroup);
  }

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFade(true), 4200);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % groupedImages.length);
      }, 800);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, [groupedImages.length]);

  return (
    <section id="home" className="ds-hero hero-slideshow">
      <div className="ds-hero-image-wrapper">
        <div className={`image-group ${fade ? "fade-out" : "fade-in"}`}>
          {groupedImages[index].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${index * 3 + i + 1}`}
              className="ds-hero-image"
            />
          ))}
        </div>
        <div className="ds-hero-overlay"></div>
      </div>

      <div className="ds-hero-inner">
        <h1 className="ds-hero-title">Excellence in Shoulder Pads</h1>
        <p className="ds-hero-sub">
          Premium Quality • Crafted with Precision • Trusted Since 2012
        </p>
        <button
          className="ds-hero-cta"
          onClick={() => scrollToSection('products')}
        >
          Explore Products
        </button>
      </div>
    </section>
  );
}
