import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import "./Products.css";

const Products = () => {
  const products = [
    {
      name: "Shoulder Pad for Overcoats & Jackets",
      details: "Nice texture and lightweight",
      type: "3-Layer Shoulder Pad",
      model: "SP01-0050",
      material: "100% Polyester Needle Punch",
      colors: "White / Black / Grey",
    },
    {
      name: "4-Layer Shoulder Pad for Jackets",
      details: "Soft, durable, and lightweight",
      type: "4-Layer Shoulder Pad",
      model: "SP01-0051",
      material: "100% Polyester Needle Punch",
      colors: "White / Black / Grey",
    },
    {
      name: "Foam Shoulder Pad Covered With Fabric",
      details: "Comfortable and flexible",
      type: "4-Layer Shoulder Pad",
      model: "SP-10",
      material: "100% Polyester Needle Punch & Fabric",
      colors: "White / Black / Grey",
    },
    {
      name: "Shoulder Pad for Heavy Overcoats",
      details: "Extra cushioning and support",
      type: "5-Layer Shoulder Pad",
      model: "SP-T11",
      material: "100% Polyester Needle Punch",
      colors: "White / Black / Grey",
    },
    {
      name: "3-Ply Shoulder Pad",
      details: "Lightweight with smooth texture",
      type: "3-Layer Shoulder Pad",
      model: "SP-11",
      material: "100% Polyester Needle Punch",
      colors: "White / Black / Grey",
    },
    {
      name: "Foam Shoulder Pad",
      details: "Soft and resilient",
      type: "4-Layer Shoulder Pad",
      model: "SP-T12",
      material: "100% Polyester Needle Punch & Foam",
      colors: "White / Black / Grey",
    },
    {
      name: "Different Style Foam Shoulder Pad",
      details: "Sleek, lightweight design",
      type: "3-Layer Shoulder Pad",
      model: "SP-NW01",
      material: "100% Polyester Needle Punch",
      colors: "White / Black / Grey",
    },
    {
      name: "Shoulder Pad with Tricot Fabric",
      details: "Smooth surface and comfort fit",
      type: "3-Layer Shoulder Pad",
      model: "J01-0050",
      material: "100% Polyester Needle Punch & Fabric",
      colors: "White / Black / Grey",
    },
    {
      name: "Shoulder Pad with Non-Woven Fabric",
      details: "Durable and soft texture",
      type: "3-Layer Shoulder Pad",
      model: "J01-0051",
      material: "100% Polyester Needle Punch & Non-Woven Fabric",
      colors: "White / Black / Grey",
    },
    {
      name: "Sleeve Roll for Overcoats & Jackets",
      details: "Lightweight and flexible",
      type: "Sleeve Roll",
      model: "SR-0010",
      material: "100% Polyester",
      colors: "White / Black / Grey",
    },
  ];

  return (
    <div className="products-page">
      <Navigation />

      <main className="products-main">
        <div className="products-hero">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Our Premium Product Collection
            </h1>
            <p className="products-hero-subtitle">
              Discover our extensive range of high-quality shoulder pads crafted
              with precision and excellence
            </p>
            <nav className="breadcrumb">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Products</span>
            </nav>
          </div>
        </div>

        <section className="products-content">
          <div className="products-container">
            <div className="products-header">
              <h2 className="products-title">Complete Product Catalog</h2>
              <p className="products-subtitle">
                Premium shoulder pads crafted with precision and quality for
                diverse applications across multiple industries
              </p>
            </div>

            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-content">
                    {/* Product Image Placeholder */}
                    <div className="product-image">
                      <div className="product-icon">🏷️</div>
                    </div>

                    {/* Product Details */}
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>

                      <div className="product-details">
                        <p className="product-quick-details">
                          <strong>Quick Details:</strong> {product.details}
                        </p>
                      </div>

                      <div className="product-specs">
                        <p className="product-spec">
                          <strong>Product Type:</strong> {product.type}
                        </p>
                        <p className="product-spec">
                          <strong>Model Number:</strong> {product.model}
                        </p>
                        <p className="product-spec">
                          <strong>Material:</strong> {product.material}
                        </p>
                        <p className="product-spec">
                          <strong>Colors:</strong> {product.colors}
                        </p>
                      </div>

                      <button className="product-inquiry-btn">
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Quote Request Section */}
            <div className="quote-section">
              <div className="quote-content">
                <h3 className="quote-title">Ready to Place an Order?</h3>
                <p className="quote-description">
                  Contact our sales team for detailed pricing, bulk discounts,
                  and custom manufacturing options. We offer flexible minimum
                  order quantities and worldwide shipping.
                </p>

                <div className="quote-benefits">
                  <div className="quote-benefit">
                    <span className="benefit-icon">⚡</span>
                    <div className="benefit-text">
                      <strong>24-Hour Response</strong>
                      <p>Get quotes within 24 hours</p>
                    </div>
                  </div>
                  <div className="quote-benefit">
                    <span className="benefit-icon">🚚</span>
                    <div className="benefit-text">
                      <strong>Global Shipping</strong>
                      <p>Worldwide delivery available</p>
                    </div>
                  </div>
                  <div className="quote-benefit">
                    <span className="benefit-icon">🏭</span>
                    <div className="benefit-text">
                      <strong>Bulk Discounts</strong>
                      <p>Competitive pricing for large orders</p>
                    </div>
                  </div>
                </div>

                <div className="quote-actions">
                  <Link to="/contact" className="quote-primary-btn">
                    Contact Sales Team
                  </Link>
                  <a href="tel:+8801712236938" className="quote-secondary-btn">
                    Call Now: +880 1712236938
                  </a>
                </div>

                <p className="quote-note">
                  All products are manufactured to ISO 9001:2015 standards with
                  quality guarantee
                </p>
              </div>
            </div>

            {/* Related Sections */}
            <div className="related-sections">
              <div className="related-section">
                <h3>Industries We Serve</h3>
                <p>Our products are trusted across multiple sectors</p>
                <Link to="/" className="related-link">
                  View Industries
                </Link>
              </div>
              <div className="related-section">
                <h3>Quality Assurance</h3>
                <p>Learn about our rigorous quality control processes</p>
                <Link to="/" className="related-link">
                  View Quality Standards
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
