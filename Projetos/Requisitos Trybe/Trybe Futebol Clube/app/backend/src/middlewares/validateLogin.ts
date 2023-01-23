import { Request, Response, NextFunction } from 'express';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  // Verifica sentenças sem parâmetros
  const { email, password } = body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
}
