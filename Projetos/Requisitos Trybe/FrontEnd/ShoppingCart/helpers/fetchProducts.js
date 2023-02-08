// const defineProduct = (product) => {
//   const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
//   return URL;
// };

const fetchProducts = async (product) => {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const object = await result.json();
  return object;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
// fetchProducts('computador');
