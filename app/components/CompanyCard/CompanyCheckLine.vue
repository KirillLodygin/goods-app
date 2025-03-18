<template>
  <div class="flex items-center justify-center mb-6">
    <CheckBlock icon-name="i-f7-checkmark-seal-fill" text="Документы проверены" />

    <UIcon name="i-mdi-dot" class="size-7" />

    <CheckBlock icon-name="i-material-symbols-star" :text="`${companyRating}`" />

    <UIcon name="i-mdi-dot" class="size-7" />

    <div>{{ `${companyReviews} отзывов` }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useFetch } from 'nuxt/app'
import CheckBlock from './CheckBlock.vue'

const companyRating = ref(0)
const companyReviews = ref(0)

try {
  const { data, error } = await useFetch('/api/rating')
  if (data.value) {
    const { rating, reviews } = data.value.body[0]
    companyRating.value = rating
    companyReviews.value = reviews
  }

  if (error.value) {
    const errorMessage = error.value.toString()
    throw new Error(errorMessage)
  }
} catch (err) {
  console.error('Ошибка при получении данных:', err.message || err)
}
</script>

<style scoped></style>
