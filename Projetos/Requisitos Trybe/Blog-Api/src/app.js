const express = require('express');

const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');
const { verifyLogin } = require('./middlewares/verifyLogin');
const { verifyUser } = require('./middlewares/verifyUser');
const { verifyToken } = require('./Tokens/jsonWebToken');
const { verifyCategory } = require('./middlewares/verifyCategory');
const { verifyPost } = require('./middlewares/verifyPost');

const app = express();

app.use(express.json());

// Users
app.get('/user', verifyToken, userController.getAllUsers);
app.get('/user/:id', verifyToken, userController.getUserId);

app.post('/user', verifyUser, userController.newUser);
app.post('/login', verifyLogin, userController.login);

// Categories
app.get('/categories', verifyToken, categoryController.getAllCategory);

app.post('/categories', verifyCategory, verifyToken, categoryController.addCategory);

// Posts
app.post('/post', verifyPost, verifyToken, postController.addPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
