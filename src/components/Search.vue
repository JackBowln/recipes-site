<template>
  <div class="search-bar">
    Search.vue
    <input type="text" :placeholder="information" v-model="search" />

    {{ search }}
  </div>
</template>

<script setup>
const props = defineProps(['information'])

const search = defineModel()



</script>

<style lang="scss" scoped>
.search-bar {
    display: flex;
    flex-direction: column;
}
</style>
