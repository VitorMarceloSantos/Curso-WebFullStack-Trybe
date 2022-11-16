const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

// Rotas de Products

router.get('/products', productController.listProducts);
router.get('/products/:id', productController.listProductsId);

router.post('/products', productController.addProducts);

module.exports = router;