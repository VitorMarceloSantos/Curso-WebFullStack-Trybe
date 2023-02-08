import { OrderStatus } from '../interfaces/orders';
import { IUser } from '../interfaces/users';
import * as getAllOrders from '../models/ordersModel';

export async function getAllOrdersService(): Promise<OrderStatus> {
  const orders = await getAllOrders.getAllOrders();
  if (!orders) {
    return { status: 400, message: 'BAD REQUEST' };
  }
  return { status: 200, orders };
}

export async function addOrder(user: IUser, productsIds: number[])
  : Promise<{ status: number, message: string | object }> {
  const result = await getAllOrders.addOrder(user, productsIds);
  if (!result) {
    return { status: 400, message: 'BAD REQUEST' };
  }
  return { status: 201, message: { userId: user.id, productsIds } };
}