import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API calls
export const login = (email, password) => {
  return api.post('/api/auth/login', { email, password });
};

export const register = (userData) => {
  return api.post('/api/auth/register', userData);
};

// Product API calls
export const fetchProducts = (params = {}) => {
  return api.get('/api/products', { params }).then(response => response.data);
};

export const fetchProduct = (id) => {
  return api.get(`/api/products/${id}`).then(response => response.data);
};

export const fetchCategories = () => {
  return api.get('/api/products/categories').then(response => response.data);
};

// Cart API calls
export const getCart = (userId) => {
  return api.get(`/api/cart/${userId}`);
};

export const addToCart = (userId, itemData) => {
  return api.post(`/api/cart/${userId}/add`, itemData);
};

export const updateCartItem = (userId, itemData) => {
  return api.put(`/api/cart/${userId}/update`, itemData);
};

export const removeFromCart = (userId, productId) => {
  return api.delete(`/api/cart/${userId}/remove/${productId}`);
};

export const clearCart = (userId) => {
  return api.delete(`/api/cart/${userId}/clear`);
};

// Order API calls
export const createOrder = (orderData) => {
  return api.post('/api/orders', orderData);
};

export const fetchUserOrders = (userId) => {
  return api.get(`/api/orders/user/${userId}`);
};

export const fetchOrder = (orderId) => {
  return api.get(`/api/orders/${orderId}`);
};

// Payment API calls
export const createPaymentIntent = (amount, currency = 'usd') => {
  return api.post('/api/payment/create-payment-intent', { amount, currency });
};

export const confirmPayment = (paymentIntentId, orderId) => {
  return api.post('/api/payment/confirm-payment', { paymentIntentId, orderId });
};

export const getPaymentStatus = (paymentId) => {
  return api.get(`/api/payment/status/${paymentId}`);
};

export default api;