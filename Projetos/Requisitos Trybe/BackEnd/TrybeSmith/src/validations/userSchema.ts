import Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string().min(3),
  vocation: Joi.string().min(3),
  level: Joi.number().integer().min(1),
  password: Joi.string().min(8),
});

export const userSchemaExist = Joi.object({
  username: Joi.required(),
  vocation: Joi.required(),
  level: Joi.required(),
  password: Joi.required(),
});