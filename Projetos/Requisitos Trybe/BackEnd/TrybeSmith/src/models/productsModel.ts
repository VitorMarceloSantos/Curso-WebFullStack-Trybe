import { ResultSetHeader } from 'mysql2/promise';
import { IProduct, NewProduct } from '../interfaces/product';
import connection from './connection';

export async function getAllProducts(): Promise<NewProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as NewProduct[];
}

export async function newProduct(infoProduct: IProduct): Promise<NewProduct> {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const { name, amount } = infoProduct;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]); // Pega o Id do novo produto
  return { name, amount, id: insertId } as NewProduct;
}