module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
    {
      tableName: 'sales',
      timestamps: false,
      underscored: true,
    },
  );

  // hasOne = tem um
  // belongsTo = pertencente a
  // hasMany = tem muitos
  // belongsToMany = pertencente a muitos

  // Contrapartida da associação salesProductModel - Nâo tem necessidade
  // sale.associate = (models) => {
  //   sale.hasMany(models.SaleProduct, { // has a chave(saleId) é da tabela Sale
  //     foreignKey: 'saleId',
  //     as: 'sales', // apelido
  //   });
  // };
  
  // Associação com a tabela User
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { // belong a chave(userId) pertece a User(1:N)
      foreignKey: 'userId',
      as: 'saleId', // apelido
    });
  };

  // Associação com a tabela User
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { // belong a chave(sellerId) pertece a User(1:N)
      foreignKey: 'sellerId',
      as: 'seller', // apelido
    });
  };

  return Sale;
};