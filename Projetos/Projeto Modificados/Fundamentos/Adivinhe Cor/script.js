let corSelecionada = ''; // vai receber a cor gerada aleatoriamente
let placar = 0; // irá marcar os pontos do usuário

function gerarCores() {
  const arrayCores = [];
  const divBall = document.querySelectorAll('.ball');
  const textResultado = document.querySelector('#answer');
  const corTitulo = document.querySelector('#title');

  
  for (let i = 0; i < 6; i += 1) {
    // eslint-disable-next-line max-len
    arrayCores.push([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
    // eslint-disable-next-line max-len
    divBall[i].style.backgroundColor = `rgb(${arrayCores[i][0]}, ${arrayCores[i][1]}, ${arrayCores[i][2]})`;
  }
  const corTexto = document.querySelector('#rgb-color');
  corSelecionada = divBall[Math.floor(Math.random() * 6)].style.backgroundColor; // cor selecionada vai receber uma cor aleatoria dentre as cores geradas para o arrayCores

  // eslint-disable-next-line prefer-destructuring
  corTexto.textContent = corSelecionada.split('rgb')[1]; // divide a corSeleciona em duas posições, imprimir a posicao[1] que contém o código da cor
  corTitulo.style.color = divBall[Math.floor(Math.random() * 6)].style.backgroundColor; // o titlo irá receber uma cor aleatoria entre as cores do arrayCores
  textResultado.textContent = 'Escolha uma cor';
  textResultado.style.color = divBall[Math.floor(Math.random() * 6)].style.backgroundColor; // o titlo irá receber uma cor aleatoria entre as cores do arrayCores
}

gerarCores(); // Chamando a função

// Função adicionar evento ball
function escolherCor(e) {
  const textResultado = document.querySelector('#answer');
  const scorePlacar = document.querySelector('#score');
  const temp = e.target.style.backgroundColor; // pega o estilo da div selecionada
  if (temp === corSelecionada) {
    textResultado.textContent = 'Acertou!';
    placar += 3;
    gerarCores();
    scorePlacar.textContent = placar; // irá atualizar o texto do placar
  } else {
    textResultado.textContent = 'Errou! Tente novamente!';
  }
}

// Adicionando o evento
const divBall = document.querySelectorAll('.ball');
for (let i = 0; i < divBall.length; i += 1) {
  divBall[i].addEventListener('click', escolherCor);
}

// Resetar Jogo
const btnReset = document.querySelector('#reset-game');
btnReset.addEventListener('click', () => {
  gerarCores();
});

//Resetar Placar
const btnPlacar = document.querySelector('#reiniciar-placar');
btnPlacar.addEventListener('click', () => {
  const scorePlacar = document.querySelector('#score');

  placar = 0; // zerando a variável placar
  scorePlacar.textContent = placar;
});
