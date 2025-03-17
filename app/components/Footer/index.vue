<template>
  <div :class="containerClasses">
    <p class="text-base font-medium leading-6 text-black">&copy; Annonce 2023</p>
    <p class="text-base font-medium leading-6 text-gray-600">Документы</p>
    <p class="text-base font-medium leading-6 text-gray-600">О компании</p>
    <template v-if='isMobile'>
      <p class="text-base font-medium leading-6 text-gray-600">Продавцам</p>
      <p class="text-base font-medium leading-6 text-gray-600">Разместить объявление</p>
      <p class="text-base font-medium leading-6 text-gray-600">О компании</p>
      <div class='flex'>
        <UIcon name="i-emojione-flag-for-russia" class="w-[16px] h-[16px] mr-[6px]" />
        <p class="text-base font-medium leading-4 text-[#0F0F0F]">Русский</p>
      </div>
    </template>

  </div>
</template>

<script lang="ts" setup>
import { useDevice } from '#imports'
import { computed } from 'vue'

const { isDesktop, isMobile } = useDevice()

const containerClasses = computed(() => {
  return isDesktop
    ? 'w-full h-24 flex items-start p-4 md:p-6 gap-5 bg-gray-100'
    : 'h-auto flex flex-col gap-5 bg-gray-100 px-[16px] py-[40px]'
})

</script>

<style scoped>

</style>
