const inputText = document.querySelector('#text-input');

function adicionarTexto() {
  const textoDigitado = document.querySelector('#text-input').value; // o texto é adicionado a medida que o usário o digita
  let memeText = document.querySelector('#meme-text');

  memeText.textContent = textoDigitado;
}

inputText.addEventListener('keyup', adicionarTexto);

function arquivoImagem(e) {
  const imagemAlterada = document.querySelector('#meme-image');
  
  imagemAlterada.style.display = 'block';
  imagemAlterada.setAttribute('src', URL.createObjectURL(e.target.files[0])); // o input file retorna uma lista(files[])
  // https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
  // https://developer.mozilla.org/pt-BR/docs/Web/API/File

  //Verifica se a imagem trybe logo está na tela, caso esteja ela é retirada
  const trybeImg = document.querySelector('#container-meme');
  if (trybeImg.childElementCount === 4) {
    const trybe = document.querySelector('#trybe-img');
    trybeImg.removeChild(trybe); // remove logo trybe
  }
}

const imageUser = document.querySelector('#meme-insert');
imageUser.addEventListener('change', arquivoImagem);

//const containerMeme = document.querySelector('#meme-image-container');

// const btnFire = document.querySelector('#fire');
// btnFire.addEventListener('click', () => {
//   // eslint-disable-next-line sonarjs/no-duplicate-string
//   if (containerMeme.classList.contains('class-water', 'class-earth', 'class-border')) {
//     containerMeme.classList.remove('class-water', 'class-earth', 'class-border');
//   }
//   // eslint-disable-next-line sonarjs/no-duplicate-string
//   containerMeme.classList.add('class-fire');
// });

// const btnWater = document.querySelector('#water');
// btnWater.addEventListener('click', () => {
//   if (containerMeme.classList.contains('class-fire', 'class-earth', 'class-border')) {
//     containerMeme.classList.remove('class-fire', 'class-earth', 'class-border');
//   }
//   containerMeme.classList.add('class-water');
// });

// const btnEarth = document.querySelector('#earth');
// btnEarth.addEventListener('click', () => {
//   if (containerMeme.classList.contains('class-fire', 'class-water', 'class-border')) {
//     containerMeme.classList.remove('class-fire', 'class-water', 'class-border');
//   }
//   containerMeme.classList.add('class-earth');
// });

//Função para Alterar a imagem
function alterarImagem(e) { // recebe o evento
  const imagemAlterada = document.querySelector('#meme-image');
  
  imagemAlterada.setAttribute('src', e.target.getAttribute('src')); // irá receber o caminho da imagem que está sendo clicada
  imagemAlterada.style.display = 'block'; // torna visivel a div -(style: block)
  
  //Verifica se a imagem trybe logo está na tela, caso esteja ela é retirada
  const trybeImg = document.querySelector('#container-meme');
  if (trybeImg.childElementCount === 4) {
    const trybe = document.querySelector('#trybe-img');
    trybeImg.removeChild(trybe); // remove logo trybe
  }
}

//Funções Imagens
const btnMeme = document.querySelectorAll('.imgs-miniatura'); // classe utilizada somente para selecionar todas as div img

for (let i = 0; i < btnMeme.length; i += 1) {
  btnMeme[i].addEventListener('click', alterarImagem);
}

//Função para Alterar a Borda
function alterarBorda(e) { // recebe o evento
  const imagemAlterada = document.querySelector('#border-image');
  
  imagemAlterada.setAttribute('src', e.target.getAttribute('src')); // irá receber o caminho da imagem que está sendo clicada
  imagemAlterada.style.display = 'block'; // torna visivel a div -(style: block)
  
  //Verifica se a imagem trybe logo está na tela, caso esteja ela é retirada
  const trybeImg = document.querySelector('#container-meme');
  if (trybeImg.childElementCount === 4) {
    const trybe = document.querySelector('#trybe-img');
    trybeImg.removeChild(trybe); // remove logo trybe
  }
}

// Funções Molduras
const btnBorder = document.querySelectorAll('.imgs-moldura');
for (let i = 0; i < btnBorder.length; i += 1) {
  btnBorder[i].addEventListener('click', alterarBorda);
}

//Função para Alterar a Texto
function alterarTexto(e) { // recebe o evento
  const imagemAlterada = document.querySelector('#text-image');
  
  imagemAlterada.setAttribute('src', e.target.getAttribute('src')); // irá receber o caminho da imagem que está sendo clicada
  imagemAlterada.style.display = 'block'; // torna visivel a div -(style: block)
  
  //Verifica se a imagem trybe logo está na tela, caso esteja ela é retirada
  const trybeImg = document.querySelector('#container-meme');
  if (trybeImg.childElementCount === 4) {
    const trybe = document.querySelector('#trybe-img');
    trybeImg.removeChild(trybe); // remove logo trybe
  }
}

// // Funções Texto
 const btnText = document.querySelectorAll('.imgs-preTexto');
 for (let i = 0; i < btnText.length; i += 1) {
  btnText[i].addEventListener('click', alterarTexto);
}

//Voltar e Avançar Miniaturas
//Avançar
const btnAvancar = document.querySelector('#btn_avancar');

btnAvancar.addEventListener('click', () => {

  const miniaturaImg = document.querySelectorAll('.imgs-miniatura');
  let arrayImage = [];
  arrayImage = miniaturaImg[0].getAttribute('src').split(''); // vai armazenar o camihho da imagem
  let temp = Number(arrayImage[9]); // convertendo string para Number // na posição 9 encontra o numero que diferencia uma imagem da outra (OBS: as imagens devem está no mesmo formata de nome, alterando apenas o algarismo. Ex: imgs/meme1.png, imgs/meme2.png, imgs/meme3.png ) 

  for (let i = 0; i < 4; i += 1) {
    if (temp === 8) { // volta para a primeira imagem (meme1)
      temp = 0;
    }
    miniaturaImg[i].setAttribute('src', 'imgs/meme' + (temp + 1) + '.png');
    temp += 1;
  }
});

//Votlar
const btnVoltar = document.querySelector('#btn_voltar');
btnVoltar.addEventListener('click', () => {
  const miniaturaImg = document.querySelectorAll('.imgs-miniatura');
  let arrayImage = [];
  arrayImage = miniaturaImg[3].getAttribute('src').split(''); // vai armazenar o camihho da imagem
  let temp = Number(arrayImage[9]); // convertendo string para Number // na posição 9 encontra o numero que diferencia uma imagem da outra (OBS: as imagens devem está no mesmo formata de nome, alterando apenas o algarismo. Ex: imgs/meme1.png, imgs/meme2.png, imgs/meme3.png ) 
  //console.log(temp)

  for (let i = 3; i >= 0; i -= 1) {
    if (temp === 1) { // volta para a ultima imagem (meme8)
      temp = 9;
    }
    miniaturaImg[i].setAttribute('src', 'imgs/meme' + (temp - 1) + '.png');
    temp -= 1;
  }
});

//Btn Reiniciar
const btnReiniciar = document.querySelector('#reiniciar'); // Refresh na pagina(reiniciar)
btnReiniciar.addEventListener('click', () => {
  location.reload();
});
