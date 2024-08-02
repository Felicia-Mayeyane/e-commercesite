const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo'); // Import correctly
const passport = require('./config/passport');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db'); 

const app = express();

// Use .env file in config folder
require('dotenv').config({ path: './config/.env' });

const PORT = process.env.PORT || 9007;
const SESSION_SECRET = process.env.SESSION_SECRET;
const MONGO_URI = process.env.MONGO_URI;

// Connect To Database
connectDB();

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Configure session management
app.use(
  session({
    secret: SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URI, // Correctly pass mongoUrl
    }),
  })
);

// Routes
const authRoutes = require('./routes/auth'); 
app.use('/api/auth', authRoutes);
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);
const cartRoutes = require('./routes/cart'); 
app.use('/api/cart', cartRoutes);

// Serve the frontend application for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

module.exports = app;
