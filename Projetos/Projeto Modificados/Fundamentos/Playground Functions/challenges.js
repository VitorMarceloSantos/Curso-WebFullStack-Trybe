// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return ((base * altura) / 2);
}

// Desafio 3
function splitSentence(string) {
  let arraySplit = string.split(' '); // Vai separar de acordo com os espaços entre as palavras
  return arraySplit;
}

// Desafio 4
function concatName(arrayString) {
  let array = [];
  for (let i = 0; i < arrayString.length; i += 1) {
    if ((i === 0) || (i === arrayString.length - 1)) {
      array.push(arrayString[i]);
    }
  }
  let arrayReverse = array.reverse(); // invertendo as posições
  return arrayReverse.join(', '); // Tem uma vírgula e um espaço
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = 0;
  for (let i = 0; i < wins; i += 1) {
    totalPontos += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    totalPontos += 1;
  }
  return totalPontos;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let contador = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] >= maior) {
      maior = numeros[i]; // armazena o maior número
    }
  }
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === maior) {
      contador += 1; // a cada repetição do número maior, o contador é incrementado em 1
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posCat1 = Math.abs(cat1 - mouse); // retorna a diferença absoluta das distancias
  let posCat2 = Math.abs(cat2 - mouse); // retorna a diferença absoluta das distancias
  if (posCat1 < posCat2) {
    return 'cat1';
  } if (posCat1 === posCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2'; // caso todas sejam invalídas vai retorna que o cat2 está mais próximo
}

// Desafio 8
function fizzBuzz(array) {
  let arrayDiv = []; // vai armzenar os resultados
  for (let i = 0; i < array.length; i += 1) {
    let div5 = false;
    let div3 = false;
    arrayDiv[i] = 'bug!'; // começa declarando este valor, para evitar realizar mais uma comparação
    if ((array[i] % 3) === 0) {
      div3 = true;
      arrayDiv[i] = 'fizz';
    }
    if ((array[i] % 5) === 0) {
      div5 = true;
      arrayDiv[i] = 'buzz';
    }
    if ((div3 === true) && (div5 === true)) {
      arrayDiv[i] = 'fizzBuzz';
    }
  }
  return arrayDiv;
}

// Desafio 9
function encode(string) {
  let stringArray = string.split(''); // cria um array da string
  for (let i = 0; i < stringArray.length; i += 1) {
    switch (stringArray[i]) { // vair abranger somente as letras minúsculas
    case 'a':
      stringArray[i] = 1;
      break;
    case 'e':
      stringArray[i] = 2;
      break;
    case 'i':
      stringArray[i] = 3;
      break;
    case 'o':
      stringArray[i] = 4;
      break;
    case 'u':
      stringArray[i] = 5;
      break;
    }
  }
  let stringRetorno = stringArray.join('');
  return stringRetorno;
}

function decode(string) {
  let stringArray2 = string.split(''); // cria um array da string
  for (let i = 0; i < stringArray2.length; i += 1) {
    switch (stringArray2[i]) { // vair abranger somente as letras minúsculas
    case '1':
      stringArray2[i] = 'a';
      break;
    case '2':
      stringArray2[i] = 'e';
      break;
    case '3':
      stringArray2[i] = 'i';
      break;
    case '4':
      stringArray2[i] = 'o';
      break;
    case '5':
      stringArray2[i] = 'u';
      break;
    }
  }
  let stringRetorno2 = stringArray2.join('');
  return stringRetorno2;
}
decode('h3 th2r2!')

// Desafio 10
function techList(array, string) {
  let arrayObject = [];
  let arrayOrdenado = array.sort(); // ordenando o array
  for (let i = 0; i < arrayOrdenado.length; i += 1) {
    arrayObject[i] = { tech: arrayOrdenado[i], name: string }; // criando o objeto
  }
  if (arrayObject.length !== 0) {
    return arrayObject;
  }
  return 'Vazio!';
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
