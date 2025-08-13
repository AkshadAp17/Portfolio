import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="empty-cart">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
            Your cart is empty
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>
        Shopping Cart
      </h1>

      <div className="cart-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price}</p>
              
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  className="quantity-input"
                  min="1"
                />
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-danger btn-small"
              style={{ alignSelf: 'flex-start' }}
            >
              Remove
            </button>
          </div>
        ))}

        <div className="cart-summary">
          <div className="cart-total">
            <span>Total: ${getCartTotal()}</span>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Link to="/products" className="btn btn-outline">
              Continue Shopping
            </Link>
            <Link to="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;