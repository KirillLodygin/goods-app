<template>
  <div :class="containerClasses">
    <p
      v-for="point in menuPoints.filter((point) => point.flag === 'isDesktop')"
      :key="point.label"
      :class="[
        'text-base',
        'font-medium',
        'leading-6',
        point.label === ' Annonce 2023' ? 'black-text' : 'gray-text',
      ]"
    >
      <span v-if="point.label === ' Annonce 2023'">&copy;</span>
      {{ point.label }}
    </p>
    <template v-if="isMobile">
      <p
        v-for="point in menuPoints.filter((point) => point.flag === 'isMobile')"
        :key="point.label"
        class="text-base font-medium leading-6 gray-text"
      >
        {{ point.label }}
      </p>
      <div class="flex">
        <UIcon name="i-emojione-flag-for-russia" class="w-[16px] h-[16px] mr-[6px]" />
        <p class="text-base font-medium leading-4 text-[#0F0F0F]">Русский</p>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useDevice } from '#imports'
import { computed } from 'vue'

// Коллекция должна быть вынесена на внешний ресурс
const menuPoints: { label: string; flag: string }[] = [
  {
    label: ' Annonce 2023',
    flag: 'isDesktop',
  },
  {
    label: 'Документы',
    flag: 'isDesktop',
  },
  {
    label: 'О компании',
    flag: 'isDesktop',
  },
  {
    label: 'Продавцам',
    flag: 'isMobile',
  },
  {
    label: 'Разместить объявление',
    flag: 'isMobile',
  },
  {
    label: 'О компании',
    flag: 'isMobile',
  },
]

const { isDesktop, isMobile } = useDevice()

const containerClasses = computed(() => {
  return isDesktop
    ? 'w-full h-24 flex items-start p-4 md:p-6 gap-5 bg-gray-100'
    : 'h-auto flex flex-col gap-5 bg-gray-100 px-[16px] py-[40px]'
})
</script>

<style scoped></style>
