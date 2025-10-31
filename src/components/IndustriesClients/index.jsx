import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Industries from "../Industries";
import Clients from "../Clients";
import "./IndustriesClients.css";

const IndustriesClients = () => {
  return (
    <div className="industries-clients-page">
      <Navigation />

      <main className="industries-clients-main">
        <div className="industries-clients-hero">
          <div className="industries-clients-hero-content">
            <h1 className="industries-clients-hero-title">
              Industries & Clients
            </h1>
            <p className="industries-clients-hero-subtitle">
              Discover how we serve diverse industries and build lasting partnerships with clients worldwide
            </p>
          </div>
        </div>

        <Industries />
        <Clients />
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesClients;
