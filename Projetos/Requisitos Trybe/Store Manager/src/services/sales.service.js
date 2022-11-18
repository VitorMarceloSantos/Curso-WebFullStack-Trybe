const salesModel = require('../models/sales.model');
const verifyQuantity = require('../middlewares/services/verifyQuantity');

const findAll = async () => {
  const result = await salesModel.findAll();
  if (result) return { type: null, message: result };
  return result; // case false
};

const findAllId = async (id) => {
  const result = await salesModel.findAllId(id);
 
  if (result) return { type: null, message: result };
  return result; // case false
};

const addSales = async (sale) => {
  const verify = await verifyQuantity(sale);
  if (verify === true) { // caso passe na validação
    const id = await salesModel.insertSale();
    await Promise.all(sale
      .map(async (object) => salesModel.addSales({ saleId: id, ...object })));
    return { type: 201, message: { id, itemsSold: sale } };
  }
  return verify; // em caso de a validação falhar
};

module.exports = { findAll, findAllId, addSales };