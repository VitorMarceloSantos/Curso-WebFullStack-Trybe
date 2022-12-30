import { Router } from 'express';
import * as getAllOrders from '../controllers/ordersController';
import validateToken from '../token/validateToken';
import * as validate from '../middlewares/validates';

const routers = Router();

routers.get('/', getAllOrders.getAllOrders);
routers.post('/', validateToken, validate.validateOrder, getAllOrders.addOrder);

export default routers;