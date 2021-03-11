import React, { useContext } from 'react';

import { CartContext } from '../../context/cart/cart.provider';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const cart = useContext(CartContext);
  const { toggleHidden, cartItemsCount } = cart;
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;