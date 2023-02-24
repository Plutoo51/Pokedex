const searchInput = document.querySelector("#pokemon-input");
const serarchBtn = document.querySelector(".btn-search");
const pokemonContainer = document.querySelector(".pokemon-container");

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#d6b3ff",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ice: "#e0f5ff ",
};

const pokemonCount = 151;

const initPokemon = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  createPokemonBox(data);
};

const createPokemonBox = (pokemon) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");
  const weight = pokemon.weight;
  const type = pokemon.types[0].type.name;
  const color = colors[type];

  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon-box");
  pokemonElement.style.backgroundColor = `${color}`;
  pokemonElement.innerHTML = `
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} image">
    <h4 class="pokemon-name">${name}</h4>           
    <p class="pokemon-id">#${id}</p>
    <p class="pokemon-weight">${weight} Kg</p>
    <p class="pokemon-type">Type: ${type}</p>
    `;
  pokemonContainer.appendChild(pokemonElement);
};

searchInput.addEventListener("input", function (e) {
  const pokemonNames = document.querySelectorAll(".pokemon-name");
  const search = searchInput.value.toLowerCase();
  pokemonNames.forEach((pokemonName) => {
    pokemonName.parentElement.style.display = "block";
    if (!pokemonName.innerHTML.toLowerCase().includes(search)) {
      pokemonName.parentElement.style.display = "none";
    }
  });
});

searchInput.addEventListener("input", function (e) {
  const pokemonNames = document.querySelectorAll(".pokemon-id");
  const search = searchInput.value.toLowerCase();
  pokemonNames.forEach((pokemonName) => {
    pokemonName.parentElement.style.display = "block";
    if (!pokemonName.innerHTML.toLowerCase().includes(search)) {
      pokemonName.parentElement.style.display = "none";
    }
  });
});

searchInput.addEventListener("input", function (e) {
  const pokemonNames = document.querySelectorAll(".pokemon-type");
  const search = searchInput.value.toLowerCase();
  pokemonNames.forEach((pokemonName) => {
    pokemonName.parentElement.style.display = "block";
    if (!pokemonName.innerHTML.toLowerCase().includes(search)) {
      pokemonName.parentElement.style.display = "none";
    }
  });
});

initPokemon();
