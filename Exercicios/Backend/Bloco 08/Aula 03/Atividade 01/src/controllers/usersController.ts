import { Request, Response } from 'express';
import * as usersService from '../services/usersService';
import {validateToken} from '../Token/validateJWT';

export async function getAll(_req: Request, res: Response) {
  const {status, users} = await usersService.getAll();
  res.status(status).json(users);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const {status, users, message } = await usersService.getById(Number(id));
  return message
    ? res.status(status).json(message)
    : res.status(status).json(users);
}

export async function createUser(req: Request, res: Response) {
  const user = req.body;
  // Verifica se o usuario já esta cadastrado no banco de dados
  const {status} = await usersService.getByEmail(user.email);
  if(status === 200) {
    return res.status(400).json('User already exists');
  }
  // const { authorization: token } = req.headers; // utilizando a validação no service(Faz a conversao automatica de Authorization(headers) para authorization)
  // if (!token) { // verifica se o token existe
  //   return res.status(401).json({ error: { message: 'Token not found' } });
  // }
  const {status: statusUser, createUser, message} = await usersService.getAddUser(user)
  return message
    ? res.status(statusUser).json(message)
    : res.status(statusUser).json(createUser);
}

export async function getUpdate(req: Request, res: Response) {
  const user = req.body;
  // Verifica se o usuario existe no banco de dados
  const {status, message} = await usersService.getById(user.id);
  if(status === 404) {
    return res.status(status).json(message)
  }
  const {status: statUpdate, message: mesUpdate, userUpdate} = await usersService.getUpdate(user)
  return message
    ? res.status(statUpdate).json(mesUpdate)
    : res.status(statUpdate).json(userUpdate);
}

export async function getDelete(req: Request, res: Response) {
  const { id } = req.params;
  // Verifica se o usuario já esta cadastrado no banco de dados
  const {status, message} = await usersService.getById(Number(id));
  if(status === 404) {
    return res.status(status).json(message)
  }
  const {status: statDelete, message: mesDelete}= await usersService.getDelete(Number(id))
  return message
    ? res.status(statDelete).json(mesDelete)
    : res.status(statDelete).json(`User id: ${id} deleted.`);
}
