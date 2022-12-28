import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import * as validates from '../middlewares/validates';

const routers = Router();

routers.get('/', productsController.getAllProducts);
routers.post('/', validates.validateProduct, productsController.newProduct); // adicionando novo produto

export default routers;