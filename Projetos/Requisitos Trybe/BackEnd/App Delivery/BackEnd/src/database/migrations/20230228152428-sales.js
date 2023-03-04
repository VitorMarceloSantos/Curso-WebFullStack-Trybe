'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'seller_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
      },
      deliveryAddress: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      deliveryNumber: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      saleDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
