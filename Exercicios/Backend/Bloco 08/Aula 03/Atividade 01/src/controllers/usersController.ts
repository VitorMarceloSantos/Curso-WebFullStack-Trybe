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