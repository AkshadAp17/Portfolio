import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shippingAddress: {},
    billingAddress: {},
    paymentMethod: 'card'
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          {cartItems.map(item => (
            <div key={item.productId} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.subtotal.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between font-bold">
            <span>Total: ${cartTotal.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;