const express = require('express');
const router = express.Router();

// In-memory cart storage (would be database in production)
let carts = {};

// Get cart for user
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  const cart = carts[userId] || { items: [], total: 0 };
  res.json(cart);
});

// Add item to cart
router.post('/:userId/add', (req, res) => {
  const userId = req.params.userId;
  const { productId, quantity, price, name, image } = req.body;

  if (!carts[userId]) {
    carts[userId] = { items: [], total: 0 };
  }

  const existingItem = carts[userId].items.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    carts[userId].items.push({
      productId,
      quantity,
      price,
      name,
      image,
      subtotal: price * quantity
    });
  }

  // Recalculate total
  carts[userId].total = carts[userId].items.reduce((total, item) => {
    item.subtotal = item.price * item.quantity;
    return total + item.subtotal;
  }, 0);

  res.json(carts[userId]);
});

// Update item quantity
router.put('/:userId/update', (req, res) => {
  const userId = req.params.userId;
  const { productId, quantity } = req.body;

  if (!carts[userId]) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  const item = carts[userId].items.find(item => item.productId === productId);
  if (!item) {
    return res.status(404).json({ message: 'Item not found in cart' });
  }

  if (quantity <= 0) {
    carts[userId].items = carts[userId].items.filter(item => item.productId !== productId);
  } else {
    item.quantity = quantity;
    item.subtotal = item.price * quantity;
  }

  // Recalculate total
  carts[userId].total = carts[userId].items.reduce((total, item) => total + item.subtotal, 0);

  res.json(carts[userId]);
});

// Remove item from cart
router.delete('/:userId/remove/:productId', (req, res) => {
  const userId = req.params.userId;
  const productId = parseInt(req.params.productId);

  if (!carts[userId]) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  carts[userId].items = carts[userId].items.filter(item => item.productId !== productId);

  // Recalculate total
  carts[userId].total = carts[userId].items.reduce((total, item) => total + item.subtotal, 0);

  res.json(carts[userId]);
});

// Clear cart
router.delete('/:userId/clear', (req, res) => {
  const userId = req.params.userId;
  carts[userId] = { items: [], total: 0 };
  res.json(carts[userId]);
});

module.exports = router;