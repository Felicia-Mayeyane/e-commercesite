const mongoose = require('mongoose');
const Product = require('./model/Product');
const connectDB = require('../config/db');


const seedDatabase = async () => {
  await connectDB();

  try {
    await Product.deleteMany();

    const products = [
      {
        name: "Ladies' Casual T-shirt",
        type: 'Clothing',
        description: 'Comfortable and stylish casual T-shirt for women',
        category:  'Clothing',
        price: 30,
        image: 
'https://www.picknpayclothing.co.za/womens-rib-t-shirt-937053'
      },
      {
        name: 'Leggings',
        type: 'Clothing', 
        description: 'Pink Girls Leggings',
        category: 'Girls',
        price: 50,
        image: 
'https://www.picknpayclothing.co.za/older-girl-foil-printed-full-legging-946496'
      },
      {
        name: "Hoodie",
        type: 'Clothing',
        description: 'StarWars boys t-shirt ',
        category:'Clothing',
        price: 40,
        image: 
'https://www.picknpayclothing.co.za/mens-star-wars-t-shirt-948343'
      },
      {
        name: 'Stuffy  Toy ',
        type: 'play', 
        description: 'High-quality Toy car for fun and adventure',
        category: 'Toy',
        price: 1200,
        image: 
'https://www.timelesstoys.co.za/collections/featured-toys-and-games/products/cordy-roy-fox-medium-by-jellycat'
      },
      {
        name: 'Play House',
        type: 'play',
        description: 'Play House for children',
        category:'Toy',
        price: 5000,
        image: 
'https://www.timelesstoys.co.za/collections/featured-toys-and-games/products/play-house-by-djeco'
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
    console.log('Database inserted successfully');
  } catch (error) {
    console.error('Dabase insert Error:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
