import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../services/api';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card'
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const orderData = {
        items: cartItems,
        total: getCartTotal(),
        shippingAddress: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode
        },
        contactInfo: {
          email: formData.email,
          phone: formData.phone
        },
        paymentMethod: formData.paymentMethod,
        userId: user?.id
      };

      await createOrder(orderData);
      clearCart();
      navigate('/order-success');
    } catch (error) {
      setErrors({ submit: error.message || 'Order failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="text-center">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
            Your cart is empty
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Add some products to your cart before checking out.
          </p>
          <button 
            onClick={() => navigate('/products')} 
            className="btn btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>
        Checkout
      </h1>

      <div className="grid grid-2">
        {/* Order Summary */}
        <div>
          <div className="cart-container">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Order Summary
            </h2>
            
            {cartItems.map((item) => (
              <div key={item.id} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '1rem 0', 
                borderBottom: '1px solid #e5e7eb' 
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'cover', 
                    borderRadius: '0.375rem', 
                    marginRight: '1rem' 
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>{item.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    Qty: {item.quantity} × ${item.price}
                  </p>
                </div>
                <div style={{ fontWeight: '600' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '0.5rem' 
              }}>
                <span>Subtotal:</span>
                <span>${getCartTotal()}</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '0.5rem' 
              }}>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="cart-total">
                <span>Total: ${getCartTotal()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div>
          <div className="form form-wide" style={{ margin: 0, maxWidth: 'none' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Shipping Information
            </h2>

            {errors.submit && (
              <div className="alert alert-error">
                {errors.submit}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="First name"
                  />
                  {errors.firstName && <div className="form-error">{errors.firstName}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Last name"
                  />
                  {errors.lastName && <div className="form-error">{errors.lastName}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Email address"
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Phone number"
                />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Street address"
                />
                {errors.address && <div className="form-error">{errors.address}</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="city" className="form-label">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="City"
                  />
                  {errors.city && <div className="form-error">{errors.city}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="state" className="form-label">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="State"
                  />
                  {errors.state && <div className="form-error">{errors.state}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="ZIP code"
                  />
                  {errors.zipCode && <div className="form-error">{errors.zipCode}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="select"
                >
                  <option value="card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash">Cash on Delivery</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full"
                style={{ marginTop: '1rem' }}
              >
                {isLoading ? 'Processing...' : `Place Order - $${getCartTotal()}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;