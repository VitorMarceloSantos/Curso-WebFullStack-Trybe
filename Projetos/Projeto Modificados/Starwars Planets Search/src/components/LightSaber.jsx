import React from 'react';
import '../styles/lightSaber.css';
import saber from '../images/sabreluz.png';

export default function LightSaber() {
  return (
    <div className="container-light-saber">
      <div className="container-saber">
        <div className="handle">
          <img src={ saber } alt="Sabre de Luz" className="img-saber" />
        </div>
        <div className="laser" />
      </div>
    </div>
  );
}
