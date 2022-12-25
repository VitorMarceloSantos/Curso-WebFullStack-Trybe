import { ResultSetHeader, RowDataPacket } from "mysql2";
import { IUser, User } from "../interfaces";
import connection from "./connection";

export async function getAll(): Promise<User[]> {
  const query = 'SELECT * FROM Users';
  const [users] = await connection.execute(query);
  return users as User[];
}

export async function getById(id: number): Promise<User | null> {
  const query = 'SELECT * FROM Users WHERE id = ?';
  const [data] = await connection.execute<RowDataPacket[] & User[]>(query, [id]);
  const [users] = data as User[]; // o retorno de data é um array, onde a primeira posição é o objeto desejado, por isso realiza a descontrução
  return users || null;
}

export async function getByEmail(email: string): Promise<User | null> {
  const query = 'SELECT * FROM Users WHERE email = ?';
  const [data] = await connection.execute<RowDataPacket[] & User[]>(query, [email]);
  const [users] = data as User[]; // o retorno de data é um array, onde a primeira posição é o objeto desejado, por isso realiza a descontrução
  return users || null;
}

// IMPORTANTE
// Quando for SELECT utilizar RowDataPacket,
// Os demais utilizar ResultSetHeader
export async function getAddUser(user: IUser): Promise<User> { // IUser(name, email,password) // o id é gerado automatico
  const { name, email, password } = user;
  const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
  const [data] = await connection.execute<ResultSetHeader>(query, [name, email, password]);
  const {insertId: id} = data; // o retorno de data é um objeto, onde a primeira posição é o objeto desejado, por isso realiza a descontrução
  const newUser = { id, name, email, password}
  return newUser as User;
}