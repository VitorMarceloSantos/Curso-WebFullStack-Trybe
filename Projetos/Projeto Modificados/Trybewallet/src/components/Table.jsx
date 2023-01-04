/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWalletAction } from '../redux/actions';
import '../styles/table.css';
import table from '../images/table.png';
import graphic from '../images/graphic.png';

class Table extends Component {
  buttonDelete = (id) => {
    const { walletState: { expenses } } = this.props;
    const expensesUpdate = expenses.filter((expense) => (expense.id !== id));
    const { dispatch } = this.props;
    dispatch(addWalletAction({ expenses: expensesUpdate })); // ao atulizar o estado global é realizado uma nova renderização
  };

  buttonEdit = (id) => {
    let { walletState: { editor, idToEdit } } = this.props;
    editor = true;
    idToEdit = id;
    const { dispatch } = this.props;
    dispatch(addWalletAction({ editor, idToEdit })); // ao atulizar o estado global é realizado uma nova renderização
  };

  render() {
    const { walletState: { expenses } } = this.props;
    return (
      <section className="container-table">
        <div className="table-expenses">
          {expenses.length > 0 ? (
            <table id="table-exp">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Tag</th>
                  <th>Método de pagamento</th>
                  <th>Valor</th>
                  <th>Moeda</th>
                  <th>Câmbio utilizado</th>
                  <th>Valor convertido</th>
                  <th>Moeda de conversão</th>
                  <th>Editar/Excluir</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map(({ id,
                  description,
                  tag,
                  method,
                  value,
                  exchangeRates,
                  currency,
                  // valueConverted,
                } = this.expenses) => (
                  <tr key={ id }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{(Number(value)).toFixed(2)}</td>
                    <td>{exchangeRates[currency].name}</td>
                    <td>{(Number(exchangeRates[currency].ask)).toFixed(2)}</td>
                    <td>{(Number(value) * exchangeRates[currency].ask).toFixed(2)}</td>
                    <td>Real</td>
                    <td>
                      <button
                        className="button-delete"
                        type="button"
                        value="delete"
                        data-testid="delete-btn"
                        onClick={ (event) => { this.buttonDelete(id, event); } }
                      >
                        Apagar
                      </button>
                      <button
                        className="button-edit"
                        type="button"
                        value="edit"
                        data-testid="edit-btn"
                        onClick={ (event) => { this.buttonEdit(id, event); } }
                      >
                        /Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="container-img-table">
              <img src={ table } alt="Table" className="imgs-dashboard" />
            </div>
          )}
        </div>

        <div className="container-graphics">
          <div className="container-img-graphics">
            <img src={ graphic } alt="Table" className="imgs-dashboard" />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  walletState: state.wallet,
});

Table.propTypes = {
  walletState: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    editor: PropTypes.bool.isRequired,
    idToEdit: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
