import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <ProductProvider>
      <div className="App">
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default App;






