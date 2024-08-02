import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import { ItemContext } from '../context/ProductContext';

const ProductList = () => {
  const { setProducts, products } = useContext(ItemContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products. Please try again later.');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const handleSortByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  const handleFilterByPriceRange = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setSortedProducts(filtered);
  };

  const handleFilterByType = () => {
    if (selectedType === 'all') {
      setSortedProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.type === selectedType
      );
      setSortedProducts(filtered);
    }
  };

  return (
    <div className='prdt-list'>
      <h2>What's in Store</h2>
      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}
      <div className='filter-btn'>
        <button onClick={handleSortByPrice}>Sort by Price</button>
        <label>
          Min Price:
          <input
            type='number'
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Max Price:
          <input
            type='number'
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
        <button onClick={handleFilterByPriceRange}>Filter by Price Range</button>
        <label>
          Filter by Type:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Toys'>Toys</option>
          </select>
        </label>
        <button onClick={handleFilterByType}>Filter by Type</button>
      </div>

      <ul className='item-card'>
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </ul>
      <div className='buy-now-btn'>Buy Now</div>
    </div>
  );
};

export default ProductList;
