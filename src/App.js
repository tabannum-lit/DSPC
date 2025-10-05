import React, { useState } from 'react';
import logo from './Images/logo.png';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality can be implemented here
    console.log('Searching for:', searchQuery);
    alert(`Searching for: ${searchQuery}`);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      color: '#333',
      margin: 0,
      padding: 0
    }}>
      {/* Corporate Responsive Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#2c3e50', // Dark navy/charcoal background
        padding: '0',
        zIndex: 1000,
        boxShadow: '0 2px 15px rgba(255, 255, 255, 0.1)' // Subtle white/silver shadow
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem',
          height: '70px'
        }}>
          {/* Logo and Company Name - Far Left */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('home')}>
            <img 
              src={logo} 
              alt="Dot Shoulder Pad Company Logo" 
              style={{
                height: '45px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            <div style={{
              fontSize: '1.4rem',
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '0.5px'
            }}
            className="company-name">
              Dot Shoulder Pad Company
            </div>
          </div>

          {/* Desktop Navigation Links and Search - Far Right */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
          className="desktop-nav">
            {/* Navigation Links */}
            <div style={{
              display: 'flex',
              gap: '0',
              alignItems: 'center'
            }}>
              {['home', 'about', 'products', 'industries', 'clients', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    textTransform: 'capitalize',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '0',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    fontWeight: '500',
                    letterSpacing: '0.3px'
                  }}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onMouseOver={(e) => {
                    if (activeSection !== section) {
                      e.target.style.backgroundColor = 'rgba(200, 200, 200, 0.1)';
                      e.target.style.color = '#c0c0c0';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== section) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'white';
                    }
                  }}
                >
                  {section}
                  {activeSection === section && (
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '70%',
                      height: '2px',
                      backgroundColor: '#c0c0c0',
                      borderRadius: '1px'
                    }} />
                  )}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #555',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '0.9rem',
                  width: '180px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#c0c0c0';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#555';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#c0c0c0',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  marginLeft: '0.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#c0c0c0'}
              >
                🔍
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.5rem',
              padding: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            className="mobile-menu-btn"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(200, 200, 200, 0.1)';
              e.target.style.color = '#c0c0c0';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div style={{
          display: isMobileMenuOpen ? 'block' : 'none',
          backgroundColor: '#2c3e50',
          borderTop: '1px solid #555',
          boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)'
        }}
        className="mobile-nav">
          {/* Mobile Search */}
          <div style={{
            padding: '1rem 2rem',
            borderBottom: '1px solid #555'
          }}>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: '1px solid #555',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#c0c0c0',
                  color: '#2c3e50',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile Navigation Links */}
          {['home', 'about', 'products', 'industries', 'clients', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.1rem',
                textTransform: 'capitalize',
                padding: '1rem 2rem',
                textAlign: 'left',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                letterSpacing: '0.3px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: activeSection === section ? 'rgba(200, 200, 200, 0.1)' : 'transparent'
              }}
              onMouseOver={(e) => {
                if (activeSection !== section) {
                  e.target.style.backgroundColor = 'rgba(200, 200, 200, 0.1)';
                  e.target.style.color = '#c0c0c0';
                  e.target.style.paddingLeft = '2.5rem';
                }
              }}
              onMouseOut={(e) => {
                if (activeSection !== section) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.paddingLeft = '2rem';
                }
              }}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section id="home" style={{
        position: 'relative',
        backgroundImage: 'linear-gradient(rgba(44, 62, 80, 0.7), rgba(52, 73, 94, 0.7)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax effect
        color: 'white',
        padding: '8rem 2rem 4rem',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeInUp 1s ease-out'
      }}>
        <div style={{ 
          maxWidth: '900px',
          animation: 'slideInUp 1.2s ease-out 0.3s both'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '900',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            letterSpacing: '-1px',
            fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif'
          }}>
            Excellence in Shoulder Pads
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '3rem',
            opacity: '0.95',
            fontWeight: '300',
            letterSpacing: '0.5px',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
            lineHeight: '1.4'
          }}>
            Premium Quality • Crafted with Precision • Trusted Since 2012
          </p>
          <button
            onClick={() => scrollToSection('products')}
            style={{
              backgroundColor: '#c0c0c0',
              color: '#2c3e50',
              border: 'none',
              padding: '1.2rem 3rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(192, 192, 192, 0.3)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(192, 192, 192, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#c0c0c0';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(192, 192, 192, 0.3)';
            }}
          >
            Explore Products
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8fafc',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            About Dot Shoulder Pad Company
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            From Vision to Global Leader: 12 Years of Manufacturing Excellence
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ 
                color: '#2c3e50', 
                marginBottom: '1.5rem',
                fontSize: '1.8rem',
                fontWeight: '600'
              }}>
                Our Journey
              </h3>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7',
                marginBottom: '1rem'
              }}>
                Founded in 2012 with a simple vision: to revolutionize shoulder pad manufacturing through 
                precision engineering and unwavering quality standards. What began as a small operation 
                has grown into a global powerhouse, producing 50,000 premium shoulder pads daily.
              </p>
              <p style={{ 
                color: '#64748b', 
                lineHeight: '1.7'
              }}>
                Today, we serve national and international clients across diverse industries, from 
                professional sports to industrial safety. Our reputation is built on trust, reliability, 
                and the consistent delivery of products that exceed expectations.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2.5rem', color: '#2c3e50', fontWeight: 'bold' }}>12+</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Years of Excellence</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2.5rem', color: '#2c3e50', fontWeight: 'bold' }}>50K</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Daily Production</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2.5rem', color: '#2c3e50', fontWeight: 'bold' }}>Global</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Reach</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2.5rem', color: '#2c3e50', fontWeight: 'bold' }}>100%</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Quality Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section id="mission" style={{
        padding: '4rem 2rem',
        backgroundColor: '#2c3e50',
        color: 'white',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: 'white',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Mission, Vision & Values
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#c0c0c0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            The Foundation of Our Success
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ 
              color: '#c0c0c0', 
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              Our Mission
            </h3>
            <p style={{ 
              color: 'white', 
              lineHeight: '1.7',
              fontSize: '1.1rem'
            }}>
              To deliver premium shoulder pad solutions that exceed expectations, 
              combining cutting-edge manufacturing technology with uncompromising 
              quality standards to serve our global clientele.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ 
              color: '#c0c0c0', 
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              Our Vision
            </h3>
            <p style={{ 
              color: 'white', 
              lineHeight: '1.7',
              fontSize: '1.1rem'
            }}>
              To be the world's leading shoulder pad manufacturer, recognized for 
              innovation, reliability, and sustainable practices that set industry 
              standards for excellence.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            gridColumn: 'span 2'
          }}>
            <h3 style={{ 
              color: '#c0c0c0', 
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Our Core Values
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { title: 'Quality Excellence', desc: 'Uncompromising standards in every product' },
                { title: 'Client Trust', desc: 'Building lasting partnerships through reliability' },
                { title: 'Sustainability', desc: 'Responsible manufacturing for future generations' },
                { title: 'Innovation', desc: 'Continuous improvement and technological advancement' },
                { title: 'Global Reach', desc: 'Serving clients worldwide with local expertise' },
                { title: 'Integrity', desc: 'Transparent operations and ethical business practices' }
              ].map((value, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ 
                    color: '#c0c0c0', 
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    fontSize: '1rem'
                  }}>
                    {value.title}
                  </div>
                  <div style={{ 
                    color: 'white', 
                    fontSize: '0.9rem',
                    lineHeight: '1.4'
                  }}>
                    {value.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section id="products" style={{
        padding: '5rem 2rem',
        backgroundColor: '#fafbfc',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Our Product Collection
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Premium shoulder pads crafted with precision and quality for diverse applications
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '3rem'
        }}>
          {[
            {
              name: 'Shoulder Pad for Overcoats & Jackets',
              details: 'Nice texture and lightweight',
              type: '3-Layer Shoulder Pad',
              model: 'SP01-0050',
              material: '100% Polyester Needle Punch',
              colors: 'White / Black / Grey'
            },
            {
              name: '4-Layer Shoulder Pad for Jackets',
              details: 'Soft, durable, and lightweight',
              type: '4-Layer Shoulder Pad',
              model: 'SP01-0051',
              material: '100% Polyester Needle Punch',
              colors: 'White / Black / Grey'
            },
            {
              name: 'Foam Shoulder Pad Covered With Fabric',
              details: 'Comfortable and flexible',
              type: '4-Layer Shoulder Pad',
              model: 'SP-10',
              material: '100% Polyester Needle Punch & Fabric',
              colors: 'White / Black / Grey'
            },
            {
              name: 'Shoulder Pad for Heavy Overcoats',
              details: 'Extra cushioning and support',
              type: '5-Layer Shoulder Pad',
              model: 'SP-T11',
              material: '100% Polyester Needle Punch',
              colors: 'White / Black / Grey'
            },
            {
              name: '3-Ply Shoulder Pad',
              details: 'Lightweight with smooth texture',
              type: '3-Layer Shoulder Pad',
              model: 'SP-11',
              material: '100% Polyester Needle Punch',
              colors: 'White / Black / Grey'
            },
            {
              name: 'Foam Shoulder Pad',
              details: 'Soft and resilient',
              type: '4-Layer Shoulder Pad',
              model: 'SP-T12',
              material: '100% Polyester Needle Punch & Foam',
              colors: 'White / Black / Grey'
            },
            {
              name: 'Different Style Foam Shoulder Pad',
              details: 'Sleek, lightweight design',
              type: '3-Layer Shoulder Pad',
              model: 'SP-NW01',
              material: '100% Polyester Needle Punch',
              colors: 'White / Black / Grey'
            },
            {
              name: 'Shoulder Pad with Tricot Fabric',
              details: 'Smooth surface and comfort fit',
              type: '3-Layer Shoulder Pad',
              model: 'J01-0050',
              material: '100% Polyester Needle Punch & Fabric',
              colors: 'White / Black / Grey'
            },
            {
              name: 'Shoulder Pad with Non-Woven Fabric',
              details: 'Durable and soft texture',
              type: '3-Layer Shoulder Pad',
              model: 'J01-0051',
              material: '100% Polyester Needle Punch & Non-Woven Fabric',
              colors: 'White / Black / Grey'
            },
            {
              name: 'Sleeve Roll for Overcoats & Jackets',
              details: 'Lightweight and flexible',
              type: 'Sleeve Roll',
              model: 'SR-0010',
              material: '100% Polyester',
              colors: 'White / Black / Grey'
            }
          ].map((product, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
              border: '1px solid #e5e7eb',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
            }}
            >
              <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'flex-start'
              }}>
                {/* Product Image */}
                <div style={{
                  width: '180px',
                  height: '180px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid #e5e7eb'
                }}>
                  <div style={{
                    width: '140px',
                    height: '140px',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    color: '#64748b',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#d1d5db';
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#e2e8f0';
                    e.target.style.transform = 'scale(1)';
                  }}
                  >
                    🏷️
                  </div>
                </div>

                {/* Product Details */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.8rem',
                    lineHeight: '1.3'
                  }}>
                    {product.name}
                  </h3>

                  <div style={{
                    backgroundColor: '#f9fafb',
                    padding: '1rem',
                    borderRadius: '6px',
                    marginBottom: '1rem',
                    border: '1px solid #f3f4f6'
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#374151',
                      margin: 0,
                      lineHeight: '1.5'
                    }}>
                      <strong>Quick Details:</strong> {product.details}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#6b7280',
                      marginBottom: '0.3rem',
                      lineHeight: '1.4'
                    }}>
                      <strong>Product Type:</strong> {product.type}
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#6b7280',
                      marginBottom: '0.3rem',
                      lineHeight: '1.4'
                    }}>
                      <strong>Model Number:</strong> {product.model}
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#6b7280',
                      marginBottom: '0.3rem',
                      lineHeight: '1.4'
                    }}>
                      <strong>Material:</strong> {product.material}
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#6b7280',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      <strong>Colors:</strong> {product.colors}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Request Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '3rem 2rem',
          boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
          border: '1px solid #e5e7eb',
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Request a Quote
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Interested in any of our products? Contact us for detailed pricing and specifications.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <select style={{
              padding: '0.8rem 1rem',
              border: '2px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '1rem',
              backgroundColor: 'white',
              color: '#374151',
              minWidth: '300px',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            >
              <option value="">Select Product</option>
              <option value="sp01-0050">SP01-0050 - Shoulder Pad for Overcoats & Jackets</option>
              <option value="sp01-0051">SP01-0051 - 4-Layer Shoulder Pad for Jackets</option>
              <option value="sp-10">SP-10 - Foam Shoulder Pad Covered With Fabric</option>
              <option value="sp-t11">SP-T11 - Shoulder Pad for Heavy Overcoats</option>
              <option value="sp-11">SP-11 - 3-Ply Shoulder Pad</option>
              <option value="sp-t12">SP-T12 - Foam Shoulder Pad</option>
              <option value="sp-nw01">SP-NW01 - Different Style Foam Shoulder Pad</option>
              <option value="j01-0050">J01-0050 - Shoulder Pad with Tricot Fabric</option>
              <option value="j01-0051">J01-0051 - Shoulder Pad with Non-Woven Fabric</option>
              <option value="sr-0010">SR-0010 - Sleeve Roll for Overcoats & Jackets</option>
            </select>

            <button style={{
              backgroundColor: '#2c3e50',
              color: 'white',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#34495e';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#2c3e50';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              Get Quote
            </button>
          </div>

          <p style={{
            fontSize: '0.85rem',
            color: '#9ca3af',
            marginTop: '1.5rem',
            margin: '1.5rem 0 0 0'
          }}>
            We'll respond within 24 hours with detailed pricing and specifications
          </p>
        </div>
      </section>

      {/* Industries Served Section */}
      <section id="industries" style={{
        padding: '4rem 2rem',
        backgroundColor: '#f1f5f9',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#1e3a8a',
            marginBottom: '1rem'
          }}>
            Industries We Serve
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Trusted by leading companies across diverse sectors
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { name: 'Sports & Recreation', icon: '⚽', description: 'Professional and amateur sports equipment' },
            { name: 'Automotive', icon: '🚗', description: 'Vehicle safety and protective components' },
            { name: 'Construction', icon: '🏗️', description: 'Safety gear and protective equipment' },
            { name: 'Healthcare', icon: '🏥', description: 'Medical devices and protective equipment' },
            { name: 'Military & Defense', icon: '🛡️', description: 'Specialized protective gear and equipment' },
            { name: 'Electronics', icon: '📱', description: 'Protective cases and padding solutions' }
          ].map((industry, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{industry.icon}</div>
              <h3 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>{industry.name}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality & Compliance Section */}
      <section id="quality" style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8fafc',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Quality & Compliance
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Uncompromising Standards in Manufacturing Excellence
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🏆</div>
            <h3 style={{ 
              color: '#2c3e50', 
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              ISO 9001:2015 Certified
            </h3>
            <p style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}>
              Internationally recognized quality management system ensuring consistent 
              product excellence and customer satisfaction across all operations.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🌱</div>
            <h3 style={{ 
              color: '#2c3e50', 
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              Sustainable Manufacturing
            </h3>
            <p style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}>
              Committed to environmental responsibility through sustainable practices, 
              waste reduction, and eco-friendly manufacturing processes.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🔬</div>
            <h3 style={{ 
              color: '#2c3e50', 
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              Quality Assurance
            </h3>
            <p style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}>
              Rigorous testing protocols and continuous quality monitoring ensure 
              every shoulder pad meets the highest industry standards.
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          border: '2px solid #e2e8f0'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ 
                color: '#2c3e50', 
                marginBottom: '1.5rem',
                fontSize: '1.8rem',
                fontWeight: '600'
              }}>
                Our Quality Promise
              </h3>
              <p style={{ 
                color: '#64748b',
                lineHeight: '1.7',
                marginBottom: '1rem'
              }}>
                At Dot Shoulder Pad Company, quality isn't just a standard—it's our foundation. 
                Every product undergoes meticulous inspection and testing to ensure it meets 
                our exacting standards.
              </p>
              <p style={{ 
                color: '#64748b',
                lineHeight: '1.7'
              }}>
                From raw material selection to final packaging, we maintain strict quality 
                control measures that guarantee consistent excellence in every shoulder pad 
                we produce.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2rem', color: '#2c3e50', fontWeight: 'bold' }}>100%</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Quality Inspected</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2rem', color: '#2c3e50', fontWeight: 'bold' }}>ISO</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Certified</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2rem', color: '#2c3e50', fontWeight: 'bold' }}>0</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Defect Tolerance</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2rem', color: '#2c3e50', fontWeight: 'bold' }}>24/7</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Quality Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section id="clients" style={{
        padding: '4rem 2rem',
        backgroundColor: '#2c3e50',
        color: 'white',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: 'white',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Trusted Quality & Reliability
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#c0c0c0',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Building lasting partnerships through consistent quality and reliable service
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
            <h3 style={{ 
              color: '#c0c0c0', 
              marginBottom: '1rem',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Quality Excellence
            </h3>
            <p style={{ 
              color: 'white', 
              lineHeight: '1.6'
            }}>
              ISO certified manufacturing processes ensure every shoulder pad meets the highest standards of quality and durability.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ 
              color: '#c0c0c0', 
              marginBottom: '1rem',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Trusted Partnerships
            </h3>
            <p style={{ 
              color: 'white', 
              lineHeight: '1.6'
            }}>
              Serving clients worldwide with reliable supply chains and consistent delivery performance since 2012.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
            <h3 style={{ 
              color: '#c0c0c0', 
              marginBottom: '1rem',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Global Reach
            </h3>
            <p style={{ 
              color: 'white', 
              lineHeight: '1.6'
            }}>
              From local businesses to international corporations, we deliver excellence across diverse industries and markets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        backgroundColor: 'white',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#1e3a8a',
            marginBottom: '1rem'
          }}>
            Contact Us
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to discuss your manufacturing needs? Get in touch with our team today.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem'
        }}>
          {/* Contact Form */}
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>Send us a Message</h3>
            <form onSubmit={handleContactSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#374151',
                  fontWeight: 'bold'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#374151',
                  fontWeight: 'bold'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#374151',
                  fontWeight: 'bold'
                }}>
                  Message *
                </label>
                <textarea
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>Get in Touch</h3>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#374151' }}>📍 Address:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>
                207/3 Mirhazirbag<br />
                Dhaka - 1204<br />
                Bangladesh
                </p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#374151' }}>📞 Phone:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>+880 1712236938 (Bangladesh)</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#374151' }}>📧 Email:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>zamirahmed@dotshoulderpad.com</p>
              </div>
              <div>
                <strong style={{ color: '#374151' }}>🕒 Business Hours:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Additional Contact Information */}
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Why Choose Us?</h3>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#374151' }}>🏭 Manufacturing Excellence:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>
                  50,000 shoulder pads produced daily with consistent quality
                </p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#374151' }}>🌍 Global Delivery:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>
                  Reliable shipping to clients worldwide
                </p>
              </div>
              <div>
                <strong style={{ color: '#374151' }}>⚡ Quick Response:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>
                  Professional customer service with fast quote turnaround
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '3rem 2rem 2rem',
        marginTop: '4rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <img 
                src={logo} 
                alt="Dot Shoulder Pad Company Logo" 
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
              <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Dot Shoulder Pad Company</h3>
            </div>
            <p style={{ 
              color: '#c0c0c0', 
              lineHeight: '1.6',
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              Premium Shoulder Pads Since 2012
            </p>
            <p style={{ color: '#c0c0c0', lineHeight: '1.6' }}>
              Your trusted partner in manufacturing excellence. Delivering quality products 
              and exceptional service worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#c0c0c0' }}>Contact Information</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📍</span>
                <span style={{ color: '#c0c0c0' }}>
                  207/3 Mirhazirbag, Dhaka - 1204, Bangladesh
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📞</span>
                <span style={{ color: '#c0c0c0' }}>+880 1712236938</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📧</span>
                <span style={{ color: '#c0c0c0' }}>zamirahmed@dotshoulderpad.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#c0c0c0' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Home', 'About Us', 'Products', 'Services', 'Contact Us'].map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: '#c0c0c0',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    fontSize: '0.95rem'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#c0c0c0'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#c0c0c0' }}>Connect With Us</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <a
                href="#"
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.3s',
                  color: '#c0c0c0'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.2)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.color = '#c0c0c0';
                }}
                title="LinkedIn"
              >
                💼
              </a>
              <a
                href="#"
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.3s',
                  color: '#c0c0c0'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.2)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.color = '#c0c0c0';
                }}
                title="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                style={{
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.3s',
                  color: '#c0c0c0'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.2)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.color = '#c0c0c0';
                }}
                title="Facebook"
              >
                📘
              </a>
            </div>
            
            {/* Newsletter Subscription */}
            <div>
              <h5 style={{ marginBottom: '0.5rem', color: '#c0c0c0', fontSize: '0.9rem' }}>
                Subscribe for updates on new products
              </h5>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    border: '1px solid #555',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '0.85rem'
                  }}
                />
                <button style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#c0c0c0',
                  color: '#2c3e50',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div style={{
          borderTop: '1px solid #555',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a
              href="#"
              style={{
                color: '#c0c0c0',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = 'white'}
              onMouseOut={(e) => e.target.style.color = '#c0c0c0'}
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              style={{
                color: '#c0c0c0',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = 'white'}
              onMouseOut={(e) => e.target.style.color = '#c0c0c0'}
            >
              Privacy Policy
            </a>
          </div>
          <p style={{ color: '#c0c0c0', fontSize: '0.9rem', margin: 0 }}>
            © 2025 Dot Shoulder Pad Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
