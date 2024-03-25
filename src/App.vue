<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Search from './components/Search.vue'
import Cards from './components/Cards.vue'
import { cookbook } from './data/recipes.js'
import { ref } from 'vue'
import axios from 'axios'
import {onMounted } from 'vue'
import { supabase } from './api/supabaseClient'

  const recipes = ref([])

  async function getRecipes() {
    const { data } = await supabase.from('recipes').select()
    recipes.value = data
  }
    getRecipes()


const information = 'Pesquise...'
</script>

<template>
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

<style scoped></style>
