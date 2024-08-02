const express = require('express');
const Cart = require('../models/cart'); // Ensure this model exists and is correctly set up
const router = express.Router();

// Get cart items
router.get('/', async (req, res) => {
  try {
    // Fetch items from the cart for the authenticated user
    const cartItems = await Cart.find({ userId: req.user._id });
    res.json(cartItems); // Return the cart items
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add item to cart
router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const existingCartItem = await Cart.findOne({ productId, userId: req.user._id });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      const newCartItem = new Cart({ productId, quantity, userId: req.user._id });
      await newCartItem.save();
    }

    // Fetch updated cart items and return them
    const cartItems = await Cart.find({ userId: req.user._id });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Remove item from cart
router.delete('/', async (req, res) => {
  try {
    const { productId } = req.body;
    await Cart.deleteOne({ productId, userId: req.user._id });

    // Fetch updated cart items and return them
    const cartItems = await Cart.find({ userId: req.user._id });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
