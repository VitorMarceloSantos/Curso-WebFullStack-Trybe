import { Request, Response, NextFunction } from 'express';
import * as validateSchemaProduct from '../validations/productValidate';
import validadeSchemaLogin from '../validations/loginValidate';
import * as userValidate from '../validations/userValidate';

export function validateProduct(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const { name, amount } = body;
  const { status, message } = validateSchemaProduct.validadeSchemaProductExist(name, amount);
  const { status: statusProduct, message: messageProduct } = validateSchemaProduct
    .validadeSchemaProduct(name, amount);
  
  if (status === 400) return res.status(status).json({ message });
  if (statusProduct === 422) return res.status(statusProduct).json({ message: messageProduct });
  next();
}

export function validateUser(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  // Verifica sentenças sem parâmetros
  const { username, password } = body;
  const { status, message } = validadeSchemaLogin(username, password);
  if (status === 400) {
    return res.status(status).json({ message });
  }
  next();
}

export function validateUserFull(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const { username, vocation, level, password } = body;
  const { status, message } = userValidate
    .validadeSchemaUserExist(username, vocation, level, password);
  const { status: statusUser, message: messageUser } = userValidate
    .validadeSchemaUser(username, vocation, level, password);
  
  if (status === 400) return res.status(status).json({ message });
  if (statusUser === 422) return res.status(statusUser).json({ message: messageUser });
  next();
}