import { OrderStatus } from '../interfaces/orders';
import getAllOrders from '../models/ordersModel';

export default async function getAllOrdersService(): Promise<OrderStatus> {
  const orders = await getAllOrders();
  if (!orders) {
    return { status: 400, message: 'BAD REQUEST' };
  }
  return { status: 200, orders };
}