import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces/users';
import connection from './connection';

export async function newUser(infoUser: IUser): Promise<IUser> {
  const query = 'INSERT INTO Trybesmith.users '
    + '(username, password, level, vocation) VALUES (?,?,?,?)';
  const { username, password, level, vocation } = infoUser;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [username, password, level, vocation]); // Pega o Id do novo produto
  return { username, password, level, vocation, id: insertId } as IUser;
}

export async function getUsername(username: string): Promise<IUser> {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const values = [username];
  const [[user]] = await connection.execute<RowDataPacket[] & IUser>(query, values);
  return user as IUser;
}