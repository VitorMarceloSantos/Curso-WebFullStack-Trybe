import { Request, Response } from 'express';
import * as usersService from '../Services/usersService';
// import validadeSchemaLogin from '../validations/loginValidate';

export async function newUser(req: Request, res: Response) {
  const { body } = req;
  const { message, status, token } = await usersService.newUser(body);
  return message
    ? res.status(status).json(message)
    : res.status(status).json({ token });
}

export async function verifyLogin(req: Request, res: Response) {
  const { body } = req;
  const { status, message, token } = await usersService.verifyLogin(body);
  return message
    ? res.status(status).json({ message })
    : res.status(status).json({ token });
}