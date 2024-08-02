const express = require('express');
const router = express.Router();
const Order = require('../model/order');
const { ensureAuthenticated } = require('../middleware/auth');

// Fetch all orders
router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const orders = await Order.find().populate('user products');
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new order
router.post('/', ensureAuthenticated, async (req, res) => {
  try {
    const { user, products, totalAmount, status } = req.body;
    const newOrder = new Order({ user, products, totalAmount, status });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
