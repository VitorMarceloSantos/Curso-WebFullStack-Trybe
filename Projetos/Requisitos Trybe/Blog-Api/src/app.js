const express = require('express');

const userController = require('./controllers/userController');
const { verifyLogin } = require('./middlewares/verifyLogin');
const { verifyUser } = require('./middlewares/verifyUser');

const app = express();

app.use(express.json());
app.post('/login', verifyLogin, userController.login);
app.post('/user', verifyUser, userController.newUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
