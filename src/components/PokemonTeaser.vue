<script setup lang="ts">
import { getPokemonImageDetail, getIdFromUrl } from '@/lib/poke'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const id = getIdFromUrl(props.url)
const imgageUrl = getPokemonImageDetail(id)
</script>

<template>
  <article class="pokemon-teaser">
    <figure>
      <img height="210" width="210" :src="imgageUrl" :alt="name" loading="lazy" />
    </figure>

    <h5>#{{ id?.padStart(3, '0') }} - {{ name[0].toUpperCase() + name.substring(1) }}</h5>
  </article>
</template>

<style scoped>
figure {
  background: var(--color-grey);
  border-radius: 5px;
  margin: 0;
  width: 210px;
  height: 210px;
}
.link {
  text-decoration: none;
  color: #313131;
  font-size: 1.2rem;
}
</style>
