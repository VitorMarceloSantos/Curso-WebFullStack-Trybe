import { Router } from 'express';
import * as productsController from '../controllers/productsController';

const routers = Router();

routers.get('/', productsController.getAllProducts);
routers.post('/', productsController.newProduct); // adicionando novo produto

export default routers;