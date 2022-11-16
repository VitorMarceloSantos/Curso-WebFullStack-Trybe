const salesModel = require('../models/sales.model');

const findAll = async () => {
  const result = await salesModel.findAll();
  if (result) return { type: null, message: result };
  return result; // case false
};

const addSales = async (sale) => {
  console.log(sale);
};

module.exports = { findAll, addSales };