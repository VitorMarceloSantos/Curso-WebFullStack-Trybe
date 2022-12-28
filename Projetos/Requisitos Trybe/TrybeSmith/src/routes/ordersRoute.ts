import { Router } from 'express';
import getAllOrdersModel from '../controllers/ordersController';

const routers = Router();

routers.get('/', getAllOrdersModel); // adicionando novo produto

export default routers;