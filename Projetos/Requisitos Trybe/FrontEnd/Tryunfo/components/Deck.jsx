import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  verifyArray = () => {
    const { arrayFilter, arraySave, filterValue, rareValue, trunfoValue } = this.props;
    const verify = ((rareValue !== 'todas')
    || (filterValue.length !== 0) || (trunfoValue === true)) ? arrayFilter : arraySave;
    return verify;
  }

  render() {
    const {
      deleteButton } = this.props;
    return (
      <div>
        {(this.verifyArray()).map((card) => (
          <div key={ card.cardName }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <div>
              <label htmlFor="delete-button">
                <input
                  type="button"
                  data-testid="delete-button"
                  name="delete-button"
                  id={ card.cardName }
                  value="Excluir"
                  onClick={ deleteButton }
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Deck.propTypes = {
  arraySave: PropTypes.arrayOf(PropTypes.object).isRequired,
  arrayFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteButton: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  rareValue: PropTypes.string.isRequired,
  trunfoValue: PropTypes.bool.isRequired,
};
export default Deck;
