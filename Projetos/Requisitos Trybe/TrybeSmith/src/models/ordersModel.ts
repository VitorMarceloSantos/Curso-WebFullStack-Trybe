import { RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces/orders';
import connection from './connection';

export default async function getAllOrders(): Promise<Order[]> {
  const query = `SELECT orders.id, orders.user_id as userId,
  JSON_ARRAYAGG(products.id) as productsIds FROM Trybesmith.orders
  INNER JOIN Trybesmith.products ON orders.id = products.order_id
  group by orders.id;`;
  const [orders] = await connection.execute<RowDataPacket[] & Order[]>(query);
  return orders as Order[];
}