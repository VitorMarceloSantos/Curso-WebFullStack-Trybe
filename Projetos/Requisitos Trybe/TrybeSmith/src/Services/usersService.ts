import jwt from 'jsonwebtoken';
import { config, secret } from '../token/jwtConfig';
import { IUser, ReturnToken } from '../interfaces/users';
import * as usersModel from '../models/usersModel';

export default async function newUser(infoUser: IUser): Promise<ReturnToken> {
  const addUser = await usersModel.default(infoUser);
  if (!addUser) {
    return { status: 400, message: 'BAD REQUEST' };
  }
  // Gerando Token
  const { password: PASSWORD, ...payload } = addUser; // retirando o password
  const token = jwt.sign({ payload }, secret, config);
  return { status: 201, token };
}