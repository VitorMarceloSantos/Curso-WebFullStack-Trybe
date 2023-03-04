import PropTypes from 'prop-types';

export default function Card(props) {
  const { product } = props;
  const { id, name, price, urlImage } = product;
  const CUSTOMER = 'customer_products';

  const handlerMinus = () => {
    console.log('Operador Menos');
  };

  const handlerPlus = () => {
    console.log('Operador Mais');
  };

  return (
    <div className="card">
      <div className="img-product-container">
        <img
          className="img-product"
          src={ urlImage }
          alt="Imagem Produto"
          data-testid={ `${CUSTOMER}__img-card-bg-image-${id}` }
        />
      </div>
      <div className="data-product-container">
        <h3
          data-testid={ `${CUSTOMER}__element-card-title-${id}` }
        >
          { name }
        </h3>
        <p
          data-testid={ `${CUSTOMER}__element-card-price-${id}` }
        >
          { price }
        </p>
      </div>
      <div className="options-values-container">
        <button
          className="buttonCard"
          type="button"
          onClick={ handlerMinus }
          data-testid={ `${CUSTOMER}__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          className="inputCard"
          min={ 0 }
          type="text"
          data-testid={ `${CUSTOMER}__input-card-quantity-${id}` }
        />
        <button
          className="buttonCard"
          type="button"
          onClick={ handlerPlus }
          data-testid={ `${CUSTOMER}__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,

};
