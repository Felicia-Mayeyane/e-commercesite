const express = require('express');
const passport = require('passport');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');

// Initiate Google authentication
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// Google authentication callback
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirect to the homepage or dashboard after login
  }
);

// Handle login form submission
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).send('Login error');
      }
      return res.redirect('/'); // Redirect to the homepage or dashboard after login
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Signup route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).send('User already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ name, email, password: hashedPassword });
      await user.save();
      res.status(201).send('User registered');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

