import express from 'express';
import userRoutes from './routes/userRouter';
import * as loginController from './controllers/loginController';
// require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/users', userRoutes); // cria uma rota generica para acessar todoas as rotas de userRoutes
app.post('/login', loginController.loginUser); // cria a rota login
// Para acessar o login, deve utilizar o post, pois necessita do body para enviar as informações
// O get não tem body

// const PORT = process.env.MYSQL_PORT;
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})