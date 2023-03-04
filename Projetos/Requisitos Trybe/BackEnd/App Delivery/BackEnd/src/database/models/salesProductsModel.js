module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    "SaleProduct",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      saleId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: "sales_products",
      timestamps: false,
      underscored: true,
    }
  );

    // hasOne = tem um
    // belongsTo = pertencente a
    // hasMany = tem muitos
    // belongsToMany = pertencente a muitos

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, { // belong a chave(productId) pertece a Product
      as: 'sales', // apelido
      through: SaleProduct, // through como tabela de associação -> Product associação com SaleProduct(Relacionamento N:N)
      foreignKey: 'saleId', // qual campo utilizar para identificação de fora
      otherKey: 'productId', // qual campo utilizar para identificação de dentro
    });

    models.Sale.belongsToMany(models.Product, { // belong a chave(salesId) pertence a Sale
      as: 'products', // apelido
      through: SaleProduct, // through como tabela de associação -> Sale associação com SaleProduct(Relacionamento N:N)
      foreignKey: 'productId', // qual campo utilizar para identificação de fora
      otherKey: 'saleId', // qual campo utilizar para identificação de dentro
    });
  };

  return SaleProduct;
};