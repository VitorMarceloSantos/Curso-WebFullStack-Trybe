// countDocumentos :  contar as coleções
// find : mostra as coleções

// Exercicios - 01:
// Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough);
// db.restaurants.countDocuments({ borough: {$in: ['Queens', 'Staten Island', 'Bronx']}}); // Usando array, sem array utiliza o $eq(unitario) -> 20

// Exercicio - 02
// Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American. (utilizando o atributo cuisine)
// db.restaurants.countDocuments({ cuisine: { $ne: ['American']}}); //Sem utilizar array, utilizando array usa o $nin(array) -> 40

// Exercicio - 03
// Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8. (utilizando o atributo rating)
// db.restaurants.countDocuments({ rating: { $gte: 8 }}); -> 18

// Exercicio - 04
// Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.
// db.restaurants.countDocuments({ rating: { $lt: 4 }}); -> 13

// Exercicio - 05
// Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.
// db.restaurants.countDocuments({ rating: { $nin: [5, 6, 7 ]}}); -> 55