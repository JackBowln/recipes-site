<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Search from './components/Search.vue'
import { ref } from 'vue';
import Cards from './components/Cards.vue'
import { cookbook } from './data/recipes.js'

const searchContent = ref('te amo meu amor')
const information = 'Pesquise...'
</script>

<template>
  <header>
    <div class="wrapper">
      <Search :information :search-content v-model="searchContent"/>
      App.vue
      {{ searchContent }}
      <nav>
        <RouterLink :to="{ name: 'pesquisa' }">Pesquisa</RouterLink>
        <RouterLink :to="{ name: 'receita' }">Receita</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <div class="d-flex flex-column">
    <header class="d-flex justify-center">
      <Search :information :search-content v-model="searchContent" />
    </header>
    <Cards
      :loading="false"
      v-for="(value, index) in cookbook.recipes"
      :recipe="value"
      :key="index"
    />
  </div>

  <!--<RouterView />-->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
