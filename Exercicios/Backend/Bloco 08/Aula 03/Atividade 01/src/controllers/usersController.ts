import { Request, Response } from 'express';
import * as usersService from '../services/usersService';

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
    return { status: 400, message: 'User already exists'}
  }
  const newUser = await usersService.newUser(user)
  if(!newUser) {
    return { status: 400, message: 'User is not create.'}
  }
  return res.status(newUser.status).json(newUser.createUser);
}
