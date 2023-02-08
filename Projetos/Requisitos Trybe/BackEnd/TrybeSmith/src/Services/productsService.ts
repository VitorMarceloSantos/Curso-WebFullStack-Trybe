import { IProduct, NewProduct, ReturnStatusAll, ReturnStatusId } from '../interfaces/product';
import * as productsModel from '../models/productsModel';

export async function getAllProducts(): Promise<ReturnStatusAll> {
  const products = await productsModel.getAllProducts();
  if (!products) {
    return { status: 404, message: 'NOT FOUND' };
  }
  return { status: 200, products };
}

export async function newProduct(infoProduct: IProduct): Promise<ReturnStatusId> {
  const addProduct: NewProduct = await productsModel.newProduct(infoProduct);
  if (!addProduct) {
    return { status: 400, message: 'BAD REQUEST' };
  }
  return { status: 201, addProduct };
}