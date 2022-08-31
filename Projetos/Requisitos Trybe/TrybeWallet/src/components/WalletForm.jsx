import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWalletAction, exchangeExpensesThunk } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
    };
  }

  async componentDidMount() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const coins = await response.json();
    const arrayKeys = Object.keys(coins);
    const arrayCurrencies = arrayKeys.filter((coin) => (
      coin !== 'USDT'
    ));
    const { dispatch } = this.props;
    dispatch(addWalletAction({ currencies: arrayCurrencies }));
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  saveExpenses = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { walletState } = this.props;
    this.setState({
      id: (walletState.expenses).length,
    }, () => {
      dispatch(exchangeExpensesThunk(this.state));
      this.setState({
        value: '',
        description: '',
      });
    });
  };

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag } = this.state;
    const { walletState } = this.props;
    return (
      <form className="container-description-expenses">
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          <select
            name="currency"
            id="currency"
            data-testid="currency-input"
            value={ currency }
            // defaultValue="BRL"
            onChange={ this.handleChange }
          >
            {(walletState.currencies).map((coin) => (
              <option key={ coin } value={ coin }>{`${coin}`}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          <select
            name="method"
            id="method"
            data-testid="method-input"
            value={ method }
            // defaultValue="Dinheiro"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            // defaultValue="Alimentação"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <input
          type="submit"
          value="Adicionar despesa"
          onClick={ this.saveExpenses }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  walletState: state.wallet,
});

export default connect(mapStateToProps, null)(WalletForm);

WalletForm.propTypes = {
  walletState: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
  // wallet: PropTypes.shape().isRequired,
};
