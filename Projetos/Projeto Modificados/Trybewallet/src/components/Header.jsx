import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaMoneyBillWave } from 'react-icons/fa';
import '../styles/header.css';

class Header extends Component {
  render() {
    const { userState, walletState } = this.props;
    return (
      <div className="container-header">
        <div className="container-logo">
          <FaMoneyBillWave className="icon-money" />
          <h1>DashBoard - TrybeWallet</h1>
        </div>
        <section className="container-login">
          <p data-testid="email-field">
            Email:
            {`${userState.email}`}
          </p>
        </section>
        <section className="container-expenses">
          <div className="container-expenses-total">
            <p>Despesa Total:</p>
            <p data-testid="total-field">
              { (walletState.expenses).length === 0 ? (0).toFixed(2) : (
                ((walletState.expenses)
                  .reduce((acc, current) => acc + (current.value * (Number(
                    current.exchangeRates[current.currency].ask,
                  ))), 0)).toFixed(2)
              )}
            </p>
          </div>
          <div className="container-coin-header">
            <p data-testid="header-currency-field">
              BRL
            </p>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.user,
  walletState: state.wallet,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userState: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  walletState: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
};
