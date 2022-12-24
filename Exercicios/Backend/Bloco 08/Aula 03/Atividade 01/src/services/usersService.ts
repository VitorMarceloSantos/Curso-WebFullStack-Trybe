import { IUser, User } from '../interfaces';
import * as usersModel from '../models/usersModel';

const MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

export async function getAll(): Promise<{status: number, users:User[]}> {
  const users = await usersModel.getAll();
  return {status: 200, users};
}

// export async function getById(id: number): Promise<{status: number, users: User | null }> {
  export async function getById(id: number) {
  const users = await usersModel.getById(id);
  if (!users) {
    return {status: 404, message: MESSAGES.USER_NOT_FOUND};
  }
  return {status: 200, users};
}

// export async function getByEmail(email: string) {
//   const users = await usersModel.getByEmail(email);
//   if (!users) {
//     return {status: 404, message: MESSAGES.USER_NOT_FOUND};
//   }
//   return {status: 200, users};
// }

export async function newUser(user: IUser) {
  // Verifica se o usuario já esta cadastrado no banco de dados
  const verifyUser = await usersModel.getByEmail(user.email);
  if(verifyUser) {
    return { status: 400, message: MESSAGES.USER_EXISTS}
  }

  // parei aqui !!!
  const createUser = await usersModel.getAddUser(user);

}