// Exercício - 01

// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {

//   const myObject = { // keys a serem utilizadas
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data =>
//       // console.log(data)
//        document.getElementById('jokeContainer').innerText = data.joke
//     );
// }

// window.onload = () => fetchJoke();

// Exercicio - 02

async function getCooins(quant) {
  const URL = 'https://api.coincap.io/v2/assets'; // endereço da API - cryptos
  const URLUsdBr = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'; // conversão dolar / real
  const lista = document.querySelector('#list-cooins');
  // Cryptos API
  const result = await fetch(URL);
  const object = await result.json();
  const { data } = object; // destructuring
  // Conversão API
  const resultConversao = await fetch(URLUsdBr);
  const objectCoversao = await resultConversao.json();
  const { USDBRL: {low} } = objectCoversao; // destructuring (pegando o o objeto(low) do objeto(USDBRL)) - low -> valor em reais

  (data.filter((cooin) => cooin.rank <= quant)) // o retorno vai ser um array de objetos
    .forEach((cooin) => {
      let newLine = document.createElement('li'); // criando li para adicionar a lista ordenada
      newLine.textContent = `Nome: ${cooin.name} (${cooin.symbol}): R$: ${(cooin.priceUsd * low).toLocaleString('pt-br', {minimumFractionDigits: 4})}.`; // alterando o texto da variável newLine
      lista.appendChild(newLine); // adicionando elemento a lista
  });
}
// Convertendo Moeda Brasileira
// var atual = 600000.00;
// com R$
// var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

// sem R$
// var f2 = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});

function searchCrypto() {
  const btnSearch = document.querySelector('#btn-search');

  btnSearch.addEventListener('click', () => {
    const quantCryptos = Number(document.getElementById('quant-crypto').value); // convertando de string para Number
    
    getCooins(quantCryptos);
  });
}

window.onload = () => {
  searchCrypto();
}
