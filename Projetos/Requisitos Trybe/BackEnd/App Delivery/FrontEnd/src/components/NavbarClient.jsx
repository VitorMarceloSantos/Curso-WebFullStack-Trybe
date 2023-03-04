import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // NavLink é um tipo especial de <Link>que sabe se está ou não "ativo".
import '../css/components/NavBarClient.css';
import { RxExit } from 'react-icons/rx';
import logo from '../images/beer-house.png';

export default function NavBarClient() {
  const activeStyle = {
    textShadow: '1px 1px 2px black',
    color: 'rgb( 242, 183, 5)', // altera o estilo do elemento seleiconado
  };
  const [name, setName] = useState('Default');

  useEffect(() => {
    function verifyLocalStorage() { // Verifica se existe o localStorage
      const storage = window.localStorage.user;
      if (storage) {
        const storageParse = JSON.parse(localStorage.getItem('user'));
        setName(storageParse.name);
      }
    }
    verifyLocalStorage();
  }, []);

  return (
    <header>
      <nav className="navBar-client">
        <div className="logo-container">
          <Link
            to="/login"
          >
            <img src={ logo } alt="Logo Imagem" className="img-beer" />
          </Link>
        </div>
        <div className="container-links">
          <NavLink
            data-testid="customer_products__element-navbar-link-products"
            to="/customer/products"
            className="space-elements elements-link"
            style={ ({ isActive }) => (isActive ? activeStyle : undefined) } // personalizando estilo
          >
            Produtos
          </NavLink>
          <NavLink
            data-testid="customer_products__element-navbar-link-orders
          12"
            to="/customer/orders"
            className="space-elements elements-link"
            style={ ({ isActive }) => (isActive ? activeStyle : undefined) } // personalizando estilo
          >
            Meus Pedidos
          </NavLink>
        </div>
        <div className="container-logout">
          <div
            className="user-container space-elements"
            data-testid="customer_products__element-navbar-user-full-name
13"
          >
            { name }
          </div>
          <Link // votlando a Home
            data-testid="customer_products__element-navbar-link-logout
          14"
            to="/login"
            className="space-elements"
          >
            <RxExit
              className="link-logout"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
