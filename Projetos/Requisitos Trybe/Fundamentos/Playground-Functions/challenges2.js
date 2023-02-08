// Desafio 11
function generatePhoneNumber(array) {
  let arrayDdd = [];
  let arrayPrimeiro = [];
  let arraySegundo = [];
  if (array.length === 11) {
    for (let i = 0; i < array.length; i += 1) {
      if (i < 2){
        arrayDdd.push(array[i]);
      }else if ((i >= 2) && (i < 7)){
        arrayPrimeiro.push(array[i]);
      }else {
        arraySegundo.push(array[i]);
      }
      if ((array[i] < 0) || (array[i] > 9)) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      let contador = 0;
      for (let j = 0; j < array.length - 1; j +=1){
        if (array[i] === array[j + 1]){
          contador += 1;
        }
        if (contador >= 3){
          return 'não é possível gerar um número de telefone com esses valores'
        }
      }
    }
  } else {
    return 'Array com tamanho incorreto.';
  }
  return `(${arrayDdd.join('')}) ${arrayPrimeiro.join('')}-${arraySegundo.join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let arrayLine = [lineA, lineB, lineC];
  let soma = 0;
  for (let i = 0; i < arrayLine.length; i += 1){
    soma += arrayLine[i]; // vai receber a soma de todos os valores do array
  }
  for (let i = 0; i < arrayLine.length; i += 1){
    let verifica = true;
    if(arrayLine[i] > (soma - arrayLine[i])){ // verifica se o arrayLine[i] é menor que a soma dos dois lados
      verifica = false;
    }
    if ((i = 0) && ((Math.abs(arrayLine[1] - arrayLine[2])) > arrayLine[0])){ // verifica se é maior que o modulo da diferença dos dois valores
      verifica = false;
    }else if ((i = 1) && ((Math.abs(arrayLine[0] - arrayLine[2])) > arrayLine[1])){ // verifica se é maior que o modulo da diferença dos dois valores
      verifica = false;
    } else if ((i = 2) && ((Math.abs(arrayLine[0] - arrayLine[1])) > arrayLine[2])){ // verifica se é maior que o modulo da diferença dos dois valores
      verifica = false;
    }
    if (verifica === true){
      return true;
    }
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let soma = 0;
  let numeros = [];
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    switch (array[i]) {
      case '1':
      numeros.push(array[i]);
      break;
      case '2':
      numeros.push(array[i]);
      break;
      case '3':
      numeros.push(array[i]);
      break;
      case '4':
      numeros.push(array[i]);
      break;
      case '5':
      numeros.push(array[i]);
      break;
      case '6':
      numeros.push(array[i]);
      break;
      case '7':
      numeros.push(array[i]);
      break;
      case '8':
      numeros.push(array[i]);
      break;
      case '9':
      numeros.push(array[i]);
      break;
    }
  }
  for (let i = 0; i < numeros.length; i += 1){
    soma += Number(numeros[i]);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
