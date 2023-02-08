import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import '../styles/login.css';
import trybefi from '../images/trybefi.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nameUser: '',
      buttonValidation: true,
      isLoading: false,
    };
  }

  handleNameUser = ({ target: { value } }) => {
    this.setState({ nameUser: value }, () => {
      const { nameUser } = this.state;
      const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if (regexEmail.test(nameUser)) {
        this.setState({ buttonValidation: false }, () => {
          const buttonQuery = document.querySelector('.button-login');
          buttonQuery.style.backgroundColor = 'rgb(35, 35, 35)';
        });
      } else {
        this.setState({ buttonValidation: true }, () => {
          const buttonQuery = document.querySelector('.button-login');
          buttonQuery.style.backgroundColor = 'rgb(205, 205, 205)';
        });
      }
    });
  }

  handleSubmit= () => {
    const { nameUser } = this.state;
    const { changeButton } = this.props;
    // enquanto a função createUser é carregada, utiliza o loading
    this.setState({ isLoading: true }, async () => { // utiliza o async pois é uma função assincrona
      await createUser({ name: nameUser }); // espera a conclusão de createUser(Promise), para executar as demais
      // const { history } = this.props;
      this.setState({ isLoading: false }, () => {
        changeButton();
        // history.push('/index');
      });
    });
  }

  render() {
    const { buttonValidation, isLoading } = this.state;
    return (
      <div data-testid="page-login" className="container-main-login">
        { isLoading ? <Loading /> : (
          <div className="container-img-form">
            <img src={ trybefi } alt="Logo TrybeFi" />
            <form className="form-login">
              <div>
                <label htmlFor="login-name-input">
                  <input
                    type="text"
                    name="login-name-input"
                    data-testid="login-name-input"
                    onChange={ this.handleNameUser }
                  />
                </label>
              </div>
              <div>
                <button
                  disabled={ buttonValidation }
                  type="submit"
                  data-testid="login-submit-button"
                  onClick={ this.handleSubmit }
                  className="button-login"
                >
                  Entrar
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  changeButton: PropTypes.func.isRequired,
};

export default Login;
