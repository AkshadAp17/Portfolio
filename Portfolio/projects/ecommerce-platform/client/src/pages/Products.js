import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProducts, fetchCategories } from '../services/api';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'name'
  });
  const [showFilters, setShowFilters] = useState(false);

  const { addToCart } = useCart();

  // Update filters when URL params change
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      search: searchParams.get('search') || '',
      category: searchParams.get('category') || ''
    }));
  }, [searchParams]);

  const { data: products = [], isLoading: productsLoading } = useQuery(
    ['products', filters],
    () => fetchProducts(filters),
    {
      keepPreviousData: true,
    }
  );

  const { data: categories = [] } = useQuery('categories', fetchCategories);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Update URL params
    const newParams = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v) newParams.set(k, v);
    });
    setSearchParams(newParams);
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
          Our Products
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
          Discover our amazing collection of products
        </p>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-title">Search</label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              placeholder="Search products..."
              className="form-input"
            />
          </div>

          <div className="filter-group">
            <label className="filter-title">Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="select"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-title">Min Price</label>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              placeholder="Min price"
              className="form-input"
            />
          </div>

          <div className="filter-group">
            <label className="filter-title">Max Price</label>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              placeholder="Max price"
              className="form-input"
            />
          </div>

          <div className="filter-group">
            <label className="filter-title">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="select"
            >
              <option value="name">Name</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {productsLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '2rem' 
          }}>
            <p style={{ color: '#6b7280' }}>
              {products.length} product{products.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center" style={{ padding: '4rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#6b7280' }}>
                No products found
              </h3>
              <p style={{ color: '#9ca3af' }}>
                Try adjusting your search criteria or browse all products.
              </p>
            </div>
          ) : (
            <div className="grid grid-3">
              {products.map((product) => (
                <div key={product.id} className="card fade-in">
                  <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-image"
                    />
                  </Link>
                  <div className="card-content">
                    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 className="card-title">{product.name}</h3>
                      <p className="card-description">{product.description}</p>
                    </Link>
                    <div className="flex justify-between items-center mb-4">
                      <span className="card-price">${product.price}</span>
                      <span className={`card-stock ${product.stock > 10 ? 'stock-high' : 'stock-low'}`}>
                        {product.stock} in stock
                      </span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary w-full"
                      disabled={product.stock === 0}
                    >
                      {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;