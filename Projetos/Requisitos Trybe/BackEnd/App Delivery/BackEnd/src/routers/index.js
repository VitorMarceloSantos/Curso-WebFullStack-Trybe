const express = require('express');

const router = express.Router();

const loginRouter = require('./login.routes');
const registerRouter = require('./register.routes');
const productsRouter = require('./products.routes');

// Exportanto as rotas
router.use(loginRouter);
router.use(registerRouter);
router.use(productsRouter);

module.exports = router;