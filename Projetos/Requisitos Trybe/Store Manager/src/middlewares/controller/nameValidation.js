const { addRequestInsertSchema } = require('./validations/schemas');

const nameValidation = (name) => {
  if (!name) return { type: 400, message: '"name" is required' }; // verifica se se a chave existe
  
  const { error } = addRequestInsertSchema.validate({ name });
  if (error) { // verifica o tamanho, se é string, e se o valor não é nulo
    return { type: 422, message: '"name" length must be at least 5 characters long' };
  }
};

module.exports = nameValidation;