require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('1 - Teste a função fetchItem', () => {
  it('Testando função', () => {
    expect(typeof fetchItem).toBe('function');
  })
});

describe('2 - Teste se fetch foi chamada', () => {
  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async() => {
    // expect.assertions(1);
    await fetchItem('MLB1615760527'); // batendo no fetch
    expect(global.fetch).toBeCalled(); 
  });
});

describe('3 - Verificando o EndPoint:', () => {
  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";

    // expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(global.fetch).toBeCalledWith(url);
  });
});

describe('4 - Verificar retorna da Função.', () => {
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    // expect.assertions(1);
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
});

describe('5 - Verificar erro ao lançar parâmetro vazio.', () => {
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try{
      await fetchItem('MLB1615760527');
    }catch(error){
      expect(error).toEqual(new Error ('You must provide an url')); // comparando dois objetos
    }
  });
});