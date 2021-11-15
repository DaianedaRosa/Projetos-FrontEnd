const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const fetchPokemon = () => {
  const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

  const pokemonPromises = generatePokemonPromises()

  Promise.all(pokemonPromises)
    .then(pokemons => {
      const liPokemons = pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        accumulator += `
        <li class="card ${types[0]}">
          <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
          <p class="card-subtitle">${types.join(' | ')}</p>
          </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')

      ul.innerHTML = liPokemons
    })
}

fetchPokemon()