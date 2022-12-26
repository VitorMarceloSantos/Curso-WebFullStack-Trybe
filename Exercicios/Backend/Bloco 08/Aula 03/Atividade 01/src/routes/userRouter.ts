import { Router } from 'express';
import * as usersController from '../controllers/usersController';

// Validate Token
import {validateToken} from '../Token/validateJWT';

const router = Router();

router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
router.post('/', usersController.createUser); // criando novo usuario

export default router;