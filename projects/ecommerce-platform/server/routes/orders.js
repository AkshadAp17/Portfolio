const express = require('express');
const router = express.Router();

// In-memory order storage (would be database in production)
let orders = [];
let orderIdCounter = 1;

// Create order
router.post('/', (req, res) => {
  const { userId, items, total, shippingAddress, billingAddress } = req.body;

  const newOrder = {
    id: orderIdCounter++,
    userId,
    items,
    total,
    shippingAddress,
    billingAddress,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Get orders for user
router.get('/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userOrders = orders.filter(order => order.userId === userId);
  res.json(userOrders);
});

// Get single order
router.get('/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const order = orders.find(o => o.id === orderId);
  
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  
  res.json(order);
});

// Update order status
router.put('/:orderId/status', (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const { status } = req.body;
  
  const order = orders.find(o => o.id === orderId);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  
  order.status = status;
  order.updatedAt = new Date();
  
  res.json(order);
});

// Get all orders (admin)
router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;