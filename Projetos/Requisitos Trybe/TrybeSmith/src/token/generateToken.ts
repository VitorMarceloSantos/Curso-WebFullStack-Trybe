import jwt from 'jsonwebtoken';
import { ReturnToken, IUser } from '../interfaces/users';
import { config, secret } from './jwtConfig';

export default function generateToken(user: IUser, status: number): ReturnToken {
  const { password: PASSWORD, ...payload } = user; // retirando o password
  const token = jwt.sign({ payload }, secret, config);
  return { status, token };
}
