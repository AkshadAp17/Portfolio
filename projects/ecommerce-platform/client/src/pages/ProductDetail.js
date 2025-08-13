import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProduct } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { data: product, isLoading, error } = useQuery(
    ['product', id],
    () => fetchProduct(id),
    {
      enabled: !!id,
    }
  );

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
  };

  if (isLoading) {
    return (
      <div className="loading" style={{ minHeight: '60vh' }}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="text-center">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#6b7280' }}>
            Product not found
          </h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
            The product you're looking for doesn't exist or has been removed.
          </p>
          <button 
            onClick={() => navigate('/products')} 
            className="btn btn-primary"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <button 
        onClick={() => navigate(-1)} 
        className="btn btn-outline mb-4"
        style={{ marginBottom: '2rem' }}
      >
        ← Back
      </button>

      <div className="product-detail">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="product-image-large"
          />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-price-large">${product.price}</div>
          
          <div style={{ marginBottom: '1rem' }}>
            <span className={`card-stock ${product.stock > 10 ? 'stock-high' : 'stock-low'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <div className="product-description">
            {product.description}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Product Details
            </h3>
            <ul style={{ color: '#6b7280', paddingLeft: '1.25rem' }}>
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand || 'ShopZone'}</li>
              <li>SKU: {product.id}</li>
              {product.features && product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '200px' }}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            
            <button 
              onClick={() => {
                handleAddToCart();
                navigate('/cart');
              }}
              disabled={product.stock === 0}
              className="btn btn-outline"
              style={{ flex: 1, minWidth: '200px' }}
            >
              Buy Now
            </button>
          </div>

          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '0.5rem' 
          }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              🚚 Free Shipping
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Free shipping on orders over $50
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;