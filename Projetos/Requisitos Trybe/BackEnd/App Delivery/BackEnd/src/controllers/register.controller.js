const registerService = require('../services/register.service');

const createUser = async (req, res) => {
  const user = req.body;
  const { status, message } = await registerService.createUser(user);

  return res.status(status).json({ status, message });
};

module.exports = {
  createUser,
};