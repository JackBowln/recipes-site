<script setup>
import { supabase } from '../api/supabaseClient'
import AddRecipes from '../components/AddRecipes.vue'

async function insertRecipe(recipe) {
  const { data, error } = await supabase.from('recipes').insert([recipe]).select()
}
</script>

<template>
  <main>
    <div class="d-flex flex-column">
      <header class="d-flex justify-center"></header>
      <AddRecipes @submit="(e) => insertRecipe(e)" />
    </div>
  </main>
</template>
