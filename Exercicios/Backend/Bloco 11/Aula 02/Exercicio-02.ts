// Exercicio 01
// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
// db.restaurants.countDocuments({ rating: { $not: { $lte: 5 } }});

// Exercicio 02
// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.
// db.restaurants.countDocuments({ $or: [ { rating: { $gte: 6}}, { borough: { $in: ['Brooklyn' ]}}] });

// Exercicio 03
// Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.
// db.restaurants.countDocuments({ $and: [ { rating: { $gt: 4}}, { borough: { $in: ['Brooklyn', 'Queens', 'Staten Island'  ]}}] });

// Exercicio 04
// Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.
// db.restaurants.countDocuments({ $nor: [ { rating: 1}, { cuisine: 'American' }]});

// Exercicio 05
// Selecione e faça a contagem dos restaurantes que satisfaçam ambas as condições a seguir:
  // A avaliação seja maior que 6 OU menor que 10.
  // Estejam localizados no bairro Brooklyn OU não possuam culinária do tipo Delicatessen.
// db.restaurants.countDocuments({ $and: [{ $and: [ {rating: { $gt: 6 }}, {rating: { $lt: 10 }}]}, { $or: [{ borough: { $eq: 'Blooklyn'}}, { cuisine: { $ne: 'Delicatessen' }}]}]});