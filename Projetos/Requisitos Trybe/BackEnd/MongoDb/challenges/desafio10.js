db.produtos.find(
  { "valoresNutricionais.3.percentual": { $gte: 30, $lte: 40 } },
  { _id: false, nome: true },
);