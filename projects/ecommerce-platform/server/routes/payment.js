const express = require('express');
const router = express.Router();

// Mock Stripe integration (would use real Stripe in production)
const mockStripePayment = (amount, currency = 'usd') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 'pi_' + Math.random().toString(36).substr(2, 9),
        amount: amount * 100, // Stripe uses cents
        currency,
        status: 'succeeded',
        created: Math.floor(Date.now() / 1000)
      });
    }, 1000);
  });
};

// Create payment intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    // Mock payment intent creation
    const paymentIntent = await mockStripePayment(amount, currency);

    res.json({
      clientSecret: `${paymentIntent.id}_secret_mock`,
      paymentIntent
    });
  } catch (error) {
    res.status(500).json({ error: 'Payment processing failed' });
  }
});

// Confirm payment
router.post('/confirm-payment', async (req, res) => {
  try {
    const { paymentIntentId, orderId } = req.body;

    // Mock payment confirmation
    const confirmedPayment = {
      id: paymentIntentId,
      status: 'succeeded',
      amount_received: Math.floor(Math.random() * 10000) + 1000,
      currency: 'usd',
      created: Math.floor(Date.now() / 1000)
    };

    res.json({
      success: true,
      payment: confirmedPayment,
      message: 'Payment processed successfully'
    });
  } catch (error) {
    res.status(500).json({ error: 'Payment confirmation failed' });
  }
});

// Get payment status
router.get('/status/:paymentId', (req, res) => {
  const paymentId = req.params.paymentId;
  
  // Mock payment status
  res.json({
    id: paymentId,
    status: 'succeeded',
    amount: Math.floor(Math.random() * 10000) + 1000,
    currency: 'usd',
    created: Math.floor(Date.now() / 1000)
  });
});

module.exports = router;