import React, { useState } from 'react';
import logo from './Images/logo.png';

function App() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#1e3a8a',
        padding: '1rem 0',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <img 
              src={logo} 
              alt="Dot Shoulder Pad Company Logo" 
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white'
            }}>
              Dot Shoulder Pad Co.
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {['home', 'about', 'products', 'industries', 'certifications', 'clients', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s',
                  backgroundColor: activeSection === section ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.target.style.backgroundColor = activeSection === section ? 'rgba(255,255,255,0.2)' : 'transparent'}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        padding: '8rem 2rem 4rem',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Excellence in Manufacturing & Supply
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Your trusted partner for high-quality shoulder pads and sports equipment manufacturing. 
            Delivering excellence across industries with unmatched reliability and innovation.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#d97706';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#f59e0b';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Get a Quote
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
            color: '#1e3a8a',
            marginBottom: '1rem'
          }}>
            About Us
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Building trust through quality, innovation, and reliability since 1995
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Our History</h3>
            <p style={{ color: '#64748b' }}>
              Founded in 1995, we started as a small family business with a vision to provide 
              superior quality shoulder pads. Today, we're a leading manufacturer serving 
              clients across multiple industries worldwide.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ color: '#64748b' }}>
              To deliver exceptional manufacturing solutions that exceed customer expectations 
              while maintaining the highest standards of quality, innovation, and service excellence.
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: '#64748b' }}>
              To be the global leader in specialized manufacturing, recognized for our 
              innovation, reliability, and commitment to sustainable business practices.
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '1rem', textAlign: 'center' }}>Our Values</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {['Quality Excellence', 'Customer Focus', 'Innovation', 'Integrity', 'Sustainability'].map(value => (
              <div key={value} style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: '#f1f5f9',
                borderRadius: '8px'
              }}>
                <strong style={{ color: '#1e3a8a' }}>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section id="products" style={{
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
            Products & Services
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Comprehensive manufacturing solutions tailored to your industry needs
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              title: 'Sports Equipment',
              description: 'High-performance shoulder pads for football, hockey, and other contact sports.',
              image: '🏈'
            },
            {
              title: 'Protective Gear',
              description: 'Industrial safety equipment and protective padding for various applications.',
              image: '🛡️'
            },
            {
              title: 'Custom Manufacturing',
              description: 'Bespoke solutions designed to meet your specific requirements and specifications.',
              image: '⚙️'
            },
            {
              title: 'Quality Control',
              description: 'Rigorous testing and quality assurance processes to ensure product excellence.',
              image: '✅'
            },
            {
              title: 'Supply Chain Management',
              description: 'End-to-end logistics and inventory management for seamless operations.',
              image: '📦'
            },
            {
              title: 'Technical Support',
              description: 'Expert consultation and ongoing support for all your manufacturing needs.',
              image: '🔧'
            }
          ].map((product, index) => (
            <div key={index} style={{
              backgroundColor: '#f8fafc',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{product.image}</div>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>{product.title}</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{product.description}</p>
              <button style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                Learn More
              </button>
            </div>
          ))}
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

      {/* Certifications & Quality Section */}
      <section id="certifications" style={{
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
            Certifications & Quality
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Committed to the highest standards of quality and excellence
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>ISO 9001:2015</h3>
            <p style={{ color: '#64748b' }}>
              Certified quality management system ensuring consistent product quality and customer satisfaction.
            </p>
          </div>
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>ISO 14001:2015</h3>
            <p style={{ color: '#64748b' }}>
              Environmental management system demonstrating our commitment to sustainable practices.
            </p>
          </div>
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>OHSAS 18001</h3>
            <p style={{ color: '#64748b' }}>
              Occupational health and safety management system ensuring workplace safety standards.
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f1f5f9',
          padding: '2rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Quality Commitment</h3>
          <p style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
            Our commitment to quality extends beyond certifications. We implement rigorous testing protocols, 
            continuous improvement processes, and maintain strict quality control measures at every stage 
            of production to ensure that every product meets or exceeds industry standards.
          </p>
        </div>
      </section>

      {/* Clients/Partners Section */}
      <section id="clients" style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8fafc',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#1e3a8a',
            marginBottom: '1rem'
          }}>
            Trusted Partners
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Proud to serve industry leaders and growing businesses worldwide
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {[
            {
              company: 'SportsCorp International',
              testimonial: 'Exceptional quality and reliability. Dot Shoulder Pad Co. has been our trusted partner for over 10 years.',
              author: 'John Smith, CEO'
            },
            {
              company: 'SafetyFirst Industries',
              testimonial: 'Their attention to detail and commitment to quality is unmatched. Highly recommended for any manufacturing needs.',
              author: 'Sarah Johnson, Operations Director'
            },
            {
              company: 'Global Sports Equipment',
              testimonial: 'Professional service, competitive pricing, and products that exceed expectations every time.',
              author: 'Mike Chen, Procurement Manager'
            }
          ].map((client, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                fontSize: '2rem',
                color: '#1e3a8a',
                marginBottom: '1rem'
              }}>💼</div>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>{client.company}</h3>
              <p style={{ color: '#64748b', fontStyle: 'italic', marginBottom: '1rem' }}>
                "{client.testimonial}"
              </p>
              <p style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '0.9rem' }}>
                - {client.author}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Our Client Portfolio</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {['🏢', '🏭', '🏪', '🏬', '🏗️', '🚀'].map((icon, index) => (
              <div key={index} style={{
                fontSize: '2rem',
                padding: '1rem',
                backgroundColor: '#f1f5f9',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {icon}
              </div>
            ))}
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
                  123 Manufacturing Drive<br />
                  Industrial Park, IP 12345<br />
                  United States
                </p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#374151' }}>📞 Phone:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>+1 (555) 123-4567</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#374151' }}>📧 Email:</strong>
                <p style={{ color: '#64748b', margin: '0.5rem 0' }}>info@dotshoulderpad.com</p>
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

            {/* Google Maps Placeholder */}
            <div style={{
              backgroundColor: '#e5e7eb',
              height: '200px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              🗺️ Google Maps Integration
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1e3a8a',
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
              <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Dot Shoulder Pad Co.</h3>
            </div>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              Your trusted partner in manufacturing excellence. Delivering quality products 
              and exceptional service since 1995.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['About Us', 'Products', 'Industries', 'Contact'].map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#cbd5e1'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href="#"
                style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#cbd5e1'}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#cbd5e1'}
              >
                Terms & Conditions
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['📘', '🐦', '💼', '📷'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#cbd5e1'
        }}>
          <p>&copy; {currentYear} Dot Shoulder Pad Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
