const productsService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const { status, message } = await productsService.findAll();

  return res.status(status).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await productsService.findById(id);

  if (status === 404) {
    return res.status(status).json(message);
  }
  
  return res.status(status).json(message);
};

module.exports = {
  getAllProducts,
  getById,
};
