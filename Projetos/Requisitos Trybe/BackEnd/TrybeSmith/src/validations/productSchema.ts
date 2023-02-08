import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(3),
  amount: Joi.string().min(3),
});

export const productSchemaExist = Joi.object({
  name: Joi.required(),
  amount: Joi.required(),
});