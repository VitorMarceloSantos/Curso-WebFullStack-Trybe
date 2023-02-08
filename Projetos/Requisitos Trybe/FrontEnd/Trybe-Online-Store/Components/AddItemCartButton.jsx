import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class AddItemCartButton extends Component {
  render() {
    const { path, handleClickAddCart, product } = this.props;
    // price, title, thumbnail, id
    return (
      <button
        className="add-item-cart-button"
        data-testid={ path.includes('Detalhes')
          ? 'product-detail-add-to-cart' : 'product-add-to-cart' }
        type="button"
        onClick={
          () => handleClickAddCart(product)
        }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddItemCartButton.propTypes = {
  product: PropTypes.arrayOf({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClickAddCart: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};
