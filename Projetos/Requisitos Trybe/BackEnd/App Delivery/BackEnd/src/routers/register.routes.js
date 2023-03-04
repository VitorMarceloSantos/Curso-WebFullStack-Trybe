const express = require('express');
const { createUser } = require('../controllers/register.controller');
const { validateNewUser } = require('../middlewares/validations/validateNewUser');
const { verifyUser } = require('../middlewares/verifyUser');

const router = express.Router();

// Rotas Globais
// router.use(validateNewUser);

// Rotas Posts
router.post('/register', validateNewUser, verifyUser, createUser);

module.exports = router;