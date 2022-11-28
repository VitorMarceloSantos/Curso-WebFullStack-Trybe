'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('books', [
      {
        title: 'As Crônicas do Gelo e Fogo',
        author: 'George R. R. Martin',
        pageQuantity: 450,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     },
    {
        title: 'O Senhor dos Aneis',
        author: 'J. R. R. Tolkien',
        pageQuantity: 370,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'O Código Da Vinci',
      author: 'JDan Brown',
      pageQuantity: 280,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});

  }
};
