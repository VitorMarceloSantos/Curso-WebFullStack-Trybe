import { Request, Response } from 'express';
import * as getAllOrdersService from '../Services/ordersService';

export async function getAllOrders(_req: Request, res: Response) {
  const { status, message, orders } = await getAllOrdersService.getAllOrdersService();
  return message
    ? res.status(status).json(message)
    : res.status(status).json(orders);
}

export async function addOrder(req: Request, res: Response) {
  const { user: { payload }, productsIds } = req.body;
  const { status, message } = await getAllOrdersService.addOrder(payload, productsIds);
  res.status(status).json(message);
}