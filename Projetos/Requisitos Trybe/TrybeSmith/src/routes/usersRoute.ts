import { Router } from 'express';
import * as usersController from '../controllers/usersController';
import * as validates from '../middlewares/validates';

const routers = Router();

routers.post('/', validates.validateUserFull, usersController.newUser); // adicionando novo produto

export default routers;