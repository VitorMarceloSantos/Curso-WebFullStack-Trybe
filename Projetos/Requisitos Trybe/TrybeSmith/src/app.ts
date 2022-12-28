import express from 'express';
import productRoutes from './routes/productsRoute';
import userRoutes from './routes/usersRoute';
import orderRoutes from './routes/ordersRoute';
import * as usersController from './controllers/usersController';
import * as validates from './middlewares/validates';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

// Verificar Login
app.use('/login', validates.validateUser, usersController.verifyLogin);

export default app;
