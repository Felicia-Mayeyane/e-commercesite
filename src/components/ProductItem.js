import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(ItemContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-details">
        <h3 style={{ fontWeight: "700" }}>{product.name}</h3>
        <p style={{ fontWeight: "300" }}>{product.description}</p>
        <p style={{ fontWeight: "500" }}>Price: {product.price} R</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleRemoveFromCart}>-</button>
      </div>
    </div>
  );
};

export default ProductItem;

