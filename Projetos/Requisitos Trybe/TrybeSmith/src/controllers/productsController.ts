import { Request, Response } from 'express';
import * as productsService from '../Services/productsService';

export const getAllProducts = async (req: Request, res: Response) => {
  const { status, message, products } = await productsService.getAllProducts();
  return message
    ? res.status(status).json(message)
    : res.status(status).json(products);
};

export const newProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { message, status, addProduct } = await productsService.newProduct(body);
  return message
    ? res.status(status).json(message)
    : res.status(status).json(addProduct);
};
