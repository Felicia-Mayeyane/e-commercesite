const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: false, 
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, 
  },
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
 
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;



