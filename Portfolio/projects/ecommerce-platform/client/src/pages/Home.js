import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProducts } from '../services/api';

const Home = () => {
  const { data: featuredProducts, isLoading } = useQuery(
    ['products', { featured: true }],
    () => fetchProducts({ featured: true }),
    {
      staleTime: 10 * 60 * 1000, // 10 minutes
    }
  );

  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      icon: '💳',
      title: 'Easy Returns',
      description: '30-day hassle-free returns'
    },
    {
      icon: '🛍️',
      title: 'Quality Products',
      description: 'Carefully curated product selection'
    }
  ];

  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
      itemCount: '200+ items'
    },
    {
      name: 'Clothing',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      itemCount: '150+ items'
    },
    {
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      itemCount: '100+ items'
    },
    {
      name: 'Food',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
      itemCount: '80+ items'
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="text-center">
            <h1 className="fade-in">
              Shop the Best Products
            </h1>
            <p className="fade-in">
              Discover amazing products at unbeatable prices
            </p>
            <Link
              to="/products"
              className="btn btn-primary fade-in"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                padding: '1rem 2rem',
                fontSize: '1rem',
                marginTop: '1rem'
              }}
            >
              🛍️ Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center fade-in">
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '600', 
                  color: '#1f2937', 
                  marginBottom: '0.5rem' 
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#6b7280' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">Shop by Category</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="card scale-hover"
                style={{ 
                  position: 'relative', 
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="card-image"
                  style={{ height: '16rem' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'rgba(0, 0, 0, 0.4)',
                  transition: 'background 0.3s'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '1rem', 
                    left: '1rem', 
                    color: 'white' 
                  }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '600',
                      marginBottom: '0.25rem'
                    }}>
                      {category.name}
                    </h3>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      opacity: 0.9 
                    }}>
                      {category.itemCount}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">Featured Products</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>Our most popular items</p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="card" style={{ padding: '1rem' }}>
                  <div style={{ 
                    background: '#d1d5db', 
                    height: '12rem', 
                    borderRadius: '0.5rem', 
                    marginBottom: '1rem' 
                  }}></div>
                  <div style={{ 
                    background: '#d1d5db', 
                    height: '1rem', 
                    borderRadius: '0.25rem', 
                    marginBottom: '0.5rem' 
                  }}></div>
                  <div style={{ 
                    background: '#d1d5db', 
                    height: '1rem', 
                    borderRadius: '0.25rem', 
                    width: '75%' 
                  }}></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-4">
              {featuredProducts?.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="card scale-hover fade-in"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-image"
                  />
                  <div className="card-content">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-description" style={{ 
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="card-price">${product.price}</span>
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {product.stock} in stock
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="btn btn-primary"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                padding: '0.75rem 1.5rem',
                fontSize: '1rem'
              }}
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" style={{ 
        background: '#2563eb', 
        color: 'white' 
      }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              marginBottom: '1rem' 
            }}>
              Stay Updated
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              opacity: 0.9, 
              marginBottom: '2rem' 
            }}>
              Get the latest deals and new product announcements
            </p>
            <div style={{ 
              maxWidth: '28rem', 
              margin: '0 auto', 
              display: 'flex',
              borderRadius: '0.375rem',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
              <button 
                className="btn"
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#1d4ed8',
                  color: 'white',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.target.style.background = '#1e40af'}
                onMouseOut={(e) => e.target.style.background = '#1d4ed8'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;