const productService = require('../services/product.service');
const nameValidation = require('../middlewares/controller/nameValidation');

const listProducts = async (_req, res) => {
  const result = await productService.findAll();
  if (!result) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(result.message);
};

const listProductsId = async (req, res) => {
  const { id } = req.params;
  const result = await productService.findAllId(id);
  if (!result) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(result.message);
};

const addProducts = async (req, res) => {
  const { name } = req.body;
  // Validação
  const validation = nameValidation(name);
  if (validation) return res.status(validation.type).json({ message: validation.message });

  // Busca no banco de dados
  const result = await productService.addProducts({ name }); // transformando em objeto
  if (!result) return res.status(500).json({ message: 'Product not created' }); // validando retorno do banco de dados
  res.status(201).json({ id: result.message, name });
};

module.exports = { listProducts, listProductsId, addProducts };
// As chaves devem ser utilizadas nas exportações em todos os casos, até quando há apenas um elemento a ser exportado