import { Router } from 'express';
import * as usersController from '../controllers/usersController';
import * as loginController from '../controllers/loginController';

// Validate Token
import {validateToken} from '../Token/validateJWT';

const router = Router();

router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);

// Login
router.post('/login', loginController.loginUser); //...user/login

export default router;