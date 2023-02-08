import Joi from 'joi';

export const orderSchemaArray = Joi.object({
  productsIds: Joi.array(),
});

export const orderSchemaLength = Joi.object({
  productsIds: Joi.array().min(1),
});

export const orderSchemaExist = Joi.object({
  productsIds: Joi.required(),
});