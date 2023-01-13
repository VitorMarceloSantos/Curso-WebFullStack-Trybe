import React, { useEffect, useState } from 'react';
import '../styles/lightSaber.css';
import saber from '../images/sabreluz.png';

export default function LightSaber() {
  let [count, setCount] = useState(Number(0));
  const array = ['blue', 'green', 'yellow', 'red'];

  const addClassColor = () => {
    const divLaser = document.querySelector('.laser');
    if (count === 4) {
      setCount(count = 0);
    }
    divLaser.removeAttribute('class');
    divLaser.classList.add('laser', array[count], 'animation');
    setCount(count += 1);
  };
  useEffect(() => {
    // addClassColor();
    setInterval(() => {
      addClassColor();
    }, 2000);
  }, count);
  return (
    <div className="container-light-saber">
      <div className="container-saber">
        <div className="container-title">
          <h2 className="title-loading">Loading</h2>
        </div>
        <div className="handle">
          <img src={ saber } alt="Sabre de Luz" className="img-saber" />
        </div>
        <div className="laser red animation" />
        {console.log(count)}
      </div>
    </div>
  );
}
