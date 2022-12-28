import { Request, Response } from 'express';
import getAllOrdersService from '../Services/ordersService';

export default async function getAllOrdersModel(_req: Request, res: Response) {
  const { status, message, orders } = await getAllOrdersService();
  return message
    ? res.status(status).json(message)
    : res.status(status).json(orders);
}