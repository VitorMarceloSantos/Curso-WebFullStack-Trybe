import { ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/users';
import connection from './connection';

export default async function newUser(infoUser: IUser): Promise<IUser> {
  const query = 'INSERT INTO Trybesmith.users '
    + '(username, password, level, vocation) VALUES (?,?,?,?)';
  const { username, password, level, vocation } = infoUser;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [username, password, level, vocation]); // Pega o Id do novo produto
  return { username, password, level, vocation, id: insertId } as IUser;
}