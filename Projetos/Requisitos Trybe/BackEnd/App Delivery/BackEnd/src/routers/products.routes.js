const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateToken } = require('../jwt/validateToken');

const router = express.Router();

router.get('/products', validateToken, productsController.getAllProducts);
router.get('/products/:id', validateToken, productsController.getById);

// router.get('/products',  productsController.getAllProducts);
// router.get('/products/:id',  productsController.getById);

module.exports = router;