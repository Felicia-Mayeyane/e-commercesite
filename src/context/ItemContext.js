import React, { createContext, useState } from 'react';

// Create a context
export const ItemContext = createContext();

// Create a provider component
export const ItemProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Initialize products
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setItems((prevItems) => prevItems.filter(item => item._id !== product._id));
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const itemsInCart = items.length;

  return (
    <ItemContext.Provider value={{ products, setProducts, items, addToCart, removeFromCart, totalPrice, itemsInCart }}>
      {children}
    </ItemContext.Provider>
  );
};

