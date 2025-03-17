<template>
  <div :class="containerClasses">
    <div v-for="good in goods" :key="good.id">
      <GoodCard
        :cost="good.cost"
        :img-path="good.imgPath"
        :info="good.info"
        :is-progressing="good.isProgressing"
        :is-hidden="good.isHidden"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import GoodCard from './GoodCard.vue'
import { useFetch } from 'nuxt/app'
import { reactive } from 'vue'
import { useDevice } from '#imports'
import { computed } from 'vue'

const { isDesktop } = useDevice()

const goods = reactive<Array<Record<string, string | number>>>([])

try {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const { data, error } = await useFetch('/api/goods')
  if (data.value && data.value.body.length) {
    goods.push(...data.value.body)
  }
  if (error.value) {
    const errorMessage = error.value.toString()
    throw new Error(errorMessage)
  }
} catch (err) {
  console.error('Ошибка при получении данных:', err.message || err)
}

const containerClasses = computed(() => {
  return isDesktop ? 'grid grid-cols-4 gap-x-2 gap-y-10 mb-[73px] ml-[32px] mr-[32px]' : ''
})
</script>

<style scoped></style>
