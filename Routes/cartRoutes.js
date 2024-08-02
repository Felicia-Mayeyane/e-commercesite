const express = require('express');
const router = express.Router();

// Add item to cart
router.post('/add', (req, res) => {
  const { productId } = req.body;
  if (!req.session.cart) req.session.cart = [];
  req.session.cart.push(productId);
  res.json({ message: 'Product added to cart', cart: req.session.cart });
});

// Get cart items
router.get('/', (req, res) => {
  res.json({ cart: req.session.cart || [] });
});

module.exports = router;
