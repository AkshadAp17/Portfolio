import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getCart, addToCart as apiAddToCart, updateCartItem, removeFromCart as apiRemoveFromCart } from '../services/api';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Load cart when user changes
  useEffect(() => {
    if (user) {
      loadCart();
    } else {
      // Load from localStorage for guest users
      const guestCart = localStorage.getItem('guestCart');
      if (guestCart) {
        try {
          const cart = JSON.parse(guestCart);
          setCartItems(cart.items || []);
          setCartTotal(cart.total || 0);
        } catch (error) {
          console.error('Error loading guest cart:', error);
        }
      }
    }
  }, [user]);

  // Update localStorage for guest users
  useEffect(() => {
    if (!user) {
      localStorage.setItem('guestCart', JSON.stringify({
        items: cartItems,
        total: cartTotal
      }));
    }
  }, [cartItems, cartTotal, user]);

  const loadCart = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const response = await getCart(user.id);
      setCartItems(response.data.items || []);
      setCartTotal(response.data.total || 0);
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product, quantity = 1) => {
    try {
      if (user) {
        const response = await apiAddToCart(user.id, {
          productId: product.id,
          quantity,
          price: product.price,
          name: product.name,
          image: product.image
        });
        setCartItems(response.data.items);
        setCartTotal(response.data.total);
      } else {
        // Handle guest cart
        const existingItem = cartItems.find(item => item.productId === product.id);
        let newItems;
        
        if (existingItem) {
          newItems = cartItems.map(item =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + quantity, subtotal: (item.quantity + quantity) * item.price }
              : item
          );
        } else {
          newItems = [...cartItems, {
            productId: product.id,
            quantity,
            price: product.price,
            name: product.name,
            image: product.image,
            subtotal: product.price * quantity
          }];
        }
        
        const newTotal = newItems.reduce((total, item) => total + item.subtotal, 0);
        setCartItems(newItems);
        setCartTotal(newTotal);
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error adding to cart:', error);
      return { success: false, error: 'Failed to add item to cart' };
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      if (user) {
        const response = await updateCartItem(user.id, { productId, quantity });
        setCartItems(response.data.items);
        setCartTotal(response.data.total);
      } else {
        // Handle guest cart
        let newItems;
        if (quantity <= 0) {
          newItems = cartItems.filter(item => item.productId !== productId);
        } else {
          newItems = cartItems.map(item =>
            item.productId === productId
              ? { ...item, quantity, subtotal: quantity * item.price }
              : item
          );
        }
        
        const newTotal = newItems.reduce((total, item) => total + item.subtotal, 0);
        setCartItems(newItems);
        setCartTotal(newTotal);
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error updating cart:', error);
      return { success: false, error: 'Failed to update cart' };
    }
  };

  const removeFromCart = async (productId) => {
    try {
      if (user) {
        const response = await apiRemoveFromCart(user.id, productId);
        setCartItems(response.data.items);
        setCartTotal(response.data.total);
      } else {
        // Handle guest cart
        const newItems = cartItems.filter(item => item.productId !== productId);
        const newTotal = newItems.reduce((total, item) => total + item.subtotal, 0);
        setCartItems(newItems);
        setCartTotal(newTotal);
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error removing from cart:', error);
      return { success: false, error: 'Failed to remove item from cart' };
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
    if (!user) {
      localStorage.removeItem('guestCart');
    }
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    cartTotal,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartItemsCount,
    loadCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};