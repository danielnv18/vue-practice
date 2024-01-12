/**
 * Get http request
 * @param {string} url
 * @returns
 */
async function get(url: string) {
  const baseUrl = 'https://pokeapi.co/api/v2/'
  const res = await fetch(baseUrl + url)
  return await res.json()
}

/**
 * Get the pokemon by id
 * @param {int} id
 * @returns
 */
export function getPokemon(id: string) {
  return get(`pokemon/${id}`)
}

/**
 * Get list of pokemon
 */
export function getPokemonList() {
  return get('pokemon?limit=151')
}

/**
 *
 * @param url string
 * @returns string
 */
export const getIdFromUrl = (url: string) => {
  const id = url
    .substring(0, url.length - 1)
    .split('/')
    .pop()
  return id?.toString()
}

/**
 * Gets details pokemon image
 * @param {string} pokeID
 * @returns string
 */
export function getPokemonImageDetail(pokeID: string) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID
    .toString()
    .padStart(3, '0')}.png`
}

/**
 * Gets sprite pokemon image
 * @param {string} pokeID
 * @returns string
 */
export function getPokemonImageFull(pokeID: string) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeID
    .toString()
    .padStart(3, '0')}.png`
}
