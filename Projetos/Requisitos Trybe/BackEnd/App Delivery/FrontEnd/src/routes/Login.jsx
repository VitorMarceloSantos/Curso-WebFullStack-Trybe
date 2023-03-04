import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestPost } from '../services/request';
import { validateUser } from '../validations/validateUser';
import '../css/Login.css';
import logo from '../images/beer-house.png';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState({});
  const [password, setPassword] = useState('');
  const [invisibleElement, setInvisibleElement] = useState(false);
  const navigate = useNavigate(); // instanciando para utilizar o navegate(alterar rota)

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
    if (invisibleElement) setInvisibleElement(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Utilizando o axios não há necessidade de realizar o JSON.parse(), pois converte o json em objeto automaticamento na response
      // const { status, message } = await requestPost('/login', { email, password });
      await requestPost('/login', { email, password })
        .then((response) => {
        // handle success
          setStatus(response.status);
          setMessage(response.message);
        });
      if (status) {
        localStorage.setItem('user', JSON.stringify({ ...message }));
        navigate('/customer/products'); // redirecionando para a página /products
      }
    } catch (error) { // em caso do servidor retornar erro: 404, 409 ,...
      setInvisibleElement(true);
    }
  };

  const handleRegister = () => {
    navigate('/register'); // redirecionando para a página /register
  };

  const viewPassword = () => {
    const selectedPassword = document.querySelector('.input-password');
    if (selectedPassword.type === 'text') {
      selectedPassword.type = 'password';
    } else {
      selectedPassword.type = 'text';
    }
  };

  return (
    <section className="login-page">
      <section className="login-form">
        <div>
          <img src={ logo } alt="Beer Logo" className="img-logo-beer" />
        </div>
        <form>
          <label htmlFor="email">
            <p>Email:</p>
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ handleChange }
              placeholder="example@example.com"
              data-testid="common_login__input-email"
            />
          </label>
          <label htmlFor="password">
            <p>Password:</p>
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ handleChange }
              placeholder="******"
              data-testid="common_login__input-password"
              className="input-password"
            />
          </label>
          <div className="view-password">
            <input
              type="checkbox"
              name="view-password"
              id="view-password"
              className="input-view-password"
              onClick={ viewPassword }
            />
            Exibir Senha
          </div>
          <button
            className="submit-button-login"
            type="submit" // usar o prevent.default()
            data-testid="common_login__button-login"
            onClick={ handleSubmit }
            disabled={ !validateUser(email, password) } // cada caractere digitado, vai executar a função
          >
            Login
          </button>
          <button
            className="register-button"
            type="button"
            data-testid="common_login__button-register"
            onClick={ handleRegister }
          >
            Registrar
          </button>
        </form>
        {invisibleElement && (
          <section
            data-testid="common_login__element-invalid-email"
            className="element-invalid"
          >
            <p>
              E-mail ou Senha Inválidos
            </p>
          </section>
        )}
      </section>
    </section>
  );
}
