const express = require('express');

const userController = require('./controllers/userController');
const { verifyLogin } = require('./middlewares/verifyLogin');
const { verifyUser } = require('./middlewares/verifyUser');
const { verifyToken } = require('./Tokens/jsonWebToken');

const app = express();

app.use(express.json());
app.get('/user', verifyToken, userController.getAllUsers);
app.post('/user', verifyUser, userController.newUser);
app.post('/login', verifyLogin, userController.login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
