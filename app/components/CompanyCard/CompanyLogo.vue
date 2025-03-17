<template>
  <div class="mb-6">
    <div v-if="companyName && imgPath">
      <div class="w-[120px] h-[119px]">
        <USkeleton v-if="loading" class="h-[119px] w-[120px]" />

        <ClientOnly>
          <NuxtImg :src="imgPath" alt="logo" width="120" height="119" fit="contain" class="mb-6" @load="onImageLoad" />
        </ClientOnly>
      </div>

      <h1 class="font-semibold text-xl leading-tighter text-center text-[#0F0F0F]">{{ companyName }}</h1>
    </div>

    <p v-else>Загрузка...</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useFetch } from 'nuxt/app'

const imgPath = ref('')
const companyName = ref('')
const loading = ref(true)

try {
  const { data, error } = await useFetch('/api/general_data')
  if (data.value) {
    imgPath.value = data.value.body[0].image
    companyName.value = data.value.body[0].name
  }

  if (error.value) {
    const errorMessage = error.value.toString()
    throw new Error(errorMessage)
  }
} catch (err) {
  console.error('Ошибка при получении данных:', err.message || err)
}

const onImageLoad = () => {
  loading.value = false
}
</script>

<style scoped></style>
