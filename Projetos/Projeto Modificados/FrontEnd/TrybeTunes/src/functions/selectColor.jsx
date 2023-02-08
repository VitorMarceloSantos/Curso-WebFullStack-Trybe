function randomNumber() {
  const NUMBER_QUANT = 5; // gera um número aleatoria de 0 a 4
  return Math.floor(Math.random() * NUMBER_QUANT);
}

function selectColor() {
  const arrayColor = [
    'linear-gradient(to bottom, rgb(92, 50, 51), rgba(0, 0, 0, 0.8))',
    'linear-gradient(to bottom, rgb(102, 77, 55),rgba(0, 0, 0, 0.8))',
    'linear-gradient(to bottom, rgb(74, 60, 83), rgba(0, 0, 0, 0.8))',
    'linear-gradient(to bottom, rgb(57, 79, 92), rgba(0, 0, 0, 0.8))',
    'linear-gradient(to bottom, rgb(74, 98, 85), rgba(0, 0, 0, 0.8))'];

  return arrayColor[randomNumber()];
}

export default selectColor;
