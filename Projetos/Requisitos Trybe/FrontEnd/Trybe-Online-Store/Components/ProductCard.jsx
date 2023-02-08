import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddItemCartButton from './AddItemCartButton';

export default class ProductCard extends Component {
  render() {
    const { path, product, handleClickAddCart } = this.props;
    const { price, title, thumbnail, id, shipping } = product;
    const freeShipping = shipping.free_shipping;
    return (
      <section>
        { freeShipping ? (
          <Link
            data-testid="product-detail-link"
            to={ `/Detalhes/${id}` }
          >
            <div data-testid="product">
              <h2>{title}</h2>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
            </div>
            <p data-testid="free-shipping">Free Shipping</p>
          </Link>
        ) : (
          <Link
            data-testid="product-detail-link"
            to={ `/Detalhes/${id}` }
          >
            <div data-testid="product">
              <h2>{title}</h2>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
            </div>
          </Link>
        )}
        <AddItemCartButton
          handleClickAddCart={ handleClickAddCart }
          path={ path }
          product={ product }
          // price={ price }
          // title={ title }
          // thumbnail={ thumbnail }
          // id={ id }
        />

      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  handleClickAddCart: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};
