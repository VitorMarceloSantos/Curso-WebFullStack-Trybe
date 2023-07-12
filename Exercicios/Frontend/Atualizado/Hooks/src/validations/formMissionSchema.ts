import Joi from 'joi';

const transformCaseSensitive = (value: string) => {
	return value
		.trim()
		.split(' ')
		.map((word) => word[0].toUpperCase().concat(word.substring(1)))
		.join(' ');
};

// https://onestepcode.com/joi-js-custom-error-messages/
const name = Joi.string()
	.min(3)
	.max(10)
	.required()
	.messages({
		'string.min': 'Minímo de 3 caracteres',
		'string.max': 'Máximo de 10 caracteres',
		'string.empty': ' Campo obrigatório',
	})
	.custom(transformCaseSensitive); // custom -> pode ser utilizado uma função customizada
const year = Joi.number().greater(1900).less(2050).required().messages({
	'any.required': 'Campo obrigatório',
	'number.base': 'O ano deve ser um número',
	'number.greater': 'O ano deve ser maior que 1900',
	'number.less': 'O ano deve ser menor que 2050',
	'number.empty': 'Campo obrigatório',
});
const country = Joi.string()
	.min(4)
	.required()
	.messages({
		'string.min': 'Minímo de 4 caracteres',
		'string.empty': ' Campo obrigatório',
	})
	.custom(transformCaseSensitive);
const destination = Joi.string()
	.min(3)
	.required()
	.messages({
		'string.min': 'Minímo de 3 caracteres',
		'string.empty': ' Campo obrigatório',
	})
	.custom(transformCaseSensitive);

export const createFormSchema = Joi.object({
	name,
	year,
	country,
	destination,
}).required();
