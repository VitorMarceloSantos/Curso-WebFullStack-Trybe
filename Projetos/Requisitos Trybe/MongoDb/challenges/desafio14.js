db.produtos.updateMany({
  ingredientes: { $in: ["picles"] },
}, {
  $push: {
    valoresNutricionais: {
      $each: [],
      $slice: 3,
    },
  },
});
db.produtos.find(
  { ingredientes: { $in: ["picles"] } },
  { nome: true, ingredientes: true, valoresNutricionais: true, _id: false },
);