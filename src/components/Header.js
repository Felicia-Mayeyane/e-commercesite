import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ItemContext } from '../context/ItemContext';

const Header = () => {
  const { itemsInCart, totalPrice } = useContext(ItemContext);

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <h1 className='ecom'> Anaya MultiStore</h1>
      </div>
      <div className='navbar-items'>
        <h3 style={{ color: "purple" }}>Total Price: {totalPrice} R</h3>
        <div className='cart-num'>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <div className='cart-items'>{itemsInCart}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;


