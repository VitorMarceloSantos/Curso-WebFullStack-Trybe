const inputText = document.querySelector('#text-input');

function adicionarTexto() {
  const textoDigitado = document.querySelector('#text-input').value;
  let memeText = document.querySelector('#meme-text');

  memeText.textContent = textoDigitado;
}

inputText.addEventListener('keyup', adicionarTexto);

function alterarImagem(e) {
  const imagemAlterada = document.querySelector('#meme-image');
 
  imagemAlterada.setAttribute('src', URL.createObjectURL(e.target.files[0])); // o input file retorna uma lista(files[])
  // https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
  // https://developer.mozilla.org/pt-BR/docs/Web/API/File

  console.log(URL.createObjectURL(e.target.files[0]))
}

const imageUser = document.querySelector('#meme-insert');
imageUser.addEventListener('change', alterarImagem);

const containerMeme = document.querySelector('#meme-image-container');

const btnFire = document.querySelector('#fire');
btnFire.addEventListener('click', () => {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  if (containerMeme.classList.contains('class-water', 'class-earth', 'class-border')) {
    containerMeme.classList.remove('class-water', 'class-earth', 'class-border');
  }
  // eslint-disable-next-line sonarjs/no-duplicate-string
  containerMeme.classList.add('class-fire');
});

const btnWater = document.querySelector('#water');
btnWater.addEventListener('click', () => {
  if (containerMeme.classList.contains('class-fire', 'class-earth', 'class-border')) {
    containerMeme.classList.remove('class-fire', 'class-earth', 'class-border');
  }
  containerMeme.classList.add('class-water');
});

const btnEarth = document.querySelector('#earth');
btnEarth.addEventListener('click', () => {
  if (containerMeme.classList.contains('class-fire', 'class-water', 'class-border')) {
    containerMeme.classList.remove('class-fire', 'class-water', 'class-border');
  }
  containerMeme.classList.add('class-earth');
});

const btnMeme1 = document.getElementById('meme-1');
btnMeme1.addEventListener('click', () => {
  const imagemAlterada = document.querySelector('#meme-image');
  imagemAlterada.setAttribute('src', 'imgs/meme1.png');
});

const btnMeme2 = document.getElementById('meme-2');
btnMeme2.addEventListener('click', () => {
  const imagemAlterada = document.querySelector('#meme-image');
  imagemAlterada.setAttribute('src', 'imgs/meme2.png');
});

const btnMeme3 = document.getElementById('meme-3');
btnMeme3.addEventListener('click', () => {
  const imagemAlterada = document.querySelector('#meme-image');
  imagemAlterada.setAttribute('src', 'imgs/meme3.png');
});

const btnMeme4 = document.getElementById('meme-4');
btnMeme4.addEventListener('click', () => {
  const imagemAlterada = document.querySelector('#meme-image');
  imagemAlterada.setAttribute('src', 'imgs/meme4.png');
});
