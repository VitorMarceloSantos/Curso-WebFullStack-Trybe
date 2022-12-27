import { Router } from 'express';
import * as usersController from '../controllers/usersController';

const routers = Router();

routers.post('/', usersController.default); // adicionando novo produto

export default routers;