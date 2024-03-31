<template>
  <v-container>
    <v-file-input
      v-model="image"
      type="file"
      prepend-icon="mdi-camera"
      variant="underlined"
      @change="onFileChange"
    ></v-file-input>
    <v-img :width="343" aspect-ratio="16/9" cover :src="imageUrl" class="mx-auto"></v-img>

    <v-text-field
      v-model="recipe.name"
      color="primary"
      label="Name Recipes"
      variant="underlined"
    ></v-text-field>

    <v-text-field
      v-model="recipe.author"
      color="primary"
      label="Author"
      variant="underlined"
    ></v-text-field>

    <v-combobox
      v-model="recipe.ingredients"
      :items="items"
      label="Ingredients"
      chips
      multiple
      variant="underlined"
    ></v-combobox>

    <v-text-field
      v-model="recipe.cooking_time"
      color="primary"
      label="Cooking Time (Minutes)"
      variant="underlined"
      type="number"
    ></v-text-field>

    <v-textarea
      label="Preparation method (Note: Place the steps separated by / Example: Insert barbecue sticks so that it doesn't come apart and tie with cotton string/Grill the piece on a very hot plate, on all sides for approximately 15 minutes.)"
      v-model="recipe.preparation"
      name="input-7-1"
      variant="filled"
      auto-grow
    ></v-textarea>

    <v-checkbox
      v-model="terms"
      color="secondary"
      label="I agree to site terms and conditions"
    ></v-checkbox>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success" @click="emit('submit', recipe)">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import { reactive } from 'vue'
const image = ref(undefined)
const imageUrl = ref('')

const recipe = reactive({
  name: '',
  author: '',
  imageUrl: imageUrl.value,
  preparation: '',
  ingredients: null,
  cooking_time: null
})
const terms = ref(false)

const createImage = (file) => {
  const reader = new FileReader()

  reader.onload = (e) => {
    imageUrl.value = e.target.result
    recipe.imageUrl = e.target.result
  }

  if (file instanceof Blob) {
    // Check if file is a Blob
    reader.readAsDataURL(file)
  } else {
    console.error('Parameter is not of type Blob')
  }
}

const onFileChange = (event) => {
  const file = event.target.files[0] // Access file from event

  if (file) {
    createImage(file)
  }
}

const items = ref()
watch(recipe, (x) => {
  items.value = x.ingredients
})

const emit = defineEmits(['submit'])
</script>
