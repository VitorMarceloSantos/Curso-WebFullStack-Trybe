/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-max-depth */

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'; // https://react-chartjs-2.js.org/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addWalletAction } from '../redux/actions';
import '../styles/table.css';
import table from '../images/table.png';
// import graphic from '../images/graphic.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

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

  searchValue = (method, tag) => {
    console.log('metodo,tag', method, tag);
    const { walletState: { expenses } } = this.props;
    const value = expenses
      .filter((lines) => (lines.method === method && lines.tag === tag))
      .map((values) => Number((Number(values.value) * values
        .exchangeRates[values.currency].ask).toFixed(2)))
      .reduce((acc, current) => acc + current, 0);
    console.log('funcao', value);
    return value;
  };

  render() {
    const { walletState: { expenses } } = this.props;
    const labels = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Gráfico de Despesas',
        },
      },
    };
    // const test = (expenses.filter((lines) => lines.method === 'Dinheiro').value).reducer((acc, current) => {
    //   return acc + current;
    // }, 0);
    const data = {
      labels,
      datasets: [{
        label: 'Dinheiro',
        data: [this.searchValue('Dinheiro', 'Lazer'), 59, 80, 81, 56],
        backgroundColor: [
          'rgba(15, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgb(15, 192, 192)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Cartão de Crédito',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Cartão de Débito',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgb(255, 159, 64)',
        ],
        borderWidth: 1,
      }],
    };
    return (
      <section className="container-table">
        <div className="table-expenses">
          {console.log(expenses)}
          {console.log('Filter', (expenses.filter((lines) => (lines.method === 'Cartão de crédito' && lines.tag === 'Lazer')).map((values) => Number((Number(values.value) * values.exchangeRates[values.currency].ask).toFixed(2))).reduce((acc, current) => acc + current, 0)))}
          {/* .reducer((acc, current) => {
            return acc + current
          }, 0) */}
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
            {/* <img src={ graphic } alt="Table" className="imgs-dashboard" /> */}
            <Bar options={ options } data={ data } />
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
