const userService = require('../services/userService');
const categoryService = require('../services/categoryService');
const postService = require('../services/postService');

const verifyCategory = async (categoryIds) => {
  let contError = 0;

  const verifyCateg = categoryIds.map(async (categoryId) => {
    const getCategory = await categoryService.getCategoryId(categoryId);
    if (getCategory.length === 0) contError += 1;
  });

  await Promise.all(verifyCateg);
  return contError;
};

const addPost = async (req, res) => {
  try {
  const { title, content, categoryIds } = req.body;
    const verify = await verifyCategory(categoryIds);
    if (verify > 0) return res.status(400).json({ message: 'one or more "categoryIds" not found' });

    const { data } = req.checked;
    const { dataValues: { id } } = await userService.getUserEmail(data);
    const posts = await postService.addPost({ userId: id, title, content });
    const { dataValues } = posts;
    categoryIds.forEach(async (categoryId) => {
      await postService.addPostCategory({ postId: dataValues.id, categoryId });
    });

    return res.status(201).json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = { addPost };