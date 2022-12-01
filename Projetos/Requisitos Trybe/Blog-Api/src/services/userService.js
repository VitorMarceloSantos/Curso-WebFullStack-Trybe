const { User } = require('../models');

const getUser = async (email, password) => {
  const user = await User.findAll({ where: { email, password } });
  return user;
};

const addUser = async (displayName, email, password, image) => {
  const verifyUser = await User.findAll({ where: { email } });
  if (verifyUser.length !== 0) return { type: 400, message: 'User already registered' };
  
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = { getUser, addUser };