const { User } = require('../database/models');
const { encryption } = require('../utils/encryptionMD5');
// const { generateToken } = require('../jwt/generateToken');

const createUser = async (user) => {
  const { name, email, password: passwordInMd5 } = user; // renomeando a variavel password
  const password = encryption(passwordInMd5); // criptografia do password
  await User.create({ name, email, password });
  
  // const { dataValues } = await User.create({ name, email, password, role });
  // const token = generateToken(dataValues); // gerando token

  return { status: 201, message: 'Created' };
};

module.exports = {
  createUser,
};