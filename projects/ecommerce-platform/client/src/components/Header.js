import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/products?category=all' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            ShopZone
          </Link>

          {/* Search Bar - Desktop */}
          <div style={{ 
            display: 'flex', 
            flex: 1, 
            maxWidth: '500px', 
            margin: '0 2rem',
            '@media (max-width: 768px)': { display: 'none' }
          }}>
            <form onSubmit={handleSearch} style={{ width: '100%' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="search-input"
                  style={{ paddingLeft: '2.5rem' }}
                />
                <span style={{ 
                  position: 'absolute', 
                  left: '0.75rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }}>🔍</span>
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav" style={{ 
            '@media (max-width: 768px)': { display: 'none' }
          }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="auth-buttons">
            {/* Cart */}
            <Link to="/cart" style={{ position: 'relative', padding: '0.5rem' }}>
              <span style={{ fontSize: '1.25rem' }}>🛒</span>
              {cartItemsCount > 0 && (
                <span className="cart-badge">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button 
                  className="btn btn-outline"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>👤</span>
                  <span style={{ '@media (max-width: 640px)': { display: 'none' } }}>
                    {user.name || user.username}
                  </span>
                </button>
                <div style={{ 
                  position: 'absolute', 
                  right: 0, 
                  marginTop: '0.5rem', 
                  width: '12rem', 
                  background: 'white', 
                  borderRadius: '0.375rem', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
                  padding: '0.25rem 0',
                  display: 'none',
                  zIndex: 50
                }} 
                className="user-dropdown">
                  <Link
                    to="/profile"
                    className="nav-link"
                    style={{ 
                      display: 'block', 
                      padding: '0.5rem 1rem', 
                      fontSize: '0.875rem' 
                    }}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="nav-link"
                    style={{ 
                      display: 'block', 
                      width: '100%', 
                      textAlign: 'left', 
                      padding: '0.5rem 1rem', 
                      fontSize: '0.875rem',
                      background: 'none',
                      border: 'none'
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-outline"
              style={{ 
                display: 'none',
                '@media (max-width: 768px)': { display: 'block' }
              }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div style={{ 
          paddingBottom: '1rem',
          '@media (min-width: 769px)': { display: 'none' }
        }}>
          <form onSubmit={handleSearch}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="search-input"
                style={{ paddingLeft: '2.5rem' }}
              />
              <span style={{ 
                position: 'absolute', 
                left: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#6b7280'
              }}>🔍</span>
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ 
            paddingBottom: '1rem',
            '@media (min-width: 769px)': { display: 'none' }
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .user-dropdown:hover,
        .user-dropdown:focus-within {
          display: block !important;
        }
        
        @media (max-width: 768px) {
          .nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        
        @media (min-width: 769px) {
          .mobile-search, .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;