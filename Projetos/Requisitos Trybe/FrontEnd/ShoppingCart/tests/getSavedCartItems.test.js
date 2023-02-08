const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');


describe('1 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    // expect.assertions(1)
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
describe('2 - Teste a função getSaveCartItems', () => {
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () => {
    // expect.assertions(1)
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
 });
  
