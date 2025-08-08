import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ShopZone</h3>
            <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
              Your one-stop destination for quality products at unbeatable prices.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#d1d5db', fontSize: '1.25rem' }}>📘</a>
              <a href="#" style={{ color: '#d1d5db', fontSize: '1.25rem' }}>🐦</a>
              <a href="#" style={{ color: '#d1d5db', fontSize: '1.25rem' }}>📷</a>
              <a href="#" style={{ color: '#d1d5db', fontSize: '1.25rem' }}>💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/products?category=electronics">Electronics</Link></li>
              <li><Link to="/products?category=clothing">Clothing</Link></li>
              <li><Link to="/products?category=sports">Sports</Link></li>
              <li><Link to="/products?category=food">Food</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>FAQ</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Shipping Info</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 ShopZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;