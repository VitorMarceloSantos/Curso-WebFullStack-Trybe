import { RowDataPacket } from "mysql2";
import { User } from "../interfaces";
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