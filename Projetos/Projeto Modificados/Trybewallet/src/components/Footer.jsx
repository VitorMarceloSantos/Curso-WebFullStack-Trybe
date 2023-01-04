/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container-footer-global">
        <small className="desenvolvedor">
          &copy;Desenvolvido por Vitor Marcelo - Turma 23 - Tribo B
        </small>
        {/* <div className="icones">
          <a href="https://github.com/VitorMarceloSantos" target="_blank" rel="external noreferrer"><i className="fa-brands fa-github" /></a>
          <a href="https://www.linkedin.com/in/vitor-marcelo-santos/" target="_blank" rel="external noreferrer"><i className="fa-brands fa-linkedin" /></a>
          <a href="https://www.instagram.com/vitor_marcelo_santos/" target="_blank" rel="external noreferrer"><i className="fa-brands fa-instagram-square" /></a>
        </div> */}
      </div>

    );
  }
}

export default Footer;
