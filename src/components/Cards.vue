<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="recipe.image" cover></v-img>

    <v-card-item>
      <v-card-title>{{ recipe.name }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating v-model="rating" active-color="blue" color="orange-lighten-1"></v-rating>
        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <!-- <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div> -->
      <br />
      <!-- saída de ranhura -->
      <div v-for="(value, index) in recipe.ingredients" :key="index">
        {{ value }}
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
const loading = ref(false)
const rating = ref(4)
defineProps(['recipe'])
</script>
