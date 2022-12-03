const { Category } = require('../models');

const addCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAllCategories = async () => {
 const allCategories = Category.findAll();
 return allCategories;
};

module.exports = { addCategory, getAllCategories };