const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
require('dotenv').config();

const sessionOptions = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    mongooseConnection: mongoose.connection,
    ttl: 14 * 24 * 60 * 60 
  }),
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000 
  }
});

module.exports = sessionOptions;

