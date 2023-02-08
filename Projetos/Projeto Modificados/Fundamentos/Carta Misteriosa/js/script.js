//  const cartaTxt = document.querySelector('#carta-texto').value;
const btnCriar = document.querySelector('#criar-carta');

function adicionarClasse() {
  // eslint-disable-next-line max-len
  const arrayClasses = [['newspaper', 'magazine1', 'magazine2', 'magazine3', 'magazine4', 'magazine5'], ['medium', 'big', 'reallybig'], ['rotateleft', 'rotateright'], ['skewleft', 'skewright'],['letra1','letra2','letra3','letra4'],['upper', 'lower']];
  const classesEscolhidas = [];

  for (let i = 0; i < arrayClasses.length; i += 1) {
    classesEscolhidas.push(arrayClasses[i][Math.floor(Math.random() * arrayClasses[i].length)]);
  }
  classesEscolhidas.push('geral'); // adiciona a classe geral
  const classes = classesEscolhidas.join(' ');
  
  return classes;
}

function alterarClasse(e) { // evento
  e.target.className = adicionarClasse();
}

function contadorPalavras() {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const cartaTxt = document.querySelector('#carta-texto').value;
  const quantPalavras = document.querySelector('#carta-contador');
  let arrayTxt = []; // o array armazena uma palavra em cada posição
  let contador;

  arrayTxt = cartaTxt.split(' '); // a cada palavra vai separar uma posição no array
  // eslint-disable-next-line prefer-const
  contador = arrayTxt.length;
  quantPalavras.textContent = contador;
}

function criarCarta() {
  const cartaTxt = document.querySelector('#carta-texto').value;
  let cartaGerada = document.querySelector('#carta-gerada');
  let arrayTxt = []; // o array armazena uma palavra em cada posição

  arrayTxt = cartaTxt.split(' '); // a cada palavra vai separar uma posição no array
  cartaGerada.innerText = '';

  for (let i = 0; i < arrayTxt.length; i += 1) {
    const spanCarta = document.createElement('span');

    spanCarta.textContent = arrayTxt[i];
    spanCarta.className = adicionarClasse();
    spanCarta.addEventListener('click', alterarClasse);
    spanCarta.classList.add('geral'); // adiciona a classe geral para todas as palavras
    cartaGerada.appendChild(spanCarta);
    contadorPalavras();
  }
}

function verificarInput() {
  const cartaTxt = document.querySelector('#carta-texto').value;
  const cartaGerada = document.querySelector('#carta-gerada');

  if ((cartaTxt === '') || (cartaTxt === ' ')) {
    cartaGerada.textContent = 'Por favor, digite o conteúdo da carta.';
  } else {
    criarCarta();
  }
}

btnCriar.addEventListener('click', verificarInput);
