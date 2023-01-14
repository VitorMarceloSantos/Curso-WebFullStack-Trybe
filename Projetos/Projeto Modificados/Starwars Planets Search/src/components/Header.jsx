import React from 'react';
import logo from '../images/starWarsPlanetFull.png';

export default function Header(props) {
  const { setVerifyIntro } = props;
  return (
    <header className="container-header">
      <button
        type="button"
        className="button-img"
        onClick={ () => { setVerifyIntro(false); } }
      >
        <img src={ logo } alt="Imagem StarWars" className="img-logo-starWars" />
      </button>

    </header>
  );
}
