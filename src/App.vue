<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'receita' }">Home</RouterLink>
    <br />
    <RouterLink :to="{ name: 'registo' }">Registo</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped></style>
