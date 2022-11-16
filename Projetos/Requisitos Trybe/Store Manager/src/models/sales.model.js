// const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const search = 'SELECT * FROM StoreManager.sales';
  try {
    const [result] = await connection.execute(search);
    if (!result) return false;
    return result;
  } catch (err) {
    console.log(`Erro - ${err}`);
  }
};

// const addSales = async (name) => {
//   const columns = Object.keys(snakeize(name))
//     .map((key) => `${key}`)
//     .join(', ');

//   const placeholders = Object.keys(name)
//     .map((_key) => '?')
//     .join(', ');

//   const insert = `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`;
//   try { 
//     const [{ insertId }] = await connection.execute(insert,
//       [...Object.values(name)]);
//     return insertId;
//   } catch (err) {
//     console.log(`Erro - ${err}`);
//   }
// };

module.exports = { findAll };