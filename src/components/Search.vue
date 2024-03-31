<template>
  <v-card class="pa-8 d-flex justify-center flex-wrap card" variant="none">
    <v-container class="text-center">
      <v-row justify="center" dense>
        <v-col cols="12">
          <v-img
            class="mx-auto mt-12 mb-16"
            max-height="140"
            max-width="240"
            src="data:image/png;base64,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"
          ></v-img>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            :items="items"
            v-model="Search"
            item-title="name"
            append-inner-icon="mdi-book"
            class="mx-auto"
            density="comfortable"
            menu-icon=""
            placeholder="Pesquisar"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 400px"
            theme="light"
            variant="solo"
            auto-select-first
            rounded
          ></v-autocomplete>
        </v-col>

        <v-col v-for="(shortcut, i) in shortcuts" :key="i" cols="auto">
          <v-card
            :href="shortcut.href"
            class="pa-4"
            rel="noopener noreferer"
            target="_blank"
            width="112"
            flat
          >
            <v-avatar :icon="shortcut.icon" class="mb-2" color="white" variant="tonal"></v-avatar>

            <div class="text-caption text-truncate" v-text="shortcut.title"></div>
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-dialog v-model="dialog" max-width="500">
            <v-card rounded="lg" title="Add shortcut">
              <template v-slot:text>
                <v-label class="text-caption">Name</v-label>

                <v-text-field density="compact" variant="solo-filled" flat></v-text-field>

                <v-label class="text-caption">URL</v-label>

                <v-text-field density="compact" variant="solo-filled" flat></v-text-field>
              </template>

              <div class="py-4 px-5 text-end">
                <v-btn
                  class="text-none me-2"
                  color="blue"
                  text="Cancel"
                  variant="text"
                  border
                  @click="dialog = false"
                ></v-btn>

                <v-btn
                  class="text-none"
                  color="blue"
                  text="Done"
                  variant="flat"
                  @click="dialog = false"
                ></v-btn>
              </div>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
import { supabase } from '../api/supabaseClient'
import { onMounted } from 'vue'

const dialog = ref(false)
const items = ref()
const Search = defineModel()

onMounted(async () => {
  const { data } = await supabase.from('recipes').select('name')
  items.value = data
})

const shortcuts = [
  {
    icon: 'mdi-silverware-variant',
    title: 'Italian Foods',
    href: 'https://github.com/vuetifyjs/vuetify'
  },
  {
    icon: 'mdi-silverware-variant',
    title: 'French Foods',
    href: 'https://github.com/vuetifyjs/vuetify/tree/dev'
  },
  {
    icon: 'mdi-silverware-variant',
    title: 'Brazilian Foods',
    href: 'https://github.com/vuetifyjs/vuetify/tree/v2-stable'
  },
  {
    icon: 'mdi-silverware-variant',
    title: 'Mexican Foods',
    href: 'https://github.com/vuetifyjs/vuetify/pulls/johnleider'
  }
]
</script>
<style lang="scss" scoped>
.card :deep(.v-card--variant-elevated) {
  background-color: #17f;
}
</style>
