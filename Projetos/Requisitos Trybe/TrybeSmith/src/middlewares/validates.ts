import { Request, Response, NextFunction } from 'express';
import * as validateSchemaProduct from '../validations/productValidate';
import validadeSchemaLogin from '../validations/loginValidate';

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