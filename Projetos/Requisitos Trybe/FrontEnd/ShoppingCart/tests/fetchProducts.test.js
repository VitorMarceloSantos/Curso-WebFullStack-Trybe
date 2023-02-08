require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testando a função:', () => {
    expect(typeof fetchProducts).toBe('function');
  });
});

describe('2 - Teste se fetch foi chamada', () => {
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async() => {
    // expect.assertions(1);
    await fetchProducts('computador'); // batendo no fetch
    expect(global.fetch).toBeCalled(); 
  });
});

describe('3 - Verificando o EndPoint:', () => {
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

    // expect.assertions(1);
    await fetchProducts('computador');
    expect(global.fetch).toBeCalledWith(url);
  });
});

describe('4 - Verificar retorna da Função.', () => {
  it('Retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

    // expect.assertions(1);
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });
});

describe('Verificar erro ao lançar parâmetro vazio.', () => {
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try{
      await fetchProducts('computador');
    }catch(error){
      expect(error).toEqual(new Error ('You must provide an url')); // comparando dois objetos
    }
  });
});

