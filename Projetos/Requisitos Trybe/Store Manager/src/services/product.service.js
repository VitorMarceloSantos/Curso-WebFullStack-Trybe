const productModel = require('../models/product.model');

const findAll = async () => {
  const result = await productModel.findAll();
  if (result) return { type: null, message: result };
  return result; // case false
};

const findAllId = async (id) => {
  const result = await productModel.findAllId(id);
  if (result) return { type: null, message: result };
  return result; // case false
};

const addProducts = async (name) => {
  const result = await productModel.addProducts(name);
  if (result) return { type: null, message: result };
  return false;
};

module.exports = { findAll, findAllId, addProducts };