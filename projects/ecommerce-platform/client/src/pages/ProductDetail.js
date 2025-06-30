import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProduct } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const { data: product, isLoading, error } = useQuery(
    ['product', id],
    () => fetchProduct(id)
  );

  const handleAddToCart = async () => {
    if (product) {
      const result = await addToCart(product, quantity);
      if (result.success) {
        alert(`${product.name} added to cart!`);
      }
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <Link to="/products" className="text-blue-600 hover:text-blue-800">
          ← Back to Products
        </Link>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <div className="flex flex-col-reverse">
          <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-center object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>

          <div className="mt-3">
            <p className="text-3xl text-gray-900">${product.price}</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-gray-700 space-y-6">
              <p>{product.description}</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-4">
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="max-w-full rounded-md border border-gray-300 py-1.5 px-3 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                {[...Array(Math.min(10, product.stock))].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-10 flex sm:flex-col1">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`max-w-xs flex-1 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-full ${
                product.stock > 0
                  ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          <section className="mt-8">
            <h3 className="text-sm font-medium text-gray-900">Details</h3>
            <div className="mt-4 prose prose-sm text-gray-500">
              <ul>
                <li>Category: {product.category}</li>
                <li>Stock: {product.stock} available</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;