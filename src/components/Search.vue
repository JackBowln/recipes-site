<template>
  <div>
    <input type="text" :placeholder="information" v-model="search" />

    Search.vue
    {{ search }}
  </div>
</template>

<script setup>
const props = defineProps(['information'])

const search = defineModel()



</script>

<style lang="scss" scoped></style>
