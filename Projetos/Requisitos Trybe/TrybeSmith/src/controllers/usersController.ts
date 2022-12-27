import { Request, Response } from 'express';
import * as usersService from '../Services/usersService';

export default async (req: Request, res: Response) => {
  const { body } = req;
  const { message, status, token } = await usersService.default(body);
  return message
    ? res.status(status).json(message)
    : res.status(status).json({ token });
};