import { Router } from 'express';
import * as usersController from '../controllers/usersController';

// Validate Token
import {validateToken} from '../Token/validateJWT';

const router = Router();
// Utiliza a rota login para fazer a autenticação e gerar o token - (O token deve ser utilizado em uma rota post, na variavel Autorizathion - value: token)
router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
router.post('/',validateToken ,usersController.createUser); // criando novo usuario - Utilizando o validateToken como um midleware para verificar o token
router.put('/update' ,validateToken ,usersController.getUpdate); // modificando usuario - Utilizando o validateToken como um midleware para verificar o token
router.delete('/delete/:id' ,validateToken ,usersController.getDelete); // modificando delete- Utilizando o validateToken como um midleware para verificar o token

export default router;