const { findAllId } = require('../../models/sales.model');

const verifyQuantity = async (sale) => { // array de objetos
  // PromisseAll -> retorna um array com a resolução de todas as promisses
  const promise = await Promise.all(sale
    .map(async ({ productId, _quantity }) => findAllId(productId)));
  // console.log(promise);
  for (let i = 0; i < promise.length; i += 1) {
    if (!promise[i]) {
      return { type: 404, message: 'Product not found' };
    }
    // const { quatity } = promise[i];
    // if (quatity < 1) { // verifica se o estoque do produto é maior que 0
    //   return { type: 404, message: 'Estoque insuficiente.' };
    // }
  }
  return true; // caso a validação seja verdadeira
};

module.exports = verifyQuantity;