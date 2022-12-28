import { IUser, LoginUser, ReturnToken } from '../interfaces/users';
import * as usersModel from '../models/usersModel';
import generateToken from '../token/generateToken';

export async function newUser(infoUser: IUser): Promise<ReturnToken> {
  const addUser = await usersModel.newUser(infoUser);
  if (!addUser) {
    return { status: 400, message: 'BAD REQUEST' };
  }
  // Gerando Token
  return generateToken(addUser, 201);
}

export async function verifyLogin(infoLogin: LoginUser) {
  const { username, password } = infoLogin;
  const user = await usersModel.getUsername(username);
  if (!user || user.password !== password) {
    return { status: 401, message: 'Username or password invalid' };
  }
  // Gerando Token
  return generateToken(user, 200);
}