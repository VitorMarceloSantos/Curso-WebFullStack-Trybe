import React from 'react';
import logo from '../images/starWarsPlanetFull.png';

export default function Header() {
  return (
    <header className="container-header">
      <img src={ logo } alt="Imagem StarWars" className="img-logo-starWars" />
    </header>
  );
}
