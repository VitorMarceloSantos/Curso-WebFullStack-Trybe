module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING(200),
    },
    {
      tableName: 'products',
      timestamps: false,
      underscored: true,
    }
  );

  // hasOne = tem um
  // belongsTo = pertencente a
  // hasMany = tem muitos
  // belongsToMany = pertencente a muitos

  // Contrapartida da associação salesProductModel - Não tem necessidade
  // Product.associate = (models) => {
  //   Product.hasMany(models.SaleProduct, {  // has a chave(productId) é da tabela Product
  //     foreignKey: 'productId',
  //     as: 'productId', // apelido
  //   });
  // };

  return Product;
};