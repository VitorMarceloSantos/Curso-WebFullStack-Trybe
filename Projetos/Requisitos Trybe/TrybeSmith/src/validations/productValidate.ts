import * as productSchema from './productSchema';

export function validadeSchemaProduct(name: string, amount: string)
  : { status: number | null, message: string } {
  const { error } = productSchema.productSchema.validate({ name, amount });
  if (error) return { status: 422, message: error.message };
  return { status: null, message: '' };
}

export function validadeSchemaProductExist(name: string, amount: string)
  : { status: number | null, message: string } {
  const { error } = productSchema.productSchemaExist.validate({ name, amount });
  if (error) return { status: 400, message: error.message };
  return { status: null, message: '' };
}