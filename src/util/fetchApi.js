import axios from "axios";

const getPokemon = async (name) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(function (response) {
      return response.data;
    })
    // Es necesario catch de errores. Aca no lo hago porque ya manejo en Home
};

// Info adicional, principalmente habitat y demas.
const getPokemonAdditional = async (id) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(err => console.log(err))
}

// Info sobre nombres de huevos
const getEggs = async () => {
  return await axios
    .get(`https://pokeapi.co/api/v2/egg-group`)
    .then(function (response) {
      return response.data;
    })
    .catch(err => console.log(err))
};

// Todos los nombres de tipos
const getTypes = async () => {
  return await axios
    .get(`https://pokeapi.co/api/v2/type`)
    .then(function (response) {
      return response.data;
    })
    .catch(err => console.log(err))
};

// Lista de pokemons de un tipo
const getPokemonsByType = async (name) => {
  return await axios
  .get(`https://pokeapi.co/api/v2/type/${name}`)
  .then(function (response) {
    return response.data.pokemon;
  })
  .catch(err => console.log(err))
}

export { getPokemon, getPokemonAdditional, getEggs, getTypes, getPokemonsByType};
