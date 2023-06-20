function append(pokemon) { // criando o card(bootstrap) via java script
  const section = document.querySelector("section");

  const divCard = document.createElement("div");
  const img = document.createElement("img");
  const divBody = document.createElement("div");
  const cardTitle = document.createElement("h5");

  divCard.classList.add("card");
  divBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  img.classList.add("card-img-top");

  img.src = pokemon.imageUrl;
  cardTitle.innerHTML = pokemon.name;

  divBody.appendChild(cardTitle);
  divCard.appendChild(img);
  divCard.appendChild(divBody);
  section.appendChild(divCard);
}

function fetchPokemon() {
  const URL = "https://pokeapi.co/api/v2/pokemon/pikachu"; // API pokemon
  const result = fetch(URL);

  result
    .then((response) => response.json()) // utilizando o then
    .then((data) => {
      const pokemon = { // são as keys que vão ser trabalhadas
        name: data.name,
        imageUrl: data.sprites.front_default,
      };
      append(pokemon);
    })
    .catch((error) => console.log("Deu erro na api , Tururu", error));
}

async function fetchPokemonAsync(pokemonName) { // utilizando o async / await
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const result = await fetch(URL);
    const data = await result.json();
    console.log("API terminou");
    const pokemon = { // são as keys que vão ser trabalhadas
      name: data.name,
      imageUrl: data.sprites.front_default,
    };
    append(pokemon);
  } catch (error) {
    console.log("Deu erro na api , Tururu", error);
  }
}

function requestPokemonsAsync() { // desse modo os pokemons apareceram no HTML na medida em que forem sendo devolvidos pelo fetch, ou seja, não respeita a ordem de chamada
  fetchPokemonAsync("pikachu");
  fetchPokemonAsync("mew");
  fetchPokemonAsync("mewtwo");
  fetchPokemonAsync("charmander");
  console.log("Vivemos num mundo pokemon Async");
}

async function requestPokemons() { // nesse modelo é respeitado a ordem de chamanda, só vai chamar o próximo após devolver completar o anterior.
  await fetchPokemonAsync("pikachu");
  await fetchPokemonAsync("mew");
  await fetchPokemonAsync("mewtwo");
  await fetchPokemonAsync("charmander");
  console.log("Vivemos num mundo pokemon Sync");
}

window.onload = () => {
  requestPokemons();
};