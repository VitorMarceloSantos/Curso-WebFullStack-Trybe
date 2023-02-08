import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../styles/cart.css';

export default class ButtonCart extends Component {
  render() {
    const { CartItemsList } = this.props;
    const recoveredObject = CartItemsList.length > 0
      ? CartItemsList : (JSON.parse(localStorage.getItem('CartItems')));
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/Carrinho"
        >
          <div className="container-item-cart-button">
            <AiOutlineShoppingCart
              className="icon-cart"
            />
          </div>
          <div className="border-number-items">
            <p
              className="number-items-cart"
              data-testid="shopping-cart-size"
            >
              {recoveredObject !== null
                ? recoveredObject.reduce((acc, current) => (
                  acc + current.quantidade), 0) : 0}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
ButtonCart.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
};
