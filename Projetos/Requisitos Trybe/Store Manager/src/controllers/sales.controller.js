const salesService = require('../services/sales.service');
const saleValidation = require('../middlewares/controller/saleValidation');

const listSales = async (_req, res) => {
  const result = await salesService.findAll();
  if (!result) return res.status(404).json({ message: 'Sales not found' });
  res.status(200).json(result.message);
};

const addSales = async (req, res) => {
  const sale = req.body;

  const validation = saleValidation(sale);
  if (validation) return res.status(validation.type).json({ message: validation.message });

  const result = salesService.addSales(sale); // passando um array de objetos
  console.log(result);
};

module.exports = { listSales, addSales };