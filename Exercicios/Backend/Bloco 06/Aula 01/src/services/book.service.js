const { Book} = require('../models/book.model');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

module.exports = {
  getAll,
};