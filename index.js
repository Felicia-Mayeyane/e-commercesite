const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const session = require('./config/session');
const passport = require('passport');
require('./config/passport');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7000;

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'));
}

connectDB();

app.use(express.json());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

// Routes
app.use('/api/products', require('./Routes/productRoutes'));
app.use('/api/orders', require('./Routes/orderRoutes'));
app.use('/auth', require('./Routes/authRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
