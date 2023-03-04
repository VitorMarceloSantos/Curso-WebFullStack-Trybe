const { Product } = require('../database/models');

const findAll = async () => {
  const allProducts = await Product.findAll();

  return { status: 200, message: allProducts };
};

const findById = async (id) => {
  const oneProduct = await Product.findByPk(id);

  if (!oneProduct) {
    return { status: 404, message: 'Product not found' };
  }
  
  return { status: 200, message: oneProduct };
};

module.exports = {
  findAll,
  findById,
};