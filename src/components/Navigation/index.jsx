import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./Navigation.css";

const Navigation = ({
  activeSection = "home",
  setActiveSection = () => {},
  isMobileMenuOpen = false,
  setIsMobileMenuOpen = () => {},
  searchQuery = "",
  setSearchQuery = () => {},
  handleSearch = () => {},
}) => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determine if we're on products page
  const isProductsPage = location.pathname === "/products";

  const handleNavClick = (section) => {
    if (section === "products") {
      // Navigate to products page instead of scrolling
      window.location.href = "/products";
      setIsMobileMenuOpen(false);
    } else if (isProductsPage) {
      // On products page, navigate to home page and scroll to section
      window.location.href = `/#${section}`;
      setIsMobileMenuOpen(false);
    } else {
      // On home page, scroll to section
      scrollToSection(section);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo and Company Name - Far Left */}
        <div className="logo-section" onClick={() => scrollToSection("home")}>
          <img
            src={logo}
            alt="Dot Shoulder Pad Company Logo"
            className="logo"
          />
          <div className="company-name">Dot Shoulder Pad Company</div>
        </div>

        {/* Desktop Navigation Links and Search - Far Right */}
        <div className="desktop-nav">
          {/* Navigation Links */}
          <div className="nav-links">
            {[
              "home",
              "about",
              "products",
              "industries",
              "clients",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`nav-link ${
                  (activeSection === section && !isProductsPage) ||
                  (section === "products" && isProductsPage)
                    ? "active"
                    : ""
                }`}
              >
                {section}
                {(activeSection === section && !isProductsPage) ||
                (section === "products" && isProductsPage) ? (
                  <div className="active-indicator" />
                ) : null}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="mobile-menu-btn">
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Mobile Search */}
        <div className="mobile-search">
          <form onSubmit={handleSearch} className="mobile-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mobile-search-input"
            />
            <button type="submit" className="mobile-search-btn">
              Search
            </button>
          </form>
        </div>

        {/* Mobile Navigation Links */}
        {["home", "about", "products", "industries", "clients", "contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`mobile-nav-link ${
                (activeSection === section && !isProductsPage) ||
                (section === "products" && isProductsPage)
                  ? "active"
                  : ""
              }`}
            >
              {section}
            </button>
          )
        )}
      </div>
    </nav>
  );
};

export default Navigation;
