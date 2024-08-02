require('dotenv').config({ path: '../config/.env' });

const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/product');

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany(); // Clear existing data
    const products = [
      {
        name: 'Product 1',
        category: 'Category 1',
        description: 'Description for product 1',
        price: 100,
        image: 'https://www.picknpayclothing.co.za/older-girl-foil-printed-full-legging-946496',
      },
      {
        name: 'Product 2',
        category: 'Category 2',
        description: 'Description for product 2',
        price: 200,
        image: 'https://www.picknpayclothing.co.za/womens-rib-t-shirt-937053',
      },
      {
        name: 'Kids Game',
        type: 'play', 
        description: 'Comfortable and supportive Bag ',
        category: 'Toy',
        price: 800,
        image: 
'https://www.timelesstoys.co.za/collections/featured-toys-and-games/products/horse-club-friendship-tournament-by-schleich'
      },
      {
        name: 'Wonders book',
        type: 'play',
        description: 'KIds Anthropology Book ',
        category: 'Toy',
        price: 250,
        image: 
'https://www.timelesstoys.co.za/collections/featured-toys-and-games/products/dk-childrens-anthologies-the-wonders-of-nature'
      },
      
      {
        name: 'Yellow Track ',
        type: 'Toy',
        description: 'Boys yellow play truck',
        category: 'Toy',
        price: 700,
        image: 
'https://www.timelesstoys.co.za/collections/featured-toys-and-games/products/bruder-jcb-4cx-backhoe-loader-52cm-long'
      }
    ];
    await Product.insertMany(products);
    console.log('Products added!');
  } catch (err) {
    console.error(`Error seeding products: ${err.message}`);
  } finally {
    if (mongoose.connection.readyState) {
      mongoose.connection.close(); // Close the connection
    }
  }
};

seedProducts();
