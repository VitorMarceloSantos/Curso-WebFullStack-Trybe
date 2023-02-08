import React, { Component } from 'react';
import '../estilos/header-syle.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Frontend Online Store</h1>
        <img
          src="https://miro.medium.com/max/3150/1*_8rYOyJj9qiQsmeoVk3Gfg.png"
          alt="Logo da Trybe"
          className="logoTrybe"
        />
      </header>
    );
  }
}
