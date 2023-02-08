import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name-input"
            placeholder="Placeholder"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="ddescription-input"
            cols="30"
            rows="10"
            placeholder="Digite o texto aqui..."
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            name="cardRare"
            data-testid="rare-input"
            type="select"
            placeholder="Placeholder"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {/* Verificação condicional do hasTrufo, para verificar se já adicionado a carta Super Trunfo */}
        <label htmlFor="trunfo-input">
          { hasTrunfo === false ? <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            value="Super Trybe Trunfo"
          /> : 'Você já tem um Super Trunfo em seu baralho' }
        </label>
        <label htmlFor="save-button">
          <input
            type="button"
            data-testid="save-button"
            name="isSaveButtonDisabled"
            value="Salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
