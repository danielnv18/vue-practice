<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PokemonTeaser from './PokemonTeaser.vue'
import { usePokedexStore } from '@/stores/pokedex'

const store = usePokedexStore()

onMounted(() => {
  if (store.pokemons) {
    fetch('https://pokeapi.co/api/v2/pokemon').then(async (r) => store.addPokedex(await r.json()))
  }
})
</script>

<template>
  <PokemonTeaser
    v-for="pokemon in store.pokemons"
    :key="pokemon.url"
    :url="pokemon.url"
    :name="pokemon.name"
  />
</template>

<style scoped>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>
