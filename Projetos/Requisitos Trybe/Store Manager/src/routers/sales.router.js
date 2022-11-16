const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

// Rotas de Sales

router.get('/sales', salesController.listSales);
// router.get('/products/:id', productController.listProductsId);

router.post('/sales', salesController.addSales);

module.exports = router;