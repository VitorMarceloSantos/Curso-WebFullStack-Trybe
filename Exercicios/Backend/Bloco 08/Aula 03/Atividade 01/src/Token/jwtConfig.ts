require('dotenv/config');
export const secret:string = process.env.JWT_SECRET || 'Turma 23-B';

export const config: object = {
  expiresIn: '3h',
  algorithm: 'HS256',
};