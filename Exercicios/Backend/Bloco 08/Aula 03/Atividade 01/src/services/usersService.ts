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

export async function getByEmail(email: string) {
  const users = await usersModel.getByEmail(email);
  if (!users) {
    return {status: 404, message: MESSAGES.USER_NOT_FOUND};
  }
  return {status: 200, users};
}

export async function getAddUser(user: IUser) {
  const createUser = await usersModel.getAddUser(user);
  if (!createUser) {
    return {status: 404, message: MESSAGES.FORBIDDEN};
  }
  return { status: 201, createUser}
}

export async function getUpdate(user: User) {
  const userUpdate = await usersModel.getUpdate(user);
  if(!userUpdate){
    return { status: 404, message: MESSAGES.FORBIDDEN}
  }
  return { status: 200, userUpdate}
}

export async function getDelete(id: number) {
  const userDelete = await usersModel.getDelete(id);
  if(!userDelete){
    return { status: 404, message: MESSAGES.FORBIDDEN}
  }
  return { status: 200}
}