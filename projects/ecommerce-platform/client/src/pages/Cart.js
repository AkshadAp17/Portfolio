import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, loading } = useCart();
  const { user } = useAuth();

  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    await updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = async (productId) => {
    await removeFromCart(productId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading cart...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m7.6 0L9 2H7m0 11v6a1 1 0 001 1h8a1 1 0 001-1v-6M9 13h6" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          {/* Cart Items */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-4 py-6 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Cart Items ({cartItems.length})
                </h2>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.productId} className="py-6 flex">
                      <div className="flex-shrink-0">
                        <img
                          className="w-24 h-24 rounded-md object-cover"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to={`/products/${item.productId}`} className="hover:text-blue-600">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="ml-4">${item.subtotal.toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                        </div>

                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center">
                            <label htmlFor={`quantity-${item.productId}`} className="sr-only">
                              Quantity
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                                className="p-2 text-gray-400 hover:text-gray-600"
                                disabled={item.quantity <= 1}
                              >
                                <MinusIcon className="h-4 w-4" />
                              </button>
                              <span className="px-3 py-2 text-gray-900 min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                                className="p-2 text-gray-400 hover:text-gray-600"
                              >
                                <PlusIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(item.productId)}
                              className="font-medium text-red-600 hover:text-red-500 flex items-center"
                            >
                              <TrashIcon className="h-4 w-4 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-16 rounded-lg bg-white shadow-sm px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                <dd className="text-base font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Shipping</dt>
                <dd className="text-base font-medium text-gray-900">
                  {cartTotal >= 50 ? 'Free' : '$5.00'}
                </dd>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Tax</dt>
                <dd className="text-base font-medium text-gray-900">
                  ${(cartTotal * 0.08).toFixed(2)}
                </dd>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-lg font-medium text-gray-900">Total</dt>
                <dd className="text-lg font-medium text-gray-900">
                  ${(cartTotal + (cartTotal >= 50 ? 0 : 5) + cartTotal * 0.08).toFixed(2)}
                </dd>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {user ? (
                <Link
                  to="/checkout"
                  className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center block"
                >
                  Proceed to Checkout
                </Link>
              ) : (
                <Link
                  to="/login?redirect=/checkout"
                  className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center block"
                >
                  Sign in to Checkout
                </Link>
              )}
              
              <Link
                to="/products"
                className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center block"
              >
                Continue Shopping
              </Link>
            </div>

            {cartTotal < 50 && (
              <p className="mt-4 text-sm text-gray-500 text-center">
                Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;