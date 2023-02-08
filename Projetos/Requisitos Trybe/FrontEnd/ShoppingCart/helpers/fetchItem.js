const fetchItem = async (product) => {
    const result = await fetch(`https://api.mercadolibre.com/items/${product}`);
    const object = await result.json();
    return object;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
// fetchItem('MLB1615760527');
