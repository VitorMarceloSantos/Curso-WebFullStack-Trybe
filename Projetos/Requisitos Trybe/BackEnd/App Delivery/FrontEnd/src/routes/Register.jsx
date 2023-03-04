import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // alterar a rota
import { validateNewUser } from '../validations/validateNewUser';
import '../css/Register.css';
import { requestPost } from '../services/request';
import logo from '../images/beer-house.png';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invisibleElement, setInvisibleElement] = useState(false);
  const navigate = useNavigate(); // instanciando para utilizar o navegate(alterar rota)

  const handleChange = ({ target: { name: nameTarget, value } }) => {
    switch (nameTarget) {
    case 'name':
      setName(value);
      break;
    case 'email':
      setEmail(value);
      break;
    case 'password':
      setPassword(value);
      break;
    default:
      console.log(`Sorry, we are out of ${nameTarget}`);
    }
    if (invisibleElement) setInvisibleElement(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // localStorage.setItem('user', JSON.stringify({ email }));
      // console.log('Login realizado com sucesso!');
      // Utilizando o axios não há necessidade de realizar o JSON.parse(), pois converte o json em objeto automaticamento na response
      const { status } = await requestPost('/register', { name, email, password }); // role pode ser null
      if (status) navigate('/customer/products'); // redirecionando para a página /products
    } catch (error) { // em caso do servidor retornar erro: 404, 409 ,...
      console.log(error);
      setInvisibleElement(true);
    }
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
    <section className="register-page">
      <section className="register-form">
        <div>
          <img src={ logo } alt="Beer Logo" className="img-logo-beer" />
        </div>
        <form>
          <label htmlFor="name">
            <p>Nome:</p>
            <input
              type="name"
              name="name"
              value={ name }
              onChange={ handleChange }
              placeholder="Nome"
              data-testid="common_register__input-name"
            />
          </label>
          <label htmlFor="email">
            <p>Email:</p>
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ handleChange }
              placeholder="example@example.com"
              data-testid="common_register__input-email"
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
              data-testid="common_register__input-password"
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
            className="submit-button"
            type="submit" // usar o prevent.default()
            data-testid="common_register__button-register"
            onClick={ handleSubmit }
            disabled={ !validateNewUser(name, email, password) } // cada caractere digitado, vai executar a função
          >
            Cadastrar
          </button>
        </form>
        {invisibleElement && (
          <section
            data-testid="common_register__element-invalid_register"
            className="element-invalid"
          >
            <p>
              Nome, E-mail ou Senha Inválidos
            </p>
          </section>
        )}
      </section>
    </section>
  );
}
