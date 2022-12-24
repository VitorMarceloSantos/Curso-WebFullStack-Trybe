import express from 'express';
import userRoutes from './routes/userRouter';
// require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/users', userRoutes); // cria uma rota generica para acessar todoas as rotas de userRoutes

// const PORT = process.env.MYSQL_PORT;
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})