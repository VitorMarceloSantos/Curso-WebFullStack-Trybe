db.produtos.updateMany(
  { nome: { $nin: ["McChicken"] } },
  { $addToSet: { ingredientes: "ketchup" } },
);
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });