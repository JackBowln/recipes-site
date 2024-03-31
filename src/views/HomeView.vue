<script setup>
import Search from '../components/Search.vue'
import Cards from '../components/Cards.vue'
import { ref } from 'vue'
import { supabase } from '../api/supabaseClient'
import { computed } from 'vue'
import { watch } from 'vue'

const recipes = ref([])
const searchQuery = ref('')

async function getRecipes() {
  const { data } = await supabase.from('recipes').select().like('name', searchQuery.value)
  recipes.value = data
}
getRecipes()

const searchedRecipes = computed(() => {
  return recipes.value.filter((recipe) => {
    return recipe.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
  })
  return { searchedRecipes, searchQuery }
})

watch(searchQuery, (receita) => {
  getRecipes()
})
</script>

<template>
  <main>
    <div class="d-flex flex-column">
      <header class="d-flex justify-center">
        <Search :information :search-content v-model="searchQuery" />
      </header>
      <Cards :loading="false" v-for="(value, index) in recipes" :recipe="value" :key="index" />
    </div>
  </main>
</template>
