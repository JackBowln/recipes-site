<template>
    <div>
<input type="text" placeholder="Pesquisa"  v-model="search">
    {{search}}
    </div>
</template>

<script setup>
import { ref} from "vue";
const search = ref("")
</script>

<style lang="scss" scoped>

</style>