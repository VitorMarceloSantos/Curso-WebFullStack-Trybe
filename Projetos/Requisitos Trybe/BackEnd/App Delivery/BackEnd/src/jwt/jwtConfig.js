const fs = require('fs');
const path = require('path');

const path1 = path.resolve(__dirname, '../../jwt.evaluation.key');
const secret = fs.readFileSync(path1, { encoding: 'utf8' });

const config = {
  expiresIn: '30min',
  algorithm: 'HS256',
};

module.exports = { secret, config };