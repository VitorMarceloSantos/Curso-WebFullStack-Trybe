import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../interfaces/orders';
import { IUser } from '../interfaces/users';
import connection from './connection';

export async function getAllOrders(): Promise<Order[]> {
  const query = `SELECT orders.id, orders.user_id as userId,
  JSON_ARRAYAGG(products.id) as productsIds FROM Trybesmith.orders
  INNER JOIN Trybesmith.products ON orders.id = products.order_id
  group by orders.id;`;
  const [orders] = await connection.execute<RowDataPacket[] & Order[]>(query);
  return orders as Order[];
}

async function updateOrders(idProduct: number, idOrder: number): Promise<void> { // não necessita retorno, apenas atualiza o banco de dados
  const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  const values = [idOrder, idProduct];
  await connection.execute<ResultSetHeader>(query, values);
}

export async function addOrder(idUser: IUser, idsProduct: number[]): Promise<number> {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [idUser.id]);
  await Promise.all(idsProduct.map(async (productId) => { // promise.all - aguardar a resolução de todas as promises
    await updateOrders(productId, insertId);
  }));
  return insertId;
}