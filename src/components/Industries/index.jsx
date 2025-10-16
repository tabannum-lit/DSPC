import React from "react";
import "./Industries.css";

const products = [
  {
    name: "Jacket & Coat Shoulder Pads",
    icon: "👔",
    description: "Designed for perfect structure and comfort in men’s and women’s outerwear",
  },
  {
    name: "Blazer & Suit Shoulder Pads",
    icon: "🧥",
    description: "Premium molded pads providing tailored shape and professional fit",
  },
  {
    name: "Uniform Shoulder Pads",
    icon: "🎽",
    description: "Durable and comfortable options for school, military, and hospitality uniforms",
  },
  {
    name: "Dress & Casualwear Shoulder Pads",
    icon: "👚",
    description: "Lightweight pads that enhance everyday fashion and comfort",
  },
  {
    name: "Custom & Eco-friendly Shoulder Pads",
    icon: "🌿",
    description: "Sustainably made from recycled fibers and tailored to client specifications",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="industries">
      <div className="industries-container">
        <div className="industries-header">
          <h2 className="industries-title">Our Products</h2>
          <p className="industries-subtitle">
            Crafted with precision and trusted by garment manufacturers worldwide
          </p>
        </div>
        <div className="industries-grid">
          {products.map((product, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{product.icon}</div>
              <h3 className="industry-name">{product.name}</h3>
              <p className="industry-description">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
