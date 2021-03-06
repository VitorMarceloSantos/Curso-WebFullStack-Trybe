// Exercicios - 8.4
// Exercicio - 01
// Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// const functReduce = (arrays) => {
//   return arrays.reduce((acc, curr) => {
//     return acc.concat(curr); // o método concat, retorna um novo array contendo os elementos passados novo array = elemento1.concat(elemento2);
//   }, []);
// }

// const functReduce = (arrays) => { // Utilizando a HOF Map()
//   return arrays.map((element) => {
//     return element;
//   }).reduce((acc, curr) => {
//     return acc.concat(curr); // o método concat, retorna um novo array contendo os elementos passados novo array = elemento1.concat(elemento2);
//   }, []);
// }

const functReduce = arrays  // Utilizando a HOF Map()    Reduzindo a escrita das HOF, é executada na ordem que aparece(1° Map, 2° reduce)
        .map((element) => element) // o retorno de map será utilizado pelo reduce
        .reduce((acc, curr) => acc.concat(curr)); // o método concat, retorna um novo array contendo os elementos passados novo array = elemento1.concat(elemento2);

console.log(functReduce);

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercicio - 02
// Crie uma string com os nomes de todas as pessoas autoras.

// const functNome = (books) => {
//   return books.reduce((acc, curr, index) => { // O reduce tem dois parâmetros(callback, valor incial), o callback pode ter 4 parâmetros: (acc, curr, index, array)
//     return index !== 5 ? `${acc} ${curr.author.name},` : `${acc} ${curr.author.name}.`; // adiciona virgula na primeira condição e ponto final na segunda condição.
//   }, '').trim();
// }
//console.log(functNome(books));

// Forma Reduzida
const functNome = books.reduce((acc, curr, index) =>  index !== 5 ? `${acc} ${curr.author.name},` : `${acc} ${curr.author.name}.`, '').trim(); // O reduce tem dois parâmetros(callback, valor incial), o callback pode ter 4 parâmetros: (acc, curr, index, array) // adiciona virgula na primeira condição e ponto final na segunda condição. // trim(), remove os espaços em branco no inicio e no fim da string.
console.log(functNome);

// Exercicio - 03
// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const functMedia = (books) => {
//   return books.reduce((acc, curr, index) => { // acc-acumulador, curr-elemento, index-posição elemento
//     return (Object.keys(books).length - 1) === index ? (acc + (curr.releaseYear - curr.author.birthYear)) / Object.keys(books).length : (acc + (curr.releaseYear - curr.author.birthYear)); 
//   }, 0);
// }
// console.log(`A média das idades quando o livros foram lançado é de: ${functMedia(books)}.`);

//Forma Reduzida
const functMedia = books.reduce((acc, curr, index) => (Object.keys(books).length - 1) === index ? (acc + (curr.releaseYear - curr.author.birthYear)) / Object.keys(books).length : (acc + (curr.releaseYear - curr.author.birthYear)), 0); // acc-acumulador, curr-elemento, index-posição elemento

console.log(`A média das idades quando o livros foram lançado é de: ${functMedia}.`);

// Exercicio - 04
// Encontre o livro com o maior nome.

const functMaiorNome = (books) => {
 return books.reduce((acc, curr) => {
  if (acc.name.length > curr.name.length) {
    return acc;
  } 
  return curr;
  }); // nesse caso não há valor inicial, pois o valor inicial será o a posição 0 do array books, que é o primeiro objeto. Sendo assim o valor acc receberá o elemento na primeira posição do array books.
}
//console.log(`O livro com o maior nome é: ${functMaiorNome(books).name}`); // retorna o nome do livro
console.log(functMaiorNome(books));

// Exercicio - 05
// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const functQuantLetra = (names) => {
//   return names.reduce((acc, curr) => {
//     return acc + curr.toLowerCase().split(''); // transformar em um array de string(split) e transformar todas as letras minusculas(toLowerCAse)
//   },'').reduce((acumula, elemento) => {
//     return elemento === 'a' ? acumula + 1 : acumula; // se for a letra o acumulador vai receber o valor de 1, e caso contrário não vai receber valor(apenas retorna seu valor acumulado)
//   }, 0); // acumula começa com 0
// }
//console.log(functQuantLetra(names));

const functQuantLetra = names 
  .reduce((acc, curr) => acc + curr.toLowerCase().split('') // transformar em um array de string(split) e transformar todas as letras minusculas(toLowerCAse)
  .reduce((acumula, elemento) => {
    console.log(acumula)
    if (elemento === 'a') {
      return acumula + 1;
    }
    return acumula;
  }, 0),''); // se for a letra o acumulador vai receber o valor de 1, e caso contrário não vai receber valor(apenas retorna seu valor acumulado) // acumula começa com 0
  console.log(functQuantLetra);


