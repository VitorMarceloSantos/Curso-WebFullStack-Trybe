const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

// Rotas de Sales

router.get('/sales', salesController.listSales);
router.get('/sales/:id', salesController.listSalesId);

router.post('/sales', salesController.addSales);

router.delete('/sales/:id', salesController.deleteSales);

module.exports = router;