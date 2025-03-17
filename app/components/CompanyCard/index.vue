<template>
  <div :class="containerClasses">
    <CompanyLogo v-if="isDesktop" />
    <CompanyCheckLine v-if="isDesktop" />
    <PhoneButton v-if="isDesktop" />
    <ButtonGroup />
  </div>
</template>

<script lang="ts" setup>
import CompanyLogo from './CompanyLogo.vue'
import CompanyCheckLine from './CompanyCheckLine.vue'
import PhoneButton from './PhoneButton.vue'
import ButtonGroup from './ButtonGroup.vue'
import { useDevice } from '#imports'
import { computed } from 'vue'

const { isDesktop, isMobile } = useDevice()

const containerClasses = computed(() => {
  return isDesktop
    ? 'w-[560px] mx-auto h-[388px] flex flex-col items-center justify-start mb-8'
    : 'w-full h-auto px-4 py-2'
})
</script>

<style scoped></style>
