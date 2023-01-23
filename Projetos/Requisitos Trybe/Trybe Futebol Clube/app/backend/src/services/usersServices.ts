// import bcrypt = require('bcryptjs');
import generateToken from '../token/generateToken';
import usersModel from '../database/models/usersModel';

interface IUserStatus {
  status: number,
  message: string,
}

const searchUser = async (email: string, password: string): Promise<IUserStatus> => {
  const user = await usersModel.findOne({ where: { password } });
  console.log(user?.dataValues);
  if (!user) return { status: 401, message: 'Incorrect email or password' };

  // Compara Password
  // const verifyPassword = await bcrypt.compare(password, user.password);
  // console.log('iguais?', password === user.password);
  // console.log('verifyPassword', verifyPassword);
  // console.log('pass', password, user.password);

  // if (verifyPassword === false) return { status: 401, message: 'Incorrect email or password' };

  const token = generateToken(user.dataValues);
  return { status: 200, message: token };
};

const searchRole = async (email: string): Promise<IUserStatus> => {
  const userRole = await usersModel.findOne({ where: { email } });
  if (!userRole) {
    return { status: 401, message: 'User not found' };
  }
  return { status: 200, message: userRole.dataValues.role };
};

export default { searchUser, searchRole };
