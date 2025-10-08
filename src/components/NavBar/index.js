import React from 'react';
import logo from '../../Images/logo.png';
import './styles.css';

export default function NavBar({
  activeSection,
  scrollToSection,
  isMobileMenuOpen,
  toggleMobileMenu,
  searchQuery,
  setSearchQuery,
  handleSearch
}) {
  const sections = ['home', 'about', 'products', 'industries', 'clients', 'contact'];

  return (
    <nav className="ds-navbar">
      <div className="ds-navbar-container">
        <div className="ds-brand" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Dot Shoulder Pad Company Logo" className="ds-logo" />
          <div className="company-name">Dot Shoulder Pad Company</div>
        </div>

        <div className="desktop-nav">
          <div className="links">
            {sections.map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                type="button"
              >
                {section}
                {activeSection === section && <span className="underline" />}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">🔍</button>
          </form>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-search">
          <form onSubmit={handleSearch} className="mobile-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mobile-search-input"
            />
            <button type="submit" className="mobile-search-btn">Search</button>
          </form>
        </div>

        <div className="mobile-links">
          {sections.map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`mobile-link ${activeSection === section ? 'active' : ''}`}
              type="button"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
