import * as orderSchema from './orderSchema';

export function validadeSchemaOrder(productsIds: number[])
  : { status: number | null, message: string } {
  const { error } = orderSchema.orderSchemaArray.validate({ productsIds });
  if (error) return { status: 422, message: error.message };
  const { error: errorLength } = orderSchema
    .orderSchemaLength.validate({ productsIds });
  if (errorLength) return { status: 422, message: '"productsIds" must include only numbers' };
  return { status: null, message: '' };
}

export function validadeSchemaOrderExist(productsIds: number[])
  : { status: number | null, message: string } {
  const { error } = orderSchema.orderSchemaExist.validate({ productsIds });
  if (error) return { status: 400, message: error.message };
  return { status: null, message: '' };
}