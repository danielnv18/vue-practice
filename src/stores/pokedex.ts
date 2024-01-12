import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePokedexStore = defineStore('pokedex', () => {
  const pokemons = ref<Array<Pokemon>>([])
  function addPokedex(list: PokemonList) {
    pokemons.value = list.results
  }

  return { pokemons, addPokedex }
})

export interface PokemonList {
  count: number
  next: string
  previous: string
  results: Array<Pokemon>
}

interface Pokemon {
  name: string
  url: string
}
