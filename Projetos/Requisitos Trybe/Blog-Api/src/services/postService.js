const { BlogPost, PostCategory } = require('../models');

const addPost = async ({ userId, title, content }) => {
  const newPost = await BlogPost.create({ userId, title, content });
  return newPost;
};

const addPostCategory = async ({ postId, categoryId }) => {
 const newCategory = PostCategory.create({ postId, categoryId });
 return newCategory;
};

module.exports = { addPost, addPostCategory };